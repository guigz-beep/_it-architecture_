'use strict'

var varhelloworldController = require('./helloworldControllerService');

module.exports.funchelloworldGET = function funchelloworldGET(req, res, next) {
  varhelloworldController.funchelloworldGET(req.swagger.params, res, next);
};
'use strict'

var varhelloworldController = require('./helloworldControllerService');

module.exports.funchelloworldPOST = function funchelloworldPOST(req, res, next) {
  varhelloworldController.funchelloworldPOST(req.swagger.params, res, next);
};