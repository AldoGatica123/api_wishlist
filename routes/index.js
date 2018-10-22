let express = require('express');
let router = express.Router();

resp = {
  status: "woop woop",
  routes:[
    "api/v1/wishlist"
  ]
};


router.get('/', function(req, res, next) {
  res.send(resp)
});

module.exports = router;
