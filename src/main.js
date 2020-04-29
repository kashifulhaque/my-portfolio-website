// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '../node_modules/bulma/css/bulma.css';
import './assets/style.css';
import '../node_modules/bulma-tooltip';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.script.push({
    href: "https://kit.fontawesome.com/58ac46d222.js"
  });
}
