var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills');


//router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new)

router.get('/', skillsCtrl.create)

//router.get('/:id', skillsCtrl.delete)

router.get('/:id', skillsCtrl.show);

module.exports = router;