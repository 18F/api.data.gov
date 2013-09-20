---
title: Docket Information
summary: This API allows users to request metadata associated with a specific Docket.
disqus: true

---

# {{title}}
{{summary}}

<p style="background-color:#FFFFCC; border:2px solid #707070; padding: 5px">
Please review the Regulations.gov <a href="http://www.regulations.gov/#!developers;page=termsOfService">Terms of Service</a>
</p>

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/regulations/v2/docket<em>.format?parameters</em></pre>

## Sample Requests

<pre><a href="http://api.data.gov/regulations/v2/docket.xml?api_key=DEMO_KEY&D=EPA_FRDOC_0001">http://api.data.gov/regulations/docket/v2.xml?api_key=DEMO_KEY&D=EPA_FRDOC_0001</a></pre>

## Request Parameters

<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Required</th>
      <th>Argument</th>
      <th>Value</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><strong>Docket ID</strong></td>
      <td>Yes</td>
      <td>D</td>
      <td>FDMS Docket ID</td>
    </tr>

    <tr>
      <td><strong>API Key</strong></td>
      <td>Yes</td>
      <td>api_key</td>
      <td>Enter your API Key (an alphanumeric key provided upon request)</td>
    </tr>
  </tbody>
</table>

## Sample Output: Docket Information

<table>
  <tbody>
    <tr>
      <td></td>
      <td>&lt;?xml version="1.0" encoding="UTF-8" standalone="yes" ?&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td>
        <ul class="alternate">
          <li>&lt;docket&gt;</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td><strong>Federal Agency</strong> <strong>who published the Document</strong></td>
      <td>&lt;agencyId&gt;<span style="color: rgb(0,0,255);">EPA</span>&lt;/agencyId&gt;</td>
    </tr>

    <tr>
      <td><strong>Does this docket belong to Non Participating Agency</strong></td>
      <td>&lt;nonParticipatingAgency&gt;<span style="color: rgb(0,0,255);">false</span>&lt;/nonParticipatingAgency&gt;</td>
    </tr>

    <tr>
      <td><strong>Docket ID</strong></td>
      <td>&lt;docketId&gt;<span style="color: rgb(0,0,255);">EPA_FRDOC_0001</span>&lt;/docketId&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td>
        <ul class="alternate">
          <li>&lt;metadata&gt;</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td><strong>Agency-Defined Field: Location (Agency Region â€“ Agency</strong> <strong>Program)</strong></td>
      <td>&lt;entry name="<span style="color: rgb(0,0,255);">Location</span>"&gt;<span style="color: rgb(0,0,255);">R04-RCRA</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Docket Type (Rulemaking, Nonrulemaking)</strong></td>
      <td>&lt;entry name="<span style="color: rgb(0,0,255);">Type</span>"&gt;<span style="color: rgb(0,0,255);">Rulemaking</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Abstract (as entered by user)</strong></td>
      <td>&lt;entry name="<span style="color: rgb(0,0,255);">Abstract</span>"&gt;<span style="color: rgb(0,0,255);">Recently Posted EPA Rules and Notices from FR Feed.</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td>&lt;/metadata&gt;</td>
    </tr>

    <tr>
      <td><strong>Object ID</strong></td>
      <td>&lt;objectId&gt;<span style="color: rgb(0,0,255);">0b000064800e4b32</span>&lt;/objectId&gt;</td>
    </tr>

    <tr>
      <td><strong>RIN (as entered by agency in RIN format, or "Not Assigned")</strong></td>
      <td>&lt;rin&gt;<span style="color: rgb(0,0,255);">Not Assigned</span>&lt;/rin&gt;</td>
    </tr>

    <tr>
      <td><strong>Docket Title</strong></td>
      <td>&lt;title&gt;<span style="color: rgb(0,0,255);">Recently Posted EPA Rules and Notices from FR Feed.</span>&lt;/title&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td>&lt;/docket&gt;</td>
    </tr>
  </tbody>
</table>

## Sample Output: JSON

```json
{
  docket:{
    agencyId:"EPA",
    docketId:"EPA_FRDOC_0001",
    metadata:{
      entry:[
        {
          @name:"Location",
          $:"R04-RCRA"
        },
        {
          @name:"Type",
          $:"Rulemaking"
        },
        {
          @name:"Abstract",
          $:"Recently Posted EPA Rules and Notices from FR Feed."
        }
      ]
    },
    objectId:"0b000064800e4b32",
    rin:"Not Assigned",
    title:"Recently Posted EPA Rules and Notices from FR Feed."
  }
}
```
