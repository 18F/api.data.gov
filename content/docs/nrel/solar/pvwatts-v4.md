---
title: PVWatts
summary: NREL's PVWatts calculates the energy production and cost savings of grid-connected photovoltaic (PV) energy systems. This service estimates the performance of hypothetical residential and small commercial PV installations.
disqus: true

---

# {{title}}
{{summary}}

Version 4 is the current version of the PVWatts API. Previous versions have been deprecated and its users are encouraged to migrate to this newly enhanced version.

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/nrel/pvwatts/v4<em>.format?parameters</em></pre>

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
      <th class="doc-parameter-name" scope="row">system_size</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <i>0.05</i> to <em>100000</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Nameplate capacity (kW).</p>
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
      <td class="doc-parameter-description">
        <p>The address to use (lat/lon returned by Google's geocoding service). Required if lat/lon or file_id not specified.</p>
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
      <td class="doc-parameter-description">
        <p>The latitude for the location to use. Required if address or file_id not specified.</p>
      </td>
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
      <td class="doc-parameter-description">
        <p>The longitude for the location to use. Required if address or file_id not specified.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">file_id</th>
      <td class="doc-parameter-required">Depends</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> none
        </div>
      </td>
      <td class="doc-parameter-description">An identifier provided by the <a href="http://developer.nrel.gov/doc/nrel/solar/data_query/v1">solar data query</a> web service to specify the climate data file to use. Required if lat/lon or address not specified.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dataset</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> perez
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <i>perez, tmy2, tmy3, intl</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The climate dataset to use. Should not be passed in if using file_id to specify the climate data file.</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
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
              <td>
                <p>TMY3 station data (see <a href="http://rredc.nrel.gov/solar/old_data/nsrdb/1991-2005/tmy3/by_USAFN.html">Typical Meteorological Year version 3</a>)</p>
              </td>
            </tr>
            <tr>
              <th scope="row">intl</th>
              <td>
                <p>International station data</p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">timeframe</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> monthly
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <i>monthly, hourly</i>
        </div>
      </td>
      <td class="doc-parameter-description">Granularity of the output response.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">azimuth</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <i>0 to 360</i>
        </div>
      </td>
      <td class="doc-parameter-description">Azimuth angle (degrees).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">derate</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <i>0 to 1</i>
        </div>
      </td>
      <td class="doc-parameter-description">System derate value.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tilt</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">Tilt angle (degrees).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tilt_eq_lat</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> 0
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <i>0, 1</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Override the tilt variable to equal latitude (default 0 unless tilt provided).</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">0</th>
              <td>False</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>True</td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">track_mode</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> 1
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <i>0, 1, 2</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Tracking mode.</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">0</th>
              <td>Fixed</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>1-Axis</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>2-Axis</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">callback</th>
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
        <p>Return the data using <a href="http://en.wikipedia.org/wiki/JSONP">JSONP</a> and the given callback function (only applicable when using the <em>json</em> format).</p>
      </td>
    </tr>
  </tbody>
</table>

## Response Fields

The response is composed of service-related informational fields and the results of the PVWatts simulation.

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
      <td class="doc-parameter-description">Any warning messages resulting from the request.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">version</th>
      <td class="doc-parameter-value"><strong>Type:</strong> string</td>
      <td class="doc-parameter-description">The current version of the web service.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ssc_info</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">Information about the SSC library.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">station_info</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">Information about the climate data used in the simulation.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">outputs</th>
      <td class="doc-parameter-value"><strong>Type:</strong> collection</td>
      <td class="doc-parameter-description">The data outputs from the simulation. (see <a href="#output-fields">output fields</a> for more detail)</td>
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
      <th class="doc-parameter-name" scope="row">poa_monthly</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Monthly plane of array irradiance values.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dc_monthly</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Monthly DC array output.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ac_monthly</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Monthly AC system output.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ac_annual</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">Annual AC system output.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">solrad_monthly</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Monthly solar radiation values.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">solrad_annual</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">Annual solar radiation values.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ac</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly AC system output (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">poa</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly plane of array irradiance (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dn</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly beam normal irradiance (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">dc</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly DC array output (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">df</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly diffuse irradiance (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tamb</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly ambient temperature (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tcell</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly module temperature (only when timeframe=hourly)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">wspd</th>
      <td class="doc-parameter-value"><strong>Type:</strong> array of decimal</td>
      <td class="doc-parameter-description">Hourly windspeed (only when timeframe=hourly)</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://api.data.gov/nrel/pvwatts/v4.json?api_key=DEMO_KEY&amp;system_size=4&amp;dataset=tmy2&amp;derate=0.77&amp;lat=40&amp;lon=-105">http://api.data.gov/nrel/pvwatts/v4.json?api_key=DEMO_KEY&amp;system_size=4&amp;dataset=tmy2&amp;derate=0.77&amp;lat=40&amp;lon=-105</a></pre>

```json
{
    "station_info": {
        "tz": -7,
        "location": "94018",
        "lon": -105.25,
        "file_name": "94018.tm2",
        "city": "BOULDER",
        "state": "CO",
        "lat": 40.01666641235352,
        "elev": 1634
    },
    "errors": [

    ],
    "version": "4.0.0",
    "inputs": {
        "system_size": "4",
        "lon": "-105",
        "derate": "0.77",
        "dataset": "tmy2",
        "lat": "40",
        "api_key": "DEMO_KEY"
    },
    "warnings": [

    ],
    "outputs": {
        "poa_monthly": [
            137.1923980712891,
            137.0316772460938,
            187.4732360839844,
            182.7943878173828,
            185.7599792480469,
            182.4970855712891,
            187.8779907226562,
            193.34228515625,
            187.3993988037109,
            175.8596649169922,
            137.8765869140625,
            132.9652557373047
        ],
        "dc_monthly": [
            468.0147399902344,
            457.9238891601562,
            616.0709228515625,
            581.62548828125,
            576.5953979492188,
            551.68603515625,
            553.3501586914062,
            569.5568237304688,
            564.85595703125,
            550.3904418945312,
            460.4128112792969,
            454.1395263671875
        ],
        "ac_annual": 5834.35107421875,
        "solrad_annual": 5.553147792816162,
        "ac_monthly": [
            426.7577514648438,
            417.6890869140625,
            563.779541015625,
            529.3705444335938,
            523.4755249023438,
            500.5887451171875,
            502.0051879882812,
            518.2822875976562,
            515.994140625,
            503.0267639160156,
            420.1042785644531,
            413.2771606445312
        ],
        "solrad_monthly": [
            4.425561428070068,
            4.893988609313965,
            6.047523975372314,
            6.093146324157715,
            5.992257595062256,
            6.083236217498779,
            6.060580253601074,
            6.236847877502441,
            6.246646404266357,
            5.672892570495605,
            4.59588623046875,
            4.289201736450195
        ]
    },
    "ssc_info": {
        "version": 27,
        "build": "Unix 64 bit GNU/C++ Jan 10 2013 20:00:07"
    }
}
```

### XML Output Format

<pre>GET <a href="http://api.data.gov/nrel/pvwatts/v4.xml?api_key=DEMO_KEY&amp;system_size=4&amp;dataset=tmy2&amp;derate=0.77&amp;lat=40&amp;lon=-105">http://api.data.gov/nrel/pvwatts/v4.xml?api_key=DEMO_KEY&amp;system_size=4&amp;dataset=tmy2&amp;derate=0.77&amp;lat=40&amp;lon=-105</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <inputs>
    <api-key>DEMO_KEY</api-key>
    <system-size>4</system-size>
    <dataset>tmy2</dataset>
    <derate>0.77</derate>
    <lat>40</lat>
    <lon>-105</lon>
  </inputs>
  <errors type="array"/>
  <warnings type="array"/>
  <version>4.0.0</version>
  <ssc-info>
    <version type="integer">27</version>
    <build>Unix 64 bit GNU/C++ Jan 10 2013 20:00:07</build>
  </ssc-info>
  <station-info>
    <lat type="float">40.016666412353516</lat>
    <lon type="float">-105.25</lon>
    <elev type="float">1634.0</elev>
    <tz type="float">-7.0</tz>
    <location>94018</location>
    <city>BOULDER</city>
    <state>CO</state>
    <file-name>94018.tm2</file-name>
  </station-info>
  <outputs>
    <ac-monthly type="array">
      <ac-monthly type="float">426.75775146484375</ac-monthly>
      <ac-monthly type="float">417.6890869140625</ac-monthly>
      <ac-monthly type="float">563.779541015625</ac-monthly>
      <ac-monthly type="float">529.3705444335938</ac-monthly>
      <ac-monthly type="float">523.4755249023438</ac-monthly>
      <ac-monthly type="float">500.5887451171875</ac-monthly>
      <ac-monthly type="float">502.00518798828125</ac-monthly>
      <ac-monthly type="float">518.2822875976562</ac-monthly>
      <ac-monthly type="float">515.994140625</ac-monthly>
      <ac-monthly type="float">503.0267639160156</ac-monthly>
      <ac-monthly type="float">420.1042785644531</ac-monthly>
      <ac-monthly type="float">413.27716064453125</ac-monthly>
    </ac-monthly>
    <poa-monthly type="array">
      <poa-monthly type="float">137.19239807128906</poa-monthly>
      <poa-monthly type="float">137.03167724609375</poa-monthly>
      <poa-monthly type="float">187.47323608398438</poa-monthly>
      <poa-monthly type="float">182.7943878173828</poa-monthly>
      <poa-monthly type="float">185.75997924804688</poa-monthly>
      <poa-monthly type="float">182.49708557128906</poa-monthly>
      <poa-monthly type="float">187.87799072265625</poa-monthly>
      <poa-monthly type="float">193.34228515625</poa-monthly>
      <poa-monthly type="float">187.39939880371094</poa-monthly>
      <poa-monthly type="float">175.8596649169922</poa-monthly>
      <poa-monthly type="float">137.8765869140625</poa-monthly>
      <poa-monthly type="float">132.9652557373047</poa-monthly>
    </poa-monthly>
    <solrad-monthly type="array">
      <solrad-monthly type="float">4.425561428070068</solrad-monthly>
      <solrad-monthly type="float">4.893988609313965</solrad-monthly>
      <solrad-monthly type="float">6.0475239753723145</solrad-monthly>
      <solrad-monthly type="float">6.093146324157715</solrad-monthly>
      <solrad-monthly type="float">5.992257595062256</solrad-monthly>
      <solrad-monthly type="float">6.083236217498779</solrad-monthly>
      <solrad-monthly type="float">6.060580253601074</solrad-monthly>
      <solrad-monthly type="float">6.236847877502441</solrad-monthly>
      <solrad-monthly type="float">6.246646404266357</solrad-monthly>
      <solrad-monthly type="float">5.6728925704956055</solrad-monthly>
      <solrad-monthly type="float">4.59588623046875</solrad-monthly>
      <solrad-monthly type="float">4.289201736450195</solrad-monthly>
    </solrad-monthly>
    <dc-monthly type="array">
      <dc-monthly type="float">468.0147399902344</dc-monthly>
      <dc-monthly type="float">457.92388916015625</dc-monthly>
      <dc-monthly type="float">616.0709228515625</dc-monthly>
      <dc-monthly type="float">581.62548828125</dc-monthly>
      <dc-monthly type="float">576.5953979492188</dc-monthly>
      <dc-monthly type="float">551.68603515625</dc-monthly>
      <dc-monthly type="float">553.3501586914062</dc-monthly>
      <dc-monthly type="float">569.5568237304688</dc-monthly>
      <dc-monthly type="float">564.85595703125</dc-monthly>
      <dc-monthly type="float">550.3904418945312</dc-monthly>
      <dc-monthly type="float">460.4128112792969</dc-monthly>
      <dc-monthly type="float">454.1395263671875</dc-monthly>
    </dc-monthly>
    <ac-annual type="float">5834.35107421875</ac-annual>
    <solrad-annual type="float">5.553147792816162</solrad-annual>
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
