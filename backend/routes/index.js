const express = require('express');
const router  = express.Router();


router.get('/book', (req, res, next) => {
  res.render('book')
})

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
