---
title: Web Service Rate Limits
kind: info

---

# Web Service Rate Limits

Limits are placed on the number of Data.gov Web service requests you may make using your API key.

- **Hourly Limit:** 1,000 requests per hour
- **Daily Limit:** 10,000 requests per calendar day

For each API key, these limits are applied across all Data.gov Web services requests. Exceeding these limits will lead to your API key being temporarily blocked from making further requests. Depending on the limit exceeded, the block will be lifted automatically by waiting until the next hour or calendar day.

## Understanding Rate Limit Time Periods

### Hourly Limit

The hourly counters for your API key reset at the beginning of every hour.

*Example:* If you started making requests at 10:00AM and made your 1,000th request of the hour at 10:40AM, your API key would become temporarily blocked. This temporary block of your API key would be lifted at 11:00AM, at which point you could make more web service requests (assuming you hadn't also exceeded your daily limit).

### Daily Limit

The daily counters for your API key reset at midnight [UTC](http://en.wikipedia.org/wiki/Coordinated_Universal_Time).

*Example:* If you started making requests at 00:00:00 UTC and made your 10,000th request of the day at 16:00:00 UTC, your API key would become temporarily blocked. This temporary block of your API key would be lifted at 00:00:00 UTC of the following day, at which point you could make more web service requests.

## Rate Limit Error Response

If your API key exceeds the rate limits, you will receive a response with an HTTP status code of 503, Service Unavailable. The response body will contain an error message reading "503 Service Unavailable (Rate Limit Exceeded)." For example, a JSON request that has exceed the rate limits would respond with:

```json
{
  "errors":[
    "503 Service Unavailable (Rate Limit Exceeded)"
  ]
}
```

For more details on how errors are returned, see the [general Web service errors](/docs/errors).

## Need Higher Limits?

If you're building an application that needs higher rate limits, we'd be happy to work with you. [Contact us](/contact) for more details.
