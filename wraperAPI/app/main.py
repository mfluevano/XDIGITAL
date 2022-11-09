# Python
from typing import Optional
import json
# FastAPI
from fastapi import FastAPI, HTTPException
from fastapi import Body, Query, Path
from pydantic import BaseModel
# external
from .apistack import getList
from .database import vuelosanio
app = FastAPI()


class response(BaseModel):
    data: dict
    status: str


@app.get("/")
def root():
    return {"Message": "Hi XalDigital 😎"}
#Obtener sumatoria de preguntas respondidas y sin respuesta 
@app.get(
    "/api/data", 
    response_model=response,
    status_code= 201,
    )
async def get_data_api():
    """
# Get Data Api
> Obtiene un arreglo con el numero de preguntas contestadas y no contestadas
___
## Partemetros
    - No aplica
## Respuesta
    - response {data: dict , status:(succes|error)}
    """

    data = await getList()
    if not data:
        raise HTTPException(status_code=404)

    answered = sum(x['is_answered'] == True for x in data['items'])
    notanswered = sum(x['is_answered'] == False for x in data['items'])
    return {"data": {
            "answered": answered,
            "notanswered": notanswered
            }, "status": "succes"}

# Mayor Reputacion 
@app.get(
    "/api/topreputation",
    response_model= response,
    status_code= 201,
)
async def get_questions():
    """
# Top Reputation 
> Obtiene el elemento con mayor reputacion
___
## Partemetros
    - No aplica
## Respuesta
    - response {data: dict , status:(succes|error)}
    """
    data = await getList()
    if not data:
        raise HTTPException(status_code=404)
    elem,max = 0, 0
    for index, x in enumerate(data['items'], start=1):

        if x['owner']['reputation'] > max:
            elem = index
            max = x['owner']['reputation']

    resp = data['items'][elem-1]

    return {"data": resp, "status": "success"}

#Menor vista
@app.get(
    "/api/lessview",
    response_model= response,
    status_code= 201,)
async def get_top():
    """
# Lessview
> Obtiene un el elemento con menor numero de vistas
___
## Partemetros
    - No aplica
## Respuesta
    - response {data: dict , status:(succes|error)}
    """
    data = await getList()
    if not data:
        raise HTTPException(status_code=404)
    elem,max = 0, 100000
    for index, x in enumerate(data['items'], start=1):

        if x['view_count'] < max:
            elem = index
            max = x['view_count']

    resp = data['items'][elem-1]

    return {"data": resp, "status": "success"}

@app.get("/api/oldernew",
    status_code= 201,)
async def oldnew():
    """
# Oldernew
> Obtiene un arreglo con el elemento mas viejo y mas nuevo
___
## Partemetros
    - No aplica
## Respuesta
    - response {data: dict , status:(succes|error)}
    """
    data = await getList()
    if not data:
        raise HTTPException(status_code=404)
    men, may =min(x['creation_date'] for x in data['items']) ,max(x['creation_date']  for x in data['items'])
    resp=list()
    for index, x in enumerate(data['items'], start=1):

        if x['creation_date'] == men:
            resp.append(data['items'][index -1])
        elif  x['creation_date'] == may:
            resp.append(data['items'][index -1])
            
    return {"data": resp, "status": "success"} 
@app.get("/api/console",
    status_code= 201,)
async def console():
    """
# Console
> Obtiene un arreglo con los elementos del 2 al 5 para imprimir en consola y a su ves imprime en consola de python en fastapi
___
## Partemetros
    - No aplica
## Respuesta
    - response {data: dict , status:(succes|error)}
    """
    data = await getList()
    if not data:
        raise HTTPException(status_code=404)
    resp = data['items'][2:5]
    print(resp)
    return {"data": resp, "status": "success"} 
@app.get("/api/topvuelos",
    status_code= 201,)
async def topvuelos():
    """
# Topvuelos
> Obtiene el aeropuerto con mayor numero de vuelos  separado por año 
___
## Partemetros
    - No aplica
## Respuesta
    - response {data: dict , status:(succes|error)}
    """

    resp = await vuelosanio()
    print(resp)
    return {"data":resp,"status": "succes"}