---
title: Commercial Building Resources
summary: A searchable and filterable list of resources.
disqus: true

---

# {{title}}
{{summary}}

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/nrel/commercial-building-resources/resources<em>.format?parameters</em></pre>

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
      <th class="doc-parameter-name" scope="row">s</th>
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
        <p>A string to search resources on.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">audience-type</th>
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
        <p>A term from the Audience Type vocabulary <span>to filter results on.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">building-type</th>
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
        <p>A term from the Building Type vocabulary <span>to filter results on.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">collection</th>
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
        <p>A term from the Collection vocabulary <span>to filter results on.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">construction-type</th>
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
        <p>A term from the Contruction Type vocabulary <span>to filter results on.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">institution</th>
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
        <p>A term from the Institution vocabulary <span>to filter results on.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">keyword</th>
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
        <p>A term from the Keyword vocabulary <span>to filter results on.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">portal</th>
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
        <p>A term from the Portal vocabulary <span>to filter results on.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">publication-type</th>
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
        <p>A term from Publication Type vocabulary <span>to filter results on.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">resource-type</th>
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
        <p>A term from the Resouce Type vocabulary <span>to filter results on.</span></p>
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
      <td class="doc-parameter-description">
        <p>A term from the States vocabulary <span>to filter results on.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">tool-type</th>
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
        <p>A term from the Tool Types vocabulary <span>to filter results on.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">topic</th>
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
        <p>A term from Topic vocabulary <span>to filter results on.</span></p>
      </td>
    </tr>
  </tbody>
</table>

## Response Fields

The top-level structure of response is different for JSON vs XML format requests.   The XML format responds with a single array result of resource items.  The JSON format responds with a hash.  Each key in the JSON response hash is a nid value, and each value is a resource item.  The fields for individual resource items are consistent for JSON and XML format, and described below.  For more specfics, see Examples below. 

Resource Response Fields 

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
      <th class="doc-parameter-name" scope="row">vid</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field"></div>
      </td>
      <td class="doc-parameter-description">
        <p>Version ID of resource. If a new version of the resouce is published, the vid will change while the nid is constant.</p>
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
        <p>Title text.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">nid</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Unique integer identifier for resource. This does not change when new versions are published (see vid).</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">type</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field"></div>
      </td>
      <td class="doc-parameter-description">
        <p>Content type of resource. Options: publication, tool, event, other-resource.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">created</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Timestamp when resource was created in Unix epoch time.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">changed</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Timestamp when resource was last updated in Unix epoch time.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">rdf_mapping</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Resource Description Framework (RDF) metadata.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">body</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> array
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Array of objects containing copy for resource. See Body Response Fields.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_event_type</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Applicable only for Event content (see type). Array containing exactly one term.</span> See Term Response Fields.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_publication_type</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Applicable only for Publication content (see type). Array containing exactly one term.</span> <span>See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_resource_type</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Applicable only for Other Resource content (see type). Array containing exactly one term.</span> <span>See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_tool_type</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Applicable only for Tool content (see type). Array containing exactly one term.</span> <span>See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_resource_type_superset</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Array containing exactly one term. This field is available for all content types (see type above) and will match the content in whichever of field_event_type, field_publication_type, field_resource_type, field_tool_type is applicable for the resouces. Also s</span><span>ee Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_collections</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Array of terms in the Vocabulary. See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_require_user_information</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> Array
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Whether user should be required to enter contact information before downloading resource.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_publication_date</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> Array
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Date of publication with timezone. <span>Only present on Publication resources (see type).</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_primary_institution</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Array of terms in the Vocabulary. See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_secondary_institution</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Array of terms in the Vocabulary. See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_display_author</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> Array
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Whether author name is intended for display. Only present on Publication resources (see type).</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_author</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> Text
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Name of author. Only present for Publication resources (see type).</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_topics</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Array of terms in the Vocabulary. See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_construction_types</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Array of terms in the Vocabulary. See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_building_types</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Array of terms in the Vocabulary. See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_phases_of_delivery</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Array of terms in the Vocabulary. See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_audience_types</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Array of terms in the Vocabulary. See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_keywords</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> object
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Array of terms in the Vocabulary. See Term Response Fields.</span></p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_resource_link</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Unique url for resource.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">field_states</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> Array
        </div>
      </td>
      <td class="doc-parameter-description">
        <p><span>Array of terms in the Vocabulary. See Term Response Fields</span><span>.</span></p>
      </td>
    </tr>
  </tbody>
</table>

### Body Response Fields

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
      <th class="doc-parameter-name" scope="row">value</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field"></div>
      </td>
      <td class="doc-parameter-description">
        <p>Text for resource body without html tags.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">summary</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
      </td>
      <td class="doc-parameter-description">
        <p>Text for resource summary without html tags.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">safe_value</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field"></div>
      </td>
      <td class="doc-parameter-description">
        <p>Text for Resource body with escaped html tags.</p>
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">safe_summary</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> string
        </div>
        <div class="doc-parameter-value-field"></div>
      </td>
      <td class="doc-parameter-description">
        <p>Text for Resource summary with escaped html tags.</p>
      </td>
    </tr>
  </tbody>
</table>

### Term Response Fields

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
      <th class="doc-parameter-name" scope="row">tid</th>
      <td class="doc-parameter-value">
        <div class="doc-parameter-value-field">
          <strong>Type:</strong> integer
        </div>
        <div class="doc-parameter-value-field"></div>
      </td>
      <td class="doc-parameter-description">
        <p>Unique id of the vocabulary term.</p>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### JSON Output Format

<pre>GET <a href="http://api.data.gov/nrel/commercial-building-resources/v1/resources.json?api_key=DEMO_KEY">http://api.data.gov/nrel/commercial-building-resources/v1/resources.json?api_key=DEMO_KEY</a></pre>

```json
{
"718":{
  "vid":"782",
  "title":"BESTEST",
  "nid":"718",
  "type":"tool",
  "created":"1366984456",
  "changed":"1371062531",
  "rdf_mapping":{
    "rdftype":["sioc:Item","foaf:Document"],
    "title":{"predicates":["dc:title"]},
    "created":{"predicates":["dc:date","dc:created"],"datatype":"xsd:dateTime","callback":"date_iso8601"},
    "changed":{"predicates":["dc:modified"],"datatype":"xsd:dateTime","callback":"date_iso8601"},
    "body":{"predicates":["content:encoded"]},
    "uid":{"predicates":["sioc:has_creator"],"type":"rel"},
    "name":{"predicates":["foaf:name"]},
    "comment_count":{"predicates":["sioc:num_replies"],
    "datatype":"xsd:integer"},
    "last_activity":{"predicates":["sioc:last_activity_date"],
    "datatype":"xsd:dateTime",
    "callback":"date_iso8601"}},
  "current_revision_id":"782",
  "is_current":true,
  "is_pending":false,
  "body":{
    "und":[{
      "value":"Method for testing and diagnosing the simulation capabilities of the exterior envelope portions of building energy simulation programs. BESTEST (Building Energy Simulation TEST) evaluates design and analysis tools relative to their ability to adequately model the envelope dynamics of buildings. It has been adapted for certifying tools for Home Energy Rating Systems and by other organizations.",
    "summary":null,
    "format":null}]},
  "field_tool_type":{"und":[{"tid":"157"}]},
  "field_collections":[],
  "field_resource_link":{
    "und":[{
      "url":"http://apps1.eere.energy.gov/buildings/tools_directory/software.cfm/ID=85/",
      "title":null,"attributes":[]}]},
  "field_topics":{"und":[{"tid":"35"},{"tid":"29"}]},
  "field_states":[],
  "field_audience_types":[],
  "field_keywords":[],
  "field_building_types":{"und":[{"tid":"52"},{"tid":"53"},{"tid":"54"},{"tid":"55"},{"tid":"56"},{"tid":"59"},{"tid":"62"},{"tid":"61"},{"tid":"64"},{"tid":"66"},{"tid":"67"},{"tid":"68"},{"tid":"69"},{"tid":"73"},{"tid":"75"},{"tid":"72"},{"tid":"51"},{"tid":"57"},{"tid":"58"},{"tid":"74"},{"tid":"63"},{"tid":"70"},{"tid":"71"},{"tid":"60"},{"tid":"65"}]},
  "field_resource_type_superset":[]},
"1083":{...
}
```

### XML Output Format

<pre>GET <a href="http://api.data.gov/nrel/commercial-building-resources/v1/resources.xml?api_key=DEMO_KEY">http://api.data.gov/nrel/commercial-building-resources/v1/resources.xml?api_key=DEMO_KEY</a></pre>

```xml
<?xml version="1.0" encoding="utf-8"?>
<result is_array="true">
  <item>
    <vid>782</vid>
    <title>BESTEST</title>
    <nid>718</nid>
    <type>tool</type>
    <created>1366984456</created>
    <changed>1371062531</changed>
    <rdf_mapping>
      <rdftype is_array="true">
        <item>sioc:Item</item>
        <item>foaf:Document</item>
      </rdftype>
      <title><predicates is_array="true"><item>dc:title</item></predicates></title>
      <created><predicates is_array="true"><item>dc:date</item><item>dc:created</item></predicates><datatype>xsd:dateTime</datatype><callback>date_iso8601</callback></created>
      <changed><predicates is_array="true"><item>dc:modified</item></predicates><datatype>xsd:dateTime</datatype><callback>date_iso8601</callback></changed>
      <body><predicates is_array="true"><item>content:encoded</item></predicates></body>
      <uid><predicates is_array="true"><item>sioc:has_creator</item></predicates><type>rel</type></uid>
      <name><predicates is_array="true"><item>foaf:name</item></predicates></name>
      <comment_count><predicates is_array="true"><item>sioc:num_replies</item></predicates><datatype>xsd:integer</datatype></comment_count>
      <last_activity><predicates is_array="true"><item>sioc:last_activity_date</item></predicates><datatype>xsd:dateTime</datatype><callback>date_iso8601</callback></last_activity>
    </rdf_mapping>
    <current_revision_id>782</current_revision_id>
    <is_current>1</is_current>
    <is_pending></is_pending>
    <body><und is_array="true"><item>
      <value>Method for testing and diagnosing the simulation capabilities of the exterior envelope portions of building energy simulation programs. BESTEST (Building Energy Simulation TEST) evaluates design and analysis tools relative to their ability to adequately model the envelope dynamics of buildings. It has been adapted for certifying tools for Home Energy Rating Systems and by other organizations.</value>
      <summary/>
      <format/>
    </item></und></body>
    <field_tool_type><und is_array="true"><item><tid>157</tid></item></und></field_tool_type>
    <field_collections/>
    <field_resource_link><und is_array="true"><item>
      <url>http://apps1.eere.energy.gov/buildings/tools_directory/software.cfm/ID=85/</url>
      <title/><attributes/></item></und></field_resource_link>
    <field_topics><und is_array="true"><item><tid>35</tid></item><item><tid>29</tid></item></und></field_topics>
    <field_states/>
    <field_audience_types/>
    <field_keywords/>
    <field_building_types><und is_array="true"><item><tid>52</tid></item><item><tid>53</tid></item><item><tid>54</tid></item><item><tid>55</tid></item><item><tid>56</tid></item><item><tid>59</tid></item><item><tid>62</tid></item><item><tid>61</tid></item><item><tid>64</tid></item><item><tid>66</tid></item><item><tid>67</tid></item><item><tid>68</tid></item><item><tid>69</tid></item><item><tid>73</tid></item><item><tid>75</tid></item><item><tid>72</tid></item><item><tid>51</tid></item><item><tid>57</tid></item><item><tid>58</tid></item><item><tid>74</tid></item><item><tid>63</tid></item><item><tid>70</tid></item><item><tid>71</tid></item><item><tid>60</tid></item><item><tid>65</tid></item></und></field_building_types>
    <field_resource_type_superset/></item>
  <item>
  ...
</result>
```

## Rate Limits

[Standard rate limits](/docs/rate-limits) apply. No more than 1,000 requests may be made in any hour. No more than 10,000 requests may be made in any day.

## Errors

[Standard errors](/docs/errors) may be returned.
