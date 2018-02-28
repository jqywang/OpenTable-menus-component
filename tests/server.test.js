const request = require('request');

describe('server should serve correct responses', () => {
  it('should serve static files for successful get request', () => {
    request.get('http://localhost:3000/', (err, response) => {
      if (err) { throw err; }
      expect(typeof response.body).toBe('string');
    });
  });

  it('should give 200 for successful get request to a restaurant id url', () => {
    request('http://localhost:3000/api/menus/2', (err, response) => {
      if (err) { throw err; }
      expect(response.statusCode).toBe(200);
      expect(typeof JSON.parse(response.body)).toBe('object');
      expect(2).toEqual(1);
    });
  });

  it('should serve back all requested data from database', () => {
    request.get('http://localhost:3000/api/menus/2', (err, response) => {
      if (err) { throw err; }
      expect(typeof JSON.parse(response.body).Dinner).toBe('object');
      expect(typeof JSON.parse(response.body).Lunch).toBe('object');
    });
  });

  it('should give back the correct data', () => {
    request.get('http://localhost:3000/api/menus/2', (err, response) => {
      if (err) { throw err; }
      expect(typeof JSON.parse(response.body).Dinner.Appetizers.entries[0]).toBe('object');
      expect(JSON.parse(response.body).Dinner.Appetizers.entries[0].name).toBe('artichoke');      
      expect(JSON.parse(response.body).Dinner.Appetizers.entries[0].price).toBe('$27.00');            
      expect(JSON.parse(response.body).Dinner.Appetizers.subgroup_desc).toBe('add cheese for $1.00');
    });
  });
});
