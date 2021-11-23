// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/conversations', ctrl.conversations.conversationIndex);
router.get('/conversations/:id', ctrl.conversations.conversationIndex);
router.get('/:id', ctrl.users.accountShow);
router.post('/:id', ctrl.users.accountCreate);
router.put('/:id', ctrl.users.accountUpdate);

// exports
module.exports = router;
