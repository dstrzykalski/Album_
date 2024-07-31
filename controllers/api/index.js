const router = require('express').Router();

const allRoutes = require('./all-routes.js');

router.use('/all', allRoutes);

module.exports = router;