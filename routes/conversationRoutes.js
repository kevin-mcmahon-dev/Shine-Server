// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.conversations.conversationIndex);
router.post('/', ctrl.conversations.conversationCreate);
// router.get('/conversations/:id/edit', ctrl.conversations.conversationEditPage);
router.get('/:id', ctrl.conversations.conversationShow);
router.put('/:id', ctrl.conversations.conversationEdit);
router.delete('/:id', ctrl.conversations.conversationDelete);

// exports
module.exports = router;