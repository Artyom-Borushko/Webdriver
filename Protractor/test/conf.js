exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",

  capabilities: {
    browserName: "chrome"
  },

  specs: ["../specs/spec.js"],

  framework: "jasmine",

  onPrepare: () => {
    browser.driver
      .manage()
      .window()
      .maximize();
  }
};

// protractor test/config.js   -- to run (path to config.js file to run)
