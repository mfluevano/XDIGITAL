from fastapi import FastAPI


app = FastAPI()
app.title ="Challenge API"

@app.get("/")
def home():
    return {"status":"ok"}
@app.get("/answer")
def answers():
    pass
@app.get("/d11")
def d11():
    pass
@app.get("/d12")
def d12():
    pass
@app.get("/d13")
def d13():
    pass
@app.get("/d14")
def d14():
    pass
@app.get("/d15")
def d15():
    pass
@app.get("/d16")
def d16():
    pass
@app.get("/d17")
def d17():
    pass
@app.get("/d18")
def d18():
    pass
