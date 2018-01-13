importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "2011/04/10/almost-done-with-cartography/index.html",
    "revision": "a7803a9f71fb64444b2d1592e259e9cc"
  },
  {
    "url": "2011/05/05/google-fusion-tables-make-powerful-maps-quickly/index.html",
    "revision": "d97d1d5314c1f143615d423a247ae596"
  },
  {
    "url": "2011/05/05/google-fusion-tables/index.html",
    "revision": "2abacf0ed1353e28b15509dbf1ef1c93"
  },
  {
    "url": "2011/05/14/using-arc-scene-to-render-3d-landscapes/index.html",
    "revision": "823df3193e32e54a97f9b074b167f951"
  },
  {
    "url": "2011/06/06/map-showing-areas-of-change/index.html",
    "revision": "0c5169d39901ecb22bbe0f324d81f684"
  },
  {
    "url": "2011/06/06/presentation-on-modern-mapping-in-urban-planning/index.html",
    "revision": "9e97f44853e217ef4a2fc570df17f369"
  },
  {
    "url": "2011/06/06/presentation-to-the-city-of-boulder/index.html",
    "revision": "ca757a71310533495904986639cec01e"
  },
  {
    "url": "2011/06/06/presntation-on-predicting-change-in-boulder-co/index.html",
    "revision": "2a7dbfd60b03006ff2c7b4effd4c4953"
  },
  {
    "url": "2011/06/07/3d-terrain-map-of-portland/index.html",
    "revision": "5778313098c1a4fd831c837f9094ce9e"
  },
  {
    "url": "2011/06/07/pepsi-refresh-grant/index.html",
    "revision": "dd2fb038642f6d36b202da80727c3cf2"
  },
  {
    "url": "2011/06/07/putting-yourself-out-there/index.html",
    "revision": "3d096f4a3d9f931ce646e5eaca504ed3"
  },
  {
    "url": "2011/06/07/red-rocks-ecological-assessment/index.html",
    "revision": "69b13d2c4aa1b474b242baa887a4900c"
  },
  {
    "url": "2011/06/07/social-issues-of-smoking/index.html",
    "revision": "3b0cb8e098fed328016ba86133b9530b"
  },
  {
    "url": "2011/06/07/spring-2011-digital-cartography-example/index.html",
    "revision": "fbf4bcb2a1f7d2e71aca334e8931b521"
  },
  {
    "url": "2011/06/07/user-exchange-movie/index.html",
    "revision": "fd93f87779c0d201917d46db1516a6c3"
  },
  {
    "url": "2011/06/07/wayfinding-cu/index.html",
    "revision": "46218bb8ce0512c968233b3c2c611142"
  },
  {
    "url": "2011/06/09/my-chattaqua/index.html",
    "revision": "a45d4dafa336a0da507eb93c297f52a5"
  },
  {
    "url": "2011/06/09/portfolio-scanning-and-sorting/index.html",
    "revision": "67da8d55a71f1bac22ea714de6583c7e"
  },
  {
    "url": "2011/06/09/using-web-cartography-in-urban-planning/index.html",
    "revision": "6912bb45bd5633e782d3d2939160a716"
  },
  {
    "url": "2011/11/30/focus-free/index.html",
    "revision": "14599abc74f718c451c37c0c1f1d4222"
  },
  {
    "url": "2012/03/03/ada-checklist-website-project/index.html",
    "revision": "8c29f2ae99688533eefab562f65f9e5f"
  },
  {
    "url": "2012/03/03/new-england-ada-learning-coming-soon/index.html",
    "revision": "5c5d5fd246bd9aff67480803a0d825d4"
  },
  {
    "url": "2012/03/04/bus-stop-boardings-in-boulder-co/index.html",
    "revision": "d32bfc1f3841c8b11ec4bae2228c13c4"
  },
  {
    "url": "2012/03/04/flood-plains-in-boulder-co/index.html",
    "revision": "7c1893e7c837a074f29649272d6af919"
  },
  {
    "url": "2012/03/04/harvart-art-museum/index.html",
    "revision": "3e422ba800b1f8c8f2bc52b73c841e8e"
  },
  {
    "url": "2012/03/04/land-use-zoning-in-boulder-co/index.html",
    "revision": "e663224f88355efe7ac7e69080620bae"
  },
  {
    "url": "2012/03/04/map-of-my-foursquare-checkin-history/index.html",
    "revision": "a186256cbff788de182e61937b9c5135"
  },
  {
    "url": "2012/03/04/my-new-job-at-ihcd/index.html",
    "revision": "9df03aa5eb7339bd359997121b3bf28a"
  },
  {
    "url": "2012/03/04/predicted-areas-of-growth-boulder-co/index.html",
    "revision": "db3dc92ed136eec0be66e4b234386709"
  },
  {
    "url": "2012/03/04/predicted-areas-of-population-growth-in-boulder-co/index.html",
    "revision": "5bfe45034829f1b6d867ac405ec40a96"
  },
  {
    "url": "2012/04/10/bridge-water-state-lecture-on-a11y/index.html",
    "revision": "e9839a284b82ed9918b0de70016d74df"
  },
  {
    "url": "2012/04/11/new-england-ada-center-blog/index.html",
    "revision": "70c0eb138c779da58b5ec9a47090feca"
  },
  {
    "url": "2012/05/08/minuteman-classic-web-redesign/index.html",
    "revision": "681b44e05edc0641815192d9158aa5a3"
  },
  {
    "url": "2012/05/08/ten-principles-of-inclusive-web-design/index.html",
    "revision": "6354fb797361d20513d8b6d4242f33b7"
  },
  {
    "url": "2012/05/11/a-lesson-learned-in-accessibility/index.html",
    "revision": "d04fb315ec285e504611f270f34ea259"
  },
  {
    "url": "2012/05/29/agining-professors-are-creating-a-faculty-bottleneck/index.html",
    "revision": "ec869e618e436cc1095cf1760c897b91"
  },
  {
    "url": "2013/10/25/bad-camp-2013/index.html",
    "revision": "5a6d0e29f8e88b3187e24bf7761a6665"
  },
  {
    "url": "2014/06/03/drupalcon-austin/index.html",
    "revision": "9eabd8e1332ad11b1e829aa43b8b14f5"
  },
  {
    "url": "404.html",
    "revision": "dbb8edcf3a8e6dece07ae1de0b11ce66"
  },
  {
    "url": "apple-touch-icon-114x114.png",
    "revision": "6200c8575433e868f76c3fb4059033d6"
  },
  {
    "url": "apple-touch-icon-72x72.png",
    "revision": "d6d99eb7550b72c71cdf6f128f24cef8"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "e4a43171290cb664ad22df1365b6d979"
  },
  {
    "url": "archive/index.html",
    "revision": "4d51e49d728d944bbcf98ebf11b16028"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/print/paper.css",
    "revision": "cdedc3e896445c70ffba461d8ef7f741"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/print/pdf.css",
    "revision": "e784d66af58eb68bbb74b7a821568a39"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/reveal.css",
    "revision": "b4f8781e61baffa5fb11b661a26df952"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/reveal.min.css",
    "revision": "ef58c63e895bafa8993b7e73954662f6"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/theme/beige.css",
    "revision": "ce7745ee4001fd886d800ac25520fb9c"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/theme/default.css",
    "revision": "3d65e87ffa7544bd381526c5eeca8acd"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/theme/moon.css",
    "revision": "da4658bf10d4b3aa6d1a788a62e5889a"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/theme/night.css",
    "revision": "91346d768fb31d6a90c1aa5f36209641"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/theme/serif.css",
    "revision": "cbdbcf319cb079862e9bd8211ce60c2d"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/theme/simple.css",
    "revision": "9ae5dac463b891c1b7576c8b4881f05a"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/theme/sky.css",
    "revision": "4ba60b060a4314d2a87e29f64ae08da2"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/css/theme/solarized.css",
    "revision": "07928cf5fe1aef68aa688baa6f8560d9"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/changing-colors.gif",
    "revision": "3728013d2ee8cb2dd6eb0627ce9eb4c6"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/css-issues.png",
    "revision": "730c3587cb0e6ea7dfd53d809b3f50de"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/default-flexibility.png",
    "revision": "dd1b024ed44eb2462e7c8e1a844b9c7f"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/duplicate-ids.png",
    "revision": "ecad92ef934a8ff811447aabdcc6d687"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/fork-us.gif",
    "revision": "d28c72237e8192e34d1eca6607de8bff"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/grunt-example.png",
    "revision": "39d903b4c208390dc5edfb40f541353a"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/grunt-logo.svg",
    "revision": "3514e05a0d1fa271acbb598bfef5ce45"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/modernizr.png",
    "revision": "19b77b1192928a74c1259997f2da5051"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/pre-sos-screenshot.png",
    "revision": "715946a73c4db45af08f9eeaf30ce28c"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/report-a-problem.png",
    "revision": "e559b0b0059cc1b3d8037380f889c3f6"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/responsive-layouts.gif",
    "revision": "e81b1078dfc2c4780ca03e03a67a2f3e"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/retina-images.png",
    "revision": "9b0282ff5c41b4858e082ef3d0a97ae1"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/retina.svg",
    "revision": "b5655757546a3910a217687d164a670f"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/rwd-sos-v1.gif",
    "revision": "3ee9ec0397d355f6a859ea357e3bd4e1"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/scholar-one-search.svg",
    "revision": "24b1954ae8ec8b6d894920f8fd3445d4"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/screenshot-sos-search.png",
    "revision": "8591b2beff197d2e62e53daae447b6db"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/sos-e-bookshelf.png",
    "revision": "727da5b0ee18949156ec2716bbb1531c"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/sos-ejournal-finder.png",
    "revision": "a92977b47e9029fb195e38b739dfa73a"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/sos-modal.png",
    "revision": "779e01233e2f876cbbaad1da406c1595"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/sos-smallscreen.png",
    "revision": "79e50bd80e79babfa7179c43c7760485"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/sos-v1-results.png",
    "revision": "fb8815d96ae5cea7fec08abe528b4a70"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/img-src/worldcat-js.png",
    "revision": "5ef71cc8d838ad7f98cad55a254e0b50"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/index.html",
    "revision": "dd6fc35af459e39f9778e79b5c742b2a"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/js/reveal.js",
    "revision": "51bd7ea10f892ab0c9f326517527f05d"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/js/reveal.min.js",
    "revision": "a89b2417f476f88e8dd9a6beae4ee4b3"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/lib/css/zenburn.css",
    "revision": "bdaace3f74c8dad6f2f1912bd2ec67ba"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/lib/font/league_gothic-webfont.svg",
    "revision": "5ae0a0a6ae133d1e47ac30f68f9f2545"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/lib/js/classList.js",
    "revision": "daeaae1afb79c4577c26fc099228cb44"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/lib/js/head.min.js",
    "revision": "8244e91e3efc1ad6285d9beb8125fe4b"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/lib/js/html5shiv.js",
    "revision": "ff0e20a524223e4c3972e0d907e0877b"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/highlight/highlight.js",
    "revision": "0d7b95d2c9e33d824de3b49a99b00ee1"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/leap/leap.js",
    "revision": "0f2354066d64d62f4902c65fc3844f21"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/markdown/example.html",
    "revision": "c1b95bada26d59e4b1f449343632f9ad"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/markdown/markdown.js",
    "revision": "fbf401eb062dbe23f3817e1e1f3a6d2e"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/markdown/marked.js",
    "revision": "78df564ac05c4f39a89810c3071ab7a6"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/math/math.js",
    "revision": "fbc8478ba69ecd14c44d433114bfd86b"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/multiplex/client.js",
    "revision": "bfbbafbabbf73e90de8dbc0bb37d7839"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/multiplex/index.js",
    "revision": "cda426d06cc6d0ee26f783a87346d776"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/multiplex/master.js",
    "revision": "0805f0ae476799062e1efa35b068ced0"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/notes-server/client.js",
    "revision": "699271583b7d67028817a6c71aac5337"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/notes-server/index.js",
    "revision": "7731797d5c24ae7285fb30667cd05bb3"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/notes-server/notes.html",
    "revision": "3d21a5a18fb58eb7efc68e9354f4cd77"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/notes/notes.html",
    "revision": "46dfe4693ce3a0186ec051966a49743f"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/notes/notes.js",
    "revision": "e84be3a8de3fc3008bc61821be8eb770"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/postmessage/example.html",
    "revision": "8d12eba0e2fc8fdbb5d919c17b8eba3e"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/postmessage/postmessage.js",
    "revision": "78c0442294b0c3112b926859190b70c6"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/print-pdf/print-pdf.js",
    "revision": "9338a614ffde8153db084ab149411a7e"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/remotes/remotes.js",
    "revision": "34618984cd80ae62fb016bc0f830ff86"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/search/search.js",
    "revision": "b1f3b7ffe438539f8b2c75698fbf2823"
  },
  {
    "url": "assets/attachments/presentations/scholar-onesearch-presentation/plugin/zoom-js/zoom.js",
    "revision": "f2362ce9fdf7bd834ab599d44db231f9"
  },
  {
    "url": "assets/css/i.css",
    "revision": "acc4794624bcb6a72546f3077b3972d3"
  },
  {
    "url": "assets/img/about/profile.png",
    "revision": "8ccc4e2f6a7192060b7b9a558543eab0"
  },
  {
    "url": "assets/img/conferences/bad-camp-2013-coverimage.png",
    "revision": "7c575e245dbdd2778e185276c867e992"
  },
  {
    "url": "assets/img/conferences/design-4-drupal.png",
    "revision": "225b42d57908efa009e37e368f724470"
  },
  {
    "url": "assets/img/conferences/forward-js-2.jpeg",
    "revision": "71f777bbfb578cc9cab243525c6f19f4"
  },
  {
    "url": "assets/img/conferences/forward-js.png",
    "revision": "50ae14fb323870de622630edba7dae43"
  },
  {
    "url": "assets/img/conferences/logo-mongodb.png",
    "revision": "bb85051b301fa433a75059b9d27d34a1"
  },
  {
    "url": "assets/img/conferences/vagrant.png",
    "revision": "072baa03fd352a971b4627365c06304d"
  },
  {
    "url": "assets/img/presentations/scholar-onesearch-presentation.png",
    "revision": "69ab7c9a62c41c3f71c9d560e8a9933f"
  },
  {
    "url": "assets/img/projects/bookshare/lettering-js.png",
    "revision": "a4b295d8abcc1391601c4912e90886b2"
  },
  {
    "url": "assets/img/projects/cvt/ng-cvt.png",
    "revision": "449e33ec8c5542a76f797bac26ec6825"
  },
  {
    "url": "assets/img/projects/library-solr-search/library-solr-cover.png",
    "revision": "f43008f3de293e9397e34f24ba6a4c44"
  },
  {
    "url": "assets/img/projects/library-solr-search/library-solr-cover@2x.png",
    "revision": "5b27c06150a4db2050a1b499862e3357"
  },
  {
    "url": "assets/img/projects/minuteman/minuteman-coverimage.png",
    "revision": "df7f538ee357dc8af45594cb7093051e"
  },
  {
    "url": "assets/img/projects/minuteman/minuteman-coverimage@2x.png",
    "revision": "0d8f14ebc0ab351246765f1aa92619d1"
  },
  {
    "url": "assets/img/projects/minuteman/mobile-screenshot.png",
    "revision": "9c9b9d60e3ace8eb4bdd66ca62e8e08c"
  },
  {
    "url": "assets/img/projects/minuteman/old-minuteman-site.png",
    "revision": "85ad0995caa7456627a065e03706081f"
  },
  {
    "url": "assets/img/projects/scholar-onesearch/sos-coverimage.png",
    "revision": "fbe5a7bc444a49af8dc730c539d35d3e"
  },
  {
    "url": "assets/img/projects/scholar-onesearch/sos-coverimage@2x.png",
    "revision": "36576303baeb1c54ae7e260cb87c191d"
  },
  {
    "url": "assets/js/main.pkg.js",
    "revision": "80d09c77d807c6f59f6e4146c4299527"
  },
  {
    "url": "blogging/2013/01/13/hello-world/index.html",
    "revision": "7fdbc47cb5c7776647b15a5e4c826558"
  },
  {
    "url": "cartography/gis/2011/06/06/gis-map-of-portland-or/index.html",
    "revision": "a29e0a98c9641bf166e30c494c7abf67"
  },
  {
    "url": "conferences/2013/03/03/code4lib/index.html",
    "revision": "22c088c70b9432cb35b00c0413169b4e"
  },
  {
    "url": "conferences/2013/06/26/design-4-drupal-boston/index.html",
    "revision": "512546e408dbbb0dbfb191983c37ae91"
  },
  {
    "url": "conferences/2013/06/30/responsive-images/index.html",
    "revision": "0a402ec7adaa4fffc780224acafb2577"
  },
  {
    "url": "conferences/2013/07/13/nyc-camp-2013/index.html",
    "revision": "b031c14d85c31a41b1bd18175f5a4c80"
  },
  {
    "url": "conferences/2013/07/15/higher-ed-summit-nyc-camp/index.html",
    "revision": "5c156059db4bdadd7dbdaccf1a81088e"
  },
  {
    "url": "conferences/drupal/design/2014/08/01/design-for-drupal/index.html",
    "revision": "90890eff601b077d190f3e040f6c9b35"
  },
  {
    "url": "conferences/js/2014/07/25/forward-js/index.html",
    "revision": "4b6258b44f43e3b8b0d34fa13723bbc2"
  },
  {
    "url": "conferences/js/2015/02/04/forward-js-2/index.html",
    "revision": "d65f8d0e68c3b9427a5ac36a6dcbdc45"
  },
  {
    "url": "drupal products/2013/01/20/using-web-api-in-drupal-entities/index.html",
    "revision": "b70186669e4c215e27b1d316513bb830"
  },
  {
    "url": "drupal/2013/09/17/feature-driven-development/index.html",
    "revision": "ea84823e1da322fb258426eb06cd059d"
  },
  {
    "url": "drush/2013/10/23/drush-resources/index.html",
    "revision": "d5ea3dfe4b519125c16a92af8fc77524"
  },
  {
    "url": "front-end-ops/2014/06/05/getting-going-with-gulp/index.html",
    "revision": "aae040845429521837245f2c3dbca0ac"
  },
  {
    "url": "icon-512x512.png",
    "revision": "71836402e25cdd717f895960e79fbb2b"
  },
  {
    "url": "index.html",
    "revision": "b781c4d516012654b266eea988f98d0c"
  },
  {
    "url": "info/index.html",
    "revision": "3e00bdb4eab1261c4fab370e5c66ef8a"
  },
  {
    "url": "js/2014/11/07/javascript-interview-questions/index.html",
    "revision": "f3878f9a63cf0b8f4544ac6330a7813e"
  },
  {
    "url": "links/2011/12/12/learn-the-basics-of-coding/index.html",
    "revision": "0c639472643798a0a9805190b24ba242"
  },
  {
    "url": "presentations/2011/06/06/bio-city-presentation/index.html",
    "revision": "044ff9d72416a9b1863aceaea2a6b146"
  },
  {
    "url": "presentations/2013/10/13/scholar-onesearch-presentation/index.html",
    "revision": "22c2a882e149137fb690e554a533c936"
  },
  {
    "url": "presentations/2014/01/29/github-for-collaboration/index.html",
    "revision": "599f6941126fdb40f9428e7364874bab"
  },
  {
    "url": "presentations/2014/06/02/gettings-started-with-grunt/index.html",
    "revision": "aba44066a18ce24ab7fabe11369e9efc"
  },
  {
    "url": "projects/2011/12/01/ada-checklist/index.html",
    "revision": "5f9a0ce24666670c0fccc6ca71944caa"
  },
  {
    "url": "projects/2012/05/01/new-england-ada-learning/index.html",
    "revision": "7ac07c2b34d0c15b851f3ba02fdc20c4"
  },
  {
    "url": "projects/2012/06/01/ihcd-store-project/index.html",
    "revision": "3075d0fc2187729c9d1bc087c1c9d53e"
  },
  {
    "url": "projects/2012/07/04/minutemanclassic/index.html",
    "revision": "636cab78a4c6ae3fa7fb2112832f61ea"
  },
  {
    "url": "projects/2012/09/15/digital-media-commons/index.html",
    "revision": "680bec29ec65738cf1a8bd2b19312996"
  },
  {
    "url": "projects/2013/07/01/library-solr-search/index.html",
    "revision": "485bcb2c2a100ba3304a5379edd2d7e5"
  },
  {
    "url": "projects/2013/07/17/scholor-one-search/index.html",
    "revision": "ad49c5b8b94c942d20667b4f7992629a"
  },
  {
    "url": "projects/2013/08/21/drs/index.html",
    "revision": "2e3fbb229053bc18e275e8a4d86f588f"
  },
  {
    "url": "projects/2013/11/30/sinberbest/index.html",
    "revision": "239ebc718e45d0fce8034a65e2129b22"
  },
  {
    "url": "projects/2014/01/01/greenbiz/index.html",
    "revision": "7162104d6bdf76239b3142a2870fa81c"
  },
  {
    "url": "projects/2014/02/01/bookshare/index.html",
    "revision": "4ce8392694d589bab55f584f1f10e021"
  },
  {
    "url": "projects/2014/02/01/cvt-angular/index.html",
    "revision": "4e9220aaadd10756d21260184b518404"
  },
  {
    "url": "projects/2014/02/01/kalatheme/index.html",
    "revision": "c9cebbd37ce5a793d31fc726f5a21040"
  },
  {
    "url": "projects/index.html",
    "revision": "56bae30e8abb6fb356b003c22d5741b6"
  },
  {
    "url": "search/index.html",
    "revision": "e7ed3623c852e519aac698c553e30332"
  },
  {
    "url": "thank-you/index.html",
    "revision": "742feae78f176ac59dcc41194e7f8dfa"
  },
  {
    "url": "tumblr_files/tumblr_lme3ntM0VC1qd0d6lo1_500.png",
    "revision": "ba765d6d05849dd7fe83f0e38b1d3433"
  },
  {
    "url": "tumblr_files/tumblr_lme4dlCG4y1qd0d6lo1_500.png",
    "revision": "c6a42b96a30ae51234ce35ab00af8a56"
  },
  {
    "url": "tumblr_files/tumblr_lme71qkgSt1qd0d6lo1_500.png",
    "revision": "62ed5bf06b70e0c3dc7330cdd63c506a"
  },
  {
    "url": "tumblr_files/tumblr_lmg03eB8ns1qd0d6lo1_500.png",
    "revision": "48383a5be776e09f750965b4baa4ef5f"
  },
  {
    "url": "tumblr_files/tumblr_m0bvtchEKN1qd0d6lo1_500.png",
    "revision": "a0b11d0d1e9aca3f6f57d6cb751aeef4"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/https:\/\/unpkg.com/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/fonts.googleapis.com\//, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/fonts.gstatic.com\//, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/www.google-analytics.com\/analytics.js/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
