create database BDD_vinos;
use BDD_vinos;
create table Productos (
id INT primary key auto_increment,
NOMBRE varchar(100) NOT NULL,
STOCK varchar(50) not null
);

create table Categoría (
id INT primary KEY auto_increment,
NOMBRE varchar(100) NOT NULL);

create table Clientes(
id INT primary KEY auto_increment,
NOMBRE varchar(100) NOT NULL,
APELLIDO varchar(100) NOT NULL,
DNI varchar(20) NOT NULL);

insert into clientes (id, nombre, apellido, dni)
values
(1, "Pedro", "Arnold", "17048738"),
(2, "Roxana", "Romero", "36246800"),
(3, "Roberto", "Alfonzo", "23976543"),
(4, "Hernán", "Delia", "30645398"),
(5, "Ricardo", "Togno", "18983650"),
(6, "Verónica", "Ontivero", "24906821"),
(7, "Ignacio", "Andrade", "20637892"),
(8, "Patricia", "Rocha", "30728900"),
(9, "Sonia", "Iusef", "19034678"),
(10,"Ernesto", "Farias", "28903467");
 

insert into categoría (id, nombre)
values
(1, "vino_tinto"), 
(2, "vino_blanco"), 
(3, "vino_rosado");


insert into productos (id, nombre, stock, id_categoria)
values
(01, "Cabernet Sauvignon", 490,1),
(02, "Pinot Noir", 380, 1),
(03, "Merlot", 278, 1),
(04,"Syrah", 268, 1),
(05,"Carmenere", 286,1),
(06,"Malbec", 372, 1),
(018,"Chardonnay", 178, 2),
(07,"Sauvignon blanc", 374, 2),
(08,"Riesling", 387, 2),
(09,"Pinot Gris", 418, 2),
(010,"Pinot blanc", 267, 2),
(011,"Gewürztraminer", 376, 2),
(012, "Moscatel", 296, 2),
(013, "Viognier", 324, 2),
(014, "Domaine Lafage Miraflors", 169, 3),
(015, "Chivite Las Fincas Rosado",278,3),
(016, "Miraval Rosé", 359, 3),
(017, "Ripa Rosado", 274, 3);

alter table productos
add id_categoria int;

