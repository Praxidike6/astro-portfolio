// @ts-check


// https://astro.build/config
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://www.usethefalseluke.com',

    integrations: [
        sitemap(),
    ],

});

