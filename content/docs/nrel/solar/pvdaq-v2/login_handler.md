---
title: Login (Deprecated)
summary: 'Deprecated: We encourage you to migrate to [version 3](/docs/solar/pvdaq-v3/)
  of the PVDAQ API.'
url: POST /api/georeserv/login_handler
disqus: true
deprecated: true

---

# {{title}} <span class="url">({{url}})</span>
{{summary}}

Login to utilize access-controlled Georeserv services.

For login credentials, contact [Ryan Smith](mailto:ryan.smith@nrel.gov). Examples on how to use this service can be found in the [demo](/doc/solar/georeserv_demo.zip) project.

<ul id="toc"></ul>

## Request URL

<pre>GET /api/georesrv/login_handler?api_key=DEMO_KEY</pre>

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
        <p>Your developer API key. See <a href="/docs/api-key/">API keys</a> for more information. (URL Param)</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">login</th>
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
        <p>Username to login with. (POST Param)</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">password</th>
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
        <p>Password to login with. (POST Param)</p>
      </td>
    </tr>
  </tbody>
</table>

## Response

If the login is successful, a HTTP 302 redirect will be issued. Within the heders will be an authentication token which can be used in subsequent requests. (Also known as a cookie).

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour. No more than 10,000 requests may be made in any day.

## Errors

[Standard errors](/docs/errors) may be returned. In addition, the following service-specific errors may be returned:

<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col">HTTP Status Code</th>
      <th class="doc-parameters-required" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">401</th>
      <td class="doc-parameter-description">Unauthorized. The server was unable to validate your credentials.</td>
    </tr>
  </tbody>
</table>
