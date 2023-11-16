/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file')
type computersPage = typeof import('./pages/computers.page');
type computersObject = typeof import('./objects/computers.object');
// type mainPage = typeof import('./pages/main.page');

declare namespace CodeceptJS {
  interface Methods extends
    Playwright { }

  interface I extends
    WithTranslation<Playwright> { }

  interface SupportObject {
    I: I,
    steps_file: steps_file,
    computersPage: computersPage,
    computersObject: computersObject,
    // mainPage: mainPage,
  }

  interface Methods extends Playwright { }
  interface I extends ReturnType<steps_file>, WithTranslation<Playwright>, WithTranslation<steps_file> { }
  namespace Translation {
      interface Actions { }
  }
}
