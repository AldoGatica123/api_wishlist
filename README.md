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

Laboratorio 10
--------------------------

### Lab 1
- En este lab se realizó el sketch del frontend utilizando html y css. 
- El propósito del proyecto es de hacer una lista de cosas que quiero que me regalen.

### Lab 2 y 3
- En este lab se hizo el mismo diseño del frontend pero utilizando React.
- Se utilizó como base el código y estructura generado por Jetbrains.
- Se trabajó el diseño de la app, mostrando los objetos con una lista estática con los items. 
- Se utilizó localstorage junto a redux para manejar el estado de la aplicación.
- Se hicieron los métodos del CRUD integrado con los reductores.

### Lab 4
- Para este lab se hizo una aplicación en NodeJS.
- Se hizo una ruta en api/v1/hello para devolver un string con un string como parámetro de nombre.

### Lab 5
- Se utilizó como base el código y estructura generada por Jetbrains para un proyecto de Express.
- Se hizo una ruta /api/v1/wishlist con los métodos del CRUD con sus respectivas respuestas.
- Las acciones de los métodos se realizan en una lista con los objectos.

### Lab 6
- En este lab se hizo un cliente de mongoose para hacer una conexión a localhost
- Se hizo la estructura de los objetos con un schema.
- Los métodos del CRUD se modificaron para hacer las acciones en la base de datos.

### Lab 7
- Se añadió una dependencia a axios para realizar las llamadas del frontend al backend.
- Se hizo un cliente de redis para hacer una conexión a localhost en el backend.
- Los métodos de get del backend se modificaron para pedir los datos a redis antes de consultar a base de datos y guardarlos en redis cuando los consulte.

### Lab 8
- Se hicieron los Dockerfile para frontend y backend.
- Se subieron las imágenes a dockerhub.
- El docker-compose se añadió al proyecto para conectarse a contenedores de mongo y de redis.
- El proyecto de backend se modificó para pedir variables de entorno para las conexiones de los clientes de mongoose y redis.

### Lab 9
- Se crearon dos clústeres diferentes, uno para frontend y otro para backend
- Se hizo un servicio que corre un task que contiene las condiciones de comunicación entre contenedores de mongo, redis y el api
- Se hizo otro servicio para correr el contenedor de react

### Lab 10
- Se hizo las descripciones de los 
- Se hicieron load balancers para cada uno de los clústeres, exponiendo los servicios
