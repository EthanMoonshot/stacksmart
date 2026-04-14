const { chromium } = require('/home/justin/browser-tools/node_modules/playwright');
const fs = require('fs');

(async () => {
  const base = 'http://127.0.0.1:3001';
  const email = 'ethan01clawbot@gmail.com';

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  try {
    await page.goto(`${base}/login`, { waitUntil: 'networkidle', timeout: 60000 });
    await page.fill('#email', email);
    await page.click('button:has-text("Email me a sign-in code")');
    await page.waitForSelector('#code', { timeout: 10000 });

    const loginBody = await page.textContent('body');
    const match = loginBody && loginBody.match(/Dev code:\s*(\d{6})/);
    if (!match) throw new Error('Dev code not found');

    await page.fill('#code', match[1]);
    await page.click('button:has-text("Access workspace")');
    await page.waitForURL('**/dashboard', { timeout: 15000 });

    await page.goto(`${base}/upload`, { waitUntil: 'networkidle', timeout: 60000 });
    await page.locator('input[type="file"]').setInputFiles('/home/justin/projects/stacksmart/data/sample-billing.csv');
    await page.waitForTimeout(1500);
    await page.click('button:has-text("Confirm & Save 10 Tools")');
    await page.waitForURL('**/analysis', { timeout: 20000 });
    await page.waitForLoadState('networkidle');

    const analysisBody = await page.textContent('body');

    await page.goto(`${base}/report`, { waitUntil: 'networkidle', timeout: 60000 });
    const reportUrl = page.url();
    const reportBody = await page.textContent('body');

    await page.goto(`${base}/dashboard`, { waitUntil: 'networkidle', timeout: 60000 });
    const dashboardUrl = page.url();
    const dashboardBody = await page.textContent('body');

    fs.writeFileSync('/tmp/stacksmart-analysis-body.txt', analysisBody || '');
    fs.writeFileSync('/tmp/stacksmart-report-body.txt', reportBody || '');
    fs.writeFileSync('/tmp/stacksmart-dashboard-body.txt', dashboardBody || '');

    console.log(JSON.stringify({ analysisUrl: `${base}/analysis`, reportUrl, dashboardUrl }, null, 2));
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
