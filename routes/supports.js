const express = require('express');
const router = express.Router();
// const Support = require("../models/support");
const models = require("../models");

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const support = models.Support.findOne({ where: {id: id} });
  // models.Support.findOne({ where: {id: id} }).then(support => {
  //   const supportId = support.supportId;
  //   const name = support.name;
  //   res.render('supports', { supportId: supportId, name: name });
  // })
  res.render('supports', { supportId: support.supportId, name: support.name });
});

module.exports = router;
