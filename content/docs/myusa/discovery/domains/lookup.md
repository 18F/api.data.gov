---
title: Domain Query
summary: Lookup domains by reverse name
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>http://api.data.gov/myusa/discovery/domains<em>?parameters</em></pre>

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
      <th class="doc-parameter-name" scope="row">q</th>
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
        The reverse domain with trailing slash, e.g., gov. or gov.whitehouse.
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">page</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        Page to retrieve. Results limited to 25 domains per page. Default page is 1
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

<pre>GET <a href="/myusa/discovery/domains?api_key=DEMO_KEY&amp;q=gov.whitehouse.">/myusa/discovery/domains?api_key=DEMO_KEY&amp;q=gov.whitehouse.</a></pre>

```json
[
    {
        "hostname": "www.whitehouse.gov",
        "hostname_hash": "2bbabfeb3e5af2bd5f8fcd6f494e5482",
        "id": 3,
        "pages": [
            {
                "id": 3,
                "url": "http://www.whitehouse.gov/",
                "domain": {
                    "hostname": "www.whitehouse.gov",
                    "hostname_hash": "2bbabfeb3e5af2bd5f8fcd6f494e5482",
                    "id": 3
                },
                "path": "/",
                "title": "The White House - President Barack Obama",
                "avg_rating": "3.5",
                "num_rating": 4
            },
            {
                "id": 98,
                "url": "http://www.whitehouse.gov/live/president-obama-speaks-fiscal-cliff-0",
                "domain": {
                    "hostname": "www.whitehouse.gov",
                    "hostname_hash": "2bbabfeb3e5af2bd5f8fcd6f494e5482",
                    "id": 3
                },
                "path": "/live/president-obama-speaks-fiscal-cliff-0",
                "title": "Featured Videos",
                "avg_rating": null,
                "num_rating": 0
            },
            {
                "id": 101,
                "url": "http://www.whitehouse.gov/about/inside-white-house/west-wing-tour",
                "domain": {
                    "hostname": "www.whitehouse.gov",
                    "hostname_hash": "2bbabfeb3e5af2bd5f8fcd6f494e5482",
                    "id": 3
                },
                "path": "/about/inside-white-house/west-wing-tour",
                "title": "West Wing Tour",
                "avg_rating": null,
                "num_rating": 0
            }
            ...
        ]
    },
    {
        "hostname": "whitehouse.gov",
        "hostname_hash": "6e18908ffd4924525ee5e2a4ceb32803",
        "id": 96,
        "pages": [
            {
                "id": 210,
                "url": "http://whitehouse.gov/",
                "domain": {
                    "hostname": "whitehouse.gov",
                    "hostname_hash": "6e18908ffd4924525ee5e2a4ceb32803",
                    "id": 96
                },
                "path": "/",
                "title": "The White House - President Barack Obama",
                "avg_rating": null,
                "num_rating": 0
            }
        ]
    }
]
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour

## Errors

[Standard errors](/docs/errors) may be returned.
