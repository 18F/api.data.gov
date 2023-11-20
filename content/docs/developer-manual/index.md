---
title: Developer Manual
aliases:
  - /docs/errors/
  - /docs/api-key/
  - /docs/rate-limits/
csp:
  styleSrc:
    # Syntax highlighting
    - "'unsafe-inline'"
---

- [API Key Usage](#api-key-usage)
- [Web Service Rate Limits](#web-service-rate-limits)
- [General Web Service Errors](#general-web-service-errors)

## API Key Usage

After signing up, you'll be given your own, unique API key. This 40 character string is your API key. The key:

- Uniquely identifies you.
- Gives you access to all APIs from agencies participating in api.data.gov's service.
- Should be kept private and should not be shared.

### Ways to Pass Your API Key

Your API key may be passed to the service in a few different ways. Pick which ever method is easiest for you.

#### HTTP Header

Pass the API key into the `X-Api-Key` header:

```sh
curl -H 'X-Api-Key: DEMO_KEY' 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1'
```

#### GET Query Parameter

In some cases, the API may support passing the API key into the `api_key` GET query string parameter:

```sh
curl 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=YOUR_KEY_HERE'
```

```
https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=YOUR_KEY_HERE
```

_Note:_ The GET query parameter may be used for non-GET requests (such as POST and PUT).

#### HTTP Basic Auth Username

As an alternative, pass the API key as the username (with an empty password) using HTTP basic authentication:

```sh
curl 'https://YOUR_KEY_HERE@developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1'
```

## Web Service Rate Limits

Limits are placed on the number of API requests you may make using your API key. Rate limits may vary by service, but the defaults are:

- **Hourly Limit:** 1,000 requests per hour

For each API key, these limits are applied across all api.data.gov API requests. Exceeding these limits will lead to your API key being temporarily blocked from making further requests. The block will automatically be lifted by waiting an hour. If you need higher rate limits, [contact us](/contact).

### DEMO_KEY Rate Limits

In documentation examples, the special `DEMO_KEY` api key is used. This API key can be used for initially exploring APIs prior to signing up, but it has much lower rate limits, so you're encouraged to signup for your own API key if you plan to use the API (signup is quick and easy). The rate limits for the DEMO_KEY are:

- **Hourly Limit:** 30 requests per IP address per hour
- **Daily Limit:** 50 requests per IP address per day

### How Do I See My Current Usage?

Your can check your current rate limit and usage details by inspecting the `X-RateLimit-Limit` and `X-RateLimit-Remaining` HTTP headers that are returned on every API response. For example, if an API has the default hourly limit of 1,000 request, after making 2 requests, you will receive these HTTP headers in the response of the second request:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 998
```

### Understanding Rate Limit Time Periods

#### Hourly Limit

The hourly counters for your API key reset on a rolling basis.

_Example:_ If you made 500 requests at 10:15AM and 500 requests at 10:25AM, your API key would become temporarily blocked. This temporary block of your API key would cease at 11:15AM, at which point you could make 500 requests. At 11:25AM, you could then make another 500 requests.

### Rate Limit Error Response

If your API key exceeds the rate limits, you will receive a response with an HTTP status code of 429 (Too Many Requests).

### Need Higher Limits?

If you're building an application that needs higher rate limits, please reach out to the agency responsible for the API you would like higher rate limits for.

## General Web Service Errors

Certain, general errors will be returned in a standardized way from all API Umbrella web services. Additional, service-specific error messages may also be returned (see individual service documentation for those details). The following list describes the general errors any application may return:

<table border="0" cellpadding="0" cellspacing="0" class="table table-borderless table-hover doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col">Error Code</th>
      <th class="doc-parameters-name" scope="col">HTTP Status Code</th>
      <th class="doc-parameters-required" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">API_KEY_MISSING</th>
      <td class="doc-parameter-name">403</td>
      <td class="doc-parameter-description">
        An API key was not supplied. See <a href="/docs/api-key/">API key usage</a> for details on how to pass your API key to the API.
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">API_KEY_INVALID</th>
      <td class="doc-parameter-name">403</td>
      <td class="doc-parameter-description">
        An invalid API key was supplied. Double check that the API key being passed in is valid, or signup for an API key.
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">API_KEY_DISABLED</th>
      <td class="doc-parameter-name">403</td>
      <td class="doc-parameter-description">
        The API key supplied has been disabled by an administrator. Please <a href="/contact/">contact us</a> for assistance.
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">API_KEY_UNAUTHORIZED</th>
      <td class="doc-parameter-name">403</td>
      <td class="doc-parameter-description">
        The API key supplied is not authorized to access the given service. Please <a href="/contact/">contact us</a> for assistance.
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">API_KEY_UNVERIFIED</th>
      <td class="doc-parameter-name">403</td>
      <td class="doc-parameter-description">
        The API key supplied has not been verified yet. Please check your e-mail to verify the API key. Please <a href="/contact/">contact us</a> for assistance.
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">HTTPS_REQUIRED</th>
      <td class="doc-parameter-name">400</td>
      <td class="doc-parameter-description">
        Requests to this API must be made over HTTPS. Ensure that the URL being used is over HTTPS.
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">OVER_RATE_LIMIT</th>
      <td class="doc-parameter-name">429</td>
      <td class="doc-parameter-description">
        The API key has exceeded the rate limits. See <a href="/docs/rate-limits/">rate limits</a> for more details or <a href="/contact/">contact us</a> for assistance.
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">NOT_FOUND</th>
      <td class="doc-parameter-name">404</td>
      <td class="doc-parameter-description">
        An API could not be found at the given URL. Check your URL.
      </td>
    </tr>
  </tbody>
</table>

### Error Response Body

The error response body will contain an error code value from the table above and a brief description of the error. The descriptions are subject to change, so it's suggested any error handling use the HTTP status code or the error code value for error handling (and not the content of the message description).

#### Error Message Response Formats

Depending on the detected format of the request, the error message response may be returned in JSON, XML, CSV, or HTML. Requests of an unknown format will return errors in JSON format.

##### JSON Example

```json
{
  "error": {
    "code": "API_KEY_MISSING",
    "message": "No api_key was supplied. Get one at https://api.data.gov"
  }
}
```

##### XML Example

```xml
<response>
  <error>
    <code>API_KEY_MISSING</code>
    <message>No api_key was supplied. Get one at https://api.data.gov</message>
  </error>
</response>
```

##### CSV Example

```csv
Error Code,Error Message
API_KEY_MISSING,No api_key was supplied. Get one at https://api.data.gov
```

##### HTML Example

```html
<html>
  <body>
    <h1>API_KEY_MISSING</h1>
    <p>No api_key was supplied. Get one at https://api.data.gov</p>
  </body>
</html>
```
