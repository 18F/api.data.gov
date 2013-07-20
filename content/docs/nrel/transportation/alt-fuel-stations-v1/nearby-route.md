---
title: Stations Nearby Route
summary: Find alternative fuel stations within a distance of a driving route.
disqus: true

---

# {{title}}
{{summary}}

Driving directions and route generation are not provided by this service. You must first determine your route and then pass this service a representation of that route as a line (a series of latitude and longitude points).

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/nrel/alt-fuel-stations/v1/nearby-route<em>.format?parameters</em></pre>

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
      <th class="doc-parameter-name" scope="row">route</th>
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
        <p>A <a href="http://en.wikipedia.org/wiki/Well-known_text">well-known text (WKT)</a> LINESTRING representing the route. Points in the LINESTRING must be specified using latitudes and longitudes.</p>
        <p>Example: A straight line route (as the crow flies) between New York City, Chicago, and Denver:</p>
        <pre>
LINESTRING(-74.0 40.7, -87.63 41.87, -104.98 39.76)
</pre>
        <p>Note: Real route linestrings will likely be much more detailed to properly represent the driving route of roads.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">distance</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <i>5.0</i>
        </div>
      </td>
      <td class="doc-parameter-description">The distance (in miles) from the route to search for stations within.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">return_type</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> <i>all</i>
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>all</em>, <i>ids</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Change the amount of data being returned for each station in the response.</p>
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
              <td>All station details for matching stations will be returned.</td>
            </tr>
            <tr>
              <th scope="row">ids</th>
              <td>Only the ID of each matching stations will be returned (this can lead to faster response times only the ID is needed).</td>
            </tr>
          </tbody>
        </table>
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
      <td class="doc-parameter-description">The maximum number of results to return.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">offset</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> 0
        </div>
        <div class="doc-parameter-value-field">
          <strong>Minimum:</strong> <i>0</i>
        </div>
      </td>
      <td class="doc-parameter-description">Offset the results found (can be used with the <em>limit</em> parameter to paginate the results).</td>
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
      <th class="doc-parameter-name" scope="row">offset</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The result offset applied to this query (if the "offset" parameter was given).</p>
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
      <th class="doc-parameter-name" scope="row">latitude</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">The latitude of the given location. This either matches the "latitude" parameter passed in, or is the geocoded latitude of the "location" parameter.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">longitude</th>
      <td class="doc-parameter-value"><strong>Type:</strong> decimal</td>
      <td class="doc-parameter-description">The longitude of the given location. This either matches the "longitude" parameter passed in, or is the geocoded longitude of the "location" parameter.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">precision</th>
      <td class="doc-parameter-value"><strong>Type:</strong> record</td>
      <td class="doc-parameter-description">Details on the precision of the geocoded "location" parameter (if given). See <a href="#precision-record-fields">precision record fields</a> for response details.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">fuel_stations</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array
        </div>
      </td>
      <td class="doc-parameter-description">An array of matching fuel station records returned in order of ascending distance from the given location. See <a href="#fuel-station-record-fields">fuel station record fields</a> for response details.</td>
    </tr>
  </tbody>
</table>

### Fuel Station Record Fields

The individual fuel station records are returned in order of ascending distance from the given location. Each station has the following attributes:

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
    <tr>
      <th class="doc-parameter-name" scope="row">distance</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> decimal
        </div>
      </td>
      <td class="doc-parameter-description">The distance, in miles, from the given location and this station.</td>
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

### Precision Record Fields

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
      <th class="doc-parameter-name" scope="row">name</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">A textual code for the accuracy of the geocoded location.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">value</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">A numeric code for the accuracy of the geocoded location. These generally match the Google Geocoding API V2 <a href="https://developers.google.com/maps/documentation/geocoding/v2/#GeocodingAccuracy">accuracy values</a>.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">types</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array
        </div>
      </td>
      <td class="doc-parameter-description">An array of strings describing the type of location matched. These refer to the Google Geocoding API V3 <a href="https://developers.google.com/maps/documentation/geocoding/#Types">address component types</a>.</td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="/nrel/alt-fuel-stations/v1/nearby-route.json?api_key=DEMO_KEY&amp;distance=2&amp;route=LINESTRING(-105.22109+39.75553,-105.22133+39.7554,-105.22059+39.75459,-105.21959+39.75351,-105.2183+39.75214,-105.21685+39.75057,-105.21603+39.74968,-105.21634+39.7495,-105.21647+39.74949,-105.21711+39.74914,-105.21851+39.74834,-105.21904+39.74805,-105.22002+39.74756,-105.22201+39.74644,-105.22282+39.746,-105.22286+39.74592,-105.22361+39.74552,-105.22377+39.74544,-105.22369+39.74536,-105.22347+39.74511,-105.223+39.74456,-105.22229+39.74371,-105.22127+39.74253,-105.22003+39.74108,-105.21818+39.73897,-105.2169+39.73751,-105.21523+39.73556,-105.21481+39.73506,-105.21472+39.73497,-105.21412+39.73429,-105.21236+39.73224,-105.21171+39.73153,-105.21133+39.73116,-105.21095+39.73087,-105.21063+39.73067,-105.21035+39.73048,-105.21002+39.7303,-105.20967+39.73014,-105.20924+39.72999,-105.20868+39.72983,-105.20728+39.7295,-105.20646+39.72935,-105.20591+39.7292,-105.20536+39.72898,-105.20492+39.72875,-105.20449+39.72848,-105.20415+39.72822,-105.20337+39.72738,-105.20251+39.72645,-105.20231+39.72628,-105.2019+39.72595,-105.20161+39.72575,-105.20104+39.72549,-105.20058+39.72531,-105.20008+39.72517,-105.19955+39.72505,-105.19898+39.72497,-105.19864+39.72497,-105.19373+39.72506,-105.19236+39.72511,-105.1892+39.72517,-105.18344+39.72525,-105.17917+39.72527,-105.17557+39.72528,-105.17489+39.72526,-105.17161+39.72526,-105.16583+39.72529,-105.16535+39.72528,-105.15957+39.72526,-105.15825+39.72527,-105.15786+39.72524,-105.15646+39.72527,-105.1539+39.72527,-105.15125+39.72529,-105.14747+39.72528,-105.14119+39.72529,-105.13785+39.72528,-105.13519+39.72529,-105.13472+39.72527,-105.13402+39.72529,-105.13082+39.7253,-105.13047+39.7253,-105.12306+39.72531,-105.12198+39.72535,-105.12104+39.72535,-105.11306+39.72536,-105.11022+39.72537,-105.10935+39.72537,-105.10807+39.72538,-105.10368+39.72541,-105.1+39.72542,-105.08879+39.72547,-105.08174+39.72549,-105.07608+39.72552,-105.06001+39.72558,-105.05718+39.72563,-105.05633+39.72565,-105.05315+39.72565,-105.04604+39.72561,-105.03945+39.72559,-105.03493+39.72557,-105.03294+39.72552,-105.03223+39.72544,-105.03127+39.72542,-105.02645+39.72543,-105.02381+39.72542,-105.02259+39.7254,-105.02224+39.72538,-105.02072+39.72531,-105.01867+39.72519,-105.01803+39.72521,-105.01685+39.72529,-105.01566+39.72536,-105.01508+39.72539,-105.01297+39.72553,-105.01136+39.72562,-105.01095+39.72563,-105.01077+39.72562,-105.01051+39.72561,-105.01019+39.72562,-105.00873+39.72569,-105.00811+39.72573,-105.00712+39.72569,-105.00578+39.72567,-105.00545+39.72564,-105.00399+39.72563,-105.00194+39.72564,-105.0016+39.72564,-105.00095+39.72564,-104.99988+39.7257,-104.99755+39.7257,-104.99282+39.72567,-104.99047+39.72566,-104.98918+39.72564,-104.98837+39.72565,-104.98745+39.72564,-104.98624+39.72564,-104.98622+39.72592,-104.9862+39.72633,-104.98616+39.72726,-104.98617+39.72814,-104.98616+39.72876,-104.98612+39.73205,-104.98612+39.73385,-104.98614+39.73528,-104.98612+39.73685,-104.98611+39.73845,-104.98486+39.73844,-104.98486+39.73757)">/nrel/alt-fuel-stations/v1/nearby-route.json?api_key=DEMO_KEY&amp;distance=2&amp;route=LINESTRING(-105.22109+39.75553,-105.22133+39.7554,-105.22059+39.75459,-105.21959+39.75351,-105.2183+39.75214,-105.21685+39.75057,-105.21603+39.74968,-105.21634+39.7495,-105.21647+39.74949,-105.21711+39.74914,-105.21851+39.74834,-105.21904+39.74805,-105.22002+39.74756,-105.22201+39.74644,-105.22282+39.746,-105.22286+39.74592,-105.22361+39.74552,-105.22377+39.74544,-105.22369+39.74536,-105.22347+39.74511,-105.223+39.74456,-105.22229+39.74371,-105.22127+39.74253,-105.22003+39.74108,-105.21818+39.73897,-105.2169+39.73751,-105.21523+39.73556,-105.21481+39.73506,-105.21472+39.73497,-105.21412+39.73429,-105.21236+39.73224,-105.21171+39.73153,-105.21133+39.73116,-105.21095+39.73087,-105.21063+39.73067,-105.21035+39.73048,-105.21002+39.7303,-105.20967+39.73014,-105.20924+39.72999,-105.20868+39.72983,-105.20728+39.7295,-105.20646+39.72935,-105.20591+39.7292,-105.20536+39.72898,-105.20492+39.72875,-105.20449+39.72848,-105.20415+39.72822,-105.20337+39.72738,-105.20251+39.72645,-105.20231+39.72628,-105.2019+39.72595,-105.20161+39.72575,-105.20104+39.72549,-105.20058+39.72531,-105.20008+39.72517,-105.19955+39.72505,-105.19898+39.72497,-105.19864+39.72497,-105.19373+39.72506,-105.19236+39.72511,-105.1892+39.72517,-105.18344+39.72525,-105.17917+39.72527,-105.17557+39.72528,-105.17489+39.72526,-105.17161+39.72526,-105.16583+39.72529,-105.16535+39.72528,-105.15957+39.72526,-105.15825+39.72527,-105.15786+39.72524,-105.15646+39.72527,-105.1539+39.72527,-105.15125+39.72529,-105.14747+39.72528,-105.14119+39.72529,-105.13785+39.72528,-105.13519+39.72529,-105.13472+39.72527,-105.13402+39.72529,-105.13082+39.7253,-105.13047+39.7253,-105.12306+39.72531,-105.12198+39.72535,-105.12104+39.72535,-105.11306+39.72536,-105.11022+39.72537,-105.10935+39.72537,-105.10807+39.72538,-105.10368+39.72541,-105.1+39.72542,-105.08879+39.72547,-105.08174+39.72549,-105.07608+39.72552,-105.06001+39.72558,-105.05718+39.72563,-105.05633+39.72565,-105.05315+39.72565,-105.04604+39.72561,-105.03945+39.72559,-105.03493+39.72557,-105.03294+39.72552,-105.03223+39.72544,-105.03127+39.72542,-105.02645+39.72543,-105.02381+39.72542,-105.02259+39.7254,-105.02224+39.72538,-105.02072+39.72531,-105.01867+39.72519,-105.01803+39.72521,-105.01685+39.72529,-105.01566+39.72536,-105.01508+39.72539,-105.01297+39.72553,-105.01136+39.72562,-105.01095+39.72563,-105.01077+39.72562,-105.01051+39.72561,-105.01019+39.72562,-105.00873+39.72569,-105.00811+39.72573,-105.00712+39.72569,-105.00578+39.72567,-105.00545+39.72564,-105.00399+39.72563,-105.00194+39.72564,-105.0016+39.72564,-105.00095+39.72564,-104.99988+39.7257,-104.99755+39.7257,-104.99282+39.72567,-104.99047+39.72566,-104.98918+39.72564,-104.98837+39.72565,-104.98745+39.72564,-104.98624+39.72564,-104.98622+39.72592,-104.9862+39.72633,-104.98616+39.72726,-104.98617+39.72814,-104.98616+39.72876,-104.98612+39.73205,-104.98612+39.73385,-104.98614+39.73528,-104.98612+39.73685,-104.98611+39.73845,-104.98486+39.73844,-104.98486+39.73757)</a></pre>

```json
{
  "fuel_stations": [
    {
      "access_days_time": "24 hours daily; also accept Natural Fuels Card",
      "bd_blends": null,
      "cards_accepted": "CleanEnergy",
      "city": "Denver",
      "date_last_confirmed": "2012-08-31",
      "expected_date": null,
      "fuel_type_code": "CNG",
      "geocode_status": "200-8",
      "groups_with_access_code": "Public - card key at all times",
      "hy_status_link": null,
      "intersection_directions": "I-25, exit onto Speer Boulevard S, left on Colfax Avenue, right on Broadway",
      "latitude": 39.73233,
      "longitude": -104.988,
      "open_date": "1996-12-15",
      "owner_type_code": "P",
      "plus4": "2707",
      "station_name": "Clean Energy - Valero #4086",
      "station_phone": "562-493-2804",
      "status_code": "E",
      "street_address": "1001 Broadway St",
      "zip": "80204",
      "state": "CO",
      "ng_fill_type_code": "Q",
      "ng_psi": "3000 3600",
      "ng_vehicle_class": "MD",
      "e85_blender_pump": null,
      "ev_level1_evse_num": null,
      "ev_level2_evse_num": null,
      "ev_dc_fast_num": null,
      "ev_other_evse": null,
      "ev_network": null,
      "ev_network_web": null,
      "lpg_primary": null,
      "id": 635,
      "updated_at": "2012-09-14T18:25:45Z",
      "distance": 0.09922
    }
  ],
  "station_locator_url": "http://www.afdc.energy.gov/afdc/locator/stations/",
  "total_results": 27
}
```

### XML Output Format

<pre>GET <a href="/nrel/alt-fuel-stations/v1/nearby-route.xml?api_key=DEMO_KEY&amp;distance=2&amp;route=LINESTRING(-105.22109+39.75553,-105.22133+39.7554,-105.22059+39.75459,-105.21959+39.75351,-105.2183+39.75214,-105.21685+39.75057,-105.21603+39.74968,-105.21634+39.7495,-105.21647+39.74949,-105.21711+39.74914,-105.21851+39.74834,-105.21904+39.74805,-105.22002+39.74756,-105.22201+39.74644,-105.22282+39.746,-105.22286+39.74592,-105.22361+39.74552,-105.22377+39.74544,-105.22369+39.74536,-105.22347+39.74511,-105.223+39.74456,-105.22229+39.74371,-105.22127+39.74253,-105.22003+39.74108,-105.21818+39.73897,-105.2169+39.73751,-105.21523+39.73556,-105.21481+39.73506,-105.21472+39.73497,-105.21412+39.73429,-105.21236+39.73224,-105.21171+39.73153,-105.21133+39.73116,-105.21095+39.73087,-105.21063+39.73067,-105.21035+39.73048,-105.21002+39.7303,-105.20967+39.73014,-105.20924+39.72999,-105.20868+39.72983,-105.20728+39.7295,-105.20646+39.72935,-105.20591+39.7292,-105.20536+39.72898,-105.20492+39.72875,-105.20449+39.72848,-105.20415+39.72822,-105.20337+39.72738,-105.20251+39.72645,-105.20231+39.72628,-105.2019+39.72595,-105.20161+39.72575,-105.20104+39.72549,-105.20058+39.72531,-105.20008+39.72517,-105.19955+39.72505,-105.19898+39.72497,-105.19864+39.72497,-105.19373+39.72506,-105.19236+39.72511,-105.1892+39.72517,-105.18344+39.72525,-105.17917+39.72527,-105.17557+39.72528,-105.17489+39.72526,-105.17161+39.72526,-105.16583+39.72529,-105.16535+39.72528,-105.15957+39.72526,-105.15825+39.72527,-105.15786+39.72524,-105.15646+39.72527,-105.1539+39.72527,-105.15125+39.72529,-105.14747+39.72528,-105.14119+39.72529,-105.13785+39.72528,-105.13519+39.72529,-105.13472+39.72527,-105.13402+39.72529,-105.13082+39.7253,-105.13047+39.7253,-105.12306+39.72531,-105.12198+39.72535,-105.12104+39.72535,-105.11306+39.72536,-105.11022+39.72537,-105.10935+39.72537,-105.10807+39.72538,-105.10368+39.72541,-105.1+39.72542,-105.08879+39.72547,-105.08174+39.72549,-105.07608+39.72552,-105.06001+39.72558,-105.05718+39.72563,-105.05633+39.72565,-105.05315+39.72565,-105.04604+39.72561,-105.03945+39.72559,-105.03493+39.72557,-105.03294+39.72552,-105.03223+39.72544,-105.03127+39.72542,-105.02645+39.72543,-105.02381+39.72542,-105.02259+39.7254,-105.02224+39.72538,-105.02072+39.72531,-105.01867+39.72519,-105.01803+39.72521,-105.01685+39.72529,-105.01566+39.72536,-105.01508+39.72539,-105.01297+39.72553,-105.01136+39.72562,-105.01095+39.72563,-105.01077+39.72562,-105.01051+39.72561,-105.01019+39.72562,-105.00873+39.72569,-105.00811+39.72573,-105.00712+39.72569,-105.00578+39.72567,-105.00545+39.72564,-105.00399+39.72563,-105.00194+39.72564,-105.0016+39.72564,-105.00095+39.72564,-104.99988+39.7257,-104.99755+39.7257,-104.99282+39.72567,-104.99047+39.72566,-104.98918+39.72564,-104.98837+39.72565,-104.98745+39.72564,-104.98624+39.72564,-104.98622+39.72592,-104.9862+39.72633,-104.98616+39.72726,-104.98617+39.72814,-104.98616+39.72876,-104.98612+39.73205,-104.98612+39.73385,-104.98614+39.73528,-104.98612+39.73685,-104.98611+39.73845,-104.98486+39.73844,-104.98486+39.73757)">/nrel/alt-fuel-stations/v1/nearby-route.xml?api_key=DEMO_KEY&amp;distance=2&amp;route=LINESTRING(-105.22109+39.75553,-105.22133+39.7554,-105.22059+39.75459,-105.21959+39.75351,-105.2183+39.75214,-105.21685+39.75057,-105.21603+39.74968,-105.21634+39.7495,-105.21647+39.74949,-105.21711+39.74914,-105.21851+39.74834,-105.21904+39.74805,-105.22002+39.74756,-105.22201+39.74644,-105.22282+39.746,-105.22286+39.74592,-105.22361+39.74552,-105.22377+39.74544,-105.22369+39.74536,-105.22347+39.74511,-105.223+39.74456,-105.22229+39.74371,-105.22127+39.74253,-105.22003+39.74108,-105.21818+39.73897,-105.2169+39.73751,-105.21523+39.73556,-105.21481+39.73506,-105.21472+39.73497,-105.21412+39.73429,-105.21236+39.73224,-105.21171+39.73153,-105.21133+39.73116,-105.21095+39.73087,-105.21063+39.73067,-105.21035+39.73048,-105.21002+39.7303,-105.20967+39.73014,-105.20924+39.72999,-105.20868+39.72983,-105.20728+39.7295,-105.20646+39.72935,-105.20591+39.7292,-105.20536+39.72898,-105.20492+39.72875,-105.20449+39.72848,-105.20415+39.72822,-105.20337+39.72738,-105.20251+39.72645,-105.20231+39.72628,-105.2019+39.72595,-105.20161+39.72575,-105.20104+39.72549,-105.20058+39.72531,-105.20008+39.72517,-105.19955+39.72505,-105.19898+39.72497,-105.19864+39.72497,-105.19373+39.72506,-105.19236+39.72511,-105.1892+39.72517,-105.18344+39.72525,-105.17917+39.72527,-105.17557+39.72528,-105.17489+39.72526,-105.17161+39.72526,-105.16583+39.72529,-105.16535+39.72528,-105.15957+39.72526,-105.15825+39.72527,-105.15786+39.72524,-105.15646+39.72527,-105.1539+39.72527,-105.15125+39.72529,-105.14747+39.72528,-105.14119+39.72529,-105.13785+39.72528,-105.13519+39.72529,-105.13472+39.72527,-105.13402+39.72529,-105.13082+39.7253,-105.13047+39.7253,-105.12306+39.72531,-105.12198+39.72535,-105.12104+39.72535,-105.11306+39.72536,-105.11022+39.72537,-105.10935+39.72537,-105.10807+39.72538,-105.10368+39.72541,-105.1+39.72542,-105.08879+39.72547,-105.08174+39.72549,-105.07608+39.72552,-105.06001+39.72558,-105.05718+39.72563,-105.05633+39.72565,-105.05315+39.72565,-105.04604+39.72561,-105.03945+39.72559,-105.03493+39.72557,-105.03294+39.72552,-105.03223+39.72544,-105.03127+39.72542,-105.02645+39.72543,-105.02381+39.72542,-105.02259+39.7254,-105.02224+39.72538,-105.02072+39.72531,-105.01867+39.72519,-105.01803+39.72521,-105.01685+39.72529,-105.01566+39.72536,-105.01508+39.72539,-105.01297+39.72553,-105.01136+39.72562,-105.01095+39.72563,-105.01077+39.72562,-105.01051+39.72561,-105.01019+39.72562,-105.00873+39.72569,-105.00811+39.72573,-105.00712+39.72569,-105.00578+39.72567,-105.00545+39.72564,-105.00399+39.72563,-105.00194+39.72564,-105.0016+39.72564,-105.00095+39.72564,-104.99988+39.7257,-104.99755+39.7257,-104.99282+39.72567,-104.99047+39.72566,-104.98918+39.72564,-104.98837+39.72565,-104.98745+39.72564,-104.98624+39.72564,-104.98622+39.72592,-104.9862+39.72633,-104.98616+39.72726,-104.98617+39.72814,-104.98616+39.72876,-104.98612+39.73205,-104.98612+39.73385,-104.98614+39.73528,-104.98612+39.73685,-104.98611+39.73845,-104.98486+39.73844,-104.98486+39.73757)</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
  <station-locator-url>http://www.afdc.energy.gov/afdc/locator/stations/</station-locator-url>
  <total-results>27</total-results>
  <fuel-stations type="array">
    <fuel-station>
      <access-days-time>24 hours daily; also accept Natural Fuels Card</access-days-time>
      <bd-blends nil="true" />
      <cards-accepted>CleanEnergy</cards-accepted>
      <city>Denver</city>
      <date-last-confirmed>2012-08-31</date-last-confirmed>
      <expected-date nil="true" />
      <fuel-type-code>CNG</fuel-type-code>
      <geocode-status>200-8</geocode-status>
      <groups-with-access-code>Public - card key at all times</groups-with-access-code>
      <hy-status-link nil="true" />
      <intersection-directions>I-25, exit onto Speer Boulevard S, left on Colfax Avenue, right on Broadway</intersection-directions>
      <latitude>39.73233</latitude>
      <longitude>-104.988</longitude>
      <open-date>1996-12-15</open-date>
      <owner-type-code>P</owner-type-code>
      <plus4>2707</plus4>
      <station-name>Clean Energy - Valero #4086</station-name>
      <station-phone>562-493-2804</station-phone>
      <status-code>E</status-code>
      <street-address>1001 Broadway St</street-address>
      <zip>80204</zip>
      <state>CO</state>
      <ng-fill-type-code>Q</ng-fill-type-code>
      <ng-psi>3000 3600</ng-psi>
      <ng-vehicle-class>MD</ng-vehicle-class>
      <e85-blender-pump nil="true" />
      <ev-level1-evse-num nil="true" />
      <ev-level2-evse-num nil="true" />
      <ev-dc-fast-num nil="true" />
      <ev-other-evse nil="true" />
      <ev-network nil="true" />
      <ev-network-web nil="true" />
      <lpg-primary nil="true" />
      <id>635</id>
      <updated-at>2012-09-14T18:25:45Z</updated-at>
      <distance>0.09922</distance>
    </fuel-station>
  </fuel-stations>
</response>
```

### CSV Output Format

<pre>GET <a href="/nrel/alt-fuel-stations/v1/nearby-route.csv?api_key=DEMO_KEY&amp;distance=2&amp;route=LINESTRING(-105.22109+39.75553,-105.22133+39.7554,-105.22059+39.75459,-105.21959+39.75351,-105.2183+39.75214,-105.21685+39.75057,-105.21603+39.74968,-105.21634+39.7495,-105.21647+39.74949,-105.21711+39.74914,-105.21851+39.74834,-105.21904+39.74805,-105.22002+39.74756,-105.22201+39.74644,-105.22282+39.746,-105.22286+39.74592,-105.22361+39.74552,-105.22377+39.74544,-105.22369+39.74536,-105.22347+39.74511,-105.223+39.74456,-105.22229+39.74371,-105.22127+39.74253,-105.22003+39.74108,-105.21818+39.73897,-105.2169+39.73751,-105.21523+39.73556,-105.21481+39.73506,-105.21472+39.73497,-105.21412+39.73429,-105.21236+39.73224,-105.21171+39.73153,-105.21133+39.73116,-105.21095+39.73087,-105.21063+39.73067,-105.21035+39.73048,-105.21002+39.7303,-105.20967+39.73014,-105.20924+39.72999,-105.20868+39.72983,-105.20728+39.7295,-105.20646+39.72935,-105.20591+39.7292,-105.20536+39.72898,-105.20492+39.72875,-105.20449+39.72848,-105.20415+39.72822,-105.20337+39.72738,-105.20251+39.72645,-105.20231+39.72628,-105.2019+39.72595,-105.20161+39.72575,-105.20104+39.72549,-105.20058+39.72531,-105.20008+39.72517,-105.19955+39.72505,-105.19898+39.72497,-105.19864+39.72497,-105.19373+39.72506,-105.19236+39.72511,-105.1892+39.72517,-105.18344+39.72525,-105.17917+39.72527,-105.17557+39.72528,-105.17489+39.72526,-105.17161+39.72526,-105.16583+39.72529,-105.16535+39.72528,-105.15957+39.72526,-105.15825+39.72527,-105.15786+39.72524,-105.15646+39.72527,-105.1539+39.72527,-105.15125+39.72529,-105.14747+39.72528,-105.14119+39.72529,-105.13785+39.72528,-105.13519+39.72529,-105.13472+39.72527,-105.13402+39.72529,-105.13082+39.7253,-105.13047+39.7253,-105.12306+39.72531,-105.12198+39.72535,-105.12104+39.72535,-105.11306+39.72536,-105.11022+39.72537,-105.10935+39.72537,-105.10807+39.72538,-105.10368+39.72541,-105.1+39.72542,-105.08879+39.72547,-105.08174+39.72549,-105.07608+39.72552,-105.06001+39.72558,-105.05718+39.72563,-105.05633+39.72565,-105.05315+39.72565,-105.04604+39.72561,-105.03945+39.72559,-105.03493+39.72557,-105.03294+39.72552,-105.03223+39.72544,-105.03127+39.72542,-105.02645+39.72543,-105.02381+39.72542,-105.02259+39.7254,-105.02224+39.72538,-105.02072+39.72531,-105.01867+39.72519,-105.01803+39.72521,-105.01685+39.72529,-105.01566+39.72536,-105.01508+39.72539,-105.01297+39.72553,-105.01136+39.72562,-105.01095+39.72563,-105.01077+39.72562,-105.01051+39.72561,-105.01019+39.72562,-105.00873+39.72569,-105.00811+39.72573,-105.00712+39.72569,-105.00578+39.72567,-105.00545+39.72564,-105.00399+39.72563,-105.00194+39.72564,-105.0016+39.72564,-105.00095+39.72564,-104.99988+39.7257,-104.99755+39.7257,-104.99282+39.72567,-104.99047+39.72566,-104.98918+39.72564,-104.98837+39.72565,-104.98745+39.72564,-104.98624+39.72564,-104.98622+39.72592,-104.9862+39.72633,-104.98616+39.72726,-104.98617+39.72814,-104.98616+39.72876,-104.98612+39.73205,-104.98612+39.73385,-104.98614+39.73528,-104.98612+39.73685,-104.98611+39.73845,-104.98486+39.73844,-104.98486+39.73757)">/nrel/alt-fuel-stations/v1/nearby-route.csv?api_key=DEMO_KEY&amp;distance=2&amp;route=LINESTRING(-105.22109+39.75553,-105.22133+39.7554,-105.22059+39.75459,-105.21959+39.75351,-105.2183+39.75214,-105.21685+39.75057,-105.21603+39.74968,-105.21634+39.7495,-105.21647+39.74949,-105.21711+39.74914,-105.21851+39.74834,-105.21904+39.74805,-105.22002+39.74756,-105.22201+39.74644,-105.22282+39.746,-105.22286+39.74592,-105.22361+39.74552,-105.22377+39.74544,-105.22369+39.74536,-105.22347+39.74511,-105.223+39.74456,-105.22229+39.74371,-105.22127+39.74253,-105.22003+39.74108,-105.21818+39.73897,-105.2169+39.73751,-105.21523+39.73556,-105.21481+39.73506,-105.21472+39.73497,-105.21412+39.73429,-105.21236+39.73224,-105.21171+39.73153,-105.21133+39.73116,-105.21095+39.73087,-105.21063+39.73067,-105.21035+39.73048,-105.21002+39.7303,-105.20967+39.73014,-105.20924+39.72999,-105.20868+39.72983,-105.20728+39.7295,-105.20646+39.72935,-105.20591+39.7292,-105.20536+39.72898,-105.20492+39.72875,-105.20449+39.72848,-105.20415+39.72822,-105.20337+39.72738,-105.20251+39.72645,-105.20231+39.72628,-105.2019+39.72595,-105.20161+39.72575,-105.20104+39.72549,-105.20058+39.72531,-105.20008+39.72517,-105.19955+39.72505,-105.19898+39.72497,-105.19864+39.72497,-105.19373+39.72506,-105.19236+39.72511,-105.1892+39.72517,-105.18344+39.72525,-105.17917+39.72527,-105.17557+39.72528,-105.17489+39.72526,-105.17161+39.72526,-105.16583+39.72529,-105.16535+39.72528,-105.15957+39.72526,-105.15825+39.72527,-105.15786+39.72524,-105.15646+39.72527,-105.1539+39.72527,-105.15125+39.72529,-105.14747+39.72528,-105.14119+39.72529,-105.13785+39.72528,-105.13519+39.72529,-105.13472+39.72527,-105.13402+39.72529,-105.13082+39.7253,-105.13047+39.7253,-105.12306+39.72531,-105.12198+39.72535,-105.12104+39.72535,-105.11306+39.72536,-105.11022+39.72537,-105.10935+39.72537,-105.10807+39.72538,-105.10368+39.72541,-105.1+39.72542,-105.08879+39.72547,-105.08174+39.72549,-105.07608+39.72552,-105.06001+39.72558,-105.05718+39.72563,-105.05633+39.72565,-105.05315+39.72565,-105.04604+39.72561,-105.03945+39.72559,-105.03493+39.72557,-105.03294+39.72552,-105.03223+39.72544,-105.03127+39.72542,-105.02645+39.72543,-105.02381+39.72542,-105.02259+39.7254,-105.02224+39.72538,-105.02072+39.72531,-105.01867+39.72519,-105.01803+39.72521,-105.01685+39.72529,-105.01566+39.72536,-105.01508+39.72539,-105.01297+39.72553,-105.01136+39.72562,-105.01095+39.72563,-105.01077+39.72562,-105.01051+39.72561,-105.01019+39.72562,-105.00873+39.72569,-105.00811+39.72573,-105.00712+39.72569,-105.00578+39.72567,-105.00545+39.72564,-105.00399+39.72563,-105.00194+39.72564,-105.0016+39.72564,-105.00095+39.72564,-104.99988+39.7257,-104.99755+39.7257,-104.99282+39.72567,-104.99047+39.72566,-104.98918+39.72564,-104.98837+39.72565,-104.98745+39.72564,-104.98624+39.72564,-104.98622+39.72592,-104.9862+39.72633,-104.98616+39.72726,-104.98617+39.72814,-104.98616+39.72876,-104.98612+39.73205,-104.98612+39.73385,-104.98614+39.73528,-104.98612+39.73685,-104.98611+39.73845,-104.98486+39.73844,-104.98486+39.73757)</a></pre>

```
Fuel Type Code,Station Name,Street Address,Intersection Directions,City,State,ZIP,Plus4,Station Phone,Status Code,Expected Date,Groups With Access Code,Access Days Time,Cards Accepted,BD Blends,NG Fill Type Code,NG PSI,EV Level1 EVSE Num,EV Level2 EVSE Num,EV DC Fast Count,EV Other Info,EV Network,EV Network Web,Geocode Status,Latitude,Longitude,Date Last Confirmed,ID,Distance,Updated At,Owner Type Code,Federal Agency ID,Federal Agency Name,Open Date,Hydrogen Status Link,NG Vehicle Class,LPG Primary,E85 Blender Pump
CNG,Clean Energy - Valero #4086,1001 Broadway St,"I-25, exit onto Speer Boulevard S, left on Colfax Avenue, right on Broadway",Denver,CO,80204,2707,562-493-2804,E,,Public - card key at all times,24 hours daily; also accept Natural Fuels Card,CleanEnergy,,Q,3000 3600,,,,,,,200-8,39.73233,-104.988,2012-08-31,635,0.09922,2012-09-14 18:25:45 UTC,P,,,1996-12-15,,MD,,
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
      <td class="doc-parameter-description"><span>Unprocessable Entity - An invalid value was given for a query parameter. The response body will describe the specific error.</span></td>
    </tr>
  </tbody>
</table>
