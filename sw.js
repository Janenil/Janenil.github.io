importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/37b5e2953966f26578d3.js",
    "revision": "1d7f72f8224a8b08ea45b75b3bc3493c"
  },
  {
    "url": "/_nuxt/63a75fe59f108e6ba57a.js",
    "revision": "7b2e0e249f461f0fb77c76a8bf5d29c3"
  },
  {
    "url": "/_nuxt/74df0ff4d2b291fd7ce6.js",
    "revision": "88ca1abb48cc743d63986cf9641bf734"
  },
  {
    "url": "/_nuxt/c8fd4e44df4d08fca8fb.js",
    "revision": "05ffb451d236aefad8e83a3fa3edca6e"
  },
  {
    "url": "/_nuxt/f446fd181e6c4b9a544d.js",
    "revision": "923597d29b8e1c1310a5606480107c55"
  }
], {
  "cacheId": "nuxt-test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
