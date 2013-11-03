---
title: Aggregated Site Data (Deprecated)
summary: 'Deprecated: We encourage you to migrate to [version 3](/docs/solar/pvdaq-v3/)
  of the PVDAQ API.'
url: GET /api/georeserv/app/pvdaq/site_data
disqus: true
deprecated: true

---

# {{title}} <span class="url">({{url}})</span>
{{summary}}

This service provides IEC61724 data for PVDAQ sites.

<ul id="toc"></ul>

## Request URL

<pre>GET /api/georeserv/app/pvdaq/site_data<em>.format?parameters</em></pre>

## Request Parameters

## Response Fields

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
          <strong>Options:</strong> <em>json</em>, <em>xml</em>, <em>csv, tsv</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The output response format. (tsv = tab separated values)</p>
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
        <p>Your developer API key. See <a href="/docs/api-key/">API keys</a> for more information.</p>
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
        <p>system_id for requested site.</p>
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
        <p>Start date for data acquisition.</p>
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
        <p>End date for data acquisition.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">aggregate</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> hourly
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>hourly, daily, weekly, monthly</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Aggregate data based on the time period.</p>
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
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <em>1</em> to <em>100</em>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>code1</em>, <em>code2</em>, <em>code3</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>If you are an admin, ID of the user you would like to query on behalf of.</p>
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
      </td>
      <td class="doc-parameter-description">
        <p>Limit the output of the process based on the fields added to this field. Multiple fields may be included by providing this parameter multiple times. Limiting fields vastly improves performance of this query. Available fields are:</p>
        <p>system_id, measdatetime, availability, energy_from_array, poa_irradiation, energy_to_grid, energy_from_grid, total_energy_input, total_energy_output, array_energy_fraction, load_efficiency, bos_efficiency, array_yield, final_yield, reference_yield, array_capture_losses, bos_losses, system_performance_ratio, array_performance_ratio, mean_array_efficiency, total_system_efficiency</p>
      </td>
    </tr>
  </tbody>
</table>
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
      <th class="doc-parameter-name" scope="row">errors</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> list of dictionaries
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>List of dictionaries containing errors that may be associated with an input field.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">infos</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> list of dictionaries
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Non-error information about the inputs, or anything else in the system.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">inputs</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> list of dictionaries
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>List of the inputs as understood from the user.</p>
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
        <p>Version of Georeserv used to return this response.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">warnings</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> list of dictionaries
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Warnings for the system, including information about coming deprecations to parameters, or to the call itself.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">outputs</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> list of outputs
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>First row in the list is the field names, remaining rows are the data, in this case in order by month.</p>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

Note that if you have not logged in and obtained an authentication cookie for your session, this service will return a 404 error. Additionally, you will need to have access to the given system, in this case, the system with the system\_id of 12.

<pre>GET <a href="http://api.data.gov/nrel/georeserv/app/pvdaq/site_data.json?system_id=12&amp;start_date=1/1/2011&amp;end_date=1/1/2011&amp;api_key=DEMO_KEY&amp;limit_fields=system_id&amp;limit_fields=measdatetime&amp;limit_fields=array_performance_ratio&amp;aggregate=weekly">/api/georeserv/app/pvdaq/site_data.json?system_id=12&amp;start_date=1/1/2011&amp;end_date=1/1/2011&amp;api_key=DEMO_KEY&amp;limit_fields=system_id&amp;limit_fields=measdatetime&amp;limit_fields=array_performance_ratio&amp;aggregate=weekly</a></pre>

```json
{
  "errors": [

  ],
  "infos": [

  ],
  "inputs": {
    "aggregate": "weekly",
    "end_date": "1/1/2011",
    "limit_fields": [
      "system_id",
      "measdatetime",
      "array_performance_ratio"
    ],
    "start_date": "1/1/2011",
    "system_id": "12"
  },
  "outputs": [
    [
      "measdatetime",
      "array_performance_ratio",
      "array_yield",
      "energy_from_grid",
      "reference_yield",
      "system_id"
    ],
    [
      "2010-12-27 00:00:00",
      1.3111404086983,
      10.99992,
      0.222,
      20.48,
      12
    ]
  ],
  "version": "2.0.25",
  "warnings": [

  ]
}
```

### XML Output Format

Note that if you have not logged in and obtained an authentication cookie for your session, this service will return a 404 error. Additionally, you will need to have access to the given system, in this case, the system with the system\_id of 12.

<pre>GET <a href="http://api.data.gov/nrel/georeserv/app/pvdaq/site_data.xml?system_id=12&amp;start_date=1/1/2011&amp;end_date=1/1/2011&amp;api_key=DEMO_KEY&amp;limit_fields=system_id&amp;limit_fields=measdatetime&amp;limit_fields=array_performance_ratio&amp;aggregate=weekly">/api/georeserv/app/pvdaq/site_data.xml?system_id=12&amp;start_date=1/1/2011&amp;end_date=1/1/2011&amp;api_key=DEMO_KEY&amp;limit_fields=system_id&amp;limit_fields=measdatetime&amp;limit_fields=array_performance_ratio&amp;aggregate=weekly</a></pre>

```xml
<?xml version="1.0"?>
<params>
  <param>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <string>
    errors
   </string>
    </value>
    <value>
      <array>
        <data/>
      </array>
    </value>
  </param>
  <param>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <string>
    infos
   </string>
    </value>
    <value>
      <array>
        <data/>
      </array>
    </value>
  </param>
  <param>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <string>
    inputs
   </string>
    </value>
    <value>
      <struct>
        <member>
          <name>
      aggregate
     </name>
        </member>
      </struct>
    </value>
    <value>
      <string>
    weekly
   </string>
    </value>
    <member>
      <name>
    system_id
   </name>
      <value>
        <string>
     12
    </string>
      </value>
    </member>
    <member>
      <name>
    start_date
   </name>
      <value>
        <string>
     1/1/2011
    </string>
      </value>
    </member>
    <member>
      <name>
    end_date
   </name>
      <value>
        <string>
     1/1/2011
    </string>
      </value>
    </member>
    <member>
      <name>
    limit_fields
   </name>
      <value>
        <array>
          <data/>
        </array>
      </value>
      <value>
        <string>
     system_id
    </string>
      </value>
      <value>
        <string>
     measdatetime
    </string>
      </value>
      <value>
        <string>
     array_performance_ratio
    </string>
      </value>
    </member>
  </param>
  <param>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <string>
    outputs
   </string>
    </value>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <string>
    measdatetime
   </string>
    </value>
    <value>
      <string>
    array_performance_ratio
   </string>
    </value>
    <value>
      <string>
    array_yield
   </string>
    </value>
    <value>
      <string>
    energy_from_grid
   </string>
    </value>
    <value>
      <string>
    reference_yield
   </string>
    </value>
    <value>
      <string>
    system_id
   </string>
    </value>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <string>
    2010-12-27 00:00:00
   </string>
    </value>
    <value>
      <double>
    0.1404086983
   </double>
    </value>
    <value>
      <double>
    10.9999992
   </double>
    </value>
    <value>
      <double>
    0.222
   </double>
    </value>
    <value>
      <double>
    15.88
   </double>
    </value>
    <value>
      <int>
    12
   </int>
    </value>
  </param>
  <param>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <string>
    version
   </string>
    </value>
    <value>
      <string>
    2.0.25
   </string>
    </value>
  </param>
  <param>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <string>
    warnings
   </string>
    </value>
    <value>
      <array>
        <data/>
      </array>
    </value>
  </param>
</params>
```

### CSV Output Format

Note that if you have not logged in and obtained an authentication cookie for your session, this service will return a 404 error. Additionally, you will need to have access to the given system, in this case, the system with the system\_id of 12.

<pre>GET <a href="http://api.data.gov/nrel/georeserv/app/pvdaq/site_data.xml?system_id=12&amp;start_date=1/1/2011&amp;end_date=1/1/2011&amp;api_key=DEMO_KEY&amp;limit_fields=system_id&amp;limit_fields=measdatetime&amp;limit_fields=array_performance_ratio&amp;aggregate=weekly">/api/georeserv/app/pvdaq/site_data.csv?system_id=12&amp;start_date=1/1/2011&amp;end_date=1/1/2011&amp;api_key=DEMO_KEY&amp;limit_fields=system_id&amp;limit_fields=measdatetime&amp;limit_fields=array_performance_ratio&amp;aggregate=weekly</a></pre>

```
measdatetime,array_performance_ratio,array_yield,energy_from_grid,reference_yield,system_id
2010-12-27 00:00:00,0.4041,19.139,0.3,10.998,12
```

### TSV Output Format

Note that if you have not logged in and obtained an authentication cookie for your session, this service will return a 404 error. Additionally, you will need to have access to the given system, in this case, the system with the system\_id of 12.

<pre>GET <a href="http://api.data.gov/nrel/georeserv/app/pvdaq/site_data.tsv?system_id=12&amp;start_date=1/1/2011&amp;end_date=1/1/2011&amp;api_key=DEMO_KEY&amp;limit_fields=system_id&amp;limit_fields=measdatetime&amp;limit_fields=array_performance_ratio&amp;aggregate=weekly">/api/georeserv/app/pvdaq/site_data.tsv?system_id=12&amp;start_date=1/1/2011&amp;end_date=1/1/2011&amp;api_key=DEMO_KEY&amp;limit_fields=system_id&amp;limit_fields=measdatetime&amp;limit_fields=array_performance_ratio&amp;aggregate=weekly</a></pre>

```
measdatetime	array_performance_ratio	array_yield	energy_from_grid	reference_yield	system_id
2010-12-27 00:00:00	0.4041	19.139	0.3	10.998	12
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
      <th class="doc-parameter-name" scope="row">400</th>
      <td class="doc-parameter-description">Invalid Request - One or more parameters did not pass validation, or a parameter may be missing. Check the <em>error</em> section of the response to see how the request url should be modified to address the error.</td>
    </tr>
  </tbody>
</table>
