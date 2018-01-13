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
    "revision": "0d212a0f087ee7fe744552271b6bce71"
  },
  {
    "url": "2011/05/05/google-fusion-tables-make-powerful-maps-quickly/index.html",
    "revision": "dff40b41dda816d43c0a03f6772c27c0"
  },
  {
    "url": "2011/05/05/google-fusion-tables/index.html",
    "revision": "6a389ca846962e4decff190e74a9c89b"
  },
  {
    "url": "2011/05/14/using-arc-scene-to-render-3d-landscapes/index.html",
    "revision": "b6b538cd5cc8b786c5686d0d7dd7bb9c"
  },
  {
    "url": "2011/06/06/map-showing-areas-of-change/index.html",
    "revision": "68a1d7fdc33a73a61232d7fad96f5228"
  },
  {
    "url": "2011/06/06/presentation-on-modern-mapping-in-urban-planning/index.html",
    "revision": "bbd86f1dbbdc5fa0d9f7cc37e72adcd9"
  },
  {
    "url": "2011/06/06/presentation-to-the-city-of-boulder/index.html",
    "revision": "47f511bb89c87980bb3f4ced66dd1e02"
  },
  {
    "url": "2011/06/06/presntation-on-predicting-change-in-boulder-co/index.html",
    "revision": "62de36c786aad3cb5bffe1ea37868d64"
  },
  {
    "url": "2011/06/07/3d-terrain-map-of-portland/index.html",
    "revision": "c11ad2f8f8888846579e311e7c38aafd"
  },
  {
    "url": "2011/06/07/pepsi-refresh-grant/index.html",
    "revision": "df38f60c7051183c6a7284f53f1a2496"
  },
  {
    "url": "2011/06/07/putting-yourself-out-there/index.html",
    "revision": "883180a9dbfab2e16291f1f816f7ced3"
  },
  {
    "url": "2011/06/07/red-rocks-ecological-assessment/index.html",
    "revision": "ec4592a1ef609329ef437f2007fc5521"
  },
  {
    "url": "2011/06/07/social-issues-of-smoking/index.html",
    "revision": "5e9390ea3ba1e1cb9461c349bb320042"
  },
  {
    "url": "2011/06/07/spring-2011-digital-cartography-example/index.html",
    "revision": "8b08c347f1d5c848a0b0080a1c7a0402"
  },
  {
    "url": "2011/06/07/user-exchange-movie/index.html",
    "revision": "8e4eae9088de69cb105fbd6990c45ae2"
  },
  {
    "url": "2011/06/07/wayfinding-cu/index.html",
    "revision": "f5f41116057bca198addc084eeabf637"
  },
  {
    "url": "2011/06/09/my-chattaqua/index.html",
    "revision": "aeb710e96ae443edba24a5b2d49c2261"
  },
  {
    "url": "2011/06/09/portfolio-scanning-and-sorting/index.html",
    "revision": "6ba1f39ff053434e4bb0be5d99a18c14"
  },
  {
    "url": "2011/06/09/using-web-cartography-in-urban-planning/index.html",
    "revision": "7bccce2b457787eb0167e16d8bf56cda"
  },
  {
    "url": "2011/11/30/focus-free/index.html",
    "revision": "06b9077880c474b8ad00826478ef2976"
  },
  {
    "url": "2012/03/03/ada-checklist-website-project/index.html",
    "revision": "e2400a76fb77253a4ea7ac428c057171"
  },
  {
    "url": "2012/03/03/new-england-ada-learning-coming-soon/index.html",
    "revision": "d697b8c4c48180b48a99df8483e3fd71"
  },
  {
    "url": "2012/03/04/bus-stop-boardings-in-boulder-co/index.html",
    "revision": "0d043af66428bb72124dc70994fdf08d"
  },
  {
    "url": "2012/03/04/flood-plains-in-boulder-co/index.html",
    "revision": "98decfa2d91ed5eb550ae4baf9663c7b"
  },
  {
    "url": "2012/03/04/harvart-art-museum/index.html",
    "revision": "db50b3b7fc8f1e5a7c61cc0041c9d845"
  },
  {
    "url": "2012/03/04/land-use-zoning-in-boulder-co/index.html",
    "revision": "419088eaa5c40a5f3c2550c2286bc6f2"
  },
  {
    "url": "2012/03/04/map-of-my-foursquare-checkin-history/index.html",
    "revision": "a1071becfa074cbfdb8f008ebeddee81"
  },
  {
    "url": "2012/03/04/my-new-job-at-ihcd/index.html",
    "revision": "50b8d20a62ab85692f9dd80c795ddbc6"
  },
  {
    "url": "2012/03/04/predicted-areas-of-growth-boulder-co/index.html",
    "revision": "f01f58d7923f5297247e968f1402cee4"
  },
  {
    "url": "2012/03/04/predicted-areas-of-population-growth-in-boulder-co/index.html",
    "revision": "c11a94cc2c1d35f0b2f9857e541bf02d"
  },
  {
    "url": "2012/04/10/bridge-water-state-lecture-on-a11y/index.html",
    "revision": "035defd6fdd8eba0ff575a8d6a05f046"
  },
  {
    "url": "2012/04/11/new-england-ada-center-blog/index.html",
    "revision": "938b58dbcf931a3b489ec2f37d1a8a5e"
  },
  {
    "url": "2012/05/08/minuteman-classic-web-redesign/index.html",
    "revision": "4f380d3e69c67821dafd5b8e5abb4d5d"
  },
  {
    "url": "2012/05/08/ten-principles-of-inclusive-web-design/index.html",
    "revision": "bee6223b977f521c1463d4e3428ab14b"
  },
  {
    "url": "2012/05/11/a-lesson-learned-in-accessibility/index.html",
    "revision": "ae382b2bf3956be0af469dcae622c4c9"
  },
  {
    "url": "2012/05/29/agining-professors-are-creating-a-faculty-bottleneck/index.html",
    "revision": "b66a619b3ebfd1bec92b554912929588"
  },
  {
    "url": "2013/10/25/bad-camp-2013/index.html",
    "revision": "b5588575efb32ff03b5101f85f290eb9"
  },
  {
    "url": "2014/06/03/drupalcon-austin/index.html",
    "revision": "9f215c5a78ee550c322eecc9a8fdc8ee"
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
    "revision": "41c559c236d312bd11ca9c9f1c700f3e"
  },
  {
    "url": "cartography/gis/2011/06/06/gis-map-of-portland-or/index.html",
    "revision": "f31507fbc59b0a35725700167f25c823"
  },
  {
    "url": "conferences/2013/03/03/code4lib/index.html",
    "revision": "3f0b95ffbff882306d8d091b43f62c00"
  },
  {
    "url": "conferences/2013/06/26/design-4-drupal-boston/index.html",
    "revision": "ab445104a69381811d6417ad778c86f5"
  },
  {
    "url": "conferences/2013/06/30/responsive-images/index.html",
    "revision": "63f7f0c46e2a7acc896d8bf70f5f5144"
  },
  {
    "url": "conferences/2013/07/13/nyc-camp-2013/index.html",
    "revision": "b1b3f4d2bc7b59ed3a88510fad8db935"
  },
  {
    "url": "conferences/2013/07/15/higher-ed-summit-nyc-camp/index.html",
    "revision": "000b07d715924765b251c6b913762708"
  },
  {
    "url": "conferences/drupal/design/2014/08/01/design-for-drupal/index.html",
    "revision": "135fa6de3ed4a5a2b934fd65345372bc"
  },
  {
    "url": "conferences/js/2014/07/25/forward-js/index.html",
    "revision": "bbb83d47de298a55af2f20ce19e700fd"
  },
  {
    "url": "conferences/js/2015/02/04/forward-js-2/index.html",
    "revision": "80dc6aeca079bc815f140ec536d8f563"
  },
  {
    "url": "drupal products/2013/01/20/using-web-api-in-drupal-entities/index.html",
    "revision": "1df691ee5a35aa8353b50bbb55021117"
  },
  {
    "url": "drupal/2013/09/17/feature-driven-development/index.html",
    "revision": "0fe95550fbf6525e221fd00f4e1ec542"
  },
  {
    "url": "drush/2013/10/23/drush-resources/index.html",
    "revision": "518261039477dfd73deb9cb85ea52c0e"
  },
  {
    "url": "front-end-ops/2014/06/05/getting-going-with-gulp/index.html",
    "revision": "f68009d694077194010fa54072764324"
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
    "revision": "3959354675671674c49e057c50784e8d"
  },
  {
    "url": "links/2011/12/12/learn-the-basics-of-coding/index.html",
    "revision": "42e67b9515a348da5caafde2a0bafd82"
  },
  {
    "url": "presentations/2011/06/06/bio-city-presentation/index.html",
    "revision": "0be8d9f39815b02a52094f5b1787f554"
  },
  {
    "url": "presentations/2013/10/13/scholar-onesearch-presentation/index.html",
    "revision": "7fab9b7ea382104431c3d9b7eeb1eb8c"
  },
  {
    "url": "presentations/2014/01/29/github-for-collaboration/index.html",
    "revision": "18b3c3676438ddcf97d29178452241cb"
  },
  {
    "url": "presentations/2014/06/02/gettings-started-with-grunt/index.html",
    "revision": "a2a8a651803cdc27039352f9c6ff32d4"
  },
  {
    "url": "projects/2011/12/01/ada-checklist/index.html",
    "revision": "1d3d2e4c49d7d7b0e32ec0e9532d4921"
  },
  {
    "url": "projects/2012/05/01/new-england-ada-learning/index.html",
    "revision": "8d81d1873f0e388658cf3b1f8e221f19"
  },
  {
    "url": "projects/2012/06/01/ihcd-store-project/index.html",
    "revision": "a1e14de7235f06cdc489af694c5a10af"
  },
  {
    "url": "projects/2012/07/04/minutemanclassic/index.html",
    "revision": "1bed618aa918b82b123a190d1c265f7a"
  },
  {
    "url": "projects/2012/09/15/digital-media-commons/index.html",
    "revision": "1248d03eb10b68f28d062898a6b6b3f7"
  },
  {
    "url": "projects/2013/07/01/library-solr-search/index.html",
    "revision": "4c937e2aebace7a41a50543cbd858707"
  },
  {
    "url": "projects/2013/07/17/scholor-one-search/index.html",
    "revision": "68aede8f83c6569bd39c909351284f8f"
  },
  {
    "url": "projects/2013/08/21/drs/index.html",
    "revision": "74ea862f572dbc13729d02906661a471"
  },
  {
    "url": "projects/2013/11/30/sinberbest/index.html",
    "revision": "85f95c987507dad3acf204030717fcd6"
  },
  {
    "url": "projects/2014/01/01/greenbiz/index.html",
    "revision": "8eb6fb9cdd43fc8dbfadce641a587efa"
  },
  {
    "url": "projects/2014/02/01/bookshare/index.html",
    "revision": "7e6a5820d526660d6b1ae82cb3419cab"
  },
  {
    "url": "projects/2014/02/01/cvt-angular/index.html",
    "revision": "9bd10d460f15027c9b53f10ebe5ea5f9"
  },
  {
    "url": "projects/2014/02/01/kalatheme/index.html",
    "revision": "d02a81a2a519300c6254996a16aa8683"
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
