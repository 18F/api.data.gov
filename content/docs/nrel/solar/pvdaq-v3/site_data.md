---
title: Aggregated Site Data
summary: Return aggregated IEC61724 data for a specific PVDAQ system and date range.
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>GET https://api.data.gov/nrel/pvdaq/v3/site_data<em>.format?parameters</em></pre>

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
      <th class="doc-parameter-name" scope="row">aggregate</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>hourly</em>, <em>daily</em>, <em>weekly</em>, <em>monthly</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Aggregate the data based on this time period.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">limit_fields</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>system_id, measdatetime, availability, energy_from_array, poa_irradiation, energy_to_grid, energy_from_grid, total_energy_input, total_energy_output, array_energy_fraction, load_efficiency, bos_efficiency, array_yield, final_yield, reference_yield, array_capture_losses, bos_losses, system_performance_ratio, array_performance_ratio, mean_array_efficiency, total_system_efficiency</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>If defined, return only the fields given. A single field, or a comma-delimited list of multiple fields, may be given.</p>
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
        <p>An array of records containing the data for the site. The first row lists the field names.</p>
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
        <p>The current version of the PVDAQ web service.</p>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="https://api.data.gov/nrel/pvdaq/v3/site_data.json?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011&amp;aggregate=hourly">https://api.data.gov/nrel/pvdaq/v3/site_data.json?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011&amp;aggregate=hourly</a></pre>

```json
{
  "errors": [],
  "infos": [],
  "inputs": {
    "aggregate": "hourly",
    "api_key": "DEMO_KEY",
    "end_date": "3/25/2011",
    "start_date": "3/24/2011",
    "system_id": "2"
  },
  "outputs": [
    [
      "measdatetime",
      "array_capture_losses",
      "array_energy_fraction",
      "array_performance_ratio",
      "array_yield",
      "availability",
      "bos_efficiency",
      "bos_losses",
      "energy_from_array",
      "energy_from_grid",
      "energy_to_grid",
      "final_yield",
      "load_efficiency",
      "mean_array_efficiency",
      "poa_irradiation",
      "reference_yield",
      "system_id",
      "system_performance_ratio",
      "total_energy_input",
      "total_energy_output",
      "total_system_efficiency"
    ],
    [
      "2011-03-24T00:00:00Z",
      null,
      null,
      null,
      null,
      1,
      null,
      null,
      0,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      2,
      null,
      null,
      null,
      null
    ],
    [
      "2011-03-24T01:00:00Z",
      null,
      null,
      null,
      null,
      1,
      null,
      null,
      0,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      2,
      null,
      null,
      null,
      null
    ]
  ],
  "version": "3.0.1",
  "warnings": []
}
```

### XML Output Format

<pre>GET <a href="https://api.data.gov/nrel/pvdaq/v3/site_data.xml?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011&amp;aggregate=hourly">https://api.data.gov/nrel/pvdaq/v3/site_data.xml?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011&amp;aggregate=hourly</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <errors type="array"/>
  <outputs type="array">
    <output type="array">
      <output>measdatetime</output>
      <output>array_capture_losses</output>
      <output>array_energy_fraction</output>
      <output>array_performance_ratio</output>
      <output>array_yield</output>
      <output>availability</output>
      <output>bos_efficiency</output>
      <output>bos_losses</output>
      <output>energy_from_array</output>
      <output>energy_from_grid</output>
      <output>energy_to_grid</output>
      <output>final_yield</output>
      <output>load_efficiency</output>
      <output>mean_array_efficiency</output>
      <output>poa_irradiation</output>
      <output>reference_yield</output>
      <output>system_id</output>
      <output>system_performance_ratio</output>
      <output>total_energy_input</output>
      <output>total_energy_output</output>
      <output>total_system_efficiency</output>
    </output>
    <output type="array">
      <output type="datetime">2011-03-24T00:00:00Z</output>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output type="float">1.0</output>
      <output nil="true"/>
      <output nil="true"/>
      <output type="float">0.0</output>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output type="integer">2</output>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
    </output>
    <output type="array">
      <output type="datetime">2011-03-24T01:00:00Z</output>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output type="float">1.0</output>
      <output nil="true"/>
      <output nil="true"/>
      <output type="float">0.0</output>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output type="integer">2</output>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
      <output nil="true"/>
    </output>
  </outputs>
  <warnings type="array"/>
  <infos type="array"/>
  <inputs>
    <api-key>DEMO_KEY</api-key>
    <system-id>2</system-id>
    <start-date>3/24/2011</start-date>
    <end-date>3/25/2011</end-date>
    <aggregate>hourly</aggregate>
  </inputs>
  <version>3.0.1</version>
</response>
```

### CSV Output Format

<pre>GET <a href="https://api.data.gov/nrel/pvdaq/v3/site_data.csv?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011&amp;aggregate=hourly">https://api.data.gov/nrel/pvdaq/v3/site_data.csv?api_key=DEMO_KEY&amp;system_id=2&amp;start_date=3/24/2011&amp;end_date=3/25/2011&amp;aggregate=hourly</a></pre>

```
measdatetime,array_capture_losses,array_energy_fraction,array_performance_ratio,array_yield,availability,bos_efficiency,bos_losses,energy_from_array,energy_from_grid,energy_to_grid,final_yield,load_efficiency,mean_array_efficiency,poa_irradiation,reference_yield,system_id,system_performance_ratio,total_energy_input,total_energy_output,total_system_efficiency
2011-03-24 00:00:00 UTC,,,,,1.0,,,0.0,,,,,,,,2,,,,
2011-03-24 01:00:00 UTC,,,,,1.0,,,0.0,,,,,,,,2,,,,
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
