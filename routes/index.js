var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const s = require('../server/spreadsheet');
  s.addPayer("Ogi");

  res.render('index', { title: 'Express' });
});

module.exports = router;
