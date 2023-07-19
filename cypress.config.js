// const { defineConfig } = require('cypress')
// module.exports = {
//   projectId: "qs7qsw",
//   // ...rest of the Cypress project config
// }

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
  },
})

