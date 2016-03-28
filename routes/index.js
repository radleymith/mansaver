var api = require('./api');

module.exports = function (router) {

    router.post('/subscribe', api.subscribe);
}