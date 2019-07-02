var exec = require('cordova/exec');

exports.incomingCall = function (arg0, success, error) {
    exec(success, error, 'SferaIntercom', 'incomingCall', [arg0]);
};
