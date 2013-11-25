---
title: PVWatts (Version 2 - Deprecated)
summary: 'Deprecated: We encourage you to migrate to [version 4](/docs/nrel/solar/pvwatts-v4/)
  of the PVWatts API.'
url: GET /api/georeserv/app/sam/pvwatts
disqus: true
deprecated: true

---

# {{title}} <span class="url">({{url}})</span>
{{summary}}

Returns the results for a PVWatts simulation, including financial and utility data.

<ul id="toc"></ul>

## Request URL

<pre>GET /api/georeserv/app/sam/pvwatts.<em>format</em><em>?parameters</em></pre>

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
      <th class="doc-parameter-name" scope="row">timeframe</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> daily
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>monthly, daily</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Granularity of the output response</p>
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
      <th class="doc-parameter-name" scope="row">climate_file_type</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> perez
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>city, perez</em>
        </div>
      </td>
      <td class="doc-parameter-description">Whether to use city-based observational data (city) or satellite data (perez). Default is perez.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">city_file</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">City file to use for this simulation. (deprecated)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tmy2_name</th>
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
        City-based tm2 file for use in the simulation. Format: State Abbr&lt;space&gt;City see: <a href="http://rredc.nrel.gov/solar/old_data/nsrdb/1961-1990/tmy2/State.html">http://rredc.nrel.gov/solar/old_data/nsrdb/1961-1990/tmy2/State.html</a>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tmy3_name</th>
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
        Site-based tm3 file for use in simulation. USAF number. See: <a href="http://rredc.nrel.gov/solar/old_data/nsrdb/1991-2005/tmy3/by_USAFN.html">http://rredc.nrel.gov/solar/old_data/nsrdb/1991-2005/tmy3/by_USAFN.html</a>
      </td>
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
      </td>
      <td class="doc-parameter-description">Azimuth angle (degrees).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">derate</th>
      <td class="doc-parameter-required">Depends</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>0.77</em>
        </div>
      </td>
      <td class="doc-parameter-description">System derate value (fraction).</td>
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
      <td class="doc-parameter-description">lTilt angle in degrees of the PV (degrees).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tilt_eq_lat</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <div class="doc-parameter-value-field">
            <strong>Default:</strong> <em>0</em>
          </div>
          <div class="doc-parameter-value-field">
            <strong>Options:</strong> <em>0, 1</em>
          </div>
        </div>
      </td>
      <td class="doc-parameter-description">Override the tilt variable to equal latitude (0, 1) (default 0 unless tilt provided)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">track_mode</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>1</em>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>0, 1, 2</em>
        </div>
      </td>
      <td class="doc-parameter-description">Tracking Mode (Fixed: 0, 1-Axis: 1, 2-Axis: 2)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">year</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>1990</em>
        </div>
      </td>
      <td class="doc-parameter-description">Year to use for weather simulation.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">federal_tax_rate</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>35</em>
        </div>
      </td>
      <td class="doc-parameter-description">Federal Tax Rate (percent).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">insurance_rate</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>0.5</em>
        </div>
      </td>
      <td class="doc-parameter-description">Insurance Rate (percent).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">inflation_rate</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>3</em>
        </div>
      </td>
      <td class="doc-parameter-description">Rate of Inflation (percent).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">itc_fed_percent</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>30</em>
        </div>
      </td>
      <td class="doc-parameter-description">If you have a series of itc’s, simply provide the parameter multiple times in the argument list.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">loan_term</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>30</em>
        </div>
      </td>
      <td class="doc-parameter-description">Loan Term (years).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">loan_rate</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>4.95</em>
        </div>
      </td>
      <td class="doc-parameter-description">Loan Rate (percent).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">load_debt</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>80</em>
        </div>
      </td>
      <td class="doc-parameter-description">Amount the funding for the solar installation provided by the loan (percent).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">market</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>0</em>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>0, 1</em>
        </div>
      </td>
      <td class="doc-parameter-description">What market is used for the install. (Residential: 0, Commercial: 1)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">mortage</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type: integer</strong>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>0</em>
        </div>
      </td>
      <td class="doc-parameter-description">Add-on to an existing mortgage? (Yes: 1, No: 0)</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">percent_of_cost_subject_sales_tax</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>90</em>
        </div>
      </td>
      <td class="doc-parameter-description">Percent of Cost Subject to Sales Tax (percent).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">property_tax_rate</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>2.0</em>
        </div>
      </td>
      <td class="doc-parameter-description">Property Tax Rate (percent).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">real_discount_rate</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>11.0</em>
        </div>
      </td>
      <td class="doc-parameter-description">Real Discount Rate (percent).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">state_tax_rate</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>3.2</em>
        </div>
      </td>
      <td class="doc-parameter-description">State Tax Rate (percent).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">system_capacity</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>250</em>
        </div>
      </td>
      <td class="doc-parameter-description">System Capacity.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">total_hard_cost</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>103810</em>
        </div>
      </td>
      <td class="doc-parameter-description">Total installed cost of the system hardware after incentives (dollars).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">total_soft_cost</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>7150</em>
        </div>
      </td>
      <td class="doc-parameter-description">Total cost of labor and permitting for the system after incentives.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">analysis years</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type: integer</strong>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>30</em>
        </div>
      </td>
      <td class="doc-parameter-description">Number of years in analysis (years).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">load_escalation</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>0.9</em>
        </div>
      </td>
      <td class="doc-parameter-description">Annual load escalation (%/year).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">rate_escalation</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>1.5</em>
        </div>
      </td>
      <td class="doc-parameter-description">Annual utility rate escalation (%/year).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row"><strong>system_degradation</strong></th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>0.5</em>
        </div>
      </td>
      <td class="doc-parameter-description">Annual degradation of system (%/year).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ur_monthly_fixed_charge</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>50</em>
        </div>
      </td>
      <td class="doc-parameter-description">Monthly fixed charge (dollars).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row"><strong>ur_flat_buy_rate</strong></th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>0.12</em>
        </div>
      </td>
      <td class="doc-parameter-description">Flat rate (buy) ($/kWh).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row"><strong>ur_tou_enable</strong></th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>1</em>
        </div>
      </td>
      <td class="doc-parameter-description">Enable time-of-use rate (0/1).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row"><strong>ur_tou_p1_buy_rate</strong></th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>0.12</em>
        </div>
      </td>
      <td class="doc-parameter-description">TOU Period 1 Rate (buy).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row"><strong>ur_tou_p2_buy_rate</strong></th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>0.556</em>
        </div>
      </td>
      <td class="doc-parameter-description">TOU Period 2 Rate (buy).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row"><strong>ur_tou_p3_buy_rate</strong></th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>0.75</em>
        </div>
      </td>
      <td class="doc-parameter-description">TOU Period 3 Rate (buy).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row"><strong>ur_tou_p4_buy_rate</strong></th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>0.99</em>
        </div>
      </td>
      <td class="doc-parameter-description">TOU Period 4 Rate (buy).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row"><strong>ur_tou_sched_weekday</strong></th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>1111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111112222222222222</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>22222222222222222224</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>44444444222222222222</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>22244444444422222223</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>33333334444444443333</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>33333333333333333333</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>33333331111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>111111111111111</em>
        </div>
      </td>
      <td class="doc-parameter-description">TOU Weekday Schedule (288 values).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ur_tou_sched_weekend</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>1111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111222222222</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>22222222222222222222</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>22222222222222222222</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>22222222222222222222</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>22211111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>11111111111111111111</em>
        </div>
        <div class="doc-parameter-value-field">
          <em>111111111111111</em>
        </div>
      </td>
      <td class="doc-parameter-description">TOU Weekend Schedule (288 values).</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://api.data.gov/nrel/georeserv/app/sam/pvwatts.json?api_key=DEMO_KEY&amp;address=Boulder,+CO&amp;system_size=4.0&amp;derate=0.770&amp;tilt=39.5&amp;azimuth=170&amp;timeframe=monthly">/api/georeserv/app/sam/pvwatts.json?api_key=DEMO_KEY&amp;address=Boulder,+CO&amp;system_size=4.0&amp;derate=0.770&amp;tilt=39.5&amp;azimuth=170&amp;timeframe=monthly</a></pre>

```json
{
  "errors": [
    {
    }
  ],
  "infos": [

  ],
  "inputs": {
    "azimuth": "170",
    "derate": "0.770",
    "lat": "21.3069",
    "lon": "-157.8583",
    "system_size": "4.0",
    "tilt": "39.5",
    "timeframe": "monthly"
  },
  "outputs": {
    "ann_kwh_yr": 5880.522288109187,
    "financials": {
      "FedITC": [

      ],
      "analysis_period": 0,
      "cost_per_kw": 27740,
      "direct_cost": 103810,
      "installed_cost": 110960,
      "lcoe": 11.884482383728027,
      "npv": 16864.57421875,
      "payback": 3.2254412174224854,
      "totalCBI": [

      ],
      "totalIBI": [

      ],
      "totalPBI": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "util_cost_savings": [
        2939.253662109375,
        2968.427734375,
        2997.892333984375,
        3027.637939453125,
        3057.687744140625,
        3088.0390625,
        3118.688232421875,
        3149.63427734375,
        3180.9033203125,
        3212.47412109375,
        3244.3544921875,
        3276.55078125,
        3309.070556640625,
        3341.91796875,
        3375.083984375,
        3408.586669921875,
        3442.413818359375,
        3476.58447265625,
        3511.0849609375,
        3545.933349609375,
        3581.1220703125,
        3616.670166015625,
        3652.5625,
        3688.814453125,
        3725.4306640625,
        3762.40234375,
        3799.739501953125,
        3837.45751953125,
        3875.5380859375,
        3914.011962890625
      ],
      "util_rate": 0
    },
    "kwh_per_kw": 1470.130571038654,
    "sam_output": {
      "Apr": 540.2912584218271,
      "Aug": 530.5699735764148,
      "Dec": 409.51255196079626,
      "Feb": 415.35182499417647,
      "Jan": 420.67913817015267,
      "Jul": 517.0309805405751,
      "Jun": 510.93430222376634,
      "Mar": 565.9112493984993,
      "May": 534.3744302254297,
      "Nov": 414.09659745669353,
      "Oct": 501.2386332748549,
      "Sep": 520.5313478659999
    },
    "utilities": [
      2939.253662109375,
      2968.427734375,
      2997.892333984375,
      3027.637939453125,
      3057.687744140625,
      3088.0390625,
      3118.688232421875,
      3149.63427734375,
      3180.9033203125,
      3212.47412109375,
      3244.3544921875,
      3276.55078125,
      3309.070556640625,
      3341.91796875,
      3375.083984375,
      3408.586669921875,
      3442.413818359375,
      3476.58447265625,
      3511.0849609375,
      3545.933349609375,
      3581.1220703125,
      3616.670166015625,
      3652.5625,
      3688.814453125,
      3725.4306640625,
      3762.40234375,
      3799.739501953125,
      3837.45751953125,
      3875.5380859375,
      3914.011962890625
    ]
  },
  "version": "2.0.24",
  "warnings": [

  ]
}
```

### XML Output Format

<pre>GET <a href="http://api.data.gov/nrel/georeserv/app/sam/pvwatts.xml?api_key=DEMO_KEY&amp;address=Boulder,+CO&amp;system_size=4.0&amp;derate=0.770&amp;tilt=39.5&amp;azimuth=170&amp;timeframe=monthly">/api/georeserv/app/sam/pvwatts.xml?api_key=DEMO_KEY&amp;address=Boulder,+CO&amp;system_size=4.0&amp;derate=0.770&amp;tilt=39.5&amp;azimuth=170&amp;timeframe=monthly</a></pre>

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
          <name>tilt</name>
        </member>
      </struct>
    </value>
    <value>
      <string>39.5</string>
    </value>
    <member>
      <name>system_size</name>
      <value>
        <string>4.0</string>
      </value>
    </member>
    <member>
      <name>timeframe</name>
      <value>
        <string>monthly</string>
      </value>
    </member>
    <member>
      <name>lon</name>
      <value>
        <string>-157.8583</string>
      </value>
    </member>
    <member>
      <name>derate</name>
      <value>
        <string>0.770</string>
      </value>
    </member>
    <member>
      <name>azimuth</name>
      <value>
        <string>170</string>
      </value>
    </member>
    <member>
      <name>lat</name>
      <value>
        <string>21.3069</string>
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
          <name>kwh_per_kw</name>
        </member>
      </struct>
    </value>
    <value>
      <double>1470.1305710386539</double>
    </value>
    <member>
      <name>ann_kwh_yr</name>
      <value>
        <double>5880.5222881091868</double>
      </value>
    </member>
    <member>
      <name>sam_output</name>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>Mar</name>
      <value>
        <double>565.91124939849931</double>
      </value>
    </member>
    <member>
      <name>Feb</name>
      <value>
        <double>415.35182499417647</double>
      </value>
    </member>
    <member>
      <name>Aug</name>
      <value>
        <double>530.56997357641478</double>
      </value>
    </member>
    <member>
      <name>Sep</name>
      <value>
        <double>520.53134786599992</double>
      </value>
    </member>
    <member>
      <name>Apr</name>
      <value>
        <double>540.29125842182714</double>
      </value>
    </member>
    <member>
      <name>Jun</name>
      <value>
        <double>510.93430222376634</double>
      </value>
    </member>
    <member>
      <name>Jul</name>
      <value>
        <double>517.03098054057511</double>
      </value>
    </member>
    <member>
      <name>Jan</name>
      <value>
        <double>420.67913817015267</double>
      </value>
    </member>
    <member>
      <name>May</name>
      <value>
        <double>534.37443022542971</double>
      </value>
    </member>
    <member>
      <name>Nov</name>
      <value>
        <double>414.09659745669353</double>
      </value>
    </member>
    <member>
      <name>Dec</name>
      <value>
        <double>409.51255196079626</double>
      </value>
    </member>
    <member>
      <name>Oct</name>
      <value>
        <double>501.23863327485492</double>
      </value>
    </member>
    <member>
      <name>financials</name>
      <value>
        <struct/>
      </value>
    </member>
    <member>
      <name>util_rate</name>
      <value>
        <double>0.0</double>
      </value>
    </member>
    <member>
      <name>direct_cost</name>
      <value>
        <double>103810.0</double>
      </value>
    </member>
    <member>
      <name>FedITC</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
    </member>
    <member>
      <name>cost_per_kw</name>
      <value>
        <double>27740.0</double>
      </value>
    </member>
    <member>
      <name>lcoe</name>
      <value>
        <double>11.884482383728027</double>
      </value>
    </member>
    <member>
      <name>totalIBI</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
    </member>
    <member>
      <name>installed_cost</name>
      <value>
        <double>110960.0</double>
      </value>
    </member>
    <member>
      <name>totalPBI</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
      <value>
        <double>0.0</double>
      </value>
    </member>
    <member>
      <name>payback</name>
      <value>
        <double>3.2254412174224854</double>
      </value>
    </member>
    <member>
      <name>util_cost_savings</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
      <value>
        <double>2939.253662109375</double>
      </value>
      <value>
        <double>2968.427734375</double>
      </value>
      <value>
        <double>2997.892333984375</double>
      </value>
      <value>
        <double>3027.637939453125</double>
      </value>
      <value>
        <double>3057.687744140625</double>
      </value>
      <value>
        <double>3088.0390625</double>
      </value>
      <value>
        <double>3118.688232421875</double>
      </value>
      <value>
        <double>3149.63427734375</double>
      </value>
      <value>
        <double>3180.9033203125</double>
      </value>
      <value>
        <double>3212.47412109375</double>
      </value>
      <value>
        <double>3244.3544921875</double>
      </value>
      <value>
        <double>3276.55078125</double>
      </value>
      <value>
        <double>3309.070556640625</double>
      </value>
      <value>
        <double>3341.91796875</double>
      </value>
      <value>
        <double>3375.083984375</double>
      </value>
      <value>
        <double>3408.586669921875</double>
      </value>
      <value>
        <double>3442.413818359375</double>
      </value>
      <value>
        <double>3476.58447265625</double>
      </value>
      <value>
        <double>3511.0849609375</double>
      </value>
      <value>
        <double>3545.933349609375</double>
      </value>
      <value>
        <double>3581.1220703125</double>
      </value>
      <value>
        <double>3616.670166015625</double>
      </value>
      <value>
        <double>3652.5625</double>
      </value>
      <value>
        <double>3688.814453125</double>
      </value>
      <value>
        <double>3725.4306640625</double>
      </value>
      <value>
        <double>3762.40234375</double>
      </value>
      <value>
        <double>3799.739501953125</double>
      </value>
      <value>
        <double>3837.45751953125</double>
      </value>
      <value>
        <double>3875.5380859375</double>
      </value>
      <value>
        <double>3914.011962890625</double>
      </value>
    </member>
    <member>
      <name>totalCBI</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
    </member>
    <member>
      <name>npv</name>
      <value>
        <double>16864.57421875</double>
      </value>
    </member>
    <member>
      <name>analysis_period</name>
      <value>
        <double>0.0</double>
      </value>
    </member>
    <member>
      <name>utilities</name>
      <value>
        <array>
          <data/>
        </array>
      </value>
      <value>
        <double>2939.253662109375</double>
      </value>
      <value>
        <double>2968.427734375</double>
      </value>
      <value>
        <double>2997.892333984375</double>
      </value>
      <value>
        <double>3027.637939453125</double>
      </value>
      <value>
        <double>3057.687744140625</double>
      </value>
      <value>
        <double>3088.0390625</double>
      </value>
      <value>
        <double>3118.688232421875</double>
      </value>
      <value>
        <double>3149.63427734375</double>
      </value>
      <value>
        <double>3180.9033203125</double>
      </value>
      <value>
        <double>3212.47412109375</double>
      </value>
      <value>
        <double>3244.3544921875</double>
      </value>
      <value>
        <double>3276.55078125</double>
      </value>
      <value>
        <double>3309.070556640625</double>
      </value>
      <value>
        <double>3341.91796875</double>
      </value>
      <value>
        <double>3375.083984375</double>
      </value>
      <value>
        <double>3408.586669921875</double>
      </value>
      <value>
        <double>3442.413818359375</double>
      </value>
      <value>
        <double>3476.58447265625</double>
      </value>
      <value>
        <double>3511.0849609375</double>
      </value>
      <value>
        <double>3545.933349609375</double>
      </value>
      <value>
        <double>3581.1220703125</double>
      </value>
      <value>
        <double>3616.670166015625</double>
      </value>
      <value>
        <double>3652.5625</double>
      </value>
      <value>
        <double>3688.814453125</double>
      </value>
      <value>
        <double>3725.4306640625</double>
      </value>
      <value>
        <double>3762.40234375</double>
      </value>
      <value>
        <double>3799.739501953125</double>
      </value>
      <value>
        <double>3837.45751953125</double>
      </value>
      <value>
        <double>3875.5380859375</double>
      </value>
      <value>
        <double>3914.011962890625</double>
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
      <string>2.0.24</string>
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

## Demo Application

You can download a [demo application](/doc/solar/georeserv_demo.zip) to see how you might implement your own service on top of the PVWatts service. There is also a [live version](http://maps.nrel.gov/pvwatts_demo/) running so that you can see it in action.

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
