var common = require('./lib/common');

describe('ACCT command', () => {
  var client;
  var server;

  beforeEach((done) => {
    server = common.server();
    client = common.client(done);
  });

  it('should reply 202', (done) => {
    client.execute('ACCT', (error, reply) => {
      common.should.not.exist(error);
      reply.code.should.equal(202);
      done();
    });
  });

  afterEach(() => {
    server.close();
  });
});