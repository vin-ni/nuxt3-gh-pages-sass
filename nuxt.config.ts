// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // app: {
    //     baseURL: '/nuxt3-gh-pages-sass/'
    // },
    modules: [
        '@nuxt/content'
    ],
    css: ["assets/scss/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/mixins.scss";',
                },
            },
        },
    },
})
