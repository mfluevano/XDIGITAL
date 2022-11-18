import pymysql


class vuelosDb:
    def __init__(self) -> None:
        self.connection = pymysql.connect(
        # si se ejecuta sin  correr desde docker ya sea con nginx o con uvicorn  el host es localhost o  el ip de l servidor
        #host con valor mysql solo funciona si se ejecuta desde el docker-compose up -d        
            host='mysql',
            user='root',
            password='root',
            db='vuelosdb'
        )
        self.cursor = self.connection.cursor()

    def aeropuerto(self):
        sql = f"""
        SELECT 
            max(aeropuertos.nombre_aerolinea), Vuelos.id_aeropuerto,Vuelos.id_aerolinea,COUNT(Vuelos.id_aeropuerto)
        FROM 
            Vuelos 
        INNER JOIN 
            aeropuertos
        ON
            Vuelos.id_aeropuerto = aeropuertos.id_aeropuerto
        GROUP BY  
            Vuelos.id_aeropuerto,Vuelos.id_aerolinea
        ORDER BY 
            COUNT(Vuelos.id_aeropuerto) DESC
        LIMIT 1"""

        try:
            self.cursor.execute(sql)
            reg = self.cursor.fetchall()
            return reg
        except Exception as e:
            raise

    def aerolinea(self):
        sql = f"""
        SELECT 
            MAX(aerolineas.nombre_aerolinea),Vuelos.id_aerolinea,COUNT(Vuelos.id_aerolinea)
        FROM 
            Vuelos 
        INNER JOIN 
            aerolineas
        ON
            Vuelos.id_aerolinea= aerolineas.id_aerolinea
        GROUP BY
            Vuelos.id_aerolinea,Vuelos.id_aeropuerto
        ORDER BY  
            COUNT(Vuelos.id_aerolinea) DESC
        LIMIT 1
            """
        try:
            self.cursor.execute(sql)
            reg = self.cursor.fetchall()
            return reg
        except Exception as e:
            raise

    def dia(self):
        sql = f"""
        SELECT 
            fecha,COUNT(*)
        FROM 
            Vuelos 
        GROUP BY  
            fecha
        ORDER BY 
            COUNT(*) DESC 
        LIMIT 1
        """
        try:
            self.cursor.execute(sql)
            reg = self.cursor.fetchall()
            return reg
        except Exception as e:
            raise

    def afluencia(self):
        sql = f"""
        SELECT 
            aerolineas.nombre_aerolinea ,Vuelos.fecha,COUNT(*)
        FROM 
            Vuelos 
        INNER JOIN
            aerolineas
        ON
            Vuelos.id_aerolinea=aerolineas.id_aerolinea
        GROUP BY  
            aerolineas.nombre_aerolinea,Vuelos.fecha
        HAVING
            COUNT(*)>1
        """
        try:
            self.cursor.execute(sql)
            reg = self.cursor.fetchall()
            return reg
        except Exception as e:
            raise


async def aeropuerto():
    db = vuelosDb()
    return db.aeropuerto()
async def aerolinea():
    db= vuelosDb()
    return db.aerolinea()
async def dia():
    db= vuelosDb()
    return db.dia()
async def afluencia():
    db= vuelosDb()
    return db.afluencia()
    
