# Integracion 
[![test](https://github.com/mfluevano/XDIGITAL/actions/workflows/main.yml/badge.svg)](https://github.com/mfluevano/XDIGITAL/actions/workflows/main.yml)
 

## Requisitos 
 * ##### Nodde js 12 o superior
 * ##### Docker 
 * ##### Docker Compose
 * ##### Angular CLI

> Probar

Primero una vez clonado el repositorioi y en raiz del proyecto  ejecutamos lo sigioente
```
$ docker-compose build
$ docker-compose up -d
```

Una ves inicien los conternedores lo cual podemos revsar  con

```
$ docker-compose ps
o $ docker ps
```
 procedemos a entrar al proyecto del front end y ejecutarlo con el proxy  que viene confihuradp de la siguiente manera

```

$ cd frontend\xalFront 
$ npm run start:proxy

```

 ## Changelog
 ___
*	Jueves  17 de noviembre 2022 18:19 pm

	* Primera Carga Funcional 

