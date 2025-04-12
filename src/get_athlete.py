import requests

response = requests.get("http://127.0.0.1:8001/athletes")

print(response.status_code)
print(response.json())
