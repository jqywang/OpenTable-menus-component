const request = require('request');

describe('server should serve correct responses', () => {
  it('should serve 200 for successful get request', () => {
    request.get(url, (err, response, body) => {
      if (err) { throw err; }
      expect(response).toBe(200);
    });
  });
});
