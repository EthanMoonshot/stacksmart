import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { ToolStack, SaaSTool } from "@/lib/types";
import { getCurrentSession } from "@/lib/auth";
import { getSubscriptionForCustomer } from "@/lib/subscriptions";

const TOOLS_FILE = path.join(process.cwd(), "data", "tools.json");

async function readAllStacks(): Promise<ToolStack[]> {
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
    const session = await getCurrentSession();
    const subscription = session ? await getSubscriptionForCustomer(session.customerId) : null;
    if (!session || subscription?.status !== "active") {
      return NextResponse.json({ message: "Paid access required." }, { status: 401 });
    }
    const body = await req.json();
    const { tools, source } = body as { tools: SaaSTool[]; source: ToolStack["source"] };

    if (!tools || !Array.isArray(tools) || tools.length === 0) {
      return NextResponse.json({ message: "At least one tool is required." }, { status: 400 });
    }

    for (const tool of tools) {
      if (!tool.toolName?.trim()) {
        return NextResponse.json({ message: "All tools must have a name." }, { status: 400 });
      }
      if (typeof tool.cost !== "number" || tool.cost < 0) {
        return NextResponse.json({ message: `Invalid cost for "${tool.toolName}".` }, { status: 400 });
      }
    }

    const stacks = await readAllStacks();
    const nextStack: ToolStack = {
      id: `stack_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      customerId: session.customerId,
      email: session.email,
      tools,
      createdAt: new Date().toISOString(),
      source: source || "manual",
    };

    const remaining = stacks.filter((stack) => stack.customerId !== session.customerId);
    remaining.push(nextStack);
    await writeStacks(remaining);

    return NextResponse.json({ message: "Stack saved successfully.", stack: nextStack }, { status: 201 });
  } catch (error) {
    console.error("[Tools] Error:", error);
    return NextResponse.json({ message: "An unexpected error occurred." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getCurrentSession();
    const subscription = session ? await getSubscriptionForCustomer(session.customerId) : null;
    if (!session || subscription?.status !== "active") {
      return NextResponse.json({ stacks: [] }, { status: 401 });
    }
    const stacks = await readAllStacks();
    return NextResponse.json({ stacks: stacks.filter((stack) => stack.customerId === session.customerId) });
  } catch {
    return NextResponse.json({ stacks: [] }, { status: 401 });
  }
}
