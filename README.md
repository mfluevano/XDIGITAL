# XD Challenge 😎

___


> Para probar  creamos la imagen y procedemos a su ejecucion en un contenedor  para esto dare dos caminos  porque cabe el caso que no tengan compose 


___ 
##  Esto es inmutable para ambos casos  
```
 $ docker build .\wraperAPI\ -t  xalapi
 $ docker build . -t  xalmysql
 $ docker run -d --rm --name mysql -p 3306:3306 
 $ docker run -d  --name apiChallenge -p 8000:8000 xalapi

 ```
