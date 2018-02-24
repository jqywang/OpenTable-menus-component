const express = require('express');

const router = express.Router();

router.route('/:id')
  .get((req, res) => {
    console.log(req.params);
    res.statusCode = 200;
    res.send(req.params);
  });

module.exports = router;
