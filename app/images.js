define(['backbone', 'image'], function(bb, Image) {
    return Backbone.Collection.extend({
        url: "http://172.19.1.21:8080/locality-sensitive-hashing-rest/images/random",
        model: Image
    });
});
