import pymysql

class vuelosDb:
    def __init__(self) -> None:
        self.connection = pymysql.connect(
            host='localhost',
            user='root',
            password='root',
            db='vuelosdb'
        )
        self.cursor = self.connection.cursor()


    def select_vuelos(self):
        sql ='SELECT * from vuelos '
        try:
            self.cursor.execute(sql)
            vuelos = self.cursor.fetchall()
            return vuelos

        except Exception as e :
            raise

async def vuelosanio():
    db = vuelosDb()
    return db.select_vuelos()