---
title: Pages by tag
summary: Retrieve a page by tag(s)
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>http://api.data.gov/myusa/discovery/tags/:tag.json<em>?parameters</em></pre>

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
      <th class="doc-parameter-name" scope="row">tag</th>
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
        Tag or comma separated list of tags
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="/myusa/discovery/tags/foo.json?api_key=DEMO_KEY">/myusa/discovery/tags/foo.json?api_key=DEMO_KEY</a></pre>

```json
[
   {
      "id":1,
      "url":"http://foo.gov/",
      "domain":{
         "hostname":"foo.gov",
         "hostname_hash":"d698d23550e89505e47299871d4e5f1d",
         "id":1
      },
      "path":"/",
      "tags":[
         {
            "id":1,
            "name":"foo"
         },
         {
            "id":2,
            "name":"bar"
         }
      ],
      "tag_list":"foo, bar",
      "title":null
   }
]
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour. No more than 10,000 requests may be made in any day.

## Errors

[Standard errors](/docs/errors) may be returned.
