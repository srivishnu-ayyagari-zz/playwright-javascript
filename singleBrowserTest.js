const playwright = require('playwright');

(async () => {

    //Code execution happens within in here
    const browserType = "chromium"
    const browser = await playwright[browserType].launch({
        headless: false, 
        // devtools: true // You can toggle the dev tools 
    });

    //context
    const context = await browser.newContext();

    //page
    const page = await context.newPage();

    //navigate to the page
    await page.goto("https://google.com");
    // Taking a screenshot
    await page.screenshot({path: `screenshots/example-singletest-${browserType}.png`});
    // Closing the browser
    await browser.close();

})();
