---
title: API Key Usage
hidden_child: true

---

# API Key Usage

After [signing up](/signup), you'll be given your own, unique API key. This 40 character string is your API key. The key:

- Uniquely identifies you.
- Gives you access to Data.gov's Web services.
- Should be kept private and should not be shared.

To use your key, simply pass the key as a URL query parameter when making Web service requests. For example:

```
GET https://api.data.gov/nrel/alt-fuel-stations/v1.json?limit=1&api_key=YOUR_KEY_HERE
```

## Ways to Pass Your API Key

Your API key may be passed to the service in a few different ways. Pick which ever method is easiest for you.

### HTTP Header

Pass the API key into the `X-Api-Key` header:

```sh
curl -H 'X-Api-Key: DEMO_KEY' 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?limit=1'
```

### GET Query Parameter

Pass the API key into the `api_key` GET query string parameter:

```sh
curl 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?limit=1&api_key=YOUR_KEY_HERE'
```

*Note:* The GET query parameter may be used for non-GET requests (such as POST and PUT).

### HTTP Basic Auth Username

As an alternative, pass the API key as the username (with an empty password) using HTTP basic authentication:

```sh
curl 'https://YOUR_KEY_HERE@api.data.gov/nrel/alt-fuel-stations/v1.json?limit=1'
```
