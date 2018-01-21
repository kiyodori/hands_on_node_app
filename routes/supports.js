const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  models.Support.findOne({
    where: {id: id}
  }).then(support => {
    res.render('supports', { supportId: support.supportId, name: support.name });
  }).catch(function(err) {
    next();
  })
});

module.exports = router;
