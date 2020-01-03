'use strict';

module.exports = options => {
  const { whiteList, credentials } = options;

  if (!Array.isArray(whiteList)) {
    throw Error('------------whiteList必须为数组------------');
  }

  return async function setHeader(ctx, next) {
    const { origin } = ctx.request.header;

    if (whiteList.includes('*') || whiteList.includes(origin)) {
      ctx.response.set('Access-Control-Allow-Origin', origin);
      if (credentials) ctx.response.set('Access-Control-Allow-Credentials', true);
    }
  };
};
