const playwright = require('playwright');

(async () => {
  // Add multiple browsers for a single test
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[browserType].launch(
      {
        headless: false
      });

    //context
    const context = await browser.newContext();

    // Selecting the page
    const page = await context.newPage();
    await page.goto('https://google.com/');
    await page.screenshot({ path: `screenshots/example-${browserType}.png` });
    await browser.close();
  }
})();