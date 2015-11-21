try {
    var host = require('../host.config.js').localHost;
}
catch (er) {
    var error = er ? true : false;
}
finally {
    if (error) {
        host = null;
    }
}

module.exports = {
    localHost: host
};
