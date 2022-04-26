---------------------------------------------------------------
--- BASE DE DATOS ---------------------------------------------
---------------------------------------------------------------
create database SEMI_PROYECTO
go

use SEMI_PROYECTO
go

create schema proyecto
go

---------------------------------------------------------------
--- BASE DE DATOS ---------------------------------------------
---------------------------------------------------------------
create table proyecto.Usuario(
	ID_usuario 		int primary key identity(1,1),
	Username 	    nvarchar(max),
    Nacionalidad    nvarchar(max),
    Edad            nvarchar(max),
    Password        nvarchar(max),
    Foto            nvarchar(max),
    Nombre_usuario  nvarchar(max)
);

create table proyecto.Lugar(
	ID_lugar 		int primary key identity(1,1),
	Nombre 	        nvarchar(max),
    Lugar  	        nvarchar(max),
    Foto	        nvarchar(max),
    Puntuacion	    nvarchar(max),
    Tipo	        nvarchar(max),
    Descripcion     nvarchar(max)
);

create table proyecto.Favorito(
	ID_usuario 		int,
	ID_lugar 	    int,
    constraint fk_ID_usuario foreign key (ID_usuario) references proyecto.Usuario(ID_usuario),
    constraint fk_ID_lugar foreign key (ID_lugar) references proyecto.Lugar(ID_lugar)
);


insert into proyecto.Usuario(Username, Nacionalidad, Edad, Password, Foto, Nombre_usuario)
values('hector', 'guatemalteco', '27', '1234', 'no hay', 'Hector Orozco')
go

insert into proyecto.Usuario(Username, Nacionalidad, Edad, Password, Foto, Nombre_usuario)
values('santiago', 'guatemalteco', '27', '1234', 'no hay', 'Santiago Rivadeneira')
go

insert into proyecto.Usuario(Username, Nacionalidad, Edad, Password, Foto, Nombre_usuario)
values('wilfred', 'guatemalteco', '24', '1234', 'no hay', 'Wilfred Solorzano')
go

insert into proyecto.Usuario(Username, Nacionalidad, Edad, Password, Foto, Nombre_usuario)
values('edwin', 'guatemalteco', '29', '1234', 'no hay', 'Edwin Lopez')
go

insert into proyecto.Lugar(Nombre, Lugar, Foto, Puntuacion, Tipo, Descripcion)
values('Tikal', 'Peten', 'No hay', '4', 'Ruina', 'Ruina Maya')
go

insert into proyecto.Lugar(Nombre, Lugar, Foto, Puntuacion, Tipo, Descripcion)
values('Semuc Champey', 'Alta Verapaz', 'No hay', '5', 'Rio', 'Nacimiento de agua')
go

insert into proyecto.Lugar(Nombre, Lugar, Foto, Puntuacion, Tipo, Descripcion)
values('Irtra Petapa', 'Guatemala', 'No hay', '4.5', 'Parque Recreativo', 'Parque de diverciones')
go

insert into proyecto.Lugar(Nombre, Lugar, Foto, Puntuacion, Tipo, Descripcion)
values('San Juan la Laguna', 'Solola', 'No hay', '3', 'Sitio Turistico', 'Ciudad Turistica')
go

insert into proyecto.Favorito(ID_usuario, ID_lugar)
values(1,1)
go

insert into proyecto.Favorito(ID_usuario, ID_lugar)
values(1,2)
go
