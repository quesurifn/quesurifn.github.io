"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/quesurifn.github.io/index.html","1d4c5362cc6f9bb9081a1add77387c60"],["/quesurifn.github.io/static/css/main.e9154d82.css","c5fa656d9d6a51daf5471a6eb830f758"],["/quesurifn.github.io/static/js/main.b11a29d4.js","417e4776b7823c965ceb02e376836a81"],["/quesurifn.github.io/static/media/Evogria.308d1553.ttf","308d15531659f8e81af13d1b4d171c4b"],["/quesurifn.github.io/static/media/Evogria.356f2c7c.svg","356f2c7c239b2a0cf4d2e06035e5b5de"],["/quesurifn.github.io/static/media/Evogria.6a6d0080.eot","6a6d0080147a8f88757646c55f419edf"],["/quesurifn.github.io/static/media/Evogria.7599a1a8.woff","7599a1a8415bd0293db5da6f30a3c0fc"],["/quesurifn.github.io/static/media/javascript.61ed8b05.svg","61ed8b054178d0e8d1285ad8f29f4045"],["/quesurifn.github.io/static/media/jquery-2.413afd8e.svg","413afd8e1a5ad5572fd94ad6de77570f"],["/quesurifn.github.io/static/media/nodejs-icon.b337a2fb.svg","b337a2fb0b1289e6757e632dc766ff6b"],["/quesurifn.github.io/static/media/postgresql.d7c985e7.svg","d7c985e7cca077dc2d77f89a66573e35"],["/quesurifn.github.io/static/media/rails.554d8dc6.svg","554d8dc6b47609a1d51fbdc1b9a45951"],["/quesurifn.github.io/static/media/react-router.02419671.svg","024196716802e272adb3cbefb81fd557"],["/quesurifn.github.io/static/media/react.4009eef3.svg","4009eef3b3e291f296e71962c70895c5"],["/quesurifn.github.io/static/media/redux.aa0a3376.svg","aa0a337603611296524a666b62a9ff23"],["/quesurifn.github.io/static/media/vue-9.60dfaadb.svg","60dfaadbbd65a730821eb0e7b5974020"],["/quesurifn.github.io/static/media/websocket.3e65df6a.svg","3e65df6aa02a0aba3e53ec1770af886e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/quesurifn.github.io/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});