---
title: All Stations
summary: Return a full list of alternative fuel stations that match your query.
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/nrel/alt-fuel-stations/v1<em>.format?parameters</em></pre>

## Request Parameters

The following query parameters may be passed in the request to control the output:

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
        <p>Your developer API key. See <a href="/doc/api-key">API key usage</a> for more information.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">status</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>all</em>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>all</em>, <i>E, P</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Return stations that match the given status. A single status, or a comma-separated list of multiple statuses, may be given.</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">all</th>
              <td>Include both open and planned stations.</td>
            </tr>
            <tr>
              <th scope="row">E</th>
              <td>Open: The station is open and carries alternative fuel.</td>
            </tr>
            <tr>
              <th scope="row">P</th>
              <td>Planned: The station is not yet open, but plans to carry alternative fuel in the future, or the station is temporarily out of service.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">access</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>all</em>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <i>all, public, private</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Return stations with the given access type.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">fuel_type</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>all</em>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>all</em>, <em>BD</em>, <em>CNG</em>, <em>E85</em>, <em>ELEC</em>, <em>HY</em>, <em>LNG</em>, <em>LPG</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Return stations that supply any of the given fuel types. A single fuel type, or a comma-separated list of multiple fuel types, may be given.</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">all</th>
              <td>Include all fuel types</td>
            </tr>
            <tr>
              <th scope="row">BD</th>
              <td>Biodiesel (B20 and above)</td>
            </tr>
            <tr>
              <th scope="row">CNG</th>
              <td>Compressed Natural Gas</td>
            </tr>
            <tr>
              <th scope="row">E85</th>
              <td>Ethanol (E85)</td>
            </tr>
            <tr>
              <th scope="row">ELEC</th>
              <td>Electric</td>
            </tr>
            <tr>
              <th scope="row">HY</th>
              <td>Hydrogen</td>
            </tr>
            <tr>
              <th scope="row">LNG</th>
              <td>Liquefied Natural Gas</td>
            </tr>
            <tr>
              <th scope="row">LPG</th>
              <td>Liquefied Petroleum Gas (Propane)</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">cards_accepted</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>all</em>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>all, A, D, M, V, Cash, Checks, CFN, CleanEnergy, FuelMan, GasCard, PHH, Voyager, Wright_Exp</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Return stations that accept any of the given payment methods. A single payment method, or a comma-separated list of multiple payment methods, may be given.</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">all</th>
              <td>Include all payment types</td>
            </tr>
            <tr>
              <th scope="row">A</th>
              <td>American Express</td>
            </tr>
            <tr>
              <th scope="row">D</th>
              <td>Discover</td>
            </tr>
            <tr>
              <th scope="row">M</th>
              <td>MasterCard</td>
            </tr>
            <tr>
              <th scope="row">V</th>
              <td>Visa</td>
            </tr>
            <tr>
              <th scope="row">Cash</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Checks</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">CFN</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">CleanEnergy</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">FuelMan</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">GasCard</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">PHH</th>
              <td>PHH Services</td>
            </tr>
            <tr>
              <th scope="row">Wright_Exp</th>
              <td>Wright Express</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">owner_type</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>all</em>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>all, FG, LG, P, SG, T</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Return stations owned by the given types of owners. A single owner type, or a comma-separated list of multiple owner types, may be given.</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">all</th>
              <td>Include all owner types</td>
            </tr>
            <tr>
              <th scope="row">P</th>
              <td>Privately owned</td>
            </tr>
            <tr>
              <th scope="row">T</th>
              <td>Utility owned</td>
            </tr>
            <tr>
              <th scope="row">FG</th>
              <td>Federal government owned</td>
            </tr>
            <tr>
              <th scope="row">LG</th>
              <td>Local government owned</td>
            </tr>
            <tr>
              <th scope="row">SG</th>
              <td>State government owned</td>
            </tr>
            <tr>
              <th scope="row">J</th>
              <td>Jointly owned (combination of owner types)</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">federal_agency_id</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>all</em>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>all, (see table to right for IDs)</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Return stations owned by the given federal agency. A federal agency ID, or a comma-separated list of multiple federal agency IDs, may be given.</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">all</th>
              <td>Include all stations, regardless of federal agency owner</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Defense Agencies</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>U.S. Department of Agriculture</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Department of Air Force</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Department of Army</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Department of Commerce</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>U.S. Department of Energy</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Department of Health and Human Services</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Department of Homeland Security</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>Department of Justice</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>Department of Navy</td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>Department of the Interior</td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>U.S. Department of Transportation</td>
            </tr>
            <tr>
              <th scope="row">19</th>
              <td>Department of Veterans Affairs</td>
            </tr>
            <tr>
              <th scope="row">20</th>
              <td>U.S. Environmental Protection Agency</td>
            </tr>
            <tr>
              <th scope="row">22</th>
              <td>National Aeronautics and Space Administration</td>
            </tr>
            <tr>
              <th scope="row">23</th>
              <td>Smithsonian Institution</td>
            </tr>
            <tr>
              <th scope="row">24</th>
              <td>Social Security Administration</td>
            </tr>
            <tr>
              <th scope="row">25</th>
              <td>U.S. Postal Service</td>
            </tr>
            <tr>
              <th scope="row">26</th>
              <td>United States Marine Corps</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ev_network</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>all</em>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>all, Blink Network, C</em><em>hargeNet, ChargePoint Network, eVgo Network, EVSE LLC WebNet, RechargeAccess, Rideshare Online, Shorepower</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Return only electric charging stations that belong to the given network. A single network, or a comma separate list of multiple networks, may be given.</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">all</th>
            </tr>
            <tr>
              <th scope="row">Blink Network</th>
            </tr>
            <tr>
              <th scope="row">ChargeNet</th>
            </tr>
            <tr>
              <th scope="row">ChargePoint Network</th>
            </tr>
            <tr>
              <th scope="row">eVgo Network</th>
            </tr>
            <tr>
              <th scope="row">EVSE LLC WebNet</th>
            </tr>
            <tr>
              <th scope="row">RechargeAccess</th>
            </tr>
            <tr>
              <th scope="row">Rideshare Online</th>
            </tr>
            <tr>
              <th scope="row">Shorepower</th>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ev_charging_level</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <em>all</em>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>all, 1, 2, dc_fast</em>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Return only electric charging stations that provide the given level of electric vehicle supply equipment (EVSE).</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">all</th>
              <td>Include all charging levels</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Level 1 EVSE (standard 110V outlet)</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Level 2 EVSE (J1772 connector)</td>
            </tr>
            <tr>
              <th scope="row">dc_fast</th>
              <td>DC Fast Charging</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">state</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">Return only stations within the given state. State must be given as a two character state code (eg, "CO" for Colorado). A single state, or a comma-separate list of multiple states, may be given.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">zip</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">Return only stations within the given ZIP code. ZIP codes must be exactly 5 digits long. A single ZIP code, or a comma-separate list of multiple ZIP codes, may be given.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">limit</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Minimum:</strong> <i>1</i>
        </div>
      </td>
      <td class="doc-parameter-description">The maximum number of results to return. Note: Since results are returned in no specific order, this has limited use, other than for testing purposes.</td>
    </tr>
  </tbody>
</table>

## Response Fields

The response is composed of the fuel stations matching the requested query. For JSON or XML formats, additional metadata is supplied in the following structure:

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
      <th class="doc-parameter-name" scope="row">total_results</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>How many total stations match your requested query (regardless of any "limit" applied).</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">station_locator_url</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The URL of the Alternative Fueling Station Locator, the web application that supplies this data.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">fuel_stations</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array
        </div>
      </td>
      <td class="doc-parameter-description">An array of matching fuel station records returned in no specific order. See <a href="#fuel-station-record-fields">fuel station record fields</a> for response details.</td>
    </tr>
  </tbody>
</table>

### Fuel Station Record Fields

The individual fuel station records are returned in no specific order. Each station has the following attributes:

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
      <th class="doc-parameter-name" scope="row">fuel_type_code</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The type of alternative fuel the station provides. Fuel types are given as code values as described below:</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">BD</th>
              <td>Biodiesel (B20 and above)</td>
            </tr>
            <tr>
              <th scope="row">CNG</th>
              <td>Compressed Natural Gas</td>
            </tr>
            <tr>
              <th scope="row">E85</th>
              <td>Ethanol (E85)</td>
            </tr>
            <tr>
              <th scope="row">ELEC</th>
              <td>Electric</td>
            </tr>
            <tr>
              <th scope="row">HY</th>
              <td>Hydrogen</td>
            </tr>
            <tr>
              <th scope="row">LNG</th>
              <td>Liquefied Natural Gas</td>
            </tr>
            <tr>
              <th scope="row">LPG</th>
              <td>Liquefied Petroleum Gas (Propane)</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">station_name</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">The name of the station.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">street_address</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">The street address of the station's location.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">intersection_directions</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">Brief additional information about how to locate the station.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">city</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">The city of the station's location.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">state</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">The two character U.S. state or Canadian province code of the station's location.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">zip</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">The ZIP code (postal code) of the station's location.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">plus4</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">The plus-4 portion of the station's ZIP code (U.S. ZIP codes only).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">station_phone</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">The phone number of the station.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">status_code</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The current status of the station, given as code values as described below:</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">E</th>
              <td>Open: The station is open.</td>
            </tr>
            <tr>
              <th scope="row">P</th>
              <td>Planned: The station is not yet open, but plans to carry alternative fuel in the future, or the station is temporarily out of service. See the "Expected Date" field for an anticipated open date.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">expected_date</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> date
        </div>
      </td>
      <td class="doc-parameter-description">For planned stations, the date the station is expected to open or start carrying alternative fuel.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">groups_with_access_code</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">A description of who is allowed to access the station and other station access information. Stations with the groups_with_access_code "Private - fleet customers only" may allow other entities to fuel through a business-to-business arrangement. For more information, fleet customers should refer to the access_days_time field for contact information or contact the station directly.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">access_days_time</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">Hours of operation for the station.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">cards_accepted</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>A space-separated list of payment methods accepted. Payment methods are given as code values as described below:</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">A</th>
              <td>American Express</td>
            </tr>
            <tr>
              <th scope="row">D</th>
              <td>Discover</td>
            </tr>
            <tr>
              <th scope="row">M</th>
              <td>MasterCard</td>
            </tr>
            <tr>
              <th scope="row">V</th>
              <td>VISA</td>
            </tr>
            <tr>
              <th scope="row">Cash</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Checks</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">CFN</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">CleanEnergy</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">FuelMan</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">GasCard</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">PHH</th>
              <td>PHH Services</td>
            </tr>
            <tr>
              <th scope="row">Voyager</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Wright_Exp</th>
              <td>WEX</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">owner_type_code</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>A space-separated list of payment methods accepted. Payment methods are given as code values as described below:</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Option</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">P</th>
              <td>Privately owned</td>
            </tr>
            <tr>
              <th scope="row">T</th>
              <td>Utility owned</td>
            </tr>
            <tr>
              <th scope="row">FG</th>
              <td>Federal government owned</td>
            </tr>
            <tr>
              <th scope="row">LG</th>
              <td>Local government owned</td>
            </tr>
            <tr>
              <th scope="row">SG</th>
              <td>State government owned</td>
            </tr>
            <tr>
              <th scope="row">J</th>
              <td>Jointly owned (combination of owner types)</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">federal_agency</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> record
        </div>
      </td>
      <td class="doc-parameter-description">If the station is owned by a federal agency, a record for the federal agency that owns this station. See <a href="#federal-agency-record-fields">federal agency record fields</a> for response details.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">bd_blends</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">For biodiesel stations, the level of biodiesel blends the station provides.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">e85_blender_pump</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> boolean
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>For E85 stations, an indication of whether the station has a blender pump on site, given as a boolean:</p>
        <table border="0" cellpadding="0" cellspacing="0" class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">true</th>
              <td>In addition to E85, the station has a blender pump capable of providing mid-level ethanol blends.</td>
            </tr>
            <tr>
              <th scope="row">false</th>
              <td>The station does not have a blender pump.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">lpg_primary</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> boolean
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>For propane stations, the type of station, given as a boolean:</p>
        <table border="0" cellpadding="0" cellspacing="0" class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">true</th>
              <td>
                Primary: A propane station is considered primary because it meets the following criteria, developed based on feedback from the propane industry:

                <ol>
                  <li>The price of a gallon of propane autogas, including all taxes, at the station is less expensive than other propane sold (e.g., gas grill bottles); and</li>
                  <li>The station accepts credit cards.</li>
                </ol>
              </td>
            </tr>
            <tr>
              <th scope="row">false</th>
              <td>Secondary: The station does not meet the criteria to be considered primary.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ng_fill_type_code</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>For CNG stations, the type of dispensing capability available, given as code values as described below:</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Q</th>
              <td>Quick fill</td>
            </tr>
            <tr>
              <th scope="row">T</th>
              <td>Timed fill</td>
            </tr>
            <tr>
              <th scope="row">B</th>
              <td>Both: quick fill and timed fill</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ng_psi</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">For CNG stations, a space separated list of PSI pressures available.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ng_vehicle_class</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>For CNG and LNG stations, the maximum vehicle size that can physically access the fueling infrastructure, given as code values as described below:</p>
        <table border="0" cellpadding="0" cellspacing="0" class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">LD</th>
              <td>Station can only accommodate light-duty vehicles (Classes 1-2).</td>
            </tr>
            <tr>
              <th scope="row">MD</th>
              <td>Station can accommodate light- and medium-duty vehicles (Classes 1-5).</td>
            </tr>
            <tr>
              <th scope="row">HD</th>
              <td>Station can accommodate light-, medium-, and heavy-duty vehicles (Classes 1-8).</td>
            </tr>
          </tbody>
        </table>
        <p>Note: This field does not take into account station capacity or other considerations.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ev_level1_evse_num</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">For electric stations, the number of Level 1 EVSE (standard 110V outlet).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ev_level2_evse_num</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">For electric stations, the number of Level 2 EVSE (J1772 connector).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ev_dc_fast_num</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">For electric stations, the number of DC Fast Chargers.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ev_other_evse</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        For electric stations, the number and type of additional EVSE, such as:

        <ul>
          <li>SP Inductive - Small paddle inductive</li>
          <li>LP Inductive - Large paddle inductive</li>
          <li>Avcon Conductive</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ev_network</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">For electric stations, the name of the EVSE network, if applicable.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ev_network_web</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">For electric stations, the EVSE network Web site, if applicable.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">hy_status_link</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">For hydrogen stations, a link to a website that provides up-to-date information about the current status of this hydrogen station.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">geocode_status</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>A rating indicating the approximate accuracy of the latitude and longitude for the station's address, given as code values as described below:</p>
        <table border="0" cellpadding="0" cellspacing="0" class="doc-parameter-options">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">GPS</th>
              <td>The location is from a real GPS readout at the station.</td>
            </tr>
            <tr>
              <th scope="row">200-9</th>
              <td>Premise (building name, property name, shopping center, etc.) level accuracy.</td>
            </tr>
            <tr>
              <th scope="row">200-8</th>
              <td>Address level accuracy.</td>
            </tr>
            <tr>
              <th scope="row">200-7</th>
              <td>Intersection level accuracy.</td>
            </tr>
            <tr>
              <th scope="row">200-6</th>
              <td>Street level accuracy.</td>
            </tr>
            <tr>
              <th scope="row">200-5</th>
              <td>ZIP code (postal code) level accuracy.</td>
            </tr>
            <tr>
              <th scope="row">200-4</th>
              <td>Town (city, village) level accuracy.</td>
            </tr>
            <tr>
              <th scope="row">200-3</th>
              <td>Sub-region (county, municipality, etc.) level accuracy.</td>
            </tr>
            <tr>
              <th scope="row">200-2</th>
              <td>Region (state, province, prefecture, etc.) level accuracy.</td>
            </tr>
            <tr>
              <th scope="row">200-1</th>
              <td>Country level accuracy.</td>
            </tr>
            <tr>
              <th scope="row">200-0</th>
              <td>Unknown accuracy.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">latitude</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <em>-90</em> to <em>90</em>
        </div>
      </td>
      <td class="doc-parameter-description">The latitude of the station's address (see the "Geocode Status" field for details on the latitude's accuracy).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">longitude</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Range:</strong> <em>-180</em> to <em>180</em>
        </div>
      </td>
      <td class="doc-parameter-description">The longitude of the station's address (see the "Geocode Status" field for details on the longitude's accuracy).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">open_date</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> date
        </div>
      </td>
      <td class="doc-parameter-description">The date that the station began offering the fuel. Please note that LPG (propane) stations do not have open dates.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">date_last_confirmed</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> date
        </div>
      </td>
      <td class="doc-parameter-description">The date the station's details were last confirmed.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">updated_at</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> datetime
        </div>
      </td>
      <td class="doc-parameter-description">The time the station's details were last updated (<a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> format).</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">id</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">A unique identifier for this specific station.</td>
    </tr>
  </tbody>
</table>

### Federal Agency Record Fields

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
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">A unique identifier for the federal agency.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">name</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">The name of the federal agency.</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="/nrel/alt-fuel-stations/v1.json?api_key=DEMO_KEY&amp;fuel_type=E85,ELEC&amp;state=CA&amp;limit=2">/nrel/alt-fuel-stations/v1.json?api_key=DEMO_KEY&amp;fuel_type=E85,ELEC&amp;state=CA&amp;limit=2</a></pre>

```json
{
  "fuel_stations": [
    {
      "access_days_time": "24 hours daily; also accept Propel Clean Drive fleet card",
      "bd_blends": null,
      "cards_accepted": "A D M V FuelMan Voyager Wright_Exp",
      "city": "Fremont",
      "date_last_confirmed": "2013-01-31",
      "expected_date": null,
      "fuel_type_code": "E85",
      "geocode_status": "200-8",
      "groups_with_access_code": "Public - credit card at all times",
      "hy_status_link": null,
      "intersection_directions": "Stevenson Blvd & Paseo Padre Pkwy",
      "latitude": 37.5486034,
      "longitude": -121.9717542,
      "open_date": "2010-08-02",
      "owner_type_code": "P",
      "plus4": null,
      "station_name": "Propel Fuels",
      "station_phone": "800-871-0773",
      "status_code": "E",
      "street_address": "39707 Paseo Padre Pkwy",
      "zip": "94538",
      "state": "CA",
      "ng_fill_type_code": null,
      "ng_psi": null,
      "ng_vehicle_class": null,
      "e85_blender_pump": false,
      "ev_level1_evse_num": null,
      "ev_level2_evse_num": null,
      "ev_dc_fast_num": null,
      "ev_other_evse": null,
      "ev_network": null,
      "ev_network_web": null,
      "lpg_primary": null,
      "id": 35946,
      "updated_at": "2013-02-14T18:43:05Z"
    },
    {
      "access_days_time": "24 hours daily",
      "bd_blends": null,
      "cards_accepted": "A D M V Voyager Wright_Exp",
      "city": "Modesto",
      "date_last_confirmed": "2012-09-30",
      "expected_date": null,
      "fuel_type_code": "E85",
      "geocode_status": "200-8",
      "groups_with_access_code": "Public - credit card at all times",
      "hy_status_link": null,
      "intersection_directions": null,
      "latitude": 37.634028,
      "longitude": -120.9944148,
      "open_date": "2010-06-15",
      "owner_type_code": "P",
      "plus4": null,
      "station_name": "Pacific Pride - Boyett Petroleum",
      "station_phone": "209-577-6000",
      "status_code": "E",
      "street_address": "401 9th St",
      "zip": "95350",
      "state": "CA",
      "ng_fill_type_code": null,
      "ng_psi": null,
      "ng_vehicle_class": null,
      "e85_blender_pump": false,
      "ev_level1_evse_num": null,
      "ev_level2_evse_num": null,
      "ev_dc_fast_num": null,
      "ev_other_evse": null,
      "ev_network": null,
      "ev_network_web": null,
      "lpg_primary": null,
      "id": 35947,
      "updated_at": "2012-10-12T18:28:47Z"
    }
  ],
  "station_locator_url": "http://www.afdc.energy.gov/afdc/locator/stations/",
  "total_results": 1574
}
```

### XML Output Format

<pre>GET <a href="/nrel/alt-fuel-stations/v1.xml?api_key=DEMO_KEY&amp;fuel_type=E85,ELEC&amp;state=CA&amp;limit=2">/nrel/alt-fuel-stations/v1.xml?api_key=DEMO_KEY&amp;fuel_type=E85,ELEC&amp;state=CA&amp;limit=2</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <station-locator-url>http://www.afdc.energy.gov/afdc/locator/stations/</station-locator-url>
  <total-results>1574</total-results>
  <fuel-stations type="array">
    <fuel-station>
      <access-days-time>24 hours daily; also accept Propel Clean Drive fleet card</access-days-time>
      <bd-blends nil="true" />
      <cards-accepted>A D M V FuelMan Voyager Wright_Exp</cards-accepted>
      <city>Fremont</city>
      <date-last-confirmed>2013-01-31</date-last-confirmed>
      <expected-date nil="true" />
      <fuel-type-code>E85</fuel-type-code>
      <geocode-status>200-8</geocode-status>
      <groups-with-access-code>Public - credit card at all times</groups-with-access-code>
      <hy-status-link nil="true" />
      <intersection-directions>Stevenson Blvd &amp; Paseo Padre Pkwy</intersection-directions>
      <latitude>37.5486034</latitude>
      <longitude>-121.9717542</longitude>
      <open-date>2010-08-02</open-date>
      <owner-type-code>P</owner-type-code>
      <plus4 nil="true" />
      <station-name>Propel Fuels</station-name>
      <station-phone>800-871-0773</station-phone>
      <status-code>E</status-code>
      <street-address>39707 Paseo Padre Pkwy</street-address>
      <zip>94538</zip>
      <state>CA</state>
      <ng-fill-type-code nil="true" />
      <ng-psi nil="true" />
      <ng-vehicle-class nil="true" />
      <e85-blender-pump>false</e85-blender-pump>
      <ev-level1-evse-num nil="true" />
      <ev-level2-evse-num nil="true" />
      <ev-dc-fast-num nil="true" />
      <ev-other-evse nil="true" />
      <ev-network nil="true" />
      <ev-network-web nil="true" />
      <lpg-primary nil="true" />
      <id>35946</id>
      <updated-at>2013-02-14T18:43:05Z</updated-at>
    </fuel-station>
    <fuel-station>
      <access-days-time>24 hours daily</access-days-time>
      <bd-blends nil="true" />
      <cards-accepted>A D M V Voyager Wright_Exp</cards-accepted>
      <city>Modesto</city>
      <date-last-confirmed>2012-09-30</date-last-confirmed>
      <expected-date nil="true" />
      <fuel-type-code>E85</fuel-type-code>
      <geocode-status>200-8</geocode-status>
      <groups-with-access-code>Public - credit card at all times</groups-with-access-code>
      <hy-status-link nil="true" />
      <intersection-directions nil="true" />
      <latitude>37.634028</latitude>
      <longitude>-120.9944148</longitude>
      <open-date>2010-06-15</open-date>
      <owner-type-code>P</owner-type-code>
      <plus4 nil="true" />
      <station-name>Pacific Pride - Boyett Petroleum</station-name>
      <station-phone>209-577-6000</station-phone>
      <status-code>E</status-code>
      <street-address>401 9th St</street-address>
      <zip>95350</zip>
      <state>CA</state>
      <ng-fill-type-code nil="true" />
      <ng-psi nil="true" />
      <ng-vehicle-class nil="true" />
      <e85-blender-pump>false</e85-blender-pump>
      <ev-level1-evse-num nil="true" />
      <ev-level2-evse-num nil="true" />
      <ev-dc-fast-num nil="true" />
      <ev-other-evse nil="true" />
      <ev-network nil="true" />
      <ev-network-web nil="true" />
      <lpg-primary nil="true" />
      <id>35947</id>
      <updated-at>2012-10-12T18:28:47Z</updated-at>
    </fuel-station>
  </fuel-stations>
</response>
```

### CSV Output Format

<pre>GET <a href="/nrel/alt-fuel-stations/v1.csv?api_key=DEMO_KEY&amp;fuel_type=E85,ELEC&amp;state=CA&amp;limit=2">/nrel/alt-fuel-stations/v1.csv?api_key=DEMO_KEY&amp;fuel_type=E85,ELEC&amp;state=CA&amp;limit=2</a></pre>

```
Fuel Type Code,Station Name,Street Address,Intersection Directions,City,State,ZIP,Plus4,Station Phone,Status Code,Expected Date,Groups With Access Code,Access Days Time,Cards Accepted,BD Blends,NG Fill Type Code,NG PSI,EV Level1 EVSE Num,EV Level2 EVSE Num,EV DC Fast Count,EV Other Info,EV Network,EV Network Web,Geocode Status,Latitude,Longitude,Date Last Confirmed,ID,Updated At,Owner Type Code,Federal Agency ID,Federal Agency Name,Open Date,Hydrogen Status Link,NG Vehicle Class,LPG Primary,E85 Blender Pump
E85,Propel Fuels,39707 Paseo Padre Pkwy,Stevenson Blvd & Paseo Padre Pkwy,Fremont,CA,94538,,800-871-0773,E,,Public - credit card at all times,24 hours daily; also accept Propel Clean Drive fleet card,A D M V FuelMan Voyager Wright_Exp,,,,,,,,,,200-8,37.5486034,-121.9717542,2013-01-31,35946,2013-02-14 18:43:05 UTC,P,,,2010-08-02,,,,false
E85,Pacific Pride - Boyett Petroleum,401 9th St,,Modesto,CA,95350,,209-577-6000,E,,Public - credit card at all times,24 hours daily,A D M V Voyager Wright_Exp,,,,,,,,,,200-8,37.634028,-120.9944148,2012-09-30,35947,2012-10-12 18:28:47 UTC,P,,,2010-06-15,,,,false
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
      <td class="doc-parameter-description">Unprocessable Entity - An invalid value was given for a query parameter. The response body will describe the specific error.</td>
    </tr>
  </tbody>
</table>
