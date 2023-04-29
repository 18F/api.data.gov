---
title: API Key Usage
generalDocs: true
---

After [signing up](/signup/), you'll be given your own, unique API key. This 40 character string is your API key. The key:

- Uniquely identifies you.
- Gives you access to all APIs from agencies participating in api.data.gov's service.
- Should be kept private and should not be shared.

## Ways to Pass Your API Key

Your API key may be passed to the service in a few different ways. Pick which ever method is easiest for you.

### HTTP Header

Pass the API key into the `X-Api-Key` header:

```sh
curl -H 'X-Api-Key: DEMO_KEY' 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1'
```

### GET Query Parameter

In some cases, the API may support passing the API key into the `api_key` GET query string parameter:

```sh
curl 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=YOUR_KEY_HERE'
```

```
https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=YOUR_KEY_HERE
```

_Note:_ The GET query parameter may be used for non-GET requests (such as POST and PUT).

### HTTP Basic Auth Username

As an alternative, pass the API key as the username (with an empty password) using HTTP basic authentication:

```sh
curl 'https://YOUR_KEY_HERE@developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1'
```
