import requests

# URL of your backend server
url = "http://127.0.0.1:8001/schools"

# Send a GET request
response = requests.get(url)

# Print out the status code and the data
print("Status Code:", response.status_code)
try:
    print("Response JSON:", response.json())
except Exception:
    print("Response Text:", response.text)
