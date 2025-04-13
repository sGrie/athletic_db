import requests

url = "http://127.0.0.1:8001/create-athlete"

data = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 20,
    "mainEvent": "100m Sprint",
    "teamID": 1  # the ID of the team you just created
}

response = requests.post(url, json=data)
print(response.status_code)
print(response.json())
