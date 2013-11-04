//= require vendor/jquery.tableofcontents.js
//= require vendor/swagger/dist/lib/shred.bundle.js
//= require vendor/swagger/dist/lib/jquery.slideto.min.js
//= require vendor/swagger/dist/lib/jquery.wiggle.min.js
//= require vendor/swagger/dist/lib/jquery.ba-bbq.min.js
//= require vendor/swagger/dist/lib/handlebars-1.0.0.js
//= require vendor/swagger/dist/lib/underscore-min.js
//= require vendor/swagger/dist/lib/backbone-min.js
//= require vendor/swagger/dist/lib/swagger.js
//= require vendor/swagger/dist/swagger-ui.js
//= require vendor/swagger/dist/lib/highlight.7.3.pack.js

$(document).ready(function() {
  $('#toc').tableOfContents(document.body, {
    startLevel: 2,
    depth: 2
  });
});
