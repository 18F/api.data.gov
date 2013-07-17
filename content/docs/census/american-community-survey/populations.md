---
title: Populations - All States
summary: Return the populations of all states.
---

# <%= @item[:title] %>
<%= @item[:summary] %>

## Request URL

`GET http://api.data.gov/census/american-community-survey/v1/{year}/populations?parameters`

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
      <th class="doc-parameter-name" scope="row">year</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer</div>

        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None</div>

        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>2010</em>, <em>2011</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The American Community Survey year to pick.</p>
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
  </tbody>
</table>

## Examples

### JSON Output Format

<div class="doc-example-url">GET <a href="http://api.data.gov/census/american-community-survey/v1/2011/populations?api_key=DEMO_KEY">http://api.data.gov/census/american-community-survey/v1/2011/populations?api_key=DEMO_KEY</a></div>

```json
[
  ["B02001_001E","NAME","state"],
  ["4747424","Alabama","01"],
  ["700703","Alaska","02"],
  ["6337373","Arizona","04"],
  ["2895928","Arkansas","05"],
  ["36969200","California","06"],
  ...
]
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour. No more than 10,000 requests may be made in any day.

## Errors

[Standard errors](/docs/errors) may be returned.
