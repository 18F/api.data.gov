---
title: Raw Data
summary: Return raw data for a specific PVDAQ system and date range.
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>GET https://api.data.gov/nrel/pvdaq/v3/data<em>.format?parameters</em></pre>

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
        <p>Return data for the given system ID. Your PVDAQ user account must have access to the given system.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">start_date</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> date
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Return data between this start date and the <em>end_date</em> given (MM/DD/YYYY format)</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">end_date</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> date
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Return data between the <em>start_date</em> given and this end date (MM/DD/YYYY format).</p>
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
          <strong>Type:</strong> record
        </div>
      </td>
      <td class="doc-parameter-description">A record containing the data and header names. See <a href="#output-record-fields">output record fields</a> for response details.</td>
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
        <p>The current version of the PVDAQ web service.</p>
      </td>
    </tr>
  </tbody>
</table>

### Output Record Fields

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
      <th class="doc-parameter-name" scope="row">data</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array
        </div>
      </td>
      <td class="doc-parameter-description">An array of records containing the data for the site. The first row lists the field names.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">headers</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> record
        </div>
      </td>
      <td class="doc-parameter-description">List of header names used in the associated output data.</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="https://api.data.gov/nrel/pvdaq/v3/data.json?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011">https://api.data.gov/nrel/pvdaq/v3/data.json?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011</a></pre>

```json
{
  "errors": [],
  "infos": [],
  "inputs": {
    "api_key": "DEMO_KEY",
    "end_date": "3/25/2011",
    "start_date": "3/24/2011",
    "system_id": "2"
  },
  "outputs": {
    "data": [
      [
        "SiteID",
        "Date-Time",
        "poa_irradiance",
        "dc_power",
        "dc_pos_voltage",
        "dc_pos_current",
        "module_temp_1",
        "das_temp",
        "das_battery_voltage"
      ],
      [
        2,
        "2011-03-24 00:00:00",
        0,
        -0.0002,
        -0.7311,
        0.0003,
        -3.5754,
        4.3217,
        12.2088
      ],
      [
        2,
        "2011-03-24 00:01:00",
        0,
        -0.0002,
        -0.767,
        0.0003,
        -3.4774,
        4.2991,
        12.2088
      ]
    ],
    "headers": [
      "SiteID",
      "Date-Time",
      "poa_irradiance",
      "dc_power",
      "dc_pos_voltage",
      "dc_pos_current",
      "module_temp_1",
      "das_temp",
      "das_battery_voltage"
    ]
  },
  "version": "3.0.0",
  "warnings": []
}
```

### XML Output Format

<pre>GET <a href="https://api.data.gov/nrel/pvdaq/v3/data.xml?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011">https://api.data.gov/nrel/pvdaq/v3/data.xml?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <errors type="array"/>
  <outputs>
    <headers type="array">
      <header>SiteID</header>
      <header>Date-Time</header>
      <header>poa_irradiance</header>
      <header>dc_power</header>
      <header>dc_pos_voltage</header>
      <header>dc_pos_current</header>
      <header>module_temp_1</header>
      <header>das_temp</header>
      <header>das_battery_voltage</header>
    </headers>
    <data type="array">
      <datum type="array">
        <datum>SiteID</datum>
        <datum>Date-Time</datum>
        <datum>poa_irradiance</datum>
        <datum>dc_power</datum>
        <datum>dc_pos_voltage</datum>
        <datum>dc_pos_current</datum>
        <datum>module_temp_1</datum>
        <datum>das_temp</datum>
        <datum>das_battery_voltage</datum>
      </datum>
      <datum type="array">
        <datum type="integer">2</datum>
        <datum>2011-03-24 00:00:00</datum>
        <datum type="float">0.0</datum>
        <datum type="float">-0.0002</datum>
        <datum type="float">-0.7311</datum>
        <datum type="float">0.0003</datum>
        <datum type="float">-3.5754</datum>
        <datum type="float">4.3217</datum>
        <datum type="float">12.2088</datum>
      </datum>
      <datum type="array">
        <datum type="integer">2</datum>
        <datum>2011-03-24 00:01:00</datum>
        <datum type="float">0.0</datum>
        <datum type="float">-0.0002</datum>
        <datum type="float">-0.767</datum>
        <datum type="float">0.0003</datum>
        <datum type="float">-3.4774</datum>
        <datum type="float">4.2991</datum>
        <datum type="float">12.2088</datum>
      </datum>
    </data>
  </outputs>
  <warnings type="array"/>
  <infos type="array"/>
  <inputs>
    <api-key>DEMO_KEY</api-key>
    <system-id>2</system-id>
    <start-date>3/24/2011</start-date>
    <end-date>3/25/2011</end-date>
  </inputs>
  <version>3.0.1</version>
</response>
```

### CSV Output Format

<pre>GET <a href="https://api.data.gov/nrel/pvdaq/v3/data.csv?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011">https://api.data.gov/nrel/pvdaq/v3/data.csv?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011</a></pre>

```
SiteID,Date-Time,poa_irradiance,dc_power,dc_pos_voltage,dc_pos_current,module_temp_1,das_temp,das_battery_voltage
2,2011-03-24 00:00:00,0.0,-0.0002,-0.7311,0.0003,-3.5754,4.3217,12.2088
2,2011-03-24 00:01:00,0.0,-0.0002,-0.767,0.0003,-3.4774,4.2991,12.2088
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour. No more than 10,000 requests may be made in any day.

## Data Limits

If the service estimates that the amount of data that will be returned for a requested system and date range cannot be generated and returned in a reasonable amount of time it will return an error message with a suggested date range to try again. The infos section will also include URLs where you can download the full annual CSV of raw data for the system and year(s) for the requested date range.

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
