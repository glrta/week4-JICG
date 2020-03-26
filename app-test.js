const test = require('tape');
const supertest = require('supertest')
const router = require('./router')

// test("initialise", t => {
//     let x = 5
//     t.equal(x, 5, 'Should return 5')
//     t.end()
// });


// test('Home route returns a status code of 200', t => {
//     supertest(router)
//         .get('/')
//         .expect(200)
//         .expect('content-type', 'text/html')
//         .end((err, res) => {
//             t.error(err);
//             t.match(res.text, /<!DOCTYPE html>/)
//             t.end()
//         })
// })


// test('Expected 404 not found error', t =>{
//   supertest(router)
//     .get('/something-nonsense')
//     .expect(404)
//     .expect('content-type', 'text/html')
//     .end((err, res) => {
//       t.error(err)
//       t.match(res.text, /<h2>Whoops<\/h2>/)
//       t.end()
//     })
    
//     })

      test('can send post request to blog server', t => {
        supertest(router)
          .post('/write')
          .send('name=Giovanna&title=my20%title')
          .set('Accept', 'application/json')
          .expect(200)
        //   .expect('content-type', 'application/x-www-form-urlencoded')
          .end((err, res) => {
            console.log(res.text)
            t.error(err);
            t.equal(res.text.name, 'Giovanna')
            // t.deepEqual(actual, expected);      
            t.end();
          })
    })


      // describe('POST /user', function() {
      //   it('user.name should be an case-insensitive match for "john"', function(done) {
      //     request(app)
      //       .post('/user')
      //       .send('name=john') // x-www-form-urlencoded upload
      //       .set('Accept', 'application/json')
      //       .expect(function(res) {
      //         res.body.id = 'some fixed id';
      //         res.body.name = res.body.name.toLowerCase();
      //       })
      //       .expect(200, {
      //         id: 'some fixed id',
      //         name: 'john'
      //       }, done);
      //   });
      // });