---
title: Direct Normal Irradiance (Deprecated)
summary: 'Deprecated: We encourage you to migrate the new [Solar Resource web service](/docs/nrel/solar/solar-resource-v1/).'
url: GET /api/georeserv/service/solar/dni
disqus: true
deprecated: true

---

# {{title}} <span class="url">({{url}})</span>
{{summary}}

Provides monthly average and annual average daily total direct normal solar resource values (watt-hours/m<sup>2</sup>/day) at a given location.

The insolation values represent the resource available to concentrating systems that track the sun throughout the day and are created using the SUNY Satellite Solar Radiation model. The values are averaged over surface cells of 0.1 degrees in both latitude and longitude, or about 10 km in size.

<ul id="toc"></ul>

## Request URL

<pre>GET /api/georeserv/service/solar/dni.<em>format</em><em>?parameters</em></pre>

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
          <strong>Options:</strong> <em>json</em>, <em>xml</em>, <em>csv</em>
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
        <p>Your developer API key. See <a href="/docs/api-key/">API keys</a> for more information.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">lat</th>
      <td class="doc-parameter-required">Depends</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">Latitude, required if address not given.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">lon</th>
      <td class="doc-parameter-required">Depends</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">Longitude, required if address not given.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">address</th>
      <td class="doc-parameter-required">Depends</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">Address to use, lat/lon returned by Google's geocoding service.</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://api.data.gov/nrel/georeserv/service/solar/dni.json?api_key=DEMO_KEY&amp;address=Golden,%20CO">/api/georeserv/service/solar/dni.json?api_key=DEMO_KEY&amp;address=Golden,%20CO</a></pre>

```json
{
  "errors": [
    {
    }
  ],
  "infos": [

  ],
  "inputs": {
    "address": "Golden, CO"
  },
  "outputs": {
    "jan": 4680,
    "feb": 5373,
    "mar": 5968,
    "apr": 6157,
    "may": 6476,
    "jun": 6653,
    "jul": 6654,
    "aug": 5600,
    "sep": 6155,
    "oct": 5346,
    "nov": 4838,
    "dec": 4910,
    "annual": 5735
  },
  "version": "2.1.7",
  "warnings": [

  ]
}
```

### XML Output Format

<pre>GET <a href="http://api.data.gov/nrel/georeserv/service/solar/dni.xml?api_key=DEMO_KEY&amp;address=Golden,%20CO">/api/georeserv/service/solar/dni.xml?api_key=DEMO_KEY&amp;address=Golden,%20CO</a></pre>

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
      <string>errors</string>
    </value>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <struct/>
    </value>
  </param>
  <param>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <string>infos</string>
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
      <string>inputs</string>
    </value>
    <value>
      <struct>
        <member>
          <name>api_key</name>
        </member>
      </struct>
    </value>
    <value>
      <string>DEMO_KEY</string>
    </value>
    <member>
      <name>address</name>
      <value>
        <string>Golden, CO</string>
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
      <string>outputs</string>
    </value>
    <value>
      <struct>
        <member>
          <name>mar</name>
        </member>
      </struct>
    </value>
    <value>
      <int>5968</int>
    </value>
    <member>
      <name>feb</name>
      <value>
        <int>5373</int>
      </value>
    </member>
    <member>
      <name>aug</name>
      <value>
        <int>5600</int>
      </value>
    </member>
    <member>
      <name>sep</name>
      <value>
        <int>6155</int>
      </value>
    </member>
    <member>
      <name>apr</name>
      <value>
        <int>6157</int>
      </value>
    </member>
    <member>
      <name>annual</name>
      <value>
        <int>5735</int>
      </value>
    </member>
    <member>
      <name>jun</name>
      <value>
        <int>6653</int>
      </value>
    </member>
    <member>
      <name>jul</name>
      <value>
        <int>6654</int>
      </value>
    </member>
    <member>
      <name>jan</name>
      <value>
        <int>4680</int>
      </value>
    </member>
    <member>
      <name>may</name>
      <value>
        <int>6476</int>
      </value>
    </member>
    <member>
      <name>nov</name>
      <value>
        <int>4838</int>
      </value>
    </member>
    <member>
      <name>dec</name>
      <value>
        <int>4910</int>
      </value>
    </member>
    <member>
      <name>oct</name>
      <value>
        <int>5346</int>
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
      <string>version</string>
    </value>
    <value>
      <string>2.1.7</string>
    </value>
  </param>
  <param>
    <value>
      <array>
        <data/>
      </array>
    </value>
    <value>
      <string>warnings</string>
    </value>
    <value>
      <array>
        <data/>
      </array>
    </value>
  </param>
</params>
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour

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
