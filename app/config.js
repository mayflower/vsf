require.config({
    //deps: ["main"],

    paths: {
        zepto: "../lib/zepto/src/zepto",
        lodash: "../lib/lodash/lodash",
        backbone: "../lib/backbone/backbone",
    },

    shim: {
        backbone: {
            deps: ["lodash", "zepto"],
            exports: "Backbone"
        },
        zepto: {
            exports: "$"
        }
    }
});

require(['backbone'], function(ding) {
    console.log(ding);
});
