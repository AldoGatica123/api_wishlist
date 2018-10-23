let express = require('express');
let router = express.Router();
let controller = require('../controllers/item_controller');

router.get('/wishlist', controller.find_all);

router.post('/wishlist', controller.create);

router.get('/wishlist/:id', controller.find_one);

router.put('/wishlist/:id', controller.update_one);

router.delete('/wishlist/:id', controller.delete_one);

module.exports = router;
