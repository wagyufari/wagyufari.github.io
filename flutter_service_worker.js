'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "firebase-debug.log": "fcd53db64a6eda094b4dc63c93bd5db4",
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
"index.html": "eed8e58092d76cc80d4605d7acb5f67c",
"/": "eed8e58092d76cc80d4605d7acb5f67c",
"main.dart.js": "6650ef66d68e60778468c69565033024",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "4405e887df8ad53d43b072a2613f7512",
"icons/Icon-192.png": "8491a8272198c57834c00f3e5d1226eb",
"icons/Icon-maskable-192.png": "8491a8272198c57834c00f3e5d1226eb",
"icons/Icon-maskable-512.png": "ae368a0a50ae6d9ca68801af06604e5b",
"icons/Icon-512.png": "ae368a0a50ae6d9ca68801af06604e5b",
"manifest.json": "d6dc58f6bad4e9d129c1b897184e3148",
".git/config": "fd1302f226a57ed37c16bac2504f48d0",
".git/objects/3b/73b92f937cd5a5e5e4a7414b4ab80038231bc2": "e72cb85b2dfbef43a631ed1ca8186cc3",
".git/objects/04/b7347b09b2ea78c9e8acc14ebdbbd0648c7aea": "9f344e8eb92a75bfe0175e9faf015494",
".git/objects/6a/24a5947053df072b73187bc0a7a2895d2eaaaf": "1763df28c9a99433fc98660d9cbf2aae",
".git/objects/67/52c00f9a62e6973b0e584f325b1fe25abc6836": "2a9e79570e418156fb4bd6e79be8faad",
".git/objects/94/3f0ceabcf4e71237a296f6cf702520a0148e14": "26138d440d878a161b3f2c8a30ddb056",
".git/objects/5f/013c6be97b82ab1a6ee9251e6753cf0fdd48e8": "4039c99f0f5e6f1b536a840113076a11",
".git/objects/05/d36f31604bf8db620f5d68276580adafb4d742": "d2b41bd50f4ad1acc8c2bc93dfe8d4de",
".git/objects/05/82455905372e3ddb8b335cc3b6f06255b7e821": "6b8f3b1434cc49131d9623072dbc6ac5",
".git/objects/a3/b9b1e56ed29a80d39a6b0994e3feeb275e9150": "74ba27d089897f3a6b8209d0efdd17c4",
".git/objects/ac/7cd9755f8ccd09af9cb6a3cd15a6938a371d18": "141d3188343b68377bccf53612691209",
".git/objects/da/e72bbcff6dea2ad69d209074bacbc1ee05e7a0": "55a3c0f9cbba7528a0604b8c7b2a1074",
".git/objects/c9/046949b3fda2b610c77e6943394c4e053aca70": "03b8cfdef3855b0f1e3c8aff52e2e075",
".git/objects/fc/102626bf8476d110457c517afc2cdb581e5788": "ed09a793eb1f95b6c7c421e1de28fd2a",
".git/objects/cf/0f50c1fd30aa291564255d7f9e97d18cfefc54": "fc1e3810575d7140749316db12879ba0",
".git/objects/fe/472bb90cd2bac3c425b263429304a3c4bc76f8": "a8b0470d604bbbffe4d6d267cc97b214",
".git/objects/pack/pack-7739a3463bab3f96bd515d60486018aa54d386f0.idx": "dd84f4fe689ab98523d430c09d9cb442",
".git/objects/pack/pack-7739a3463bab3f96bd515d60486018aa54d386f0.pack": "2c2d1e49e7e28695db72dc0a1a687e28",
".git/objects/80/c638564ff9fe573c9fe42bb68a93af8bdedfe8": "618ededc776f51a3d5e6aea3923b1fba",
".git/objects/17/7a21a1b35567bcb8105eb5cc35c29bac17bb53": "c396e19c73847d64029aaf151454b8d1",
".git/objects/8a/cff4e3725ad06807c66e84718abbf37c2e76c2": "51b1bdcaf40a02cd4bde9ce8558732e4",
".git/objects/86/ab05c7ce9c82cc0736201fdaae3f7622cad52c": "e8c1c6024d001ae21d73e858f599007f",
".git/objects/2f/c9e0a7dad907f7dd3b6294674b5c59ddbfcd58": "26eacb0e9e0caa06407a3e95587034ba",
".git/objects/31/7bc6becc17b0fad5d98aeb2af8732dd210f799": "7423b19ea7871115b0cc4a22b0eda7f1",
".git/objects/01/4df43a0565e4ceb236405af6d1d5634f5c1d46": "49de95a51958895edfe8e7650973e0fd",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/f0058874645347ce9e31d6362f4effdf42768a": "840505ed9bf9c54220278c636ed6ed03",
".git/objects/b0/02213b419453630bf8358fffaef8c8b3addc2d": "8fb80cf6c8aa673e9da49ff81b0883db",
".git/objects/e6/babb4c19997c5a6f27cc9ceadb2d24afe150b7": "c1302deb2388f7f5887d93bcd86f946b",
".git/objects/f7/707b81a207aaee39ef16e24c5023e16329054d": "c083c46267e2cdddd0c88c89336db70b",
".git/objects/fa/7d0753c13f6e9f949dfe4063a3bffb0a1b65de": "2841626bc27d29823605687908c4026e",
".git/objects/e9/f830d2c02a2b2e71d6d5ba1be4a5e770de70dd": "bbf44952f63766668944d59bf6d87f52",
".git/objects/e7/18f304b57bbcf33bb1402321c3f65287909a4a": "a57332285d040ff5eaeb5e080d8b40ef",
".git/objects/ce/e010aa04c508502d50339859707304c0c4025d": "ed630642add93087c8ee3514ad628fc8",
".git/objects/79/d3745ad2e576298542c0e2329144c5b745dc41": "fecd6bda5347c1e9e25c6b882115dabd",
".git/objects/84/334a09a8667b9a2899f410ccc5344fe62a5acd": "920ec491832fb1d5cbb7f19ab53f9246",
".git/objects/84/7be4d7d9428c0356affcbd42ab435c019316f2": "436e7e7bce31527f9b12f5cbc454b3fb",
".git/objects/24/e4b130907b58544fa3082ff1658f499b10d88e": "7f9254829419d5bba75c729100a946c9",
".git/objects/1d/d2b9c5d4556b99f7bed350c90fee9b269551ab": "e36c3fad682947a9d9d6304a5907c299",
".git/objects/1d/e4f411ef7cb901ef988b82e60e2d10aad72800": "e1f552ad8d22cfa31a08d4865c488652",
".git/objects/49/244e82a1d7a5b78881a3f3d3423d91f49fb295": "a04ec191e71dc3950ef5b1f175dab83e",
".git/objects/47/692b4a4ba3dace43ea425cbef98da53232c040": "6eb36af763734120e10d85ecb2d80f5a",
".git/objects/8e/888d61f583ee2dddfe4f4602a9de5888040dfd": "cdbc4593aa6e9df9e0ba156572a111bc",
".git/objects/22/fea1abf19838be3373cb2c1f81cc10b77c735d": "4b45de6acc10531ec6ab94f71a52a0b2",
".git/objects/25/5f253731aa490c7a30a9ecf64aadb041ef24c4": "13841075765d298930b14c14b1016547",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29311a96f428c251de8c27b18a717c1a",
".git/logs/refs/heads/master": "29311a96f428c251de8c27b18a717c1a",
".git/logs/refs/remotes/origin/HEAD": "bf1d1eca19b00cfcbb45ac594cf8b406",
".git/logs/refs/remotes/origin/master": "00b79a59d57f631c409604522c6b62c0",
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
".git/refs/heads/master": "272d9ee678f6b7d6f528e1abee30573c",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "354422c5b47413e8df953944259ab25a",
".git/index": "ddc9d6918eee6705687be4962c552ac5",
".git/packed-refs": "d86bf0b4ea7cc5c81f3f87202047b71e",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "5a5a02bad4b776d064963f375529e7e4",
"assets/AssetManifest.json": "9f4cfe0fb2177af429b45c57c636fcf6",
"assets/NOTICES": "b111689fbdeca7b6d989f02c1da02162",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"assets/AssetManifest.bin": "93fb07a83cf89c12fcea14aad48e06c9",
"assets/fonts/MaterialIcons-Regular.otf": "d2af560727b978d060b56469afe3f6d6",
"assets/assets/androidev.png": "be916bee32e1baf6ec7382b5ca242b74",
"assets/assets/prodisplay.png": "54788dc89c2d1bbdd357d5fced8e948e",
"assets/assets/intro1.gif": "176f3285a718cc536704006661c8049f",
"assets/assets/prodisplay2.png": "9b80af8b034dd5e9f49b5e07c6123209",
"assets/assets/gradient.jpg": "28b4af47da024a0518348614a79b78f1",
"assets/assets/charts1.gif": "e43305cdbc099bf6c791621f35e2d07e",
"assets/assets/charts3.gif": "5fffa2768260838d20d45f06885fcc9a",
"assets/assets/intro2.gif": "651fe144fe31b63144104e86d7ce2fce",
"assets/assets/code.png": "deaeba3be259a6abe45edb1cf68c90cd",
"assets/assets/intro3.gif": "b2e8ea53fb2230e3b9c3bb01ea2b254c",
"assets/assets/charts2.gif": "4ad9f17b5f477217b6484e384b5fb7cb",
"assets/assets/linkedin_selected.png": "18cf32e4cf23288186b752b55dcf8b77",
"assets/assets/apple_logo.png": "398348910e6b7a5177df8c207b7bb312",
"assets/assets/github_selected.png": "f1da26cb77b5ef23e7b9878d31f26698",
"assets/assets/mxmaster.png": "1760e18b942df3667f726129e08143b8",
"assets/assets/flutterdev.png": "137f34003ae25b63b0a771df2d3d867c",
"assets/assets/ig_selected.png": "0d7539103821d2e476bfe5e580eddb73",
"assets/assets/terminal.svg": "fe736ef47c6110f5f6771700081737a0",
"assets/assets/verified.png": "63b621913998e644f9a0e0c5b270093e",
"assets/assets/standingdesk.png": "c07e5ca084f50f2b4cda86c7b37d6d21",
"assets/assets/github.png": "494c2e4d1b8ab8bae8b74c710a828622",
"assets/assets/setup.jpeg": "4bf3b3bbdd291d88da31268d61ba0a3c",
"assets/assets/tree2.gif": "b57d9961e58c68a04e314021678bf9a6",
"assets/assets/drag3.gif": "2fcdf253738f2884fca0aed06e983ce1",
"assets/assets/xiaomi4k.png": "562b1050afd9766000364946882d1c1a",
"assets/assets/ultimo.png": "bc9dcc419b1a4e7554d3132202c6f81f",
"assets/assets/drag2.gif": "34fa2437f3fabdd06918038ea0b07cd5",
"assets/assets/tree3.gif": "7ab9c7040d0cb916ea926f6fe013570d",
"assets/assets/tree1.gif": "8fe6ac6e4bb940a44a7d039756e1a0d0",
"assets/assets/razerbarx.png": "d5dce178837aa838c9b1d9b7d08fae5b",
"assets/assets/drag1.gif": "716e2196cfa208e2fb9d693e0afe1f5f",
"assets/assets/sheet2.gif": "58fe0a70a768c2bc7f2e41ad2dfdd516",
"assets/assets/ig.png": "8de11e8f42ceed294352390678125c11",
"assets/assets/circleprimary.png": "d4e17b5a66c35773a17edd2724bd1856",
"assets/assets/sheet3.gif": "b7295ddf4860bf90e513cf6e4bc0d40e",
"assets/assets/sheet1.gif": "19fc01a4672a095aa347c39685d371a9",
"assets/assets/mention3.gif": "9b40387ba2e355e9a563b6ac3301a77d",
"assets/assets/iphone_frame.png": "084ead8cb330b451241b018a4b504bc4",
"assets/assets/linkedin.png": "e806f36552458f76ab281506a6575bb2",
"assets/assets/mention2.gif": "3e1fb1e259174355fce944a8fd19af02",
"assets/assets/dzikirqu.png": "75faffde0e67b37ab61ce9899c58a52f",
"assets/assets/profile.jpeg": "200b83860cafa96069be054a66705ba7",
"assets/assets/iosdev.png": "1b6a6ad036fe3753f9bf609bc04bc6c8",
"assets/assets/mention1.gif": "11f9b2de18bb1acbd0c97c03171b3f72",
"assets/assets/pocof3.png": "9e90029118ec8e8587f57316b1eb4af1",
"assets/assets/mbam1.png": "dc4aaef160dedda0323928551d500ac4",
"assets/assets/xiaomi34.png": "621d74212642e7d9dfcca638f69925fc",
"assets/assets/happy5_logo.png": "2a37072d0369829b358157e7ed4780e9",
"assets/assets/android_logo.png": "12f9750cf09e7e9d9c8c4be8a374865d",
"assets/assets/lention.png": "f7db465372e875b9f0017d43b792b5b4",
"assets/assets/mxkeys.png": "8ac6cc2289f896d09be2a23f7a8c6248",
"assets/assets/lumiarm.png": "8ca7d757c7782c9ec77808fd4b49ef32",
"assets/assets/iphone12.png": "c81ba4b1e484677460f36b98afa4abaa",
"assets/assets/logo.svg": "e3cae920219513ffbaf59917944675fd",
"assets/assets/leband.png": "82bdfca6d8585e555913857e329327a1",
"assets/assets/mbstand.png": "6582948bed30ef6b22c0e85130804dac",
"canvaskit/canvaskit.js": "1338eccfe817956d34753284f2b1cdf6",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "74601b2ba7dae595fa19f461ffb658c8"
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
