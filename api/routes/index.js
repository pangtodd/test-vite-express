var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// const express = require('express')
// const app = express()
// var router = express.Router();

// app.get('/', (req, res) => {
//   res.send('You got served.')
// })
