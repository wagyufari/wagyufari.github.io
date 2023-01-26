'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "03a372c34700dbc4ee965a6c6f1554b7",
"index.html": "dee41c5b8c32ddf9beef2fcf2a596000",
"/": "dee41c5b8c32ddf9beef2fcf2a596000",
"main.dart.js": "b23b236930326e9730549c0cc7348a8c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "25c38d968e7a697776805e0e2ee5ae12",
".git/config": "fd1302f226a57ed37c16bac2504f48d0",
".git/objects/66/e39002f70ba3386f49787da87d2a4edc328813": "4b230e8b88c22263c66efe11b0b84933",
".git/objects/3e/72a667cafa32d6560ad6974c26e67b4b088f57": "ea7090508b467f39c02136a4ebaab115",
".git/objects/6a/8f80770a5b73a92b5426b90f7f7fcdbc8e5064": "9a818d464ec2ccbbf4e021aa02ef1c8a",
".git/objects/60/192a7cc68ad59c2ce9dc3ffa927c8b21d412af": "80250ecb1907411cbfd47d5757996ec4",
".git/objects/33/d67ed86a7ccea8c92e0957be2dfad45cd17d1d": "27d98eaa9ec6af8a933b3695ee688cf0",
".git/objects/33/3599e2e2469c3b02b8a9dfd1a7ff1ee701666a": "230988a96a2e615a3906ea382c4f7eec",
".git/objects/d9/753eee22646d3900fe72aee9e5d602778a3d58": "fd8588f6a6b9b01ea8753deb42c074f2",
".git/objects/d0/97998560f2c33e2bac8596c872f24d7f6b792e": "32017e5e7a0ddacef845783bd430bd10",
".git/objects/da/2edd425ae71057fad9f4420d7004d5cdad656c": "dfd5d4766a667c0e5f27496dcf593af7",
".git/objects/b4/dcfcbe1cdfbd6ea9afd956c15a2279f75f9db3": "d3fa9fbb86ca9e3f8f2d78da2b7e1bd8",
".git/objects/d6/0582791f84ef123c8d174eb664eaefc8ac3be7": "75358690532ec6f40718d34f76abee12",
".git/objects/ab/5b3551c8a645392990932bf4d7c18049f5f95e": "caee54b27af9be2ab4d7f189408f760d",
".git/objects/ed/e9797786ee90c646e23b36ae98646249b961d1": "975af93dd215bbc0a2f53e9205689347",
".git/objects/c6/752a5fd551d555c47d801b193aedf34748cfe5": "f8aa88cd5731745a9e0378b625ae4d07",
".git/objects/27/80e8d954cfcd3bc17675a7eb7fed6aef99c168": "f887a805afc314625507cb9f97bbb218",
".git/objects/4b/3ac7f3ebcde72c9936e374aaa8d78abc6774e0": "73213a039c0b7642717459ce35049444",
".git/objects/pack/pack-65c192f5a02b43e4063d3ec12d552b416c663239.idx": "caa22a954c1e6b6a2707c28acf0c44c1",
".git/objects/pack/pack-65c192f5a02b43e4063d3ec12d552b416c663239.pack": "31ee3097a74309623d1fb4e1f023ccb5",
".git/objects/73/277595d32e46d0e6fa8717c73e098ec185bab2": "26114af1989300ee2bbdaa73162bcc53",
".git/objects/74/19fda7184878df43165fa27ab8eae08be28e41": "081525f145c4f81b82e92d27af04c232",
".git/objects/8f/8c174108c00d7491d5637bc5e46b3eac05ed74": "4ad8add66cdd4c5e7558ac3c1258dabe",
".git/objects/10/96875c66771a634938fe8f198982d4270a4f21": "1079a51ede44ba36810a7b03598abcf4",
".git/objects/21/70363a801ddf58fe51edfa95f3422a54cef4a0": "aace2fe9825e5cf17be3d77cd7d3f237",
".git/objects/21/7208b54865705ec11ee13d68fd7d5ed86aad68": "6893ec5883399a512b6b3def10f65fb4",
".git/objects/2a/b53f1797d81abb6668bf03e73f4c290af16afd": "f96da0595155d35a3238dea02a0e80e1",
".git/objects/2f/965cc144d8ffbc357d9bb2bd31009c68f0590e": "d03c6ab0944dc254669f20cdf3f84850",
".git/objects/9f/038a47dd34c6c6b4114573b91837951b708cf8": "a2a2313b25b0abca462d7ff1afb30d8d",
".git/objects/6e/66b10bb1edb3efd9130d11c1840637b3deebe4": "608cf7d454de579ac2e618cbda0e500f",
".git/objects/9a/ba39a9a25f29da2c99976ed18b3f7d16ce4938": "02edf4b728251afa141a507457f88a1e",
".git/objects/54/ea34a8283828b454f4e308d8a2136b964c6326": "454e5e89a460562da8f8675615311cf5",
".git/objects/53/2c8d1f6e19f27c22ca98cae1a92e0a5157af9b": "d49674526fbfb58513dccad7d6ada813",
".git/objects/30/4e49be99ba5cc225a46f275f15160c5c4a561b": "2022877e40949a86611d8c0cfc08a8e6",
".git/objects/30/12020e810bec322ccc400cda7c51b0af00a0dc": "d03145d4af04bb26a1362d5f0d1af1ef",
".git/objects/37/153037216a1c79e8c82f5c3a4d50548f67a813": "38b158feeeac09a1dd0705809d759c51",
".git/objects/01/34b497e7f7a23f0f71838f27afc2f10ee34ed9": "ebff8e8e4a557f7fb79d1f2032c9f0ff",
".git/objects/01/ba8d7405a42741f848c37c2fbcde69450385ad": "0808a45f4a4766b30930fbf361762365",
".git/objects/6c/8eab063bd40d11872dbc147c5db70c135328ac": "ff37e943d28fe494b1d38b7968b9ff2a",
".git/objects/52/d4335ddaacc23f038231021dd77227289209bf": "ad8394fcd6becbcd4d77e25deffb5409",
".git/objects/55/298ed8fc9a48d1e36fab8e955604e8e52af08a": "1717bef17f22ff5524d75eea9cd87c7c",
".git/objects/0a/20296164f57be5a214f38a6ad2174b4f25141d": "bfbae085cdad44d37871df55540704b1",
".git/objects/bf/51e1f2bc53ab792dcd041138ec45ce0ccf52ef": "9d7be0be56e16bf50be1ea04a82bf209",
".git/objects/dc/08073ff15ea22a4bcca67913b3b3013b5dc0e9": "b10b2911a26f29f59c3c814b40e6b54a",
".git/objects/dc/6ea557e2e001191cc8e36f9558ddf9153dc80e": "0911f17fa5e10dbd34c7bdd51cf5feeb",
".git/objects/d5/13cb71292986e2b084d2f722a4cfd24cfcc22f": "7f40013bc4e1017dbadbe671df16b267",
".git/objects/af/d17b2736d7cd212be2f175ac2d401c883c1668": "aa808a5ce59ea0f38ba0b0ff57d3ee1f",
".git/objects/b7/eda62e44fa04fcb1e1bc30148bb6bb5c21a422": "2663e1277b9eb2d0e6c76130f57e7cdd",
".git/objects/de/10209f27f09d9bcd4ea78c3ff65f7f8b0f93fb": "1abdcd991eb28818fa5fdeb2d8fdfd71",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/f6/a9c4b24f28c49c4c048f759178a137f4cde4d7": "b1e62a7f9a3eec39e0fe8048a5a4c880",
".git/objects/f1/78d37f8f842b0bdb605727782db90d87c441e6": "86b34d224e53334b68828c5435512c71",
".git/objects/2c/a5eff025ee62d1f0fdbd4d5c26d4a490724450": "06c8389357ef11ac3d9be051ecffd8e3",
".git/objects/41/ea643051a064d11b768c9cea3fdf7410f91e8e": "6f455c915aa665abbf76d5aa12117f5e",
".git/objects/4f/65197a70d2150760eec27eae6c9aad480ac368": "97d2c4c19bcd4436c82749b7e93a6807",
".git/objects/82/d0a29d5b749baf6462642a7bf9d1b8be0d0778": "898c9921f29a70c34a8ce1a50903da46",
".git/objects/8b/39731867422f064c8e308f04af09ed0157ffcc": "a4977866cc094ab8eac46966d11a9a5b",
".git/objects/13/649e6491cf7db4358c7a4578960af9080423b6": "78927765e98a226fa0c3f29137bf4d12",
".git/objects/7f/fd19a1aba8cfc6813950870680693d9a6b6a61": "ca73184ee4a3f11140f63ae92a3b666b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "add6acd98f754d62a097de3b9497f3d1",
".git/logs/refs/heads/master": "add6acd98f754d62a097de3b9497f3d1",
".git/logs/refs/remotes/origin/HEAD": "d419a9051d839a540fa7141f7eb8bf94",
".git/logs/refs/remotes/origin/master": "f6112fefed444ecb4f2c6a5045f84443",
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
".git/refs/heads/master": "70af33a5911586c29f3e9bf7d3b6a280",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "70af33a5911586c29f3e9bf7d3b6a280",
".git/index": "ec43a4a0368d1c919699c4837d988e65",
".git/packed-refs": "a26ea88bad634056d005e08a21994dbc",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "7c0dc7518f1fafe46cb338540c495ffa",
"assets/AssetManifest.json": "81704af045e6c5d854906a28cd8f4be8",
"assets/NOTICES": "cb4469bd9ff1b2266367a856850c7bd4",
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
