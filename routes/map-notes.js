var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('map-notes.html'));
});

router.get('/getMarkers', function(req, res, next) {
  res.json(global.notes);
});

module.exports = router;