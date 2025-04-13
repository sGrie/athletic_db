import requests

url = "http://localhost:8001/schools"  # must match app.py
data = {
    "schoolName": "Test University",
    "mascot": "Tigers"
}

response = requests.post(url, json=data)
print("Status Code:", response.status_code)
try:
    print("Response JSON:", response.json())
except Exception:
    print("Raw Response Text:", response.text)

