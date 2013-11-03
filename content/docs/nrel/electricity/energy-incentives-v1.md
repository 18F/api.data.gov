---
title: Energy Incentives
summary: This service lists the incentives found in the [DSIRE](http://www.dsireusa.org/)
  quantitative spreadsheet by location.
url: GET /api/energy-incentives/v1
disqus: true

---

# {{title}} <span class="url">({{url}})</span>
{{summary}}

These data are updated often, but as the DSIRE data is continuously updated there is the possibility of their being slightly outdated.

This is the current version of the energy incentives API. Previous versions have been deprecated and its users are encouraged to migrate to this newly enhanced version.

<ul id="toc"></ul>

## Request URL

<pre>GET /api/energy-incentives/v1<em>.format?parameters</em></pre>

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
        <p>Your developer API key. See <a href="/docs/api-key/">API keys</a> for more information.</p>
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
      <th class="doc-parameter-name" scope="row">incentive_types</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> comma delimited string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options</strong>: ad_incentives,<br>
          biomass_incentives,<br>
          csp_incentives,<br>
          lfg_incentives,<br>
          pool_incentives,<br>
          solar_incentives,<br>
          ssh_incentives,<br>
          swh_incentives,<br>
          wind_incentives,<br>
          wte_incentives,
        </div>
      </td>
      <td class="doc-parameter-description">The type of incentive to return. Will return all incentive types if no parameter is provided.</td>
      <td class="doc-parameter-required"></td>
      <td class="doc-parameter-value"></td>
      <td class="doc-parameter-description"></td>
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
      <th class="doc-parameter-name" scope="row">infos</th>
      <td class="doc-parameter-value">Type: array of strings</td>
      <td class="doc-parameter-description">Any info messages resulting from the request</td>
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
        The data outputs from the request. (see <a href="#output-fields">output fields</a> for more detail)
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://api.data.gov/nrel/energy-incentives/v1.json?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;incentive_types=ad_incentives,csp_incentives">/api/energy-incentives/v1.json?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;incentive_types=ad_incentives,csp_incentives</a></pre>

```json
{
  "version": "1.0.1",
  "metadata": {
    "sources": [
      "Ventyx Research (2011)",
      "EIA (2011)"
    ]
  },
  "inputs": {
    "api_key": "DEMO_KEY",
    "lat": "40",
    "lon": "-105",
    "incentive_types": [
      "ad_incentives",
      "csp_incentives"
    ]
  },
  "infos": [

  ],
  "errors": [

  ],
  "warnings": [

  ],
  "outputs": {
    "ad_incentives": [
      {
        "dsire_id": "US13F",
        "gid": 123,
        "incentive_code": "US13F",
        "memo": "03/07/11 revised history section to show 3 PTC expirations (1999 one was missing). JB 12/3/10 Added to note info about grant expiration on 12/31/10. AH 07/19/10 fixed incentive amount field, 2.1 cents to 2.2 cents, missed this hen I did the update. 06/09/10 removed ADG from eligible list, pending conv. with IRS abou...",
        "notes": "The electricity must be sold by the taxpayer to an unrelated person during the taxable year. The American Recovery and Reinvestment Act of 2009 allows taxpayers eligible for the federal renewable electricity production tax credit (PTC) to take the federal business energy investment tax credit (ITC) instead of taking the PTC for new installations. Credit level listed here is for 2013.",
        "program_name": "Renewable Electricity Production Tax Credit (PTC)",
        "sector": "F",
        "state": "Federal",
        "anaerobic_digestion_com_ptc_dlrs_kwh": 0.011,
        "anaerobic_digestion_ptc_duration_years": 10.0
      }
    ],
    "csp_incentives": [
      {
        "dsire_id": "US02F",
        "gid": 122,
        "incentive_code": "US02F",
        "memo": "12/20/10 Changed reference to grant expiration to 12/31/11 BL 12/3/10 Added to note info about grant expiration date of 12/31/10. AH 6/9/10 Reviewed statute -- no substantive changes. Removed history section: The federal Energy Policy Act of 2005 (EPAct 2005) expanded the existing federal business energy tax c...",
        "notes": "The American Recovery and Reinvestment Act of 2009 allows taxpayers eligible for the federal renewable electricity production tax credit (PTC) to take the federal business energy investment tax credit (ITC) instead of taking the PTC for new installations.",
        "program_name": "Business Energy Investment Tax Credit (ITC)",
        "sector": "F",
        "state": "Federal",
        "csp_com_tax_credit_pcnt_cost": 0.3
      }
    ],
    "utility_name": "United Power Inc",
    "utility_id": "63360",
    "utility_info": [
      {
        "company_id": "63360",
        "utility_name": "United Power Inc"
      }
    ],
    "lat": 40.0,
    "lon": -105.0,
    "city": "Broomfield",
    "state": "CO",
    "zip": "80023"
  }
}
```

### XML Output Format

<pre>GET <a href="http://api.data.gov/nrel/energy-incentives/v1.xml?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;incentive_types=ad_incentives,csp_incentives">/api/energy-incentives/v1.xml?api_key=DEMO_KEY&amp;lat=40&amp;lon=-105&amp;incentive_types=ad_incentives,csp_incentives</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<incentives>
  <version>1.0.1</version>
  <metadata>
    <sources type="array">
      <source>Ventyx Research (2011)</source>
      <source>EIA (2011)</source>
    </sources>
  </metadata>
  <inputs>
    <api-key>DEMO_KEY</api-key>
    <lat>40</lat>
    <lon>-105</lon>
    <incentive-types type="array">
      <incentive-type>ad_incentives</incentive-type>
      <incentive-type>csp_incentives</incentive-type>
    </incentive-types>
  </inputs>
  <infos type="array"/>
  <errors type="array"/>
  <warnings type="array"/>
  <outputs>
    <ad-incentives type="array">
      <ad-incentive>
        <dsire-id>US13F</dsire-id>
        <gid type="integer">123</gid>
        <incentive-code>US13F</incentive-code>
        <memo>03/07/11 revised history section to show 3 PTC expirations (1999 one was missing). JB 12/3/10 Added to note info about grant expiration on 12/31/10. AH 07/19/10 fixed incentive amount field, 2.1 cents to 2.2 cents, missed this hen I did the update. 06/09/10 removed ADG from eligible list, pending conv. with IRS abou...</memo>
        <notes>The electricity must be sold by the taxpayer to an unrelated person during the taxable year. The American Recovery and Reinvestment Act of 2009 allows taxpayers eligible for the federal renewable electricity production tax credit (PTC) to take the federal business energy investment tax credit (ITC) instead of taking the PTC for new installations. Credit level listed here is for 2013.</notes>
        <program-name>Renewable Electricity Production Tax Credit (PTC)</program-name>
        <sector>F</sector>
        <state>Federal</state>
        <dsire-id>US13F</dsire-id>
        <anaerobic-digestion-com-ptc-dlrs-kwh type="float">0.011</anaerobic-digestion-com-ptc-dlrs-kwh>
        <anaerobic-digestion-ptc-duration-years type="float">10.0</anaerobic-digestion-ptc-duration-years>
      </ad-incentive>
    </ad-incentives>
    <csp-incentives type="array">
      <csp-incentive>
        <dsire-id>US02F</dsire-id>
        <gid type="integer">122</gid>
        <incentive-code>US02F</incentive-code>
        <memo>12/20/10 Changed reference to grant expiration to 12/31/11 BL 12/3/10 Added to note info about grant expiration date of 12/31/10. AH 6/9/10 Reviewed statute -- no substantive changes. Removed history section: The federal Energy Policy Act of 2005 (EPAct 2005) expanded the existing federal business energy tax c...</memo>
        <notes>The American Recovery and Reinvestment Act of 2009 allows taxpayers eligible for the federal renewable electricity production tax credit (PTC) to take the federal business energy investment tax credit (ITC) instead of taking the PTC for new installations.</notes>
        <program-name>Business Energy Investment Tax Credit (ITC)</program-name>
        <sector>F</sector>
        <state>Federal</state>
        <dsire-id>US02F</dsire-id>
        <csp-com-tax-credit-pcnt-cost type="float">0.3</csp-com-tax-credit-pcnt-cost>
      </csp-incentive>
    </csp-incentives>
    <utility-name>United Power Inc</utility-name>
    <utility-id>63360</utility-id>
    <utility-info type="array">
      <utility-info>
        <company-id>63360</company-id>
        <utility-name>United Power Inc</utility-name>
      </utility-info>
    </utility-info>
    <lat type="float">40.0</lat>
    <lon type="float">-105.0</lon>
    <city>Broomfield</city>
    <state>CO</state>
    <zip>80023</zip>
  </outputs>
</incentives>
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
      <td class="doc-parameter-description">Unprocessable Entity - One or more parameters did not pass validation, or a parameter may be missing. Check the <em>error</em> section of the response to see how the request url should be modified to address the error.</td>
    </tr>
  </tbody>
</table>
