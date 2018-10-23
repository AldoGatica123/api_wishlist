let express = require('express');
let router = express.Router();

resp = {
  status: "woop woop",
  paths:[
    "/api/v1/wishlist",
    "/api/v1/wishlist/:item_id"
  ]
};


router.get('/', function(req, res, next) {
  res.send(resp)
});

module.exports = router;
