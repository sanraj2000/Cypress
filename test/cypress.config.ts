import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/reports/mochawesome-report/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/fixtures/downloads',
  defaultCommandTimeout: 30000,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  video: true,
  videoCompression: false,
  viewportWidth: 1440,
  viewportHeight: 1100,
  reporter: 'cypress-multi-reporters',
  env: {
    USERNAME: 'admin',
    PASSWORD: 'Test@1234'
    },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
     
      return config;

    },
    specPattern:[
      'cypress/tests/*.cy.js'
    ],
      
    baseUrl: 'https://awdevtenant2.apigw-aw-us.webmethods-dev.io/apigatewayui',
    
  },
})