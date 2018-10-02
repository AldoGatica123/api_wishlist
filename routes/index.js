let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.send({"status": "woop woop"})
});

module.exports = router;
