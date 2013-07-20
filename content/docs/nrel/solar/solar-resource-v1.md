---
title: Solar Resource Data
summary: Returns various types of solar data for a location. The service currently returns data for average Direct Normal Irradiance, average Global Horizontal Irradiance, and average Tilt at Latitude.
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/nrel/solar/solar_resource/v1<em>.format?parameters</em></pre>

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
        <p>The address to use (lat/lon returned by Google's geocoding service). Required if lat/lon not specified.</p>
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

<span>The output fields contain the following solar data.</span>
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
      <th class="doc-parameter-name" scope="row">avg_dni</th>
      <td class="doc-parameter-value">
        <p><strong>Type:</strong></p>
        <p>decimal (annual),</p>
        <p>collection of decimals (monthly)</p>
      </td>
      <td class="doc-parameter-description"><strong>Average Direct Normal Irradiance</strong>: This data provides monthly average and annual average daily total solar resource averaged over surface cells of 0.1 degrees in both latitude and longitude, or about 10 km in size. The values returned are kWh/m<sup>2</sup>/day (kilowatt hours per square meter per day). The insolation values represent the resource available to concentrating systems that track the sun throughout the day. The data are created using the SUNY Satellite Solar Radiation model (Perez, et.al., 2002). The data are averaged from hourly model output over 12 years (1998-2009). This model uses hourly radiance images from geostationary weather satellites, daily snow cover data, and monthly averages of atmospheric water vapor, trace gases, and the amount of aerosols in the atmosphere to calculate the hourly total insolation (sun and sky) falling on a horizontal surface. The direct beam radiation is then calculated using the atmospheric water vapor, trace gases, and aerosols, which are derived from a variety of sources. Where possible, existing ground measurement stations are used to validate the data. (see <a href="http://www.nrel.gov/gis" target="_blank">http://www.nrel.gov/gis</a>)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">avg_ghi</th>
      <td class="doc-parameter-value">
        <p><strong>Type:</strong></p>
        <p>decimal (annual),</p>
        <p>collection of decimals (monthly)</p>
      </td>
      <td class="doc-parameter-description"><strong>Average Global Horizontal Irradiance</strong>: This data provides monthly average and annual average daily total solar resource averaged over surface cells of 0.1 degrees in both latitude and longitude, or about 10 km in size. The values returned are kWh/m<sup>2</sup>/day (kilowatt hours per square meter per day). The insolation values represent the global horizontal resource - the geometric sum of direct normal and diffuse irradiance components, representing total energy available on a planar surface. The data are created using the SUNY Satellite Solar Radiation model (Perez, et.al., 2002). The data are averaged from hourly model output over 12 years (1998-2009). This model uses hourly radiance images from geostationary weather satellites, daily snow cover data, and monthly averages of atmospheric water vapor, trace gases, and the amount of aerosols in the atmosphere to calculate the hourly total insolation (sun and sky) falling on a horizontal surface. The direct beam radiation is then calculated using the atmospheric water vapor, trace gases, and aerosols, which are derived from a variety of sources. Where possible, existing ground measurement stations are used to validate the data. (see <a href="http://www.nrel.gov/gis" target="_blank">http://www.nrel.gov/gis</a>)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">avg_lat_tilt</th>
      <td class="doc-parameter-value">
        <p><strong>Type:</strong></p>
        <p>decimal (annual),</p>
        <p>collection of decimals (monthly)</p>
      </td>
      <td class="doc-parameter-description"><strong>Average Tilt at Latitude</strong>: This data provides monthly average and annual average daily total solar resource averaged over surface cells of 0.1 degrees in both latitude and longitude, or about 10 km in size. The values returned are kWh/m<sup>2</sup>/day (kilowatt hours per square meter per day). The insolation values represent the resource available to fixed flat plate system tilted towards the equator at an angle equal to the latitude. The data are created using the SUNY Satellite Solar Radiation model (Perez, et.al., 2002). The data are averaged from hourly model output over 12 years (1998-2009). This model uses hourly radiance images from geostationary weather satellites, daily snow cover data, and monthly averages of atmospheric water vapor, trace gases, and the amount of aerosols in the atmosphere to calculate the hourly total insolation (sun and sky) falling on a horizontal surface. The direct beam radiation is then calculated using the atmospheric water vapor, trace gases, and aerosols, which are derived from a variety of sources. Where possible, existing ground measurement stations are used to validate the data. (see <a href="http://www.nrel.gov/gis" target="_blank">http://www.nrel.gov/gis</a>)</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://api.data.gov/nrel/solar/solar_resource/v1.json?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105">http://api.data.gov/nrel/solar/solar_resource/v1.json?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105</a></pre>

```json
{
  version: "1.0.0",
  warnings: [ ],
  errors: [ ],
  metadata: {
    sources: [
      "Perez-SUNY/NREL, 2012"
    ]
  },
  inputs: {
    api_key: "DEMO_KEY",
    lat: "40",
    lon: "-105"
  },
  outputs: {
    avg_dni: {
      annual: 6.06,
      monthly: {
        jan: 5,
        feb: 5.34,
        mar: 5.94,
        apr: 6.11,
        may: 6.36,
        jun: 7.43,
        jul: 7.48,
        aug: 6.65,
        sep: 6.81,
        oct: 5.82,
        nov: 5.11,
        dec: 4.67
      }
    },
    avg_ghi: {
      annual: 4.81,
      monthly: {
        jan: 2.5,
        feb: 3.43,
        mar: 4.69,
        apr: 5.69,
        may: 6.6,
        jun: 7.25,
        jul: 7.14,
        aug: 6.24,
        sep: 5.35,
        oct: 3.85,
        nov: 2.75,
        dec: 2.19
      }
    },
    avg_lat_tilt: {
      annual: 5.82,
      monthly: {
        jan: 4.79,
        feb: 5.4,
        mar: 6.07,
        apr: 6.11,
        may: 6.25,
        jun: 6.47,
        jul: 6.58,
        aug: 6.44,
        sep: 6.53,
        oct: 5.71,
        nov: 4.99,
        dec: 4.47
      }
    }
  }
}
```

### XML Output Format

<pre>GET <a href="http://api.data.gov/nrel/solar/solar_resource/v1.xml?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105">http://api.data.gov/nrel/solar/solar_resource/v1.xml?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105</a></pre>

```xml
<response>
  <version>1.0.0</version>
  <warnings type="array"/>
  <errors type="array"/>
  <metadata>
    <sources type="array">
      <source>Perez-SUNY/NREL, 2012</source>
    </sources>
  </metadata>
  <inputs>
    <api-key>DEMO_KEY</api-key>
    <lat>40</lat>
    <lon>-105</lon>
  </inputs>
  <outputs>
    <avg-dni>
      <annual type="float">6.06</annual>
      <monthly>
        <jan type="float">5.0</jan>
        <feb type="float">5.34</feb>
        <mar type="float">5.94</mar>
        <apr type="float">6.11</apr>
        <may type="float">6.36</may>
        <jun type="float">7.43</jun>
        <jul type="float">7.48</jul>
        <aug type="float">6.65</aug>
        <sep type="float">6.81</sep>
        <oct type="float">5.82</oct>
        <nov type="float">5.11</nov>
        <dec type="float">4.67</dec>
      </monthly>
    </avg-dni>
    <avg-ghi>
      <annual type="float">4.81</annual>
      <monthly>
        <jan type="float">2.5</jan>
        <feb type="float">3.43</feb>
        <mar type="float">4.69</mar>
        <apr type="float">5.69</apr>
        <may type="float">6.6</may>
        <jun type="float">7.25</jun>
        <jul type="float">7.14</jul>
        <aug type="float">6.24</aug>
        <sep type="float">5.35</sep>
        <oct type="float">3.85</oct>
        <nov type="float">2.75</nov>
        <dec type="float">2.19</dec>
      </monthly>
    </avg-ghi>
    <avg-lat-tilt>
      <annual type="float">5.82</annual>
      <monthly>
        <jan type="float">4.79</jan>
        <feb type="float">5.4</feb>
        <mar type="float">6.07</mar>
        <apr type="float">6.11</apr>
        <may type="float">6.25</may>
        <jun type="float">6.47</jun>
        <jul type="float">6.58</jul>
        <aug type="float">6.44</aug>
        <sep type="float">6.53</sep>
        <oct type="float">5.71</oct>
        <nov type="float">4.99</nov>
        <dec type="float">4.47</dec>
      </monthly>
    </avg-lat-tilt>
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
      <th class="doc-parameters-name" scope="col"><span>HTTP Status Code</span></th>
      <th class="doc-parameters-required" scope="col"><span>Description</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row"><span>422</span></th>
      <td class="doc-parameter-description"><span>Unprocessable Entity - <span>One or more parameters did not pass validation, or a parameter may be missing. Check the errors section of the response to see how the request should be modified to address the error.</span></span></td>
    </tr>
  </tbody>
</table>
