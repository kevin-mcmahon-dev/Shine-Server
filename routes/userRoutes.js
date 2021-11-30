// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/accounts', ctrl.users.accountIndex);
router.get('/accounts/:id', ctrl.users.accountShow);
router.post('/accounts', ctrl.users.accountCreate);
router.put('/accounts/:id', ctrl.users.accountUpdate);

// exports
module.exports = router;
