const express = require('express');

const router = express.Router();

const restructure = require('../dataRestructure.js');

const db = require('../../database/menudb.js');

router.route('/:id')
  .get((req, res) => {
    db.pullRestaurantFromDB(req.params.id, (err, data) => {
      if(err) {
        res.statusCode = 404;
        res.end();
      } else {
        let sendData = restructure.dataRestructure(data);
        res.statusCode = 200;
        res.send(sendData);
      }
    });
  });

module.exports = router;
