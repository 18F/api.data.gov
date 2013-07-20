---
title: Last Updated Date
summary: Retrieve the date when the alternative fuel stations data were last updated.
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/nrel/alt-fuel-stations/v1/last-updated<em>.format?parameters</em></pre>

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
      <th class="doc-parameter-name" scope="row">format</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>json</em>, <em>xml</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The output response format.</p>
      </td>
    </tr>
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
        <p>Your developer API key. See <a href="/doc/api-key">API keys</a> for more information.</p>
      </td>
    </tr>
  </tbody>
</table>

## Response Fields



<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col">Field</th>
      <th class="doc-parameters-value" scope="col">Value</th>
      <th class="doc-parameters-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">last_updated</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> datetime
        </div>
        <div class="doc-parameter-value-field"></div>
      </td>
      <td class="doc-parameter-description">
        <p>The time the alternative fuel stations data was last updated (<a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> format).</p>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="/nrel/alt-fuel-stations/v1/last-updated.json?api_key=DEMO_KEY">/nrel/alt-fuel-stations/v1/last-updated.json?api_key=DEMO_KEY</a></pre>

```json
{
  "last_updated": "2012-04-06T13:48:16Z"
}
```

### XML Output Format

<pre>GET <a href="/nrel/alt-fuel-stations/v1/last-updated.xml?api_key=DEMO_KEY">/nrel/alt-fuel-stations/v1/last-updated.xml?api_key=DEMO_KEY</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<alt-fuel-stations>
  <last-updated type="datetime">2012-04-06T13:48:16Z</last-updated>
</alt-fuel-stations>
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour. No more than 10,000 requests may be made in any day.

## Errors

[Standard errors](/docs/errors) may be returned.
