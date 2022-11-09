# XD Challenge 😎

___


> Para probar  creamos la imagen y procedemos a su ejecucion en un contenedor 

```
 $ docker build . -t  xalapi
 $ docker run -d  --name apiChallenge -p 8000:8000 xalapi
 $ docker build . -t  xalmysql
 $ docker run -d --rm --name mysql -p 3306:3306 
xalmysql
$ docker ps
                 apiChallenge

 ```
