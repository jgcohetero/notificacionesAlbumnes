console.log('Hello');
importScripts('http://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  'index.html',
  'albumnes.html',
  'favoritos.html',
  'albumnes.css',
  // './imagenes/firma.png',
  // './imagenes/logo.png',
  // './imagenes/portada.jpg',
  'api.js',
  'albumnes.json'
]);

// workbox.routing.setCatchHandler(async context =>{
//   console.log(context);
//   console.log(context.request);

//   if(context.request.destination === 'document'){
//     return workbox.precaching.matchPrecache('offline.html');
//   } else if (context.request.destination === 'image'){
//     return workbox.precaching.matchPrecache('imagenes/offline.jpg')
//   }
  
//   return Response.error();
// })


workbox.routing.registerRoute(
  new RegExp('\\.html'),
  new workbox.strategies.CacheFirst()
)

// 'use strict';

// const CACHE_NAME = 'static-cache-v1';

// const FILES_TO_CACHE = [
//   './index.html',
//   './albumnes.html',
//   './favoritos.html',
//   './albumnes.css',
//   // './imagenes/firma.png',
//   // './imagenes/logo.png',
//   // './imagenes/portada.jpg',
//   './api.js',
//   './albumnes.json'

// ];

// self.addEventListener('install', (evt)=>{
//   console.log('[ServiceWorker] Install');

//   evt.waitUntil(
//     caches.open(CACHE_NAME).then((cache)=>{
//       console.log('[ServiceWorker] Pre-caching offline page');
//       return cache.addAll(FILES_TO_CACHE);
//     })
//   );
//   self.skipWaiting();
// });

// self.addEventListener('activate', (evt)=>{
//   console.log('[ServiceWorker] Activate');
//   evt.waitUntil(
//     caches.keys().then((keyList)=>{
//       return Promise.all(keyList.map((key)=>{
//         if (key !== CACHE_NAME){
//           console.log('[ServiceWorker] Removing old cache', key);
//           return caches.delete(key);
//         }
//       }));
//     })
//   );
//   self.clients.claim();
// });

// self.addEventListener('fetch', (evt)=>{

//   console.log('[ServiceWorker] Fetch', evt.request.url);
//   evt.respondWith(
//     caches.open(CACHE_NAME).then((cache)=>{
//       return cache.match(evt.request)
//       .then((response)=>{
//         console.log('RESP', response);
//         return response || fetch(evt.request);
//       });
//     })
//   );
// });
