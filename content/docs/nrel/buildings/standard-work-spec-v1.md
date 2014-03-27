---
title: Standard Work Specifications
summary: Retrieve standard work specification details for home energy upgrades.
url: GET /api/standard-work-specs/spec/v1
disqus: true

---

# {{title}} <span class="url">({{url}})</span>
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>GET /api/standard-work-specs/spec/v1<em>.format?parameters</em></pre>

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
      <th class="doc-parameter-name" scope="row">nid</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The unique identifier of a standard work specification entry.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">spec</th>
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
        <p>The specification ID for a given specification.</p>
        <p><strong>Ex. "Floor Framing—Bay Window" is 3.1302.1 so the parameter is "<em>spec=1.1302.1</em></strong>"</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">ht</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The unique identifier of a housing type to filter on.</p>
        <p><strong>Single Family Homes:</strong> 1, <strong>Multi-Family Homes:</strong> 2, <strong>Manufactured Housing:</strong> 3</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">section</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>A section identifier. These can be found next to each section in the website navigation and detail pages.</p>
        <p><strong>Ex. "Air Sealing" is section 3 so the parameter is "<em>section=3</em>"</strong></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">topic</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>A topic identifier. These can be found next to each topic in the website navigation and detail pages.</p>
        <p><strong>Ex. "Attached Garages" is topic 15 so the parameter is "<em>topic=15"</em></strong></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">subtopic</th>
      <td class="doc-parameter-required">No</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>A subtopic identifier. These are the last 2 digits of the Subtopic headers. <em>(Must be entered as a 2 digit number)</em></p>
        <p><strong>Ex. "Floor Framing" is subtopic 02 under the "Floors" topic under the "Air Sealing" section so the parameter is <em>"subtopic=02"</em></strong></p>
      </td>
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
      <th class="doc-parameter-name" scope="row">classification</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The SWS classification id for the specification.</p>
        <p><strong>Ex.</strong> <em>3.1302.1</em></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">title</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The title of the specification.</p>
        <p><strong>Ex.</strong> <em>Floor Framing—Bay Window</em></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">section</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The section the specification belongs to.</p>
        <p><strong>Ex.</strong> <em>Air Sealing</em></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">topic</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The topic the specification belongs to.</p>
        <p><strong>Ex.</strong> <em>Floors</em></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">subtopic</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The subtopic the specification belongs to.</p>
        <p><strong>Ex.</strong> <em>Floor Framing</em></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">desired_outcome</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">The desired outcome field. May contain HTML.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">housing_types</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array
        </div>
      </td>
      <td class="doc-parameter-description">An array of housing type strings that apply to this specification.</td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">details</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>An array of details that belong to this specification. Each detail contains the following fields:</p>
        <ul>
          <li><strong>classification:</strong><em>string</em></li>
          <li><strong>title:</strong><em>string</em></li>
          <li><strong>specification</strong><strong>:</strong><em>string</em></li>
          <li><strong>objective:</strong><em>string</em></li>
          <li><strong>housing_type</strong><em>:string</em></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://api.data.gov/nrel/standard-work-specs/spec/v1.json?api_key=DEMO_KEY">/api/standard-work-specs/spec/v1.json?api_key=DEMO_KEY</a></pre>

```json
[
  {
    "classification": "3.1602.9",
    "title": "Crossover Ducts",
    "section": "Air Sealing",
    "topic": "Ducts",
    "subtopic": "Duct Sealing",
    "desired_outcome": "Deliver all air from trunk to trunk without leakage or restriction",
    "housing_types": [
      "Manufactured Housing"
    ],
    "details": [
      {
        "objective": "<p>Verify scope of work</p>",
        "title": "Work assessment",
        "classification": "3.1602.9a",
        "specification": "<p>Installer prework assessment will be conducted to determine:</p><ul><li> Location</li><li> Types</li><li> Leakage points</li></ul>",
        "housing_type": [
          "Manufactured Housing"
        ]
      }
    ]
  }
]
```

### XML Output Format

<pre>GET <a href="http://api.data.gov/nrel/standard-work-specs/spec/v1.xml?api_key=DEMO_KEY">/api/standard-work-specs/spec/v1.xml?api_key=DEMO_KEY</a></pre>

```xml
<?xml version="1.0" encoding="utf-8"?>
<result is_array="true">
  <item>
    <classification type="string"/>
    <title type="string"/>
    <section type="string"/>
    <topic type="string"/>
    <subtopic type="string"/>
    <desired_outcome type="string"/>
    <housing_types is_array="true">
      <item type="string"/>
    </housing_types>
    <details is_array="true">
      <item>
        <objective type="string"/>
        <title type="string"/>
        <classification type="string"/>
        <specification type="string"/>
        <housing_type is_array="true">
          <item type="string"/>
        </housing_type>
      </item>
    </details>
  </item>
</result>
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour

## Errors

[Standard errors](/docs/errors) may be returned.
