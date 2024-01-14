import { defineConfig } from 'astro/config';
import matomo from 'astro-matomo';

// https://astro.build/config
export default defineConfig({
  site: "https://lucaslacroix.com",
  integrations: [
    matomo({
      enabled: import.meta.env.PROD, // Only load in production
      host: "https://audience.lucaslacroix.com/",
      setCookieDomain: "*.lucaslacroix.com",
      trackerUrl: "js/", // defaults to matomo.php
      srcUrl: "js/", // defaults to matomo.js
      siteId: 1,
      heartBeatTimer: 5,
      disableCookies: true,
      debug: false,
    }),
  ]
});
