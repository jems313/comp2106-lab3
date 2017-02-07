var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Lab 3',
    message: 'COMP2106 | Advance Server Side Scripting'
  });
});

router.get('/jaymin', function(req, res, next) {
  res.render('jaymin',{
    title: 'Jaymin',
    message: 'Hi I am Jaymin Patel, Currently pursing Web Designing and Development Course'
  });
});

router.get('/chandrika', function(req, res, next) {
  res.render('chandrika',{
    title: 'ChandrikaBen',
    message: 'She is my monther nad she is house wife'
  });
});

router.get('/mahendra', function(req, res, next) {
  res.render('mahendra',{
    title: 'MahendraBhai',
    message: 'He is my father and he is retired government officer'
  });
});


module.exports = router;
