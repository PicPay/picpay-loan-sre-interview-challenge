const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'https://meus-emprestimos.picpay.com/',
    screenshotsFolder: "cypress/reports/screenshots",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportFilename: "[name]-report-[datetime]",
      overwrite: false,
      charts: true,
      reportPageTitle: 'Pagina Login',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
