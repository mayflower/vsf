require.config({
    //deps: ["main"],

    paths: {
        zepto: "../lib/zepto/src/zepto",
        ajax: "../lib/zepto/src/ajax",
        event: "../lib/zepto/src/event",
        lodash: "../lib/lodash/lodash",
        backbone: "../lib/backbone/backbone",
    },

    shim: {
        backbone: {
            deps: ["lodash", "zepto", "event", "ajax"],
            exports: "Backbone"
        },
        zepto: {
            exports: "Zepto"
        },
        ajax: {
            deps: ['zepto']
        },
        event: {
            deps: ['zepto']
        }
    }
});

require(['backbone'], function(ding) {
    require(['images'], function(Images) {
        List = new Images();
        List.fetch({
            success: function()  {
                console.dir(List.pluck('url'));
            }
        });
    });
});
