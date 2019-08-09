'use strict';

const express = require('express');
const Application = require('../models/Application');
const router = express.Router();

router.get('/apps', async (req, res, next) => {
  try {
    const listOfApps = await Application.find();
    res.status(200).json({ listOfApps });
  } catch (error) {
    next(error);
  }
});

router.post('/apps/new', async (req, res, next) => {
  try {
    const newApp = req.body;
    const createdApp = await Application.create(newApp);
    res.status(200).json(createdApp);
  } catch (error) {
    next(error);
  }
});

router.put('/apps/:id/update', (req, res, next) => {
  // update one app
});

router.delete('apps/:id/delete', (req, res, next) => {
  // delete one app
});

module.exports = router;
