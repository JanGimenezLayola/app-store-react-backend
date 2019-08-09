'use strict';

const express = require('express');
const router = express.Router();

router.get('/apps', (req, res, next) => {
  // take all the apps from DB
});

router.post('/apps/new', (req, res, next) => {
  // create new app
});

router.put('/apps/:id/update', (req, res, next) => {
  // update one app
});

router.delete('apps/:id/delete', (req, res, next) => {
  // delete one app
});

module.exports = router;
