// imports
const router = require('express').Router();
const ctrl = require('../controllers');

const authRequired = require("../middleware/authRequired");

// routes
router.get('/', ctrl.conversations.conversationIndex);
router.post('/', ctrl.conversations.conversationCreate);
// router.put('/:id', ctrl.conversations.conversationEdit);
router.get('/:id', ctrl.conversations.conversationShow);
router.put('/:id', ctrl.conversations.messageCreate);
router.delete('/:id', ctrl.conversations.conversationDelete);

// exports
module.exports = router;