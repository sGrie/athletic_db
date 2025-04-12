import requests

url = "http://127.0.0.1:8001/schools"  # make sure backend is running!

data = {
    "schoolName": "Test University",
    "mascot": "Tigers"
}

response = requests.post(url, json=data)

print("Status Code:", response.status_code)
print("Response:", response.json())
