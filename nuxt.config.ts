// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        assets: "/<rootDir>/assets",
      },
      css: ["@/assets/css/style.css"],    
      app: {
          head: {
            charset: 'utf-16',
            viewport: 'device-width, initial-scale=1',
            title: 'Currency.nl',
            meta: [
              // <meta name="description" content="My amazing site">
              { name: 'description', content: 'My amazing site.' },
            
            ],
            script: [
              {
                // src: "js/main.js",
              },
            ],
          }
        },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
