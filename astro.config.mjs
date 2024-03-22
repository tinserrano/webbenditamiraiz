import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";




import NetlifyCMS from 'astro-decap-cms';

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          // Content collections
        ],
      },
    }),mdx(), sitemap(), tailwind()
  ],
});








// // https://astro.build/config
// export default defineConfig({
//   site: 'https://example.com',
//   integrations: [mdx(), sitemap(), tailwind()]
// });