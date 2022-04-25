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