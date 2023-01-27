'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "03a372c34700dbc4ee965a6c6f1554b7",
"splash/img/light-2x.png": "0b4c66d6b2f3a03cbfe815f2aad16178",
"splash/img/dark-4x.png": "ae368a0a50ae6d9ca68801af06604e5b",
"splash/img/light-3x.png": "37a8e414e2c77fdf1f5ae556649b1751",
"splash/img/dark-3x.png": "37a8e414e2c77fdf1f5ae556649b1751",
"splash/img/light-4x.png": "ae368a0a50ae6d9ca68801af06604e5b",
"splash/img/dark-2x.png": "0b4c66d6b2f3a03cbfe815f2aad16178",
"splash/img/dark-1x.png": "63381d5cd9e85881935c844d1b4c2a61",
"splash/img/light-1x.png": "63381d5cd9e85881935c844d1b4c2a61",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "8632f66b778ab6afb1cdff5a5d50857a",
"index.html": "2fa1b835c638e6148ae579dcc58258ea",
"/": "2fa1b835c638e6148ae579dcc58258ea",
"main.dart.js": "17b3b51557c8e2f098164fbbd7a0e9c7",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "25c38d968e7a697776805e0e2ee5ae12",
".git/config": "fd1302f226a57ed37c16bac2504f48d0",
".git/objects/pack/pack-7739a3463bab3f96bd515d60486018aa54d386f0.idx": "dd84f4fe689ab98523d430c09d9cb442",
".git/objects/pack/pack-7739a3463bab3f96bd515d60486018aa54d386f0.pack": "2c2d1e49e7e28695db72dc0a1a687e28",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d459764098be95a36b45109b20327982",
".git/logs/refs/heads/master": "d459764098be95a36b45109b20327982",
".git/logs/refs/remotes/origin/HEAD": "16aa27fd306598129fbe3c9e59b676e0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "2a13cb306125e08f37f689c3b76cecaa",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/index": "09a66190c0bed1ee19178826cc450a41",
".git/packed-refs": "d86bf0b4ea7cc5c81f3f87202047b71e",
".git/FETCH_HEAD": "798c6794e6e85af5c83c61caa5adfbbe",
"assets/AssetManifest.json": "695e9a5f9bc4130d39c7bc31e46ab13c",
"assets/NOTICES": "58105f3a68d01680da0ff1bdd63a2d4d",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/gradient.jpg": "28b4af47da024a0518348614a79b78f1",
"assets/assets/linkedin_selected.png": "18cf32e4cf23288186b752b55dcf8b77",
"assets/assets/apple_logo.png": "398348910e6b7a5177df8c207b7bb312",
"assets/assets/github_selected.png": "f1da26cb77b5ef23e7b9878d31f26698",
"assets/assets/mxmaster.png": "1760e18b942df3667f726129e08143b8",
"assets/assets/ig_selected.png": "0d7539103821d2e476bfe5e580eddb73",
"assets/assets/verified.png": "63b621913998e644f9a0e0c5b270093e",
"assets/assets/standingdesk.png": "c07e5ca084f50f2b4cda86c7b37d6d21",
"assets/assets/github.png": "494c2e4d1b8ab8bae8b74c710a828622",
"assets/assets/setup.jpeg": "4154a221a8f4e1c4a0475874c7221f7f",
"assets/assets/xiaomi4k.png": "562b1050afd9766000364946882d1c1a",
"assets/assets/ultimo.png": "bc9dcc419b1a4e7554d3132202c6f81f",
"assets/assets/razerbarx.png": "d5dce178837aa838c9b1d9b7d08fae5b",
"assets/assets/ig.png": "8de11e8f42ceed294352390678125c11",
"assets/assets/circleprimary.png": "d4e17b5a66c35773a17edd2724bd1856",
"assets/assets/linkedin.png": "e806f36552458f76ab281506a6575bb2",
"assets/assets/dzikirqu.png": "75faffde0e67b37ab61ce9899c58a52f",
"assets/assets/profile.jpeg": "200b83860cafa96069be054a66705ba7",
"assets/assets/pocof3.png": "9e90029118ec8e8587f57316b1eb4af1",
"assets/assets/mbam1.png": "dc4aaef160dedda0323928551d500ac4",
"assets/assets/xiaomi34.png": "621d74212642e7d9dfcca638f69925fc",
"assets/assets/happy5_logo.png": "2a37072d0369829b358157e7ed4780e9",
"assets/assets/android_logo.png": "12f9750cf09e7e9d9c8c4be8a374865d",
"assets/assets/lention.png": "f7db465372e875b9f0017d43b792b5b4",
"assets/assets/mxkeys.png": "8ac6cc2289f896d09be2a23f7a8c6248",
"assets/assets/lumiarm.png": "8ca7d757c7782c9ec77808fd4b49ef32",
"assets/assets/iphone12.png": "c81ba4b1e484677460f36b98afa4abaa",
"assets/assets/leband.png": "82bdfca6d8585e555913857e329327a1",
"assets/assets/mbstand.png": "6582948bed30ef6b22c0e85130804dac",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
