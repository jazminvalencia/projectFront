## instalar vue.js
## instalar mysql

## para correr el proyecto front
### npm run serve
el front corre en el localhost:8080

## para correr el back 
##  nodemon server.js
el back corre en el localhost:5678

para poder utilizar la base de datos primero se tendra que crear en el phpmyadmin
en este caso la base de datos se llama proyectodb
se deben de ejecutar los inserts de evaluations y statuses antes de que se de alta un prospecto

## para la tabla evaluations
 INSERT INTO `evaluations` (`id`, `tipo`, `createdAt`, `updatedAt`) VALUES
 (1, 'Autorizado', '2021-02-19 12:20:19', '2021-02-19 12:20:19'),
 (2, 'Rechazado', '2021-02-19 12:20:19', '2021-02-19 12:20:19');

## para la tabla statuses
 INSERT INTO `statuses` (`id`, `tipoEstatus`, `createdAt`, `updatedAt`) VALUES
(1, 'Enviado', '2021-02-19 12:22:49', '2021-02-19 12:22:49'),
 (2, 'Autorizado', '2021-02-19 12:22:49', '2021-02-19 12:22:49'),
 (3, 'Rechazado', '2021-02-19 12:22:49', '2021-02-19 12:22:49');



