const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1080,
    viewportHeight: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});