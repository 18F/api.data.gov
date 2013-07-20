---
title: Commercial Building Vocabularies
summary: A list of terms for a given vocabulary in the Commercial Buildings Resource Database.  Useful for advanced search integration.
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/nrel/v1/vocabulary-name<em>.format?parameters</em></pre>

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
      <th class="doc-parameter-name" scope="row">vocabulary-name</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> None
        </div>
        <div class="doc-parameter-value-field">
          <strong>Options:</strong> <em>audience-types</em>, <i>building-types, collections, construction-types, institutions, keywords, portals, publication-types, resource-types, states, terms, tool-types, topics</i>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The vocabulary to retrieve terms for. If "terms" is used, this will return terms from all vocabularies. Otherwise this will return only terms from the specified vocabulary.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">format</th>
      <td class="doc-parameter-required">Yes</td>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field">
          <strong>Default:</strong> xml
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
      <th class="doc-parameter-name" scope="row">result</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> Array
        </div>
        <div class="doc-parameter-value-field"></div>
      </td>
      <td class="doc-parameter-description">
        <p>Array of terms from the requested vocabulary, listed in no specific order. See term fields for details.</p>
      </td>
    </tr>
  </tbody>
</table>

### Term Fields

Fields returned with each result.

<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col">Parameter</th>
      <th class="doc-parameters-value" scope="col">Value</th>
      <th class="doc-parameters-description" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">tid</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>The unique id of the term.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">vid</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type: integer</strong>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Version id of the term.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">name</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <span><b>Type: String</b></span>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Display name of term.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">description</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <span><b>Type: String</b></span>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Display name of term.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">format</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <span><b>Type: String</b></span>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Format of term.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">weight</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <span><b>Type: String</b></span>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Display order for term.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">vocabulary_machine_name</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <span><b>Type: String</b></span>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Unique id for vocabulary. Unless input "vocabulary_name" = "terms" was used to select terms from all vocabularies, this field will be the same for all results.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">rdf_mapping</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <span><b>Type: Object</b></span>
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Resource Description Framework (RDF) metadata.</p>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://api.data.gov/nrel/commercial-building-resources/v1/building-types.json?api_key=DEMO_KEY">http://api.data.gov/nrel/commercial-building-resources/building-types.json?api_key=DEMO_KEY</a></pre>

```json
{
    "result": [
        {
            "tid": "51",
            "vid": "9",
            "name": "Datacenter",
            "description": null,
            "format": null,
            "weight": "0",
            "vocabulary_machine_name": "building_types",
            "rdf_mapping": {
                "rdftype": [
                    "skos:Concept"
                ],
                "name": {
                    "predicates": [
                        "rdfs:label",
                        "skos:prefLabel"
                    ]
                },
                "description": {
                    "predicates": [
                        "skos:definition"
                    ]
                },
                "vid": {
                    "predicates": [
                        "skos:inScheme"
                    ],
                    "type": "rel"
                },
                "parent": {
                    "predicates": [
                        "skos:broader"
                    ],
                    "type": "rel"
                }
            }
        },
...
    ]
}
```

### XML Output Format

<pre>GET <a href="http://api.data.gov/nrel/commercial-building-resources/v1/building-types.xml?api_key=DEMO_KEY">http://api.data.gov/nrel/commercial-building-resources/v1/service.xml?api_key=DEMO_KEY</a></pre>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<result is_array="true">
  <item>
    <tid>51</tid>
    <vid>9</vid>
    <name>Datacenter</name>
    <description/>
    <format/>
    <weight>0</weight>
    <vocabulary_machine_name>building_types</vocabulary_machine_name>
    <rdf_mapping>
      <rdftype is_array="true">
        <item>skos:Concept</item>
      </rdftype>
      <name>
        <predicates is_array="true">
          <item>rdfs:label</item>
          <item>skos:prefLabel</item>
        </predicates></name>
      <description>
        <predicates is_array="true">
          <item>skos:definition</item>
        </predicates>
      </description>
      <vid>
        <predicates is_array="true">
          <item>skos:inScheme</item>
        </predicates>
        <type>rel</type>
      </vid>
      <parent>
        <predicates is_array="true">
          <item>skos:broader</item>
        </predicates>
        <type>rel</type>
      </parent>
    </rdf_mapping>
  </item> ... </result>
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour. No more than 10,000 requests may be made in any day.

## Errors

[Standard errors](/docs/errors) may be returned.
