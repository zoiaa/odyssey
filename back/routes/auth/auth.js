const { Router } = require('express');
const connection = require('../../helpers/db');

const router = Router();

router.post('/signup', function(req, res) {
  const { post } = req.body;
  connection.query('INSERT INTO users set ?', req.body, (err) => {
  if (err) {
    console.log(err);
    
    res.sendStatus(500);
  } else {
    res.sendStatus(200);
  }
  });
})
  module.exports = router;