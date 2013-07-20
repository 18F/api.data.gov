---
title: Sites Metadata
summary: Fetch metadata for PVDAQ sites.
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>GET https://api.data.gov/nrel/pvdaq/v3/sites<em>.format?parameters</em></pre>

## HTTP Basic Authentication

For PVDAQ services, in addition to your developer API key, you must also provide a username and password for your PVDAQ account via [HTTP Basic Authentication](http://en.wikipedia.org/wiki/Basic_access_authentication). For login credentials, contact [Ryan Smith](ryan.smith@nrel.gov).

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
        <p>The output response format. Given in the URL as the file extension.</p>
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
    <tr>
      <th class="doc-parameter-name" scope="row">system_id</th>
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
        <p>Return only the system with the given ID. Will only return systems your PVDAQ user account has access to.</p>
        <p>If left empty, all systems available to your PVDAQ user account will be returned.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">user_id</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">For PVDAQ admin user accounts only. Return only systems belonging to the given username.</td>
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
      <th class="doc-parameter-name" scope="row">outputs</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>An array of records describing each site.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">errors</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>If errors were encountered, a list describing each error. Errors will be returned with an HTTP status code of 422 (<span>Unprocessable Entity).</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">warnings</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>List of warnings, including information about API deprecations.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">infos</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>List of additional, non-error information.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">inputs</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> record
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>List of request parameters given.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">version</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The current version of the web service.</p>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="https://api.data.gov/nrel/pvdaq/v3/sites.json?api_key=DEMO_KEY&amp;system_id=2">https://api.data.gov/nrel/pvdaq/v3/sites.json?api_key=DEMO_KEY&amp;system_id=2</a></pre>

```json
{
  "errors": [],
  "infos": [],
  "inputs": {
    "api_key": "DEMO_KEY",
    "system_id": "2"
  },
  "outputs": [
    {
      "available_years": [
        2011,
        2012,
        2013,
        2010
      ],
      "comments": null,
      "confidential": false,
      "inverter_mfg": "Fronius",
      "inverter_mfg_hide": false,
      "inverter_model": "IG 4000",
      "inverter_model_hide": false,
      "module_mfg": "Sharp",
      "module_mfg_hide": false,
      "module_model": "ND-208U1",
      "module_model_hide": false,
      "site_power": 2912,
      "site_power_hide": false,
      "module_tech": 2,
      "name_private": "Nelson Home, Golden, CO, Array 1",
      "name_public": "[2] Residential 1a",
      "site_area": 22.82,
      "site_azimuth": 181.2,
      "site_elevation": 1675,
      "site_latitude": 39.7214,
      "site_longitude": 105.0972,
      "site_tilt": 18.5,
      "system_id": 2
    }
  ],
  "version": "3.0.1",
  "warnings": []
}
```

### XML Output Format

<pre>GET <a href="https://api.data.gov/nrel/pvdaq/v3/sites.xml?system_id=2&amp;api_key=DEMO_KEY">https://api.data.gov/nrel/pvdaq/v3/sites.xml?system_id=2&amp;api_key=DEMO_KEY</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <errors type="array"/>
  <outputs type="array">
    <output>
      <available-years type="array">
        <available-year type="integer">2011</available-year>
        <available-year type="integer">2012</available-year>
        <available-year type="integer">2013</available-year>
        <available-year type="integer">2010</available-year>
      </available-years>
      <comments nil="true"/>
      <confidential type="boolean">false</confidential>
      <inverter-mfg>Fronius</inverter-mfg>
      <inverter-mfg-hide type="boolean">false</inverter-mfg-hide>
      <inverter-model>IG 4000</inverter-model>
      <inverter-model-hide type="boolean">false</inverter-model-hide>
      <module-mfg>Sharp</module-mfg>
      <module-mfg-hide type="boolean">false</module-mfg-hide>
      <module-model>ND-208U1</module-model>
      <module-model-hide type="boolean">false</module-model-hide>
      <site-power type="float">2912.0</site-power>
      <site-power-hide type="boolean">false</site-power-hide>
      <module-tech type="integer">2</module-tech>
      <name-private>Nelson Home, Golden, CO, Array 1</name-private>
      <name-public>[2] Residential 1a</name-public>
      <site-area type="float">22.82</site-area>
      <site-azimuth type="float">181.2</site-azimuth>
      <site-elevation type="float">1675.0</site-elevation>
      <site-latitude type="float">39.7214</site-latitude>
      <site-longitude type="float">105.0972</site-longitude>
      <site-tilt type="float">18.5</site-tilt>
      <system-id type="integer">2</system-id>
    </output>
  </outputs>
  <warnings type="array"/>
  <infos type="array"/>
  <inputs>
    <system-id>2</system-id>
    <api-key>DEMO_KEY</api-key>
  </inputs>
  <version>3.0.1</version>
</response>
```

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
      <td class="doc-parameter-description">Unauthorized - For PVDAQ services, you must also provide a username and password for your PVDAQ account via <a href="http://en.wikipedia.org/wiki/Basic_access_authentication">HTTP Basic Authentication</a>. For login credentials, contact <a href="mailto:ryan.smith@nrel.gov">Ryan Smith</a>.</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">422</th>
      <td class="doc-parameter-description">Unprocessable Entity - An invalid value was given for a query parameter. The response body will describe the specific error.</td>
    </tr>
  </tbody>
</table>
