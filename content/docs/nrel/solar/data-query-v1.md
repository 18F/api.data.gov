---
title: Solar Dataset Query
summary: Returns information on the closest climate data for a location.
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/nrel/solar/data_query/v1<em>.format?parameters</em></pre>

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
      <td class="doc-parameter-description">The address to use (lat/lon returned by Google's geocoding service). Required if lat/lon not specified.</td>
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
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <i>-90 to 90</i>
        </div>
      </td>
      <td class="doc-parameter-description">The latitude for the location to use. Required if address not specified.</td>
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
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <i>-180 to 180</i>
        </div>
      </td>
      <td class="doc-parameter-description">The longitude for the location to use. Required if address not specified.</td>
    </tr>
  </tbody>
</table>

## Response Fields

The response is composed of service-related informational fields and information about the closest climate data files.

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
      <th class="doc-parameter-name" scope="row">inputs</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">The input parameters received in the request.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">errors</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of strings</td>
      <td class="doc-parameter-description">Any error messages resulting from the request.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">warnings</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of strings</td>
      <td class="doc-parameter-description">Any warning messages resulting from the request. This includes messages regarding data not being found for one or more datasets.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">version</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">The current version of the web service.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">metadata</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">Any metadata associated with the request (sources, etc)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">outputs</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">
        <p>Information about the closest climate data files for each supported dataset. (see <a href="#output-fields">output fields</a> for more detail)</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Dataset</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">perez</th>
              <td>Perez Satellite Solar Resource Data Set</td>
            </tr>
            <tr>
              <th scope="row">tmy2</th>
              <td>TMY2 station data (see <a href="http://rredc.nrel.gov/solar/old_data/nsrdb/1961-1990/tmy2/State.html" target="_blank">Typical Meteorological Year, version 2</a>)</td>
            </tr>
            <tr>
              <th scope="row">tmy3</th>
              <td>TMY3 station data (see <a href="http://rredc.nrel.gov/solar/old_data/nsrdb/1991-2005/tmy3/by_USAFN.html">Typical Meteorological Year version 3</a>)</td>
            </tr>
            <tr>
              <th scope="row">intl</th>
              <td>International station data</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

### Output Fields

The output fields contain the following information regarding climate data files from each supported dataset. If no data is found for a specific dataset, the service will return null for it in the outputs, and return a message in the warnings.

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
      <th class="doc-parameter-name" scope="row">id</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">An identifier for that climate data within the dataset.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">lat</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">The latitude of the station (tmy2/tmy3) or grid cell (perez).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">lon</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">The longitude of the station (tmy2/tmy3) or grid cell (perez).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">city</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">The city where the station is located (for perez it will say "satellite data").</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">state</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">The state where the station is located (for perez it will be an empty string).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">timezone</th>
      <td class="doc-parameter-value"><strong>Type:</strong> integer</td>
      <td class="doc-parameter-description">The timezone of the station or grid cell, relative to GMT.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">elevation</th>
      <td class="doc-parameter-value"><strong>Type:</strong> integer</td>
      <td class="doc-parameter-description">The elevation of the station or grid cell in meters.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">distance</th>
      <td class="doc-parameter-value"><strong>Type:</strong> integer</td>
      <td class="doc-parameter-description">The distance in meters from the input location to the station or grid cell.</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://api.data.gov/nrel/solar/data_query/v1.json?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105">http://api.data.gov/nrel/solar/data_query/v1.json?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105</a></pre>

```json
{
    "metadata": {

    },
    "errors": [

    ],
    "version": "0.0.9",
    "inputs": {
        "lon": "-105",
        "lat": "40",
        "api_key": "DEMO_KEY"
    },
    "warnings": [

    ],
    "outputs": {
        "perez": {
            "lon": -105.3,
            "elevation": 1555,
            "city": "satellite data",
            "state": "",
            "id": "0-10440-105054005",
            "timezone": -7,
            "distance": 42089,
            "lat": 40.3
        },
        "tmy2": {
            "lon": -105.15,
            "elevation": 1634,
            "city": "BOULDER",
            "state": "CO",
            "id": "1-94018",
            "timezone": -7,
            "distance": 16924,
            "lat": 40.1
        },
        "tmy3": {
            "lon": -105.24,
            "elevation": 1689,
            "city": "BROOMFIELD/JEFFCO [BOULDER - SURFRAD]",
            "state": "CO",
            "id": "2-724699",
            "timezone": -7,
            "distance": 24977,
            "lat": 40.13
        }
    }
}
```

### XML Output Format

<pre>GET <a href="http://api.data.gov/nrel/solar/data_query/v1.xml?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105">http://api.data.gov/nrel/solar/data_query/v1.xml?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <version>0.0.9</version>
  <warnings type="array"/>
  <errors type="array"/>
  <metadata>
  </metadata>
  <inputs>
    <api-key>DEMO_KEY</api-key>
    <lat>40</lat>
    <lon>-105</lon>
  </inputs>
  <outputs>
    <perez>
      <id>0-10440-105054005</id>
      <city>satellite data</city>
      <state></state>
      <timezone type="integer">-7</timezone>
      <lat type="float">40.3</lat>
      <lon type="float">-105.3</lon>
      <elevation type="integer">1555</elevation>
      <distance type="integer">42089</distance>
    </perez>
    <tmy2>
      <id>1-94018</id>
      <city>BOULDER</city>
      <state>CO</state>
      <timezone type="integer">-7</timezone>
      <lat type="float">40.1</lat>
      <lon type="float">-105.15</lon>
      <elevation type="integer">1634</elevation>
      <distance type="integer">16924</distance>
    </tmy2>
    <tmy3>
      <id>2-724699</id>
      <city>BROOMFIELD/JEFFCO [BOULDER - SURFRAD]</city>
      <state>CO</state>
      <timezone type="integer">-7</timezone>
      <lat type="float">40.13</lat>
      <lon type="float">-105.24</lon>
      <elevation type="integer">1689</elevation>
      <distance type="integer">24977</distance>
    </tmy3>
  </outputs>
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
      <th class="doc-parameter-name" scope="row">422</th>
      <td class="doc-parameter-description">Unprocessable Entity - One or more parameters did not pass validation, or a parameter may be missing. Check the errors section of the response to see how the request should be modified to address the error.</td>
    </tr>
  </tbody>
</table>
