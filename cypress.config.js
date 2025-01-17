const { defineConfig } = require("cypress");
const dayjs = require("dayjs")
const timestamp = dayjs().format("YYYY-MM-DD_HH-mm-ss")

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'https://meus-emprestimos.picpay.com',
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: `output/screenshots/${timestamp}`,
    reporter: "cypress-mochawesome-reporter",
    setupNodeEvents(on, config) {
      const timestamp = dayjs().format("YYYY-MM-DD_HH-mm-ss")
      config.screenshotsFolder = `output/screenshots/${timestamp}`
      config.reporterOptions = {
        reportDir: `output/reports`,
        overwrite: false,
        html: true,
        json: true,
        embeddedScreenshots: true,
        charts: true,
      }
      require("cypress-mochawesome-reporter/plugin")(on)
      return config
    },
  },
});
