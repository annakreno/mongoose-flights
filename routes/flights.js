var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* show all flights */
router.get('/', flightsCtrl.index);

/* show new flight form page */
router.get('/new', flightsCtrl.new);

/* create new flight */
router.post('/', flightsCtrl.create);

/* show flight details */
router.get('/:id', flightsCtrl.show);

module.exports = router;
