// Coded to Microsoft XDR spec: http://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx

(function($) {
    "use strict";
    
    // Create the request object
    // (This is still attached to ajaxSettings for backward compatibility)
    $.ajaxSettings.xdr = function() {
        return (window.XDomainRequest ? new window.XDomainRequest() : null);
    };

    // Determine support properties
    (function(xdr) {
        $.extend($.support, { iecors: !!xdr });
    })(window.XDomainRequest);

    // Create transport if the browser can provide an xdr (and fails $.support.cors)
    if ($.support.iecors) {
        $.ajaxTransport(function(options, originalOptions, jqXHR) {
            var xdr;
            
            return {
                send: function(headers, complete) {
                    xdr = options.xdr();

                    // XDR does not support custom headers
                    
                    // Seems that xdr requests can get hung up indefinitely without a timeout.
                    xdr.timeout = options.timeout || 10000;

                    // IE9 has a bug that requires the xdr.onprogress method to be set. We'll just set them all, just in case.
                    // (http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e)
                    xdr.onload = xdr.onerror = xdr.ontimeout = xdr.onprogress = $.noop;
                    
                    xdr.onload = function() {
                        var headers = {
                            'Content-Type': xdr.contentType
                        };
                        
                        complete(200, 'OK', { text: xdr.responseText }, headers);
                    };

                    if (options.xhrFields) {
                        if (options.xhrFields.progress) xhr.onprogress = options.xhrFields.progress;
                        if (options.xhrFields.error) xhr.onerror = options.xhrFields.error;
                        if (options.xhrFields.timeout) xhr.ontimeout = options.xhrFields.timeout;
                        // XDR does not support withCredentials
                    } else {
                        xdr.onprogress = function() {
                        };
                        xdr.onerror = function() {
                            complete(404, "Not Found");
                        };
                        xdr.ontimeout = function() {
                            complete(408, "Request Timeout");
                        };
                    }
                    
                    // // TODO: If you're getting "Aborted" requests in IE9, try uncommenting this block.
                    // // A few people reported 'jQuery.noop' wasn't good enough, but I can't figure out why.
                    // xdr.onprogress = function() {
                    // };

                    xdr.open(options.type, options.url);
                    
                    if (options.hasContent && options.data) {
                        xdr.send(options.data);
                    } else {
                        xdr.send();
                    }
                },

                abort: function () {
                    return xdr && xdr.abort();
                }
            };
        });
    }
})(jQuery);
