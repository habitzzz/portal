// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/supabase", "@unocss/nuxt", "@nuxt/image"],
  css: ["~/assets/css/main.css", "@unocss/reset/tailwind.css"],
  image: {
    quality: 80,
    format: ['webp']
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  imports: {
    dirs: ["./stores"],
  },
});