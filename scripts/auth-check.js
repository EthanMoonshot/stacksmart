const { chromium } = require('/home/justin/browser-tools/node_modules/playwright');

(async () => {
  const base = 'http://127.0.0.1:3001';
  const email = 'ethan+test@stacksmart.app';
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await page.goto(`${base}/login`, { waitUntil: 'networkidle', timeout: 60000 });
    await page.fill('#email', email);
    await page.click('button:has-text("Email me a sign-in code")');
    await page.waitForTimeout(2500);
    console.log(await page.textContent('body'));
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
