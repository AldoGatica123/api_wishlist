let createError = require('http-errors');
let express = require('express');
let router = express.Router();
let controller = require('../controllers/item_controller');

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

const wishlist = [
  {
    "id": "1",
    "name": "Nintendo Switch",
    "img_url": "https://images-na.ssl-images-amazon.com/images/I/41UY4Pnw0SL._AC_SX430_.jpg",
    "price": 299,
    "descr": "Quiero un switch T.T",
    "date": "25 Dic 2018",
    "item_url": "https://www.amazon.com/Nintendo-Switch-Gray-Joy/dp/B01LTHP2ZK?th=1"
  }, {
    "id": "2",
    "name": "Nioh",
    "img_url": "https://images-na.ssl-images-amazon.com/images/I/51UehEnXjeL._AC_.jpg",
    "price": 19,
    "descr": "Quiero Nioh T.T",
    "date": "25 Dic 2018",
    "item_url": "https://www.amazon.com/Nioh-PlayStation-4/dp/B01MRKF099/ref=pd_sim_63_6?_encoding=UTF8&pd_rd_i=B01MRKF099&pd_rd_r=65b5224a-bb99-11e8-8b29-77fe1a29c361&pd_rd_w=gywsr&pd_rd_wg=dLL3w&pf_rd_i=desktop-dp-sims&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=56838e6b-66d4-41e0-a762-743f1a1a628a&pf_rd_r=E93GZ7TBWVN41C0Z1DDY&pf_rd_s=desktop-dp-sims&pf_rd_t=40701&psc=1&refRID=E93GZ7TBWVN41C0Z1DDY"
  }, {
    "id": "3",
    "name": "The Legend of Zelda: Breath of the Wild",
    "img_url": "https://images-na.ssl-images-amazon.com/images/I/51Ox7m6-OIL._AC_.jpg",
    "price": 57.27,
    "descr": "Quiero Zelda T.T",
    "date": "25 Dic 2018",
    "item_url": "https://www.amazon.com/gp/product/B01MS6MO77/ref=pd_rhf_se_s_rtpb1_1_4?ie=UTF8&pd_rd_i=B01MS6MO77&pd_rd_r=QBAVGT1XXT55P2AQFAJ0&pd_rd_w=rb69Q&pd_rd_wg=dtH8w&refRID=QBAVGT1XXT55P2AQFAJ0&th=1"
  }
];


router.get('/wishlist', controller.find_all);

router.get('/wishlist/:id', controller.find_one);

router.post('/wishlist', controller.create);

router.delete('/wishlist/:id', function (req, res) {
  let item = wishlist.find(x => x.id === req.params.id);
  if (item === undefined) {
    res.status(404).send(not_found_resp);
  }
  else {
    let found = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        items.splice(i, 1);
        found = true;
        break;
      }
    }
    if (!found) {
      res.status(404).send(not_found_resp);
    }
    else {
      res.status(204).send()
    }
  }
});

router.put('/wishlist/:id', controller.update_one);


module.exports = router;
