var express = require('express');
var router = express.Router();
var controller = require('../controllers/guess_controller');

router.get('/:what', controller.startGuess);
router.get('/:what/:room', controller.joinGuess);

module.exports = router;
