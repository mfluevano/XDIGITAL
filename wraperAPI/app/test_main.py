
from fastapi.testclient import TestClient
from .main import app
from .apistack import getList

client =TestClient(app)

def test_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Message": "I XalDigital 😎"}
