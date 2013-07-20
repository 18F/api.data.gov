---
title: Utility Rates by Census Region
summary: Given a location and Census Bureau region level (block, blockgroup, tract), return the Census Bureau ID, utility rate and company information.
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/nrel/census_rate/v3<em>.format?parameters</em></pre>

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
    <tr>
      <th class="doc-parameter-name" scope="row">id</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">Identifiying number provided by requester.</td>
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
        <div class="doc-parameter-value-field"></div>
      </td>
      <td class="doc-parameter-description">
        <p>The address to use (lat/lon returned by Google's geocoding service). Required if lat/lon not provided.</p>
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
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <i>-90 to 90</i>
        </div>
      </td>
      <td class="doc-parameter-description">The latitude for the location to use. Required if address not given.</td>
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
      <td class="doc-parameter-description">The longitude for the location to use. Required if address not given.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">region</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> block
        </div>
        <div class="doc-parameter-value-field">
          <span><b>Options:</b></span> <em><span>block, blockgroup, tract</span></em>
        </div>
      </td>
      <td class="doc-parameter-description">The <a href="http://en.wikipedia.org/wiki/Census_block">Census Bureau region level</a> to return.</td>
    </tr>
  </tbody>
</table>

## Response Fields

The response is composed of service-related informational fields and the results of the data query.

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
      <th class="doc-parameter-name" scope="row">version</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">The current version of the web service.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">errors</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of strings</td>
      <td class="doc-parameter-description">Any error messages resulting from the request.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">warnings</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of strings</td>
      <td class="doc-parameter-description">Any warning messages resulting from the request.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">metadata</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">Any metadata associated with the request (sources, etc)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">outputs</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">The data outputs from the request. (see <a href="#output-fields">output fields</a> for more detail)</td>
    </tr>
  </tbody>
</table>

### Output Fields

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
      <th class="doc-parameter-name" scope="row">utility_name</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">The name of the utility company. If there are multiple utility companies serving the location, the names will be returned as a pipe-delimited string.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">company_id</th>
      <td class="doc-parameter-value"><strong>Type:</strong> integer</td>
      <td class="doc-parameter-description">The ID of the utility company. If there are multiple utility companies serving the location, the IDs will be returned as a pipe-delimited string.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">utility_info</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">An array of hashes containing the name(s) and ID(s) of the utility company or companies serving the location.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">census_region</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">The Census Bureau ID.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">residential</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">The residential electricity rate.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">commercial</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">The commercial electricity rate.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">industrial</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">The industrial electricity rate.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">partial_match</th>
      <td class="doc-parameter-value"><strong>Type:</strong> boolean</td>
      <td class="doc-parameter-description">A value of true indicates that the geocoder was not able to find an exact match on the original address. (only returned for address-based requests)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">geocoded_address</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">The actual (possibly corrected) address used by the geocoder to determine lat/lon. (only returned for address-based requests)</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://api.data.gov/nrel/census_rate/v3.json?api_key=DEMO_KEY&amp;region=tract&amp;id=101&amp;lat=37&amp;lon=-92">http://api.data.gov/nrel/census_rate/v3.json?api_key=DEMO_KEY&amp;region=tract&amp;id=101&amp;lat=37&amp;lon=-92</a></pre>

```json
{
  inputs: {
    api_key: "DEMO_KEY",
    lat: "37",
    lon: "-92"
  },
  errors: [ ],
  warnings: [ ],
  outputs: {
    census_region: "290910901002052",
    company_id: "62965|61860",
    utility_name: "Sho ME Power Electric Coop|Howell Oregon Electric Coop Inc",
    utility_info: [
      {
        company_id: "62965",
        utility_name: "Sho ME Power Electric Coop"
      },
      {
        company_id: "61860",
        utility_name: "Howell Oregon Electric Coop Inc"
      }
    ], 
    commercial: 8.549,
    industrial: 7.549,
    residential: 9.52
  },
  version: "3.0.2",
  metadata: {
    sources: [
      "Ventyx Research (2011)",
      "EIA (2011)"
    ]
  }
}
```

### XML Output Format

<pre>GET <a href="http://api.data.gov/nrel/census_rate/v3.xml?api_key=DEMO_KEY&amp;region=tract&amp;id=101&amp;lat=37&amp;lon=-92">http://api.data.gov/nrel/census_rate/v3.xml?api_key=DEMO_KEY&amp;region=tract&amp;id=101&amp;lat=37&amp;lon=-92</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <inputs>
    <api-key>DEMO_KEY</api-key>
    <lat>37</lat>
    <lon>-92</lon>
  </inputs>
  <errors type="array"/>
  <warnings type="array"/>
  <outputs>
    <census-region>290910901002052</census-region>
    <company-id>62965|61860</company-id>
    <utility-name>Sho ME Power Electric Coop|Howell Oregon Electric Coop Inc</utility-name>
    <utility-info type="array">
      <utility-info>
        <company-id>62965</company-id>
        <utility-name>Sho ME Power Electric Coop</utility-name>
      </utility-info>
      <utility-info>
        <company-id>61860</company-id>
        <utility-name>Howell Oregon Electric Coop Inc</utility-name>
      </utility-info>
    </utility-info>
    <commercial type="float">8.549</commercial>
    <industrial type="float">7.549</industrial>
    <residential type="float">9.52</residential>
  </outputs>
  <version>3.0.2</version>
  <metadata>
    <sources type="array">
      <source>Ventyx Research (2011)</source>
      <source>EIA (2011)</source>
    </sources>
  </metadata>
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
