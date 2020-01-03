'use strict';

const mock = require('egg-mock');

describe('test/superCors.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/superCors-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, superCors')
      .expect(200);
  });
});
