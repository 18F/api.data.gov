//= require _datagov
//= require _vendor/jquery.tableofcontents.js
//= require numeral
//= require moment

$(document).ready(function() {
  $('#toc').tableOfContents(document.body, {
    startLevel: 2,
    depth: 2
  });
});
