//= require vendor/jquery.tableofcontents.js
//= require swagger-ui/lib/shred.bundle.js
//= require swagger-ui/lib/jquery.slideto.min.js
//= require swagger-ui/lib/jquery.wiggle.min.js
//= require swagger-ui/lib/jquery.ba-bbq.min.js
//= require swagger-ui/lib/handlebars-1.0.0.js
//= require swagger-ui/lib/underscore-min.js
//= require swagger-ui/lib/backbone-min.js
//= require swagger-ui/lib/swagger.js
//= require swagger-ui/swagger-ui.js
//= require swagger-ui/lib/highlight.7.3.pack.js

$(document).ready(function() {
  $('#toc').tableOfContents(document.body, {
    startLevel: 2,
    depth: 2
  });
});
