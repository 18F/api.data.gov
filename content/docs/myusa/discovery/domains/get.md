---
title: Domain Lookup
summary: Lookup domains by ID
---

# <%= @item[:title] %>
<%= @item[:summary] %>

## Request URL

<pre>http://api.data.gov/myusa/discovery/domains/:id<em>?parameters</em></pre>

## Request Parameters

<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col">Parameter</th>
      <th class="doc-parameters-required" scope="col">Required</th>
      <th class="doc-parameters-value" scope="col">Value</th>
      <th class="doc-parameters-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">api_key</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Your developer API key. See <a href="/doc/api-key">API key usage</a> for more information.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">id</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        The domain ID
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">callback</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        Optional JSONP callback with which to wrap the response
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="/myusa/discovery/domains/1?api_key=DEMO_KEY">/myusa/discovery/domains/1?api_key=DEMO_KEY</a></pre>

```json
{
    "hostname": "www.usa.gov",
    "hostname_hash": "ae77be06046330003e995de10534d79f",
    "id": 2,
    "pages": [
        {
            "id": 2,
            "url": "http://www.usa.gov/",
            "domain": {
                "hostname": "www.usa.gov",
                "hostname_hash": "ae77be06046330003e995de10534d79f",
                "id": 2
            },
            "path": "/",
            "title": "USA.gov: The U.S. Government's Official Web Portal",
            "avg_rating": "3.6",
            "num_rating": 5
        },
        {
            "id": 205,
            "url": "http://www.usa.gov/Contact.shtml",
            "domain": {
                "hostname": "www.usa.gov",
                "hostname_hash": "ae77be06046330003e995de10534d79f",
                "id": 2
            },
            "path": "/Contact.shtml",
            "title": "Contact Your Government | USA.gov",
            "avg_rating": null,
            "num_rating": 0
        }
        ...
    ]
}
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour. No more than 10,000 requests may be made in any day.

## Errors

[Standard errors](/docs/errors) may be returned.
