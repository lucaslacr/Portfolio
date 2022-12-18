// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
    app: {
   head: {
      title: 'Lucas', 
      htmlAttrs: {
          lang: 'fr'
      },
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Maquette, Wireframe, Prototype, Audit UX, Tests utilisateurs, Interview UX, Expérience map, Études quantitatives, Atelier design studio, Wireflow, Design Thinking' },
          { name: 'format-detection', content: 'telephone=no' },
          { property: 'og:url', content: 'https://lucaslacroix.com/' },
          { property: 'og:site_name', content: 'Lucas Lacroix' },
          { property: 'og:locale', content: 'fr_FR' },
          { property: 'og:image', content: 'https://lucaslacroix.com/og-icon.png' },
          { property: 'og:description', content: 'Maquette, Wireframe, Prototype, Audit UX, Tests utilisateurs, Interview UX, Expérience map, Études quantitatives, Atelier design studio, Wireflow, Design Thinking' },
          { property: 'og:title', content: 'Lucas Lacroix' },
          { property: 'og:type', content: 'Portfolio' },
          { property: 'author', content: 'Lucas Lacroix' },

          { property: 'twitter:card', content: '/icon.png' },
          { property: 'twitter:title', content: 'Lucas Lacroix' },
          { property: 'twitter:description', content: 'Portfolio' },
          { property: 'twitter:image', content: 'https://lucaslacroix.com/favicon.png' }
      ],
      link: [
          { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
      ]
    }}, 

  
  plugins: [
    { src: '~/plugins/matomo-ana.js', ssr: false }
  ],

   ssr: false,
})