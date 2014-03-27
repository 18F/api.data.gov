---
title: Wind Toolkit Data
summary: Collect and download, as CSV, a configurable set of data fields from a national collection of wind stations.
url: /api/wind/wind_toolkit_extract
method: GET
---

# {{title}} <span class="url">({{method}} {{url}})</span>
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>{{method}} {{url}}<em>?parameters</em></pre>

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
			<div class="doc-parameter-value-field"><strong>Type:</strong> string</div>

			<div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
			</td>
			<td class="doc-parameter-description">
			<p>Your developer API key. See <a href="/doc/api-key">API keys</a> for more information.</p>
			</td>
		</tr>
		<tr>
			<th class="doc-parameter-name" scope="row">attributes</th>
			<td class="doc-parameter-required">Yes</td>
			<td class="doc-parameter-value">
			<div class="doc-parameter-value-field"><strong>Type:</strong> comma delimited string array</div>

			<div class="doc-parameter-value-field"><strong>Default:</strong> None</div>

			<div class="doc-parameter-value-field"><strong>Options:</strong> <em>wind_speed, wind_direction, power, pressure, temperature, density</em></div>
			</td>
			<td class="doc-parameter-description">Each specified attribute will be returned as a column in the resultant CSV download.</td>
		</tr>
		<tr>
			<th class="doc-parameter-name" scope="row">site_ids</th>
			<td class="doc-parameter-required">Yes</td>
			<td class="doc-parameter-value">
			<div class="doc-parameter-value-field"><strong>Type:</strong> comma delimited integer array</div>

			<div class="doc-parameter-value-field"><strong>Default:</strong> None</div>
			</td>
			<td class="doc-parameter-description">A list of wind site IDs from which to collect data.</td>
		</tr>
		<tr>
			<th class="doc-parameter-name" scope="row">time_start</th>
			<td class="doc-parameter-required">Yes</td>
			<td class="doc-parameter-value">
			<div class="doc-parameter-value-field"><strong>Type:</strong> date/time</div>

			<div class="doc-parameter-value-field"><strong>Default:</strong> None</div>

			<div class="doc-parameter-value-field">&nbsp;</div>
			</td>
			<td class="doc-parameter-description">A timestamp formatted YYYMMDDHHMM indicating the start point of the extracted data.</td>
		</tr>
		<tr>
			<th class="doc-parameter-name" scope="row">time_end</th>
			<td class="doc-parameter-required">Yes</td>
			<td class="doc-parameter-value">
			<div class="doc-parameter-value-field"><strong>Type:</strong> date/time</div>

			<div class="doc-parameter-value-field"><strong>Default:</strong> None</div>

			<div class="doc-parameter-value-field">&nbsp;</div>
			</td>
			<td class="doc-parameter-description">A timestamp formatted YYYYMMDDHHMM indicating the end point of the extracted data.</td>
		</tr>
		<tr>
			<th class="doc-parameter-name" scope="row">aggregate</th>
			<td class="doc-parameter-required">No</td>
			<td class="doc-parameter-value">
			<div class="doc-parameter-value-field"><strong>Type:</strong> boolean</div>

			<div class="doc-parameter-value-field"><strong>Default:</strong> false</div>

			<div class="doc-parameter-value-field">&nbsp;</div>
			</td>
			<td class="doc-parameter-description">Pass true to aggregate the values from all provided sites into one response value, or false to view complete site data for each site provided.</td>
		</tr>
	</tbody>
</table>

## Response Fields

<p><strong>Upon successful completion a ZIP file will be streamed.</strong> This is true regardless of the format parameter passed into the service. A JSON response will only be returned when an error has occurred. Documented below are the response fields in case of error.</p>

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
			<div class="doc-parameter-value-field"><strong>Type:</strong> string array</div>
			</td>
			<td class="doc-parameter-description">
			<p>A list of error messages</p>
			</td>
		</tr>
		<tr>
			<th class="doc-parameter-name" scope="row">warnings</th>
			<td class="doc-parameter-value">
			<div class="doc-parameter-value-field"><strong>Type:</strong> string array</div>
			</td>
			<td class="doc-parameter-description">
			<p>A list of warning messages</p>
			</td>
		</tr>
		<tr>
			<th class="doc-parameter-name" scope="row">inputs</th>
			<td class="doc-parameter-value">
			<div class="doc-parameter-value-field"><strong>Type:</strong> Object Hash</div>
			</td>
			<td class="doc-parameter-description">Key: Value pairs representing all input parameters</td>
		</tr>
		<tr>
			<th class="doc-parameter-name" scope="row">outputs</th>
			<td class="doc-parameter-value">
			<div class="doc-parameter-value-field"><strong>Type:</strong> Object Hash</div>
			</td>
			<td class="doc-parameter-description">Placeholder. Currently always empty.</td>
		</tr>
	</tbody>
</table>

<h2>Examples</h2>

<h3>CSV Output Format</h3>

<div class="doc-example-url">GET <a href="{{url}}?api_key=DEMO_KEY&site_ids=12&attributes=wind_speed,wind_direction,power,temperature,pressure&time_start=200803010000&time_end=200804051155&aggregate=true">{{url}}?api_key=DEMO_KEY&site_ids=12&attributes=wind_speed,wind_direction,power,temperature,pressure&time_start=200803010000&time_end=200804051155&aggregate=true</a></div>

<table border="1" cellpadding="1" cellspacing="0" style="border-collapse:
 collapse;width:455pt" width="455">
	<colgroup>
		<col span="7" style="width:65pt" width="65" />
	</colgroup>
	<tbody>
		<tr height="15" style="height:15.0pt">
			<td height="15" style="height:15.0pt;width:65pt" width="65">SiteID</td>
			<td align="right" style="width:65pt" width="65">12</td>
			<td style="width:65pt" width="65">&nbsp;</td>
			<td style="width:65pt" width="65">&nbsp;</td>
			<td style="width:65pt" width="65">&nbsp;</td>
			<td style="width:65pt" width="65">&nbsp;</td>
			<td style="width:65pt" width="65">&nbsp;</td>
		</tr>
		<tr height="15" style="height:15.0pt">
			<td height="15" style="height:15.0pt">Longitude</td>
			<td align="right">-97.483215</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr height="15" style="height:15.0pt">
			<td height="15" style="height:15.0pt">Latitude</td>
			<td align="right">25.104233</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr height="15" style="height:15.0pt">
			<td height="15" style="height:15.0pt">Fields</td>
			<td>wind speed at 100m (m/s)</td>
			<td>wind direction at 100m (deg)</td>
			<td>power (MW)</td>
			<td>air temperature at 2m (K)</td>
			<td>surface air pressure (Pa)</td>
			<td>density at hub height (kg/m^3)</td>
		</tr>
		<tr height="15" style="height:15.0pt">
			<td align="right" class="xl63" height="15" style="height:15.0pt">3/1/08 0:00</td>
			<td align="right">2.081</td>
			<td align="right">176.133</td>
			<td align="right">10.229</td>
			<td align="right">272.779</td>
			<td align="right">93884.383</td>
			<td align="right">1.165</td>
		</tr>
		<tr height="15" style="height:15.0pt">
			<td align="right" class="xl63" height="15" style="height:15.0pt">3/1/08 0:05</td>
			<td align="right">0.591</td>
			<td align="right">299.387</td>
			<td align="right">7.499</td>
			<td align="right">279.742</td>
			<td align="right">92408.109</td>
			<td align="right">1.197</td>
		</tr>
		<tr height="15" style="height:15.0pt">
			<td align="right" class="xl63" height="15" style="height:15.0pt">3/1/08 0:10</td>
			<td align="right">0.747</td>
			<td align="right">99.81</td>
			<td align="right">4.355</td>
			<td align="right">289.689</td>
			<td align="right">94063.445</td>
			<td align="right">1.198</td>
		</tr>
		<tr height="15" style="height:15.0pt">
			<td align="right" class="xl63" height="15" style="height:15.0pt">3/1/08 0:15</td>
			<td align="right">8.848</td>
			<td align="right">217.755</td>
			<td align="right">4.74</td>
			<td align="right">297.945</td>
			<td align="right">93543.836</td>
			<td align="right">1.216</td>
		</tr>
		<tr height="15" style="height:15.0pt">
			<td align="right" class="xl63" height="15" style="height:15.0pt">3/1/08 0:20</td>
			<td align="right">3.693</td>
			<td align="right">257.812</td>
			<td align="right">14.393</td>
			<td align="right">277.53</td>
			<td align="right">94049.641</td>
			<td align="right">1.165</td>
		</tr>
		<tr height="15" style="height:15.0pt">
			<td align="right" class="xl63" height="15" style="height:15.0pt">...</td>
			<td align="right">...</td>
			<td align="right">...</td>
			<td align="right">...</td>
			<td align="right">...</td>
			<td align="right">...</td>
			<td align="right">...</td>
		</tr>
	</tbody>
</table>

<h2 id="rate-limits">Rate Limits</h2>

<p><a href="/doc/rate-limits">Standard rate limits</a> apply. No more than 1,000 requests may be made in any hour</p>

<h2 id="errors">Errors</h2>

<p><a href="/doc/errors">Standard errors</a> may be returned. In addition, the following service-specific errors may be returned:</p>

<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
	<thead>
		<tr>
			<th class="doc-parameters-name" scope="col" style="width: 100px;">HTTP Status Code</th>
			<th class="doc-parameters-required" scope="col">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th class="doc-parameter-name" scope="row">400</th>
			<td class="doc-parameter-description">Bad Request: When required parameters are missing.</td>
		</tr>
	</tbody>
</table>
