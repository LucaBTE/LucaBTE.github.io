'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "486eb621a3a0ae09d56647654945843e",
"assets/AssetManifest.bin.json": "ef5214fdb24155e62574064b145dd559",
"assets/AssetManifest.json": "ec659573bfe7ac52c698ac9621c45d54",
"assets/assets/Animations/achvs/achv_1.json": "44849a9a31bfe63932d56a96ea808218",
"assets/assets/Animations/achvs/achv_10.json": "2aae1dc69e6d1ff919a1b3bb16d7e838",
"assets/assets/Animations/achvs/achv_11.json": "0d075a5c3171e9906943014828432b4f",
"assets/assets/Animations/achvs/achv_2.json": "ad142d2a71554d1fe78019a8577da042",
"assets/assets/Animations/achvs/achv_3.json": "cd3467f5ac0b15cbfb318131662e1151",
"assets/assets/Animations/achvs/achv_4.json": "4292824214bd2c79eda3508798b01afb",
"assets/assets/Animations/achvs/achv_5.json": "d96780634001058963af7fa315fc011f",
"assets/assets/Animations/achvs/achv_6.json": "4039f32b78d5480b3a63cbbaf1cf7d01",
"assets/assets/Animations/achvs/achv_7.json": "46b4913aa8047bf8c11fe081b5632942",
"assets/assets/Animations/achvs/achv_8.json": "8c0f2c997ef965e512cbc93885cbcee5",
"assets/assets/Animations/achvs/achv_9.json": "6b67fc3f8b502396cd8125f1bdba148c",
"assets/assets/Animations/click_plant.json": "959bc3d406db93320769d5026143894d",
"assets/assets/Animations/idle_plant.webp": "0cf16258d59521570b13db72ad3cdd01",
"assets/assets/Animations/initial_animation.json": "729a8cb305bedc0f36e6a1567d1b9ab8",
"assets/assets/Animations/pixelart_test.gif": "d143de4ed3a83a749c0fa9698f0603f1",
"assets/assets/Animations/pixel_plant_idle.json": "eb60e2509e6dba341ddd700f4e7b325d",
"assets/assets/Animations/plant_idle.json": "20cbe14148c7c7976665cd1a20fe8329",
"assets/assets/Animations/plant_lv1.json": "1850374bb60b3e929dff55e3d505f727",
"assets/assets/Animations/plant_lv2.json": "03d6bd3f1b0aa91773ba27cdb6c62f62",
"assets/assets/Animations/plant_lv3.json": "48f322794b9d09ed9c4f8deabe754b94",
"assets/assets/Animations/plant_lv4.json": "2cf375e1727e8615986126e15446e7e3",
"assets/assets/audio/homepage_music.ogg": "1a371b0246e6aa8430ce9dc74b49aec5",
"assets/assets/audio/kwyd/choice/right.ogg": "758348dbebe7ef77f85d1c0b8c764a26",
"assets/assets/higher_or_lower/game_over_box.png": "5e254284dd8837f90e7624c34255d6df",
"assets/assets/higher_or_lower/higherorlower_vertical.png": "81e322ef2c9c0e2d470b275a9c32a132",
"assets/assets/higher_or_lower/higher_or_lower_back.png": "31aab90754c5641b030dc7618631be22",
"assets/assets/higher_or_lower/questions.txt": "05c2228638fdac00ea36db56470fabe0",
"assets/assets/higher_or_lower/question_box.png": "18f921bdd5cc969069a5fa7689ced203",
"assets/assets/images/AB_logo.png": "5ed57bb095692a7d9d8e234d0eef64e4",
"assets/assets/images/background/background1.png": "639845d15bb1fe5d32f1d6fd12b1d298",
"assets/assets/images/background/background2.jpg": "9179d6a65104b1ba760e75a84741cfed",
"assets/assets/images/background/background3.png": "e3e4152d078d8a3f60a4775fa0e2014c",
"assets/assets/images/background/clouds.jpg": "27b6b96e16e0f65e283a6d8f96fc7be0",
"assets/assets/images/background/ground_horizontal.png": "02b41fd5e9c2339f29c229e17a3fcab2",
"assets/assets/images/background/ground_vertical.png": "c62e8eb08ba9dd46bc41faed422bb93b",
"assets/assets/images/buttons/back_button.png": "6bda7fa8bd9ad9941de72ab739dd9b12",
"assets/assets/images/buttons/games_button.png": "1ff5580277767cdc888ed2913a483b9e",
"assets/assets/images/buttons/logout_button.png": "be9815d1b7f2fde3f26c358d5ed3accc",
"assets/assets/images/buttons/question_button.png": "87b7c57d4f93421fe7632441d8a162ca",
"assets/assets/images/curiosities/CuriosityBox_v2.png": "0f0d1c710f91b47ec2b9468705cf58a3",
"assets/assets/images/curiosities/CuriosityText.png": "f80b4e2d9d9a89533384e17295aad05a",
"assets/assets/images/faces/happy_face.png": "eb415974a19ae14b4193f99d2401307f",
"assets/assets/images/faces/normal_face.png": "ee6ea51ea2ceedd4908acaa9154926b7",
"assets/assets/images/faces/sad_face.png": "267e1f7e2ee303405010e83783298b3c",
"assets/assets/images/logo/Bloom_logo.png": "69d247092bdecaf79cf840f59e6d7a9c",
"assets/assets/images/pixel_animations/ground_pixel.png": "a05847b3c76d86ecd7162c2517ae998c",
"assets/assets/images/pixel_animations/plant_idle.png": "6189a0851f167d2168ac32d7b4a91d9d",
"assets/assets/images/plant/clouds.png": "126af81176978d5e1ad37f44d0c5031e",
"assets/assets/images/plant/ground.png": "eca10c262390738722993801dd096e53",
"assets/assets/images/plant/groundWithShadow.png": "efb6b61c50efe6368c370e00b1a5333c",
"assets/assets/images/plant/plant_happy.png": "01e36e3c6b2942777a463bd5b2bbb10c",
"assets/assets/images/plant/shadow_plant.png": "746c6b0b3790fff3ca6437a6a774eba2",
"assets/assets/images/sprites/beer.png": "538d4f44f39129509a198702e51d7e4e",
"assets/assets/images/sprites/champagne.png": "aea5f5ccf3511d470429def73414e9c2",
"assets/assets/images/sprites/cider.png": "59d8638b4cff5235ec272b7325be3b6f",
"assets/assets/images/sprites/gin.png": "fba2723be842b3d807d1e35c6b217bc2",
"assets/assets/images/sprites/rum.png": "4343b0a30a1dcef4d0ffa78638ce6174",
"assets/assets/images/sprites/tequila.png": "97f0a75395cd8bad3474ef83e72fb93e",
"assets/assets/images/sprites/vodka.png": "5694021fb2b5195878360f7462a9a9e8",
"assets/assets/images/sprites/whiskey.png": "3abda9065ad7ae0ab49b3d405f4eaaae",
"assets/assets/images/sprites/wine.png": "443e4ab3f7cf4bd0ae8c7dfea0bbc2d4",
"assets/assets/images/statistics/stats_box.png": "555c30cd70a00b4d97f7b1d6f4b2e6d9",
"assets/assets/infos/alcohols.txt": "64a95802a6c2daf5eaea2f409d6da6ad",
"assets/assets/infos/curiosities.txt": "290b9b55b22db2118dbd02e51b61db73",
"assets/FontManifest.json": "f924339a6a130cb6bfdbb85a71dc1c4a",
"assets/fonts/AvenirLTStd-Roman.otf": "b1d7c6e085a31e9f5e4745c9aef6eb4b",
"assets/fonts/MaterialIcons-Regular.otf": "233b8e5d7ba77db851286801d78d55e5",
"assets/fonts/PixelFont.otf": "ed759aee379c82aecccdf2f72d89e32e",
"assets/fonts/RetroGaming.ttf": "4c19fc875e7ba1e6831129de3ab5ac0b",
"assets/NOTICES": "8ab4494d87ea69a61309ef0c1c747ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "d73083ba0fe6c987768c0f51892d2d01",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8ac2177b2b0e779a3a375d9cae197c1a",
"icons/Icon-192.png": "e1b919ef0aff339090efcb5f92e70302",
"icons/Icon-512.png": "63a148f1740ad1cf4cc28f5511f53346",
"icons/Icon-maskable-192.png": "15e6210cf3bbe080c538568e765074a6",
"icons/Icon-maskable-512.png": "985cf0b68680535cab620f45337c8160",
"index.html": "189fc80cd576947278537e3bc499b237",
"/": "189fc80cd576947278537e3bc499b237",
"index.php": "7a3b414856a038f59c88cfeef4e8cba3",
"main.dart.js": "0dd005eb8eaf1fd37e354c8b2a273753",
"manifest.json": "9ea710526cde8630c5d5774c971c7ccc",
"version.json": "18840f54b32f8d6ec5a87d0ef6de5382"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
