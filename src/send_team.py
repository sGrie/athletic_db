import requests

url = "http://127.0.0.1:8001/create-team"

data = {
    "teamName": "Panthers",            
    "sport": "Basketball",
    "conference": "Big East",
    "headCoach": "Coach Carter",        
    "schoolID": 1
}

response = requests.post(url, json=data)

print("Status Code:", response.status_code)
print("Response Text:", response.text)
