const Item = require('../models/item_model');
let redis = require('redis');
let client = redis.createClient(process.env.REDIS_URL);

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


exports.create = function (req, res) {
  let item = new Item(req.body);
  item.save(function (err) {
    if (err) {
      res.status(400).send(error_resp);
    }
    else {
      resp.status = 200;
      resp.payload = item;
      res.status(200).send(resp)
    }
  })
};

exports.find_all = function (req, res) {
  client.get('wishlist', function (err, response) {
    if (response) {
      resp.payload = JSON.parse(response);
      resp.status = 200;
      res.status(200).send(resp)
    }
    else {
      Item.find({}, function (err, items) {
        if (err) {
          res.status(500).send(err);
        }
        else {
          client.set('wishlist', JSON.stringify(items));
          client.expire('wishlist', 20);
          resp.payload = items;
          resp.status = 200;
          res.send(resp);
        }
      });
    }
  });
};

exports.find_one = function (req, res) {
  client.get(req.params.id, function (err, response) {
    if (response) {
      resp.payload = JSON.parse(response);
      resp.status = 200;
      res.status(200).send(resp)
    }
    else {
      Item.find({_id: req.params.id}, function (err, item) {
        if (err) {
          res.status(404).send(not_found_resp);
        }
        else {
          if (item.length < 1) {
            res.status(404).send(not_found_resp);
          }
          else {
            client.set(req.params.id, JSON.stringify(item));
            client.expire(req.params.id, 30);
            resp.payload = item;
            resp.status = 200;
            res.status(200).send(resp)
          }
        }
      });
    }
  });
};

exports.update_one = function (req, res) {
  Item.replaceOne({_id: req.params.id}, {$set: req.body}, function (err, item) {
    if (err) {
      res.status(404).send(not_found_resp);
    }
    else {
      resp.status = 202;
      resp.payload = req.body;
      res.status(202).send(resp);
    }
  });

};

exports.delete_one = function (req, res) {
  Item.findOneAndDelete({_id: req.params.id}, function (err, item) {
    if (err) {
      res.status(404).send(not_found_resp);
    }
    else {
      resp.status = 204;
      res.status(204).send(resp);
    }
  });
};
