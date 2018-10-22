const Item = require('../models/item_model');

let not_found_resp = {
  status: 404,
  message: "Not found"
};

let error_resp = {
  status: 400,
  message: "Error in body"
};

let resp = {
  status: 200,
  payload: null
};


exports.create = function(req, res) {
  let item = new Item(req.body);
  item.save(function (err) {
    if (err) {
      res.status(400).send(error_resp);
    }
    else{
      resp.status = 200;
      resp.payload = item;
      res.status(200).send(resp)
    }
  })
};

exports.find_all = function (req, res) {
  Item.find({}, function(err, items) {
    if (err) {
      res.status(500).send(err);
    }
    else{
      resp.payload = items;
      resp.status = 200;
      res.send(resp);
    }
  });
};


