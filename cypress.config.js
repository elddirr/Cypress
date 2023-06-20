const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vv3gpo',
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
    },
  },

  //reporter: "mochaawesome",
  //"reporterOptions": {
  //  "reporterFilename": "[status]_[datetime]-[name]-report",
  //  "timestamp": "isoDateTime",
  //  "overwrite": "false",
  //  "html": "true",
  //  "json": "true",
  //}
  })
