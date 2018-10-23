Proyecto de Programación Web

CRUD de mi wishlist

Conexión a mongodb por medio de Mongoose

Rutas:
``GET POST
/api/v1/wishlist``

``GET PUT DELETE
/api/v1/wishlist/:item_id``

Modelo de los items:
```
{
    name: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 200},
    price: {type: Number, required: true},
    image_url: {type: String, required: true, max: 500},
    product_url: {type: String, required: true, max: 500},
}
```

Usa el puerto 3000
