const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../util/mocks/movies.js');
const testServer = require('../util/testServer.js');

describe('routes - movies', function () {

  const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServiceMock
  });

  const request = testServer(route);

  describe('GET /movies', function () {
    it('should respond with status 200', function(done) {
      request.get('/api/movies').expect(200,done);
    });

    it('Should respond with the list of movies', function(done) {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed'
        });

        done();
      })
    });

  });
});
