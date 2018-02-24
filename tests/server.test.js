const request = require('request');

describe('server should serve correct responses', () => {
  it('should serve static files for successful get request', () => {
    request.get('http://localhost:3000/', (err, response, body) => {
      if (err) { throw err; }
      expect(typeof response.body).toBe('string');
    });
  });

  it('should give 200 for successful get request to a restaurant id url', () => {
    request('http://localhost:3000/menus/2', (err, response) => {
      if (err) { throw err; }
      expect(response.statusCode).toBe(200);      
    });
  });
});
