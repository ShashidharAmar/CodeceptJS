import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://admin-demo.nopcommerce.com/login',
      show: true,
      windowSize: '1440x1200',
      browser: 'chromium',
      fullPageScreenshots: true,
      restart: 'keep',
      uniqueScreenshotNames: true,
      keepBrowserState: true,
      waitForNavigation: 'load',
      ignoreHTTPSErrors: true,
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'CodeceptJS Framework',
  plugins: {
    autoDelay: {
      enabled: true,
      delayBefore: 1000,
      delayAfter: 1000,
    },
    retryFailedStep: {
      enabled: true,
      retries: 8,
      minTimeout: 20000,
      maxTimeout: 50000,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  
  }
}