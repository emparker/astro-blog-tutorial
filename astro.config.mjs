import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["astro.build"]
  },
  site: 'https://emilys-astro-blog.netlify.app',
  integrations: [sitemap(), react(), tailwind(), partytown()]
  // if need
  // integrations: [sitemap({
  //   filter: (page) => !== "" ex=> to not include a robots.txt as meta tag. dont want indexed or visable// limiting posts
  // })],
});

// if need :
//   // Define your pages configuration here
//   pages: {
//     "src/pages/blog/[...page].astro": {
//       // Configuration for your dynamic route segment page
//       // You can specify any configuration options specific to this page here
//     },
//   },