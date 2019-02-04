var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Payment */
router.post('/charge', async (req, res, next) => {
	let {token,email,description} = req.body;

  try {
    let charge = await payment.charge(token,description,email);
      
    return res.status(200).json({charge});
  } catch (err) {
    return res.status(500).json({type: err.type, message: err.message});
  }
});

module.exports = router;
