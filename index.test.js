const request = require('supertest')


describe("getById", function(){
  test("returns a single object", function(){
    request(app)
    .get('/user')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function(err, res) {
      if (err) throw err;
    });
  })
})

