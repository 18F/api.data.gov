---
title: Get a page by ID
summary: Retrieve a page by its ID
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>http://api.data.gov/myusa/discovery/pages/:id<em>?parameters</em></pre>

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
        The Page ID
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">related</th>
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
        Number of related pages to return, must be between 0 and 25.
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

<pre>GET <a href="/myusa/discovery/pages/9.json?api_key=DEMO_KEY">/myusa/discovery/pages/9.json?api_key=DEMO_KEY</a></pre>

```json
{
   "id":9,
   "url":"http://foo.gov",
   "domain":{
      "hostname":"foo.gov",
      "hostname_hash":"421aa90e079fa326b6494f812ad13e79",
      "id":6
   },
   "path":"/",
   "tags":[
      {
         "id":23,
         "name":"web"
      },
      {
         "id":108,
         "name":"server"
      }
   ],
   "tag_list":"web, server",
   "title":"An example page",
   "related":[
      {
         "id":2,
         "url":"http://www.usa.gov/",
         "domain":{
            "hostname":"www.usa.gov",
            "hostname_hash":"ae77be06046330003e995de10534d79f",
            "id":2
         },
         "path":"/",
         "title":"USA.gov: The U.S. Government's Official Web Portal"
      },
      {
         "id":19,
         "url":"http://www.usa.gov/index.shtml",
         "domain":{
            "hostname":"www.usa.gov",
            "hostname_hash":"ae77be06046330003e995de10534d79f",
            "id":2
         },
         "path":"/index.shtml",
         "title":"USA.gov: The U.S. Government's Official Web Portal"
      }
   ]
}
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour

## Errors

[Standard errors](/docs/errors) may be returned.
