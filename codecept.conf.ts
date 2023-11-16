import { setCommonPlugins, setHeadlessWhen } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*.test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://computer-database.gatling.io',
      show: true
    }
  },
  include: {
    I: './steps_file',
    computersPage: './pages/computers.page.ts',
    computersObject: './objects/computers.object.ts',
  },
  screenshotOnFail: {
    enabled: true,
  },
  name: 'testInterview'
}