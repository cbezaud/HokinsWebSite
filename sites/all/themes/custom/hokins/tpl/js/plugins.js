/**
 * Created by efrancois on 22/06/2015.
 */
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/**
 * @plugin flapNav
 * @description gestion de la navigation mobile
 * @author SQLI - efrancois
 * @version 1.0
 * @example $('.nav-wrapper').flapNav();
 * @todo :
 */
(function($, window, document, undefined) {
    var pluginName = "flapNav",
        defaults = {
            data: "", // (required)
        };

    // @method: constructor
    function Plugin(element, options) {
        this.el = element;
        this.$el = $(this.el);
        this.opt = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        // @method init
        init: function() {
            var ct = this;

            // @todo : minify ?
            // nav system :: temp
            jQuery('[data-toggle="flap-nav"]').on('click', function (e) {
                e.preventDefault();
                ct.click();
            });
        },

        click: function() {
            var ct = this;
            var $e = $(ct.opt.elt_wrapper);
            $e.toggleClass("flap-open");
        }

    };

    // singleton
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);