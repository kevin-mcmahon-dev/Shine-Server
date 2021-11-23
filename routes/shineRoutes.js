// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/:id', ctrl.users.accountShow);
router.post('/:id', ctrl.users.accountCreate);
router.put('/:id', ctrl.users.accountUpdate);

// exports
module.exports = router;
