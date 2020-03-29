const crypto = require('crypto');
module.exports = function geterateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}