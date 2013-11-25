---
title: Incentives (Deprecated)
summary: 'Deprecated: We encourage you to migrate to [the new energy incentives API](/docs/nrel/electricity/energy-incentives-v1/).'
url: GET /api/georeserv/service/incentives
disqus: true
deprecated: true

---

# {{title}} <span class="url">({{url}})</span>
{{summary}}

This service lists the incentives found in the [DSIRE](http://www.dsireusa.org/) quantitative spreadsheet by location.

These data are updated often, but as the DSIRE data is continuously updated there is the possibility of their being slightly outdated.

<ul id="toc"></ul>

## Request URL

<pre>GET /api/georeserv/service/incentives/<em>tech_type.format</em><em>?parameters</em></pre>

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
    <tr>
      <th class="doc-parameter-name" scope="row">tech_type</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>csp, biomass, lfg, pool, pv, ssh, swh, waste_to_energy, wind</em>
        </div>
      </td>
      <td class="doc-parameter-description">The type of technology to apply the incentives to.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">system_size</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">Nameplate capacity (kW).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">system_cost</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">Cost of the system.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">type</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> res
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>res, com</em>
        </div>
      </td>
      <td class="doc-parameter-description">Type of installation (residential or commercial).</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://api.data.gov/nrel/georeserv/service/incentives/pv.json?api_key=DEMO_KEY&amp;address=Boulder,+CO&amp;system_size=4.0">/api/georeserv/service/incentives/pv.json?api_key=DEMO_KEY&amp;address=Boulder,+CO&amp;system_size=4.0</a></pre>

```json
{
  "errors": [
    {
    }
  ],
  "infos": [

  ],
  "inputs": {
    "address": "Boulder, CO",
    "system_size": "4.0"
  },
  "outputs": {
    "cost": 32676.591578681568,
    "incentives": {
      "all": [
        {
          "PV Res. Max. Rebate $": 4500,
          "PV Res. Rebate $/kW": 2500,
          "code": "CO175F",
          "gid": 106,
          "memo": "2/11/11 Rebate has been changed. Now, higher rebates are available for wind and PV if they're installed in a local partners' territory. BL 4/20/10 added new program based on website BL",
          "notes": "PV incentive amounts may be up to $2.50/W if installed in a partners' territory. Wind incentive amounts may be up to $3/W if installed in a partners' territory. max amounts are indicated. Xcel and Black Hills customers not eligible for this incentive.",
          "program_name": "Colorado - Residential Renewable Energy Rebate Program",
          "sector": "S",
          "state": "Colorado",
          "state_abbr": "CO",
          "type": "State Rebate Program",
          "web_active": "1"
        },
        {
          "PV Com. Max. Rebate $": 25000,
          "PV Com. Rebate $/kW": 2500,
          "PV Com. Rebate Max. Size (kW)": 25,
          "PV NP/Govt Max. Rebate $": 25000,
          "PV NP/Govt Rebate $/kW": 2500,
          "code": "CO176F",
          "gid": 107,
          "memo": "2/18/11 Wind incentives have increased from $1/W to $2 or $3/W depending on local government's partnership status. PV incentive has been restructured, too. BL 4/22/10 added based on website and info provided by Jennifer Hampton BL",
          "notes": "The per-watt rebate rate specified below may be less if local incentives are available.",
          "program_name": "Colorado - Commercial Renewable Energy Rebate Program",
          "sector": "S",
          "state": "Colorado",
          "state_abbr": "CO",
          "type": "State Rebate Program",
          "web_active": "1"
        },
        {
          "PV Com. PBI $/kWh": 0.15,
          "PV Com. PBI/FIT Max. Size (kW)": 100,
          "PV Com. PBI/FIT Min. Size (kW)": 10.01,
          "PV Com. Rebate Min. Size (kW)": 0.5,
          "PV NP/Govt PBI $/kWh": 0.15,
          "PV PBI/FIT Duration (Years)": 20,
          "PV PBI/FIT Max. Size for $ Calc. (kW)": 100,
          "PV Rating Basis (AC/DC/PTC)": "DC",
          "PV Res. Max. Rebate $": 17500,
          "PV Res. PBI $/kWh": 0.04,
          "PV Res. Rebate $/kW": 1750,
          "PV Res. Rebate Max. Size (kW)": 10,
          "PV Res. Rebate Min. Size (kW)": 0.5,
          "code": "CO12F",
          "gid": 108,
          "memo": "3/23/11 Program has been reopened under a slightly new design. Small residential systems no longer get an upfront payment for RECs, instead they get the upfront rebate, plus a PBI for RECs. All larger systems get just the PBI. BL 2/18/11 Xcel received 3 MW of applications under the new terms and has suspended the",
          "notes": "Commercial PBI shown represents REC payments for medium-sized systems (10.001 kW-100 kW). REC payments for systems sized 100.01 kW-500 kW not entered, this amount is $0.15/kWh as well. Rebate and REC payments for systems above 500 kW determined through RFP.",
          "organization": "Xcel Energy",
          "program_name": "Xcel Energy - Solar*Rewards Program",
          "sector": "U",
          "state": "Colorado",
          "state_abbr": "CO",
          "type": "Utility Rebate Program",
          "web_active": "1"
        },
        {
          "PV Com. Tax Credit % Cost": 0.3,
          "code": "US02F",
          "gid": 132,
          "memo": "12/20/10 Changed reference to grant expiration to 12/31/11 BL 12/3/10 Added to note info about grant expiration date of 12/31/10. AH 6/9/10 Reviewed statute -- no substantive changes. Removed history section: The federal Energy Policy Act of 2005 (EPAct 2005) expanded the existing federal business energy tax c",
          "notes": "The American Recovery and Reinvestment Act of 2009 allows taxpayers eligible for the federal renewable electricity production tax credit (PTC) to take the federal business energy investment tax credit (ITC) or to receive a grant from the U.S. Treasury Dept. instead of taking the PTC for new installations. The new law also allows taxpayers eligible for the business ITC to receive a grant from the U.S. Treasury Dept. instead of taking the business ITC for new installations.",
          "organization": "U.S. Internal Revenue Service",
          "program_name": "Business Energy Investment Tax Credit (ITC)",
          "sector": "F",
          "state": "Federal",
          "state_abbr": "US",
          "type": "Corporate Tax Credit",
          "web_active": "1"
        },
        {
          "PV Com. Rebate % Cost Max.": 0.25,
          "code": "US05F",
          "gid": 134,
          "memo": "NC contact = David Thigpen/ david.thigpen@nc.usda.gov 5/4/10 New NOSA issued 4/26/10. Added info about that, apps are due 6/30/10. There is a total of $99.34 million available for all REAP programs in FY2010 and it looks like approx $87 million will be available for RE and EE grants and loan guarantees. Adjusted %",
          "notes": "Eligibility is restricted to agricultural producers and rural small businesses. Data entered in \"Com.\" fields. Implementation rules pending. The USDA will announce the availability of funding through a Notice of Funds Availability. Updates at http://www.usda.gov/farmbill",
          "organization": "U.S. Department of Agriculture",
          "program_name": "USDA - Rural Energy for America Program (REAP) Grants",
          "sector": "F",
          "state": "Federal",
          "state_abbr": "US",
          "type": "Federal Grant Program",
          "web_active": "1"
        },
        {
          "PV Com. Rebate % Cost Max.": 0.3,
          "code": "US53F",
          "gid": 135,
          "memo": "12/17/10 HR 4853 signed today, changed dates to reflect extension of grant by one year. Changed application date deadline from 10/1/11 to 10/1/12. AH 12/3/10 Added info about expiration date to note. AH 9/2/10 Added note about new form that recipients must fill out to avoid recapture. AH 7/12/10 Updated contact info",
          "organization": "U.S. Department of Treasury",
          "program_name": "U.S. Department of Treasury - Renewable Energy Grants",
          "sector": "F",
          "state": "Federal",
          "state_abbr": "US",
          "type": "Federal Grant Program",
          "web_active": "1"
        },
        {
          "PV NP/Govt PBI $/kWh": 0.022,
          "PV PBI/FIT Duration (Years)": 10,
          "code": "US33F",
          "gid": 136,
          "memo": "01/18/11 reviewed and updated with no changes. Funding a question mark as always. JB 03/01/10 no funding requested for 2011, but Congress could authorize anyway so left up for now. JB 01/21/10 updated contact information per Bill Prymak e-mail, seeking info on appropriation status. JB 3/19/09 Updated record per stat",
          "notes": "Eligible electric production facilities: not-for-profit electrical cooperatives, public utilities, state governments, Commonwealths, territories, possessions of the United States, the District of Columbia, Indian tribal governments, or a political subdivision thereof and Native Corporations. Data entered in the \"NProfit/Gov't\" fields. The production payment applies only to the electricity sold to another entity. Incentive payments are subject to the availability of annual appropriations in each federal fiscal year of operation.",
          "organization": "U.S. Department of Energy",
          "program_name": "Renewable Energy Production Incentive (REPI)",
          "sector": "F",
          "state": "Federal",
          "state_abbr": "US",
          "type": "Performance-Based Incentive",
          "web_active": "1"
        },
        {
          "PV Res. Tax Credit % Cost": 0.3,
          "code": "US37F",
          "gid": 137,
          "memo": "3/14/11 Removed dead links to SEIA fact sheet. 2/3/11 Updated record based on review of current statute and notes in L/N. No changes. JRH 2/18/10 Updated record based on review of current statute and notes in L/N. No changes. JRH 6/5/09 Added info about carryforward provisions - unused credit can be carried forward",
          "notes": "v",
          "organization": "U.S. Internal Revenue Service",
          "program_name": "Residential Renewable Energy Tax Credit",
          "sector": "F",
          "state": "Federal",
          "state_abbr": "US",
          "type": "Personal Tax Credit",
          "web_active": "1"
        }
      ],
      "cbi": {
        "state": [
          {
            "amount": 4500,
            "max_cost": 4500,
            "max_percent": 100,
            "name": "Colorado - Residential Renewable Energy Rebate Program",
            "notes": "PV incentive amounts may be up to $2.50/W if installed in a partners' territory. Wind incentive amounts may be up to $3/W if installed in a partners' territory. max amounts are indicated. Xcel and Black Hills customers not eligible for this incentive.",
            "state": "Colorado",
            "type": "State Rebate Program"
          }
        ],
        "utility": [
          {
            "amount": 17500,
            "max_cost": 17500,
            "max_percent": 100,
            "max_size": 10,
            "min_size": 0.5,
            "name": "Xcel Energy - Solar*Rewards Program",
            "notes": "Commercial PBI shown represents REC payments for medium-sized systems (10.001 kW-100 kW). REC payments for systems sized 100.01 kW-500 kW not entered, this amount is $0.15/kWh as well. Rebate and REC payments for systems above 500 kW determined through RFP.",
            "state": "Colorado",
            "type": "Utility Rebate Program"
          }
        ]
      },
      "ibi": {
      },
      "pbi": {
        "utility": [
          {
            "amount": 0.04,
            "max_percent": 100,
            "name": "Xcel Energy - Solar*Rewards Program",
            "state": "Colorado",
            "type": "Utility Rebate Program"
          }
        ]
      }
    },
    "taxcredits": {
      "itc": {
        "federal": [
          {
            "amount": 3202.97747360447,
            "notes": "v",
            "percent_cost": 0.3,
            "program_name": "Residential Renewable Energy Tax Credit"
          }
        ]
      }
    },
    "totals": {
      "cbi": [
        {
          "name": "Colorado - Residential Renewable Energy Rebate Program",
          "value": 4500
        },
        {
          "name": "Xcel Energy - Solar*Rewards Program",
          "value": 17500
        }
      ],
      "sum": 25202.98,
      "tax_credit": 3202.98
    }
  },
  "version": "2.1.6",
  "warnings": [

  ]
}
```

### XML Output Format

<pre>GET <a href="http://api.data.gov/nrel/georeserv/service/incentives/pv.xml?api_key=DEMO_KEY&amp;address=Boulder,+CO&amp;system_size=4.0">/api/georeserv/service/incentives/pv.xml?api_key=DEMO_KEY&amp;address=Boulder,+CO&amp;system_size=4.0</a></pre>

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
          <name>system_size</name>
        </member>
      </struct>
    </value>
    <value>
      <string>4.0</string>
    </value>
    <member>
      <name>address</name>
      <value>
        <string>Boulder, CO</string>
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
          <name>cost</name>
        </member>
      </struct>
    </value>
    <value>
      <double>32676.591578681568</double>
    </value>
    <member>
      <name>incentives</name>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>ibi</name>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>all</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>sector</name>
      <value>
        <string>S</string>
      </value>
    </member>
    <member>
      <name>PV Res. Max. Rebate $</name>
      <value>
        <double>4500.0</double>
      </value>
    </member>
    <member>
      <name>code</name>
      <value>
        <string>CO175F</string>
      </value>
    </member>
    <member>
      <name>notes</name>
      <value>
        <string>PV incentive amounts may be up to .50/W if installed in a partners' territory. Wind incentive amounts may be up to /W if installed in a partners' territory. max amounts are indicated. Xcel and Black Hills customers not eligible for this incentive.</string>
      </value>
    </member>
    <member>
      <name>PV Res. Rebate $/kW</name>
      <value>
        <double>2500.0</double>
      </value>
    </member>
    <member>
      <name>web_active</name>
      <value>
        <string>1</string>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <string>Colorado</string>
      </value>
    </member>
    <member>
      <name>gid</name>
      <value>
        <int>106</int>
      </value>
    </member>
    <member>
      <name>state_abbr</name>
      <value>
        <string>CO</string>
      </value>
    </member>
    <member>
      <name>program_name</name>
      <value>
        <string>Colorado - Residential Renewable Energy Rebate Program</string>
      </value>
    </member>
    <member>
      <name>type</name>
      <value>
        <string>State Rebate Program</string>
      </value>
    </member>
    <member>
      <name>memo</name>
      <value>
        <string>2/11/11 Rebate has been changed. Now, higher rebates are available for wind and PV if they're installed in a local partners' territory. BL 4/20/10 added new program based on website BL</string>
      </value>
    </member>
    <value>
      <struct>
        <member>
          <name>sector</name>
        </member>
      </struct>
    </value>
    <value>
      <string>S</string>
    </value>
    <member>
      <name>code</name>
      <value>
        <string>CO176F</string>
      </value>
    </member>
    <member>
      <name>PV Com. Rebate Max. Size (kW)</name>
      <value>
        <double>25.0</double>
      </value>
    </member>
    <member>
      <name>PV NP/Govt Max. Rebate $</name>
      <value>
        <double>25000.0</double>
      </value>
    </member>
    <member>
      <name>memo</name>
      <value>
        <string>2/18/11 Wind incentives have increased from /W to  or /W depending on local government's partnership status. PV incentive has been restructured, too. BL 4/22/10 added based on website and info provided by Jennifer Hampton BL</string>
      </value>
    </member>
    <member>
      <name>web_active</name>
      <value>
        <string>1</string>
      </value>
    </member>
    <member>
      <name>PV Com. Rebate $/kW</name>
      <value>
        <double>2500.0</double>
      </value>
    </member>
    <member>
      <name>PV Com. Max. Rebate $</name>
      <value>
        <double>25000.0</double>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <string>Colorado</string>
      </value>
    </member>
    <member>
      <name>gid</name>
      <value>
        <int>107</int>
      </value>
    </member>
    <member>
      <name>state_abbr</name>
      <value>
        <string>CO</string>
      </value>
    </member>
    <member>
      <name>program_name</name>
      <value>
        <string>Colorado - Commercial Renewable Energy Rebate Program</string>
      </value>
    </member>
    <member>
      <name>type</name>
      <value>
        <string>State Rebate Program</string>
      </value>
    </member>
    <member>
      <name>notes</name>
      <value>
        <string>The per-watt rebate rate specified below may be less if local incentives are available.</string>
      </value>
    </member>
    <member>
      <name>PV NP/Govt Rebate $/kW</name>
      <value>
        <double>2500.0</double>
      </value>
    </member>
    <value>
      <struct>
        <member>
          <name>PV Com. PBI/FIT Min. Size (kW)</name>
        </member>
      </struct>
    </value>
    <value>
      <double>10.01</double>
    </value>
    <member>
      <name>sector</name>
      <value>
        <string>U</string>
      </value>
    </member>
    <member>
      <name>PV PBI/FIT Max. Size for $ Calc. (kW)</name>
      <value>
        <double>100.0</double>
      </value>
    </member>
    <member>
      <name>PV PBI/FIT Duration (Years)</name>
      <value>
        <double>20.0</double>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <string>Colorado</string>
      </value>
    </member>
    <member>
      <name>memo</name>
      <value>
        <string>3/23/11 Program has been reopened under a slightly new design. Small residential systems no longer get an upfront payment for RECs, instead they get the upfront rebate, plus a PBI for RECs. All larger systems get just the PBI. BL 2/18/11 Xcel received 3 MW of applications under the new terms and has suspended the</string>
      </value>
    </member>
    <member>
      <name>PV Res. Rebate $/kW</name>
      <value>
        <double>1750.0</double>
      </value>
    </member>
    <member>
      <name>PV NP/Govt PBI $/kWh</name>
      <value>
        <double>0.14999999999999999</double>
      </value>
    </member>
    <member>
      <name>code</name>
      <value>
        <string>CO12F</string>
      </value>
    </member>
    <member>
      <name>state_abbr</name>
      <value>
        <string>CO</string>
      </value>
    </member>
    <member>
      <name>PV Res. Rebate Min. Size (kW)</name>
      <value>
        <double>0.5</double>
      </value>
    </member>
    <member>
      <name>program_name</name>
      <value>
        <string>Xcel Energy - Solar*Rewards Program</string>
      </value>
    </member>
    <member>
      <name>PV Res. Max. Rebate $</name>
      <value>
        <double>17500.0</double>
      </value>
    </member>
    <member>
      <name>PV Rating Basis (AC/DC/PTC)</name>
      <value>
        <string>DC</string>
      </value>
    </member>
    <member>
      <name>PV Com. PBI $/kWh</name>
      <value>
        <double>0.14999999999999999</double>
      </value>
    </member>
    <member>
      <name>PV Res. PBI $/kWh</name>
      <value>
        <double>0.040000000000000001</double>
      </value>
    </member>
    <member>
      <name>PV Com. Rebate Min. Size (kW)</name>
      <value>
        <double>0.5</double>
      </value>
    </member>
    <member>
      <name>web_active</name>
      <value>
        <string>1</string>
      </value>
    </member>
    <member>
      <name>PV Res. Rebate Max. Size (kW)</name>
      <value>
        <double>10.0</double>
      </value>
    </member>
    <member>
      <name>gid</name>
      <value>
        <int>108</int>
      </value>
    </member>
    <member>
      <name>organization</name>
      <value>
        <string>Xcel Energy</string>
      </value>
    </member>
    <member>
      <name>type</name>
      <value>
        <string>Utility Rebate Program</string>
      </value>
    </member>
    <member>
      <name>notes</name>
      <value>
        <string>Commercial PBI shown represents REC payments for medium-sized systems (10.001 kW-100 kW). REC payments for systems sized 100.01 kW-500 kW not entered, this amount is sh.15/kWh as well. Rebate and REC payments for systems above 500 kW determined through RFP.</string>
      </value>
    </member>
    <member>
      <name>PV Com. PBI/FIT Max. Size (kW)</name>
      <value>
        <double>100.0</double>
      </value>
    </member>
    <value>
      <struct>
        <member>
          <name>sector</name>
        </member>
      </struct>
    </value>
    <value>
      <string>F</string>
    </value>
    <member>
      <name>code</name>
      <value>
        <string>US02F</string>
      </value>
    </member>
    <member>
      <name>notes</name>
      <value>
        <string>The American Recovery and Reinvestment Act of 2009 allows taxpayers eligible for the federal renewable electricity production tax credit (PTC) to take the federal business energy investment tax credit (ITC) or to receive a grant from the U.S. Treasury Dept. instead of taking the PTC for new installations. The new law also allows taxpayers eligible for the business ITC to receive a grant from the U.S. Treasury Dept. instead of taking the business ITC for new installations.</string>
      </value>
    </member>
    <member>
      <name>web_active</name>
      <value>
        <string>1</string>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <string>Federal</string>
      </value>
    </member>
    <member>
      <name>gid</name>
      <value>
        <int>132</int>
      </value>
    </member>
    <member>
      <name>state_abbr</name>
      <value>
        <string>US</string>
      </value>
    </member>
    <member>
      <name>PV Com. Tax Credit % Cost</name>
      <value>
        <double>0.29999999999999999</double>
      </value>
    </member>
    <member>
      <name>organization</name>
      <value>
        <string>U.S. Internal Revenue Service</string>
      </value>
    </member>
    <member>
      <name>program_name</name>
      <value>
        <string>Business Energy Investment Tax Credit (ITC)</string>
      </value>
    </member>
    <member>
      <name>type</name>
      <value>
        <string>Corporate Tax Credit</string>
      </value>
    </member>
    <member>
      <name>memo</name>
      <value>
        <string>12/20/10 Changed reference to grant expiration to 12/31/11 BL 12/3/10 Added to note info about grant expiration date of 12/31/10. AH 6/9/10 Reviewed statute -- no substantive changes. Removed history section: The federal Energy Policy Act of 2005 (EPAct 2005) expanded the existing federal business energy tax c</string>
      </value>
    </member>
    <value>
      <struct>
        <member>
          <name>PV Com. Rebate % Cost Max.</name>
        </member>
      </struct>
    </value>
    <value>
      <double>0.25</double>
    </value>
    <member>
      <name>sector</name>
      <value>
        <string>F</string>
      </value>
    </member>
    <member>
      <name>code</name>
      <value>
        <string>US05F</string>
      </value>
    </member>
    <member>
      <name>notes</name>
      <value>
        <string>Eligibility is restricted to agricultural producers and rural small businesses. Data entered in "Com." fields. Implementation rules pending. The USDA will announce the availability of funding through a Notice of Funds Availability. Updates at http://www.usda.gov/farmbill</string>
      </value>
    </member>
    <member>
      <name>web_active</name>
      <value>
        <string>1</string>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <string>Federal</string>
      </value>
    </member>
    <member>
      <name>gid</name>
      <value>
        <int>134</int>
      </value>
    </member>
    <member>
      <name>state_abbr</name>
      <value>
        <string>US</string>
      </value>
    </member>
    <member>
      <name>organization</name>
      <value>
        <string>U.S. Department of Agriculture</string>
      </value>
    </member>
    <member>
      <name>program_name</name>
      <value>
        <string>USDA - Rural Energy for America Program (REAP) Grants</string>
      </value>
    </member>
    <member>
      <name>type</name>
      <value>
        <string>Federal Grant Program</string>
      </value>
    </member>
    <member>
      <name>memo</name>
      <value>
        <string>NC contact = David Thigpen/ david.thigpen@nc.usda.gov 5/4/10 New NOSA issued 4/26/10. Added info about that, apps are due 6/30/10. There is a total of 9.34 million available for all REAP programs in FY2010 and it looks like approx 7 million will be available for RE and EE grants and loan guarantees. Adjusted %</string>
      </value>
    </member>
    <value>
      <struct>
        <member>
          <name>PV Com. Rebate % Cost Max.</name>
        </member>
      </struct>
    </value>
    <value>
      <double>0.29999999999999999</double>
    </value>
    <member>
      <name>sector</name>
      <value>
        <string>F</string>
      </value>
    </member>
    <member>
      <name>code</name>
      <value>
        <string>US53F</string>
      </value>
    </member>
    <member>
      <name>memo</name>
      <value>
        <string>12/17/10 HR 4853 signed today, changed dates to reflect extension of grant by one year. Changed application date deadline from 10/1/11 to 10/1/12. AH 12/3/10 Added info about expiration date to note. AH 9/2/10 Added note about new form that recipients must fill out to avoid recapture. AH 7/12/10 Updated contact info</string>
      </value>
    </member>
    <member>
      <name>web_active</name>
      <value>
        <string>1</string>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <string>Federal</string>
      </value>
    </member>
    <member>
      <name>gid</name>
      <value>
        <int>135</int>
      </value>
    </member>
    <member>
      <name>state_abbr</name>
      <value>
        <string>US</string>
      </value>
    </member>
    <member>
      <name>organization</name>
      <value>
        <string>U.S. Department of Treasury</string>
      </value>
    </member>
    <member>
      <name>program_name</name>
      <value>
        <string>U.S. Department of Treasury - Renewable Energy Grants</string>
      </value>
    </member>
    <member>
      <name>type</name>
      <value>
        <string>Federal Grant Program</string>
      </value>
    </member>
    <value>
      <struct>
        <member>
          <name>sector</name>
        </member>
      </struct>
    </value>
    <value>
      <string>F</string>
    </value>
    <member>
      <name>PV PBI/FIT Duration (Years)</name>
      <value>
        <double>10.0</double>
      </value>
    </member>
    <member>
      <name>notes</name>
      <value>
        <string>Eligible electric production facilities: not-for-profit electrical cooperatives, public utilities, state governments, Commonwealths, territories, possessions of the United States, the District of Columbia, Indian tribal governments, or a political subdivision thereof and Native Corporations. Data entered in the "NProfit/Gov't" fields. The production payment applies only to the electricity sold to another entity. Incentive payments are subject to the availability of annual appropriations in each federal fiscal year of operation.</string>
      </value>
    </member>
    <member>
      <name>web_active</name>
      <value>
        <string>1</string>
      </value>
    </member>
    <member>
      <name>PV NP/Govt PBI $/kWh</name>
      <value>
        <double>0.021999999999999999</double>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <string>Federal</string>
      </value>
    </member>
    <member>
      <name>code</name>
      <value>
        <string>US33F</string>
      </value>
    </member>
    <member>
      <name>state_abbr</name>
      <value>
        <string>US</string>
      </value>
    </member>
    <member>
      <name>organization</name>
      <value>
        <string>U.S. Department of Energy</string>
      </value>
    </member>
    <member>
      <name>gid</name>
      <value>
        <int>136</int>
      </value>
    </member>
    <member>
      <name>program_name</name>
      <value>
        <string>Renewable Energy Production Incentive (REPI)</string>
      </value>
    </member>
    <member>
      <name>type</name>
      <value>
        <string>Performance-Based Incentive</string>
      </value>
    </member>
    <member>
      <name>memo</name>
      <value>
        <string>01/18/11 reviewed and updated with no changes. Funding a question mark as always. JB 03/01/10 no funding requested for 2011, but Congress could authorize anyway so left up for now. JB 01/21/10 updated contact information per Bill Prymak e-mail, seeking info on appropriation status. JB 3/19/09 Updated record per stat</string>
      </value>
    </member>
    <value>
      <struct>
        <member>
          <name>sector</name>
        </member>
      </struct>
    </value>
    <value>
      <string>F</string>
    </value>
    <member>
      <name>code</name>
      <value>
        <string>US37F</string>
      </value>
    </member>
    <member>
      <name>PV Res. Tax Credit % Cost</name>
      <value>
        <double>0.29999999999999999</double>
      </value>
    </member>
    <member>
      <name>notes</name>
      <value>
        <string>v</string>
      </value>
    </member>
    <member>
      <name>web_active</name>
      <value>
        <string>1</string>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <string>Federal</string>
      </value>
    </member>
    <member>
      <name>gid</name>
      <value>
        <int>137</int>
      </value>
    </member>
    <member>
      <name>state_abbr</name>
      <value>
        <string>US</string>
      </value>
    </member>
    <member>
      <name>organization</name>
      <value>
        <string>U.S. Internal Revenue Service</string>
      </value>
    </member>
    <member>
      <name>program_name</name>
      <value>
        <string>Residential Renewable Energy Tax Credit</string>
      </value>
    </member>
    <member>
      <name>type</name>
      <value>
        <string>Personal Tax Credit</string>
      </value>
    </member>
    <member>
      <name>memo</name>
      <value>
        <string>3/14/11 Removed dead links to SEIA fact sheet. 2/3/11 Updated record based on review of current statute and notes in L/N. No changes. JRH 2/18/10 Updated record based on review of current statute and notes in L/N. No changes. JRH 6/5/09 Added info about carryforward provisions - unused credit can be carried forward</string>
      </value>
    </member>
    <member>
      <name>cbi</name>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>name</name>
      <value>
        <string>Colorado - Residential Renewable Energy Rebate Program</string>
      </value>
    </member>
    <member>
      <name>max_cost</name>
      <value>
        <double>4500.0</double>
      </value>
    </member>
    <member>
      <name>notes</name>
      <value>
        <string>PV incentive amounts may be up to .50/W if installed in a partners' territory. Wind incentive amounts may be up to /W if installed in a partners' territory. max amounts are indicated. Xcel and Black Hills customers not eligible for this incentive.</string>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <string>Colorado</string>
      </value>
    </member>
    <member>
      <name>amount</name>
      <value>
        <double>4500.0</double>
      </value>
    </member>
    <member>
      <name>max_percent</name>
      <value>
        <double>100.0</double>
      </value>
    </member>
    <member>
      <name>type</name>
      <value>
        <string>State Rebate Program</string>
      </value>
    </member>
    <member>
      <name>utility</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>name</name>
      <value>
        <string>Xcel Energy - Solar*Rewards Program</string>
      </value>
    </member>
    <member>
      <name>max_cost</name>
      <value>
        <double>17500.0</double>
      </value>
    </member>
    <member>
      <name>notes</name>
      <value>
        <string>Commercial PBI shown represents REC payments for medium-sized systems (10.001 kW-100 kW). REC payments for systems sized 100.01 kW-500 kW not entered, this amount is sh.15/kWh as well. Rebate and REC payments for systems above 500 kW determined through RFP.</string>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <string>Colorado</string>
      </value>
    </member>
    <member>
      <name>min_size</name>
      <value>
        <double>0.5</double>
      </value>
    </member>
    <member>
      <name>amount</name>
      <value>
        <double>17500.0</double>
      </value>
    </member>
    <member>
      <name>max_percent</name>
      <value>
        <double>100.0</double>
      </value>
    </member>
    <member>
      <name>type</name>
      <value>
        <string>Utility Rebate Program</string>
      </value>
    </member>
    <member>
      <name>max_size</name>
      <value>
        <double>10.0</double>
      </value>
    </member>
    <member>
      <name>pbi</name>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>utility</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>amount</name>
      <value>
        <double>0.040000000000000001</double>
      </value>
    </member>
    <member>
      <name>state</name>
      <value>
        <string>Colorado</string>
      </value>
    </member>
    <member>
      <name>max_percent</name>
      <value>
        <double>100.0</double>
      </value>
    </member>
    <member>
      <name>type</name>
      <value>
        <string>Utility Rebate Program</string>
      </value>
    </member>
    <member>
      <name>name</name>
      <value>
        <string>Xcel Energy - Solar*Rewards Program</string>
      </value>
    </member>
    <member>
      <name>taxcredits</name>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>itc</name>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>federal</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>amount</name>
      <value>
        <double>3202.9774736044701</double>
      </value>
    </member>
    <member>
      <name>notes</name>
      <value>
        <string>v</string>
      </value>
    </member>
    <member>
      <name>program_name</name>
      <value>
        <string>Residential Renewable Energy Tax Credit</string>
      </value>
    </member>
    <member>
      <name>percent_cost</name>
      <value>
        <double>0.29999999999999999</double>
      </value>
    </member>
    <member>
      <name>totals</name>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>sum</name>
      <value>
        <double>25202.98</double>
      </value>
    </member>
    <member>
      <name>cbi</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>name</name>
      <value>
        <string>Colorado - Residential Renewable Energy Rebate Program</string>
      </value>
    </member>
    <member>
      <name>value</name>
      <value>
        <double>4500.0</double>
      </value>
    </member>
    <value>
      <struct>
        <member>
          <name>name</name>
        </member>
      </struct>
    </value>
    <value>
      <string>Xcel Energy - Solar*Rewards Program</string>
    </value>
    <member>
      <name>value</name>
      <value>
        <double>17500.0</double>
      </value>
    </member>
    <member>
      <name>tax_credit</name>
      <value>
        <double>3202.98</double>
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
      <string>2.1.6</string>
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
