import requests

response = requests.get(url='https://catfact.ninja/fact')
print(response.json()['fact'])