importScripts('/Janenil.github.io/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/Janenil.github.io/_nuxt/37b5e2953966f26578d3.js",
    "revision": "1d7f72f8224a8b08ea45b75b3bc3493c"
  },
  {
    "url": "/Janenil.github.io/_nuxt/5e7a81b0d8ea17e2a0a2.js",
    "revision": "459c22554e352122b53069c267ba06c6"
  },
  {
    "url": "/Janenil.github.io/_nuxt/63a75fe59f108e6ba57a.js",
    "revision": "7b2e0e249f461f0fb77c76a8bf5d29c3"
  },
  {
    "url": "/Janenil.github.io/_nuxt/74df0ff4d2b291fd7ce6.js",
    "revision": "88ca1abb48cc743d63986cf9641bf734"
  },
  {
    "url": "/Janenil.github.io/_nuxt/ccc5d54dbddb710e8dbc.js",
    "revision": "03d6acc61a13789ab7085d7aa68654d5"
  }
], {
  "cacheId": "nuxt-test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/Janenil.github.io/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/Janenil.github.io/.*'), workbox.strategies.networkFirst({}), 'GET')
