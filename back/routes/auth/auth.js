const { Router } = require('express');
const connection = require('../../helpers/db');

const router = Router();

router.post('/signup', function(req, res) {
  console.log(req.body)
  connection.query('INSERT INTO users set ?', req.body, (err) => {
    console.log(err)
    if (err)
    res.status(500).json({ flash:  err.message });
else
    res.status(200).json({ flash:  "User has been signed up !" });
  });
})
  module.exports = router;