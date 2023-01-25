'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "03a372c34700dbc4ee965a6c6f1554b7",
"index.html": "475a15b044ea57bd856fe48eb27d92eb",
"/": "475a15b044ea57bd856fe48eb27d92eb",
"main.dart.js": "1e52c11af7ed8683dbabf44e4976fa17",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "25c38d968e7a697776805e0e2ee5ae12",
".git/config": "fd1302f226a57ed37c16bac2504f48d0",
".git/objects/66/e39002f70ba3386f49787da87d2a4edc328813": "4b230e8b88c22263c66efe11b0b84933",
".git/objects/6a/8f80770a5b73a92b5426b90f7f7fcdbc8e5064": "9a818d464ec2ccbbf4e021aa02ef1c8a",
".git/objects/60/192a7cc68ad59c2ce9dc3ffa927c8b21d412af": "80250ecb1907411cbfd47d5757996ec4",
".git/objects/33/3599e2e2469c3b02b8a9dfd1a7ff1ee701666a": "230988a96a2e615a3906ea382c4f7eec",
".git/objects/d0/97998560f2c33e2bac8596c872f24d7f6b792e": "32017e5e7a0ddacef845783bd430bd10",
".git/objects/da/2edd425ae71057fad9f4420d7004d5cdad656c": "dfd5d4766a667c0e5f27496dcf593af7",
".git/objects/d6/0582791f84ef123c8d174eb664eaefc8ac3be7": "75358690532ec6f40718d34f76abee12",
".git/objects/c6/752a5fd551d555c47d801b193aedf34748cfe5": "f8aa88cd5731745a9e0378b625ae4d07",
".git/objects/27/80e8d954cfcd3bc17675a7eb7fed6aef99c168": "f887a805afc314625507cb9f97bbb218",
".git/objects/4b/3ac7f3ebcde72c9936e374aaa8d78abc6774e0": "73213a039c0b7642717459ce35049444",
".git/objects/pack/pack-65c192f5a02b43e4063d3ec12d552b416c663239.idx": "caa22a954c1e6b6a2707c28acf0c44c1",
".git/objects/pack/pack-65c192f5a02b43e4063d3ec12d552b416c663239.pack": "31ee3097a74309623d1fb4e1f023ccb5",
".git/objects/74/19fda7184878df43165fa27ab8eae08be28e41": "081525f145c4f81b82e92d27af04c232",
".git/objects/2f/965cc144d8ffbc357d9bb2bd31009c68f0590e": "d03c6ab0944dc254669f20cdf3f84850",
".git/objects/9f/038a47dd34c6c6b4114573b91837951b708cf8": "a2a2313b25b0abca462d7ff1afb30d8d",
".git/objects/53/2c8d1f6e19f27c22ca98cae1a92e0a5157af9b": "d49674526fbfb58513dccad7d6ada813",
".git/objects/01/34b497e7f7a23f0f71838f27afc2f10ee34ed9": "ebff8e8e4a557f7fb79d1f2032c9f0ff",
".git/objects/01/ba8d7405a42741f848c37c2fbcde69450385ad": "0808a45f4a4766b30930fbf361762365",
".git/objects/55/298ed8fc9a48d1e36fab8e955604e8e52af08a": "1717bef17f22ff5524d75eea9cd87c7c",
".git/objects/0a/20296164f57be5a214f38a6ad2174b4f25141d": "bfbae085cdad44d37871df55540704b1",
".git/objects/bf/51e1f2bc53ab792dcd041138ec45ce0ccf52ef": "9d7be0be56e16bf50be1ea04a82bf209",
".git/objects/d5/13cb71292986e2b084d2f722a4cfd24cfcc22f": "7f40013bc4e1017dbadbe671df16b267",
".git/objects/b7/eda62e44fa04fcb1e1bc30148bb6bb5c21a422": "2663e1277b9eb2d0e6c76130f57e7cdd",
".git/objects/4f/65197a70d2150760eec27eae6c9aad480ac368": "97d2c4c19bcd4436c82749b7e93a6807",
".git/objects/82/d0a29d5b749baf6462642a7bf9d1b8be0d0778": "898c9921f29a70c34a8ce1a50903da46",
".git/objects/13/649e6491cf7db4358c7a4578960af9080423b6": "78927765e98a226fa0c3f29137bf4d12",
".git/objects/7f/fd19a1aba8cfc6813950870680693d9a6b6a61": "ca73184ee4a3f11140f63ae92a3b666b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20980405558963ffd65721ebf90a5516",
".git/logs/refs/heads/master": "20980405558963ffd65721ebf90a5516",
".git/logs/refs/remotes/origin/HEAD": "2758b18e9705a7a78ce4bc360bbe3769",
".git/logs/refs/remotes/origin/master": "3bc3853bc3ad22b6ecea649a874feaa9",
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
".git/refs/heads/master": "b41ec8440e847a77836f1429e9f48cca",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "b41ec8440e847a77836f1429e9f48cca",
".git/index": "32853cfb5c18f5906e248d64ec928977",
".git/packed-refs": "a26ea88bad634056d005e08a21994dbc",
".git/COMMIT_EDITMSG": "eb4585ad9fe0426781ed7c49252f8225",
".git/FETCH_HEAD": "9ce87b4879686c15db78109b4149b3b4",
"assets/AssetManifest.json": "81704af045e6c5d854906a28cd8f4be8",
"assets/NOTICES": "261dfe7865d16903487e15cfa516fee4",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/shaders/ink_sparkle.frag": "d64d07d8c558ba11c556cc461a9acfba",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
