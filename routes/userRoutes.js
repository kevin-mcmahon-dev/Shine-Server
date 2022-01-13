// imports
const router = require('express').Router();
const ctrl = require('../controllers');

const authRequired = require("../middleware/authRequired");

// routes
// router.get('/accounts', ctrl.users.accountIndex);
// router.get('/accounts/:id', ctrl.users.accountShow);
// router.post('/accounts', ctrl.users.accountCreate);
// router.get('/profile', authRequired, ctrl.users.accountIndex);
router.put('/profile', authRequired, ctrl.users.accountUpdate);
router.post('/register', ctrl.users.register);
router.post('/login', ctrl.users.login);
router.get('/profile', authRequired, ctrl.users.profile);
router.post('/profile', authRequired, ctrl.conversations.conversationCreate);

// exports
module.exports = router;
