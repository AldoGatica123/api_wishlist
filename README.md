Description
------------
Project made to act as a CRUD for a wishlist application.
It is a Express server using a Mongoose and Redis client. 

Quickstart
------------
It depends on a mongo server and redis running before the api.

``
npm start
``
The server runs on the port 3000 by default

Environment variables
=================
``
REDIS_URL=redis://localhost
MONGODB_URL=mongodb://localhost/wishlist`
``

Routes and methods
==================
``GET POST
/api/v1/wishlist``

``GET PUT DELETE
/api/v1/wishlist/:item_id``

JSON object model:
==================
``
{
    name: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 200},
    price: {type: Number, required: true},
    image_url: {type: String, required: true, max: 500},
    product_url: {type: String, required: true, max: 500},
}
``
