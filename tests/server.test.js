const request = require('request');

describe('server should serve correct responses', () => {
  it('should serve static files for successful get request', () => {
    request.get('http://localhost:3000/', (err, response) => {
      if (err) { throw err; }
      expect(typeof response.body).toBe('object');
    });
  });

  it('should give 200 for successful get request to a restaurant id url', () => {
    request('http://localhost:3000/api/menus/2', (err, response) => {
      if (err) { throw err; }
      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body).id).toBe('2');
    });
  });

  it('should serve back all requested data from database', () => {
    request.get('http://localhost:3000/api/menus/2', (err, response) => {
      if (err) { throw err; }
      expect(typeof response.body.Dinner).toBe('object');
      expect(typeof response.body.Lunch).toBe('object');
    });
  });

  it('should give back the correct data', () => {
    request.get('http://localhost:3000/api/menus/2', (err, response) => {
      if (err) { throw err; }
      expect(response.body.Dinner.Appetizers.entries[0]).toBe('object');
      expect(response.body.Dinner.Appetizers.subgroup_desc).toBe('add cheese for $1.00');
    });
  });
});
