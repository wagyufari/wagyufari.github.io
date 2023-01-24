'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "03a372c34700dbc4ee965a6c6f1554b7",
"index.html": "87a0557a711dd9f04ff676de5c01065b",
"/": "87a0557a711dd9f04ff676de5c01065b",
"main.dart.js": "050ddc84833b379641912114739f41d6",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "25c38d968e7a697776805e0e2ee5ae12",
".git/config": "56b6edbc17e4fb480589ec3842d1f1ca",
".git/objects/61/c327ca13ec9f169c6aa74bbe92fba2ee7e9897": "68501619cb4206d9f5762dc10b0a8e4f",
".git/objects/3b/0b7352fc3996b12ad898826435179e7c88978d": "1ea9423cd2f69bb35ca8162442dfede7",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/94/05d35a3756b760d0b3c65086512b954b217cd8": "33099419e44e5fd1aa66168a923144f2",
".git/objects/05/6224b2cfa7d6ddda2fc1fa94e7df787a498bf3": "e3cd30b50de682185be6448219b4e4dd",
".git/objects/d9/433489ede35283627f46a456a6098629f4ca5f": "5356a1c6da278316cf02cb7e8267ee72",
".git/objects/bb/08833ad8309114d90781ed21018c1a1c14ac67": "37c15c6e0ad7119ff80b678c0c8af077",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/709056477bdbb589bb5ecf4b46174483133c43": "e9998b2b41236ccc841a0864fbd3740e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4fa210216b9d000a45364ed794a6799b0894e3": "a5b3ea91923b7ce9ceb7f240dba6029a",
".git/objects/fc/6635a175e51dc7c0b84f561f5bfd36a4359aab": "6a0ae2c1f2bb807b55e9b41c45923ce3",
".git/objects/c8/79e6632961b8b7cebb3ddf7d69597a024cf51d": "192f1949204c03be3b5cfc85b8c46a5f",
".git/objects/20/603f287c8182e0e30ddccf23eb4a5498c8fefb": "a41339c273697ee7138c24296186c1e2",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/ad810f28b2960c6c7987d2033ecfbaedb3f6d2": "d5663daeac5a8a9a3a5e3fb9bdb366e2",
".git/objects/16/36712e28d1436123b866033b0f93fccab93df1": "53165e23359424e5bfdcd7ca04c61296",
".git/objects/73/af4b7c8f6bddf968baa82540608f1c63c8d8b3": "d7b54e51ea58c6e33786bcdaed02f786",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/a89097dde5123ccb82bd60eb143bdcd123484e": "f004badc2e527cd5f48147a84b097947",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/8f/137a9605141d3a17848ec95e6bdddce074978f": "75c38182ece61eb5aeb3b009bf81ad03",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/98/618cf5a1b169d6e2bbb1c7f08af5505e6d742c": "65b668b6e26a989e9aee3da85edbdf22",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/aa4c3d2abcda64b2e700dd14099548f85f2cbc": "d8e16ccdc07afdf11d734171b60151ee",
".git/objects/30/c9a638b4e0460e3761ed4b456cbc8ee6e13641": "a41e999fecb703dbf2fa033bcf1737da",
".git/objects/6d/011953dbf7dcf2e63bc7dfd1c8d040d099ae98": "13081f1054ae64b428cb27c6d81e39bd",
".git/objects/39/9ce08e3a4c3c2ee9772b8b2d178c1604352c2e": "d2f337a50b5235b75f69c31a55e7d88e",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/64/a253d637ce80380d3ab52ed23c3d03186a1a07": "613efbd1eff08054b3649a8f3ebab332",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/af/ad4f0a6902a2a0b7a0f55d4dd219dceb2068d9": "357cc7ff235f057f673a8536b0929a09",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/3d8cfc8f6328b100524dc08b71633e23f2c716": "e6dda476eca194644ffe452a4bc80f63",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/668af7851f9e16018e9530f57a097afcd83f1d": "ec305b737632bf05f285b782daffa2e2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/e7/160347428ae152000c4ac871f690632d936f4b": "94d2cd7d2d4976875c48d7eb363aa368",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/1c/aba8bb3f310babe23ee107a05df6f0d739c819": "9a2acb63a8737ffdc036ac223afb480b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c2e37ffa7c45eefcb6ec49b17e665a1a",
".git/logs/refs/heads/master": "c2e37ffa7c45eefcb6ec49b17e665a1a",
".git/logs/refs/remotes/origin/HEAD": "da218ec7b1c2f7812c0c8b0ad82eac41",
".git/logs/refs/remotes/origin/master": "02428505716a244d185c40028adb9801",
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
".git/refs/heads/master": "9054fb0b26e69848b0866ed03541a8a0",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "9054fb0b26e69848b0866ed03541a8a0",
".git/index": "6dd19bcced14b96bca8db83005a615c0",
".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
".git/FETCH_HEAD": "43e9d4b6e3eac73b9f3daac3cb89a0ac",
"assets/AssetManifest.json": "7f45735d5545c92fdb6d72ff3aa219d3",
"assets/NOTICES": "c8fa54f91a94f12c4decdd49e144dce7",
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
"assets/assets/ig_selected.png": "0d7539103821d2e476bfe5e580eddb73",
"assets/assets/verified.png": "63b621913998e644f9a0e0c5b270093e",
"assets/assets/github.png": "494c2e4d1b8ab8bae8b74c710a828622",
"assets/assets/ig.png": "8de11e8f42ceed294352390678125c11",
"assets/assets/linkedin.png": "e806f36552458f76ab281506a6575bb2",
"assets/assets/profile.jpeg": "200b83860cafa96069be054a66705ba7",
"assets/assets/happy5_logo.png": "2a37072d0369829b358157e7ed4780e9",
"assets/assets/android_logo.png": "12f9750cf09e7e9d9c8c4be8a374865d",
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
