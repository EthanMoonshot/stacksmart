import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { ToolStack, SaaSTool } from "@/lib/types";

const TOOLS_FILE = path.join(process.cwd(), "data", "tools.json");

async function readStacks(): Promise<ToolStack[]> {
  try {
    const data = await fs.readFile(TOOLS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeStacks(stacks: ToolStack[]): Promise<void> {
  await fs.mkdir(path.dirname(TOOLS_FILE), { recursive: true });
  await fs.writeFile(TOOLS_FILE, JSON.stringify(stacks, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tools, source } = body as { tools: SaaSTool[]; source: ToolStack["source"] };

    if (!tools || !Array.isArray(tools) || tools.length === 0) {
      return NextResponse.json({ message: "At least one tool is required." }, { status: 400 });
    }

    // Validate each tool
    for (const tool of tools) {
      if (!tool.toolName?.trim()) {
        return NextResponse.json({ message: "All tools must have a name." }, { status: 400 });
      }
      if (typeof tool.cost !== "number" || tool.cost < 0) {
        return NextResponse.json({ message: `Invalid cost for "${tool.toolName}".` }, { status: 400 });
      }
    }

    const stacks = await readStacks();

    const newStack: ToolStack = {
      id: `stack_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      tools,
      createdAt: new Date().toISOString(),
      source: source || "manual",
    };

    stacks.push(newStack);
    await writeStacks(stacks);

    console.log(`[Tools] Saved stack: ${newStack.id} (${tools.length} tools, source: ${source})`);

    return NextResponse.json({ message: "Stack saved successfully.", stack: newStack }, { status: 201 });
  } catch (error) {
    console.error("[Tools] Error:", error);
    return NextResponse.json({ message: "An unexpected error occurred." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const stacks = await readStacks();
    return NextResponse.json({ stacks });
  } catch {
    return NextResponse.json({ stacks: [] });
  }
}
