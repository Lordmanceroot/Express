const { Router } = require('express');
const homeController = require('./home.controller');
const catalogController = require('./catalog.controller');

const router = new Router();

router.use('/', homeController);
router.use('/catalog', catalogController);

module.exports = router;