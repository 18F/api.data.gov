//= require bootstrap/button.js
//= require bootstrap/modal.js
//= require parsleyjs.js
//= require bootbox.js

var defaults = {};
var options = $.extend({}, defaults, apiUmbrellaContactOptions || {});

if(!options.apiKey) {
  alert('apiUmbrellaSignupOptions.apiKey must be set');
}

var form = $("#apidatagov_contact_form");
form.parsley();
form.submit(function(event) {
  var submit = $(this).find('button');
  submit.button('loading');

  event.preventDefault();

  $.ajax({
    url: '/api-umbrella/v1/contact.json?api_key=' + options.apiKey,
    type: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
  }).done(function(response) {
    bootbox.alert('Thanks for sending your message. We\'ll be in touch.', function() {
      form.trigger('reset');
    });
  }).fail(function(xhr, message, error) {
    if(typeof(Rollbar) != 'undefined') {
      Rollbar.error('Unexpected contact sending failure', { error: error, message: message, response: xhr.responseText  });
    }

    bootbox.alert('Sending your message unexpectedly failed.<br>Please try again or <a href="' + options.issuesUrl + '">file an issue</a> for assistance.');
  }).always(function() {
    submit.button('reset');
  });
});
