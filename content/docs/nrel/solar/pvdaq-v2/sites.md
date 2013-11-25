---
title: Sites Metadata (Deprecated)
summary: 'Deprecated: We encourage you to migrate to [version 3](/docs/nrel/solar/pvdaq-v3/)
  of the PVDAQ API.'
url: GET /api/georeserv/app/pvdaq/sites
disqus: true
deprecated: true

---

# {{title}} <span class="url">({{url}})</span>
{{summary}}

Sites service. Gives metadata for all or one available site. Only gives "all" information to an administrative user.

Otherwise, a check is made to determine of the user can view the metadata for a given system. This service can only be accessed by a PVDAQ administrator. Utilize [login](/docs/nrel/solar/pvdaq-v2/login_handler/) to access this service.

<ul id="toc"></ul>

## Request URL

<pre>GET /api/georeserv/app/pvdaq/sites<em>.format?parameters</em></pre>

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
        <p>Your developer API key. See <a href="/docs/api-key/">API keys</a> for more information.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">system_id</th>
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
        <p>ID of the system you would like to query. If no system_id is given, all systems available for the provided user_id or returned. If no user_id is supplied, the systems that the <a href="http://devdev.nrel.gov/doc/api/georeserv/login_handlerpost">logged in</a> user has access to will be returned.</p>
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
      <td class="doc-parameter-description">user_id of the user you would like to filter the system_id's by.</td>
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

<pre>GET <a href="http://api.data.gov/nrel/georeserv/app/pvdaq/sites.json?system_id=12&amp;api_key=DEMO_KEY">/api/georeserv/app/pvdaq/sites.json?system_id=12&amp;api_key=DEMO_KEY</a></pre>

```json
{
  "errors": [
    {
    }
  ],
  "infos": [

  ],
  "inputs": {
    "system_id": "12"
  },
  "outputs": [
    {
      "available_years": [
        2010,
        2007,
        2011,
        2008
      ],
      "comments": "Some Comments",
      "confidential": true,
      "inverter_mfg": "SomeManufacturer",
      "inverter_mfg_hide": null,
      "inverter_model": null,
      "inverter_model_hide": null,
      "module_mfg": "SomeManufacturer",
      "module_mfg_hide": null,
      "module_model": "Some-model-number",
      "module_model_hide": null,
      "module_tech": 1,
      "name_private": "Private Name",
      "name_public": "Public Name",
      "site_area": 8.6,
      "site_azimuth": 181,
      "site_elevation": 1125.3,
      "site_latitude": 22.7406,
      "site_longitude": 115.1775,
      "site_power": 200,
      "site_power_hide": null,
      "site_tilt": 40,
      "system_id": 12
    }
  ],
  "version": "2.0.17",
  "warnings": [

  ]
}
```

### XML Output Format

Note that if you have not logged in and obtained an authentication cookie for your session, this service will return a 404 error. Additionally, you will need to have access to the given system, in this case, the system with the system\_id of 12.

<pre>GET <a href="http://api.data.gov/nrel/georeserv/app/pvdaq/sites.xml?system_id=12&amp;api_key=DEMO_KEY">/api/georeserv/app/pvdaq/sites.xml?system_id=12&amp;api_key=DEMO_KEY</a></pre>

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
          <name>system_id</name>
        </member>
      </struct>
    </value>
    <value>
      <string>12</string>
    </value>
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
      <array>
        <data/>
      </array>
    </value>
    <value>
      <struct>
        <member>
          <name>site_area</name>
        </member>
      </struct>
    </value>
    <value>
      <double>3.23598</double>
    </value>
    <member>
      <name>site_elevation</name>
      <value>
        <double>1105.3</double>
      </value>
    </member>
    <member>
      <name>available_years</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
      <value>
        <double>2009.0</double>
      </value>
      <value>
        <double>2008.0</double>
      </value>
      <value>
        <double>2010.0</double>
      </value>
    </member>
    <member>
      <name>comments</name>
      <value>
        <string>Comments Here</string>
      </value>
    </member>
    <member>
      <name>site_tilt</name>
      <value>
        <double>41.0</double>
      </value>
    </member>
    <member>
      <name>system_id</name>
      <value>
        <int>12</int>
      </value>
    </member>
    <member>
      <name>site_power</name>
      <value>
        <double>120.0</double>
      </value>
    </member>
    <member>
      <name>module_model</name>
      <value>
        <string>some-module-model</string>
      </value>
    </member>
    <member>
      <name>confidential</name>
      <value>
        <boolean>1</boolean>
      </value>
    </member>
    <member>
      <name>module_mfg</name>
      <value>
        <string>Some Manf</string>
      </value>
    </member>
    <member>
      <name>name_public</name>
      <value>
        <string>Public Name</string>
      </value>
    </member>
    <member>
      <name>name_private</name>
      <value>
        <string>Private Name</string>
      </value>
    </member>
    <member>
      <name>inverter_model</name>
      <value>
        <nil/>
      </value>
    </member>
    <member>
      <name>site_azimuth</name>
      <value>
        <double>110.0</double>
      </value>
    </member>
    <member>
      <name>site_latitude</name>
      <value>
        <double>32.7</double>
      </value>
    </member>
    <member>
      <name>site_longitude</name>
      <value>
        <double>116.188</double>
      </value>
    </member>
    <member>
      <name>module_tech</name>
      <value>
        <string>Some Tech</string>
      </value>
    </member>
    <member>
      <name>inverter_mfg</name>
      <value>
        <string>SomeManf</string>
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
