---
title: Broadband Providers
summary: Search for all providers with a specified name.
---

# <%= @item[:title] %>
<%= @item[:summary] %>

## Request URL

<pre>GET http://api.data.gov/fcc/broadbandmap/provider<em>?parameters</em></pre>

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
          <strong>Type:</strong> string</div>

        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>xml</em>
        </div>

        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>json</em>, <em>jsonp</em>, <em>xml</em>
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
          <strong>Type:</strong> string</div>

        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>Your developer API key. See <a href="/doc/api-key">API keys</a> for more information.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">callback</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string</div>

        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None</div>
      </td>
      <td class="doc-parameter-description">
        <p>JSONP callback function name.</p>
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
      <th class="doc-parameter-name" scope="row">status</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string</div>
      </td>
      <td class="doc-parameter-description">A status code representing whether the request succeeded or failed.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">responseTime</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer</div>
      </td>
      <td class="doc-parameter-description">The amount of time taken to process the request (in milliseconds).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">message</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array</div>
      </td>
      <td class="doc-parameter-description">An array of warnings or error messages related to the current web service call.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">Results</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array</div>
      </td>
      <td class="doc-parameter-description">An array of provider company records returned. See <a href="#provider-company-record-fields">provider company record fields</a> for response details.</td>
    </tr>
  </tbody>
</table>

### Provider Company Record Fields

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
      <th class="doc-parameter-name" scope="row">holdingCompanyNumber</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string</div>
      </td>
      <td class="doc-parameter-description">The ID number of the provider company.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">holdingCompanyName</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string</div>
      </td>
      <td class="doc-parameter-description">The name of the provider company.</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="/fcc/broadbandmap/provider?api_key=DEMO_KEY&amp;format=json">/fcc/broadbandmap/provider?api_key=DEMO_KEY&amp;format=json</a></pre>

```json
{
  "status":"OK",
  "responseTime":8,
  "message":[],
  "Results":[
    {
      "holdingCompanyNumber":"130693",
      "holdingCompanyName":"Keystone Farmers Cooperative Telephone Company"
    },
    {
      "holdingCompanyNumber":"131082",
      "holdingCompanyName":"Qwest Communications International, Inc."
    },
    {
      "holdingCompanyNumber":"170046",
      "holdingCompanyName":"Gilmer Cable Television, Inc."
    },
    ...
  ]
}
```

### XML Output Format

<pre>GET <a href="/fcc/broadbandmap/provider?api_key=DEMO_KEY&amp;format=xml">/fcc/broadbandmap/provider?api_key=DEMO_KEY&amp;format=xml</a></pre>

```xml
<?xml version="1.0" ?>
<Response responseTime="11" status="OK">
  <Results>
    <holdingCompanyNumber>
      130693
    </holdingCompanyNumber>
    <holdingCompanyName>
      Keystone Farmers Cooperative Telephone Company
    </holdingCompanyName>
  </Results>
  <Results>
    <holdingCompanyNumber>
      131082
    </holdingCompanyNumber>
    <holdingCompanyName>
      Qwest Communications International, Inc.
    </holdingCompanyName>
  </Results>
  <Results>
    <holdingCompanyNumber>
      170046
    </holdingCompanyNumber>
    <holdingCompanyName>
      Gilmer Cable Television, Inc.
    </holdingCompanyName>
  </Results>
  ...
</Response>
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour. No more than 10,000 requests may be made in any day.

## Errors

[Standard errors](/docs/errors) may be returned.
