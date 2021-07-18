import json
from botocore.vendored import requests


def handler(event, context):
    path = event.get("path")
    a, username, repo = path.split("/", 2)
    r = requests.get(f'https://raw.githubusercontent.com/{username}/shortcut.codes/master/{repo}')
    return {
        'statusCode': 200,
        'body': r.text
    }
