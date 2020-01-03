'use strict';

module.exports = app => {
  app.config.coreMiddleware.push('super-cors');
};
