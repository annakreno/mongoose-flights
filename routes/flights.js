var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* show all flights */
router.get('/', flightsCtrl.index);

/* show new flight form page */
router.get('/new', flightsCtrl.new);

/* CREATE new flight */
router.post('/', flightsCtrl.create);

module.exports = router;
