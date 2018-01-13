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
    "revision": "d65daa36286105fbed0ccb345c3e1c30"
  },
  {
    "url": "2011/05/05/google-fusion-tables-make-powerful-maps-quickly/index.html",
    "revision": "1ba42ab6748dcc37810fb7823c460dfa"
  },
  {
    "url": "2011/05/05/google-fusion-tables/index.html",
    "revision": "37f5321f5e06729a6fbee3a22fc40a59"
  },
  {
    "url": "2011/05/14/using-arc-scene-to-render-3d-landscapes/index.html",
    "revision": "7ece5422ab9e248843099533c0909905"
  },
  {
    "url": "2011/06/06/map-showing-areas-of-change/index.html",
    "revision": "6c9e3b77d6bf9b6664b070c7c99416f7"
  },
  {
    "url": "2011/06/06/presentation-on-modern-mapping-in-urban-planning/index.html",
    "revision": "16fd20d42c098395155e3edce3ff154d"
  },
  {
    "url": "2011/06/06/presentation-to-the-city-of-boulder/index.html",
    "revision": "e22d7e6c2e235dde11e3fb4210d340ad"
  },
  {
    "url": "2011/06/06/presntation-on-predicting-change-in-boulder-co/index.html",
    "revision": "1e5f1392eb91a1e56d30edbd46823ac5"
  },
  {
    "url": "2011/06/07/3d-terrain-map-of-portland/index.html",
    "revision": "1ac5513094dbf4ebbb2a58df53a8ff7b"
  },
  {
    "url": "2011/06/07/pepsi-refresh-grant/index.html",
    "revision": "42743391236c01e06e1ccf6b5cc78280"
  },
  {
    "url": "2011/06/07/putting-yourself-out-there/index.html",
    "revision": "183c79aa314643d30411831971eb8d0f"
  },
  {
    "url": "2011/06/07/red-rocks-ecological-assessment/index.html",
    "revision": "b100a1c9e0670e521ee0f9f8a9ceca5c"
  },
  {
    "url": "2011/06/07/social-issues-of-smoking/index.html",
    "revision": "b1b8a52ce8ad634a9a8373269b9b87e2"
  },
  {
    "url": "2011/06/07/spring-2011-digital-cartography-example/index.html",
    "revision": "a1e89c7cf0dd4dee5cd7071904827c9d"
  },
  {
    "url": "2011/06/07/user-exchange-movie/index.html",
    "revision": "393a9878a3e085342519476136d88f24"
  },
  {
    "url": "2011/06/07/wayfinding-cu/index.html",
    "revision": "79e141905e3392a76a131ef4135045ef"
  },
  {
    "url": "2011/06/09/my-chattaqua/index.html",
    "revision": "a4986018b604a046cc981cc6e0aee4ed"
  },
  {
    "url": "2011/06/09/portfolio-scanning-and-sorting/index.html",
    "revision": "0ba8936d5d821cac4dcf51d1316c578a"
  },
  {
    "url": "2011/06/09/using-web-cartography-in-urban-planning/index.html",
    "revision": "cdec465632220e34f509abc00801c7b2"
  },
  {
    "url": "2011/11/30/focus-free/index.html",
    "revision": "d96f31c9084efe1a2650fadad8125490"
  },
  {
    "url": "2012/03/03/ada-checklist-website-project/index.html",
    "revision": "7d449e86b1ade0004b1958049554f3ee"
  },
  {
    "url": "2012/03/03/new-england-ada-learning-coming-soon/index.html",
    "revision": "092557554fdaca232b34003d6ecb0dee"
  },
  {
    "url": "2012/03/04/bus-stop-boardings-in-boulder-co/index.html",
    "revision": "8e1fd389d661f18e5d8221f9570821ca"
  },
  {
    "url": "2012/03/04/flood-plains-in-boulder-co/index.html",
    "revision": "d7169ec388350a270501d66428f9b180"
  },
  {
    "url": "2012/03/04/harvart-art-museum/index.html",
    "revision": "36b02caccb71a13be38636ffa7895d9b"
  },
  {
    "url": "2012/03/04/land-use-zoning-in-boulder-co/index.html",
    "revision": "42ad6d03ced0271bd993d3852db3ed9c"
  },
  {
    "url": "2012/03/04/map-of-my-foursquare-checkin-history/index.html",
    "revision": "08703e862377bfd9c7b65fe78973130d"
  },
  {
    "url": "2012/03/04/my-new-job-at-ihcd/index.html",
    "revision": "5605b7f435d1eeaf6485f9f645cefe49"
  },
  {
    "url": "2012/03/04/predicted-areas-of-growth-boulder-co/index.html",
    "revision": "5fbcffc9fb7786087d560ef094417453"
  },
  {
    "url": "2012/03/04/predicted-areas-of-population-growth-in-boulder-co/index.html",
    "revision": "e050bfd69e29a8e9480cf5885810c957"
  },
  {
    "url": "2012/04/10/bridge-water-state-lecture-on-a11y/index.html",
    "revision": "47f4c10d8bdcc6be86c6719d84bec39a"
  },
  {
    "url": "2012/04/11/new-england-ada-center-blog/index.html",
    "revision": "92d03844e02d054b7575897507a0c946"
  },
  {
    "url": "2012/05/08/minuteman-classic-web-redesign/index.html",
    "revision": "820832fbcb2add485b8837c81743f12d"
  },
  {
    "url": "2012/05/08/ten-principles-of-inclusive-web-design/index.html",
    "revision": "bb5d7f0471350f46049fc7134a9352cb"
  },
  {
    "url": "2012/05/11/a-lesson-learned-in-accessibility/index.html",
    "revision": "733d3f8c1474b4f64eb59a5ea19c5128"
  },
  {
    "url": "2012/05/29/agining-professors-are-creating-a-faculty-bottleneck/index.html",
    "revision": "891bffcf254f3decf201ecad518d6ceb"
  },
  {
    "url": "2013/10/25/bad-camp-2013/index.html",
    "revision": "6825636847bac2f0525294e1736ce294"
  },
  {
    "url": "2014/06/03/drupalcon-austin/index.html",
    "revision": "07af9079c8c69e6d63e4c29212ca5404"
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
    "revision": "afa00b88bc95ba228fd80b7dbfb95899"
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
    "revision": "1fb173ba9c2ab0d7c8d6bc3dd24d8d29"
  },
  {
    "url": "cartography/gis/2011/06/06/gis-map-of-portland-or/index.html",
    "revision": "edf40239c49c85078efee79ab277b052"
  },
  {
    "url": "conferences/2013/03/03/code4lib/index.html",
    "revision": "c496d11932e5e71a9d1c6ec7e9ca9db2"
  },
  {
    "url": "conferences/2013/06/26/design-4-drupal-boston/index.html",
    "revision": "e4c28f3c12b49584a9cda4d79f055b21"
  },
  {
    "url": "conferences/2013/06/30/responsive-images/index.html",
    "revision": "25c6655c5d90aa21f8a7812890f8a64e"
  },
  {
    "url": "conferences/2013/07/13/nyc-camp-2013/index.html",
    "revision": "e5019aaf6670bf6663df3e70a8719922"
  },
  {
    "url": "conferences/2013/07/15/higher-ed-summit-nyc-camp/index.html",
    "revision": "40952b0016d84628e976ad720bf5e0d8"
  },
  {
    "url": "conferences/drupal/design/2014/08/01/design-for-drupal/index.html",
    "revision": "296c7be022502bb53f547d1dd1622be7"
  },
  {
    "url": "conferences/js/2014/07/25/forward-js/index.html",
    "revision": "59ccb04f7f63e84a2105f9052f65960d"
  },
  {
    "url": "conferences/js/2015/02/04/forward-js-2/index.html",
    "revision": "00866413a2dbb38598cedff4a7a39f59"
  },
  {
    "url": "drupal products/2013/01/20/using-web-api-in-drupal-entities/index.html",
    "revision": "e2ebe41083dd4fef69124e23f73f43e2"
  },
  {
    "url": "drupal/2013/09/17/feature-driven-development/index.html",
    "revision": "7eb0e045553d7f5e1b5a7d59a9356197"
  },
  {
    "url": "drush/2013/10/23/drush-resources/index.html",
    "revision": "45e57336c961131a499f66bcfe3eb811"
  },
  {
    "url": "front-end-ops/2014/06/05/getting-going-with-gulp/index.html",
    "revision": "975dc4ca2aed12bf82629b7d894fa306"
  },
  {
    "url": "index.html",
    "revision": "c1b495bb7134a1bec2ea3ee17736aef6"
  },
  {
    "url": "info/index.html",
    "revision": "fafa6a5d2c306aea738abc85338ed5bd"
  },
  {
    "url": "js/2014/11/07/javascript-interview-questions/index.html",
    "revision": "f91b8f2347248a73c2de51247db05e7b"
  },
  {
    "url": "links/2011/12/12/learn-the-basics-of-coding/index.html",
    "revision": "8ce53b811206dc73a53578684ac5062f"
  },
  {
    "url": "presentations/2011/06/06/bio-city-presentation/index.html",
    "revision": "91ed90da378ac01194b9fd890aa554f1"
  },
  {
    "url": "presentations/2013/10/13/scholar-onesearch-presentation/index.html",
    "revision": "28110246228ab2e61aca439f5bcfaea0"
  },
  {
    "url": "presentations/2014/01/29/github-for-collaboration/index.html",
    "revision": "0441361dc35b7ff2ea986205ccc86d56"
  },
  {
    "url": "presentations/2014/06/02/gettings-started-with-grunt/index.html",
    "revision": "375b1a94ace4ab132b76b39aa11e3575"
  },
  {
    "url": "projects/2011/12/01/ada-checklist/index.html",
    "revision": "968799c2e7d0dc79b72f9592e2197d7b"
  },
  {
    "url": "projects/2012/05/01/new-england-ada-learning/index.html",
    "revision": "0f6f9fb8870374f2102997bf65776896"
  },
  {
    "url": "projects/2012/06/01/ihcd-store-project/index.html",
    "revision": "80e18cc77a941e7fb17f96920cd6b898"
  },
  {
    "url": "projects/2012/07/04/minutemanclassic/index.html",
    "revision": "86243424f8d4e43bcb170ff3f380ad07"
  },
  {
    "url": "projects/2012/09/15/digital-media-commons/index.html",
    "revision": "2289aa0a4651e0f1d3b980249b771ffb"
  },
  {
    "url": "projects/2013/07/01/library-solr-search/index.html",
    "revision": "20a5fba367b4c64a65487fcb475e8040"
  },
  {
    "url": "projects/2013/07/17/scholor-one-search/index.html",
    "revision": "00b30ed4e5b2d69168c153a154453d7f"
  },
  {
    "url": "projects/2013/08/21/drs/index.html",
    "revision": "314cf8da01040cc68abed3121078e4e8"
  },
  {
    "url": "projects/2013/11/30/sinberbest/index.html",
    "revision": "5174eacafb50017052bf7faeb7c2e7a2"
  },
  {
    "url": "projects/2014/01/01/greenbiz/index.html",
    "revision": "407568e8e1ff0ae7ae31f39b1bbac083"
  },
  {
    "url": "projects/2014/02/01/bookshare/index.html",
    "revision": "e4f97a73b8197c323090cc143768ce6b"
  },
  {
    "url": "projects/2014/02/01/cvt-angular/index.html",
    "revision": "2c087ff96c190b6026c0cd5cf87f6ad5"
  },
  {
    "url": "projects/2014/02/01/kalatheme/index.html",
    "revision": "047d658c7e728e7f10cea46aada43cc8"
  },
  {
    "url": "projects/index.html",
    "revision": "d908d071fc7a669a3652ba88ca1d206c"
  },
  {
    "url": "search/index.html",
    "revision": "499013fb5351c806300bbfa48257a5ab"
  },
  {
    "url": "thank-you/index.html",
    "revision": "5b6329d0b8178b6e0145c727e905bf88"
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
