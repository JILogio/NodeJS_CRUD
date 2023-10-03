# **NodeJS_CRUD y MVC**
## Modelo MVC con nodeJS y express_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

MVC es una propuesta de arquitectura del software utilizada para separar el código por sus distintas responsabilidades en tres capas diferentes, acotadas por su responsabilidad, en lo que se llaman Modelos, Vistas y Controladores

## ¿Por qué?
> Crear aplicaciones con mayor calidad.
>
> Facilita el control de requisitos de acceso
> 
> Simplifica el diseño
> 
> Tiene más escabilidad
> 
> Mejor rendimiento
> 
> Software más robusto

## Partes
- Modelo: la capa donde se trabaja con los datos, por tanto contendrá mecanismos para acceder a la información y también para actualizar su estado.
- Vista: visualización de las interfaces de usuario, o sea, el código que nos permitirá renderizar los estados de nuestra aplicación en HTML.
- Controlador: acciones que se solicitan en la aplicación, como visualizar un elemento, realizar una compra, una búsqueda de información, etc.

## Herramientas
- NodeJS: entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del
servidor
- ExpressJS: framework web mínimo y flexible para Node.js
- Angular: framework MVC de JavaScript para el desarrollo web que permite crear
Single-Page Applications (SPA)
- Bootstrap: framework que contiene plantillas de
diseño

## Arquitectura del framework
![](https://jarroba.com/wp-content/uploads/2014/07/MEAN_arquitectura_jarroba.png)

- BASE DE DATOS: encargado del almacenamiento de datos, en el cual se va a utilizar en la aplicación
- API REST: servidor será el encargado de recuperar los datos de la base de datos, gestionar la autenticación (contra la misma base de datos) y exponer una API para que la aplicación
- FRONTEND: parte del cliente, puede comunicarse fácilmente con el servidor, hablando el mismo idioma (JSON), ofreciendo una experiencia de usuario

**Referencias**
- https://riuma.uma.es/xmlui/bitstream/handle/10630/11484/Carreño%20Villalba_TFG.pdf?sequence=1
- https://desarrolloweb.com/articulos/que-es-mvc.html
