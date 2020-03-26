//= require bootstrap-sass/assets/javascripts/bootstrap/button.js
//= require bootstrap-sass/assets/javascripts/bootstrap/modal.js
//= require parsleyjs/dist/parsley.js
//= require bootbox/dist/bootbox.min.js

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
    var messages = [],
        messageStr = '';
    if(typeof(Rollbar) != 'undefined') {
      Rollbar.error('Unexpected contact sending failure', { error: error, message: message, response: xhr.responseText  });
    }

    if (xhr.responseJSON && xhr.responseJSON.errors) {
      $.each(xhr.responseJSON.errors, function(idx, error) {
        if (error.message) {
          messages.push(escapeHtml(error.message));
        }
      });
    }
    if (xhr.responseJSON && xhr.responseJSON.error && xhr.responseJSON.error.message) {
      messages.push(escapeHtml(xhr.responseJSON.error.message));
    }
    if (messages && messages.length > 0) {
      messageStr = '<br><ul><li>' + messages.join('</li><li>') + '</li></ul>';
    }

    bootbox.alert('Sending your message unexpectedly failed.' + messageStr + '<br>Please try again or <a href="' + options.issuesUrl + '">file an issue</a> for assistance.');
  }).always(function() {
    submit.button('reset');
  });
});
