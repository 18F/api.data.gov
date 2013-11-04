---
title: Document Information
summary: This API allows users to request metadata associated with the specific Document.
disqus: true

---

# {{title}}
{{summary}}

<p style="background-color:#FFFFCC; border:2px solid #707070; padding: 5px">
Please review the Regulations.gov <a href="http://www.regulations.gov/#!developers;page=termsOfService">Terms of Service</a>
</p>

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/regulations/v2/document<em>.format?parameters</em></pre>

## Sample Requests

1. Using FR Number:
   <pre><a href="http://api.data.gov/regulations/v2/document.xml?api_key=DEMO_KEY&FR=2011-31912">http://api.data.gov/regulations/v2/document.xml?api_key=DEMO_KEY&FR=2011-31912</a></pre>
2. Using Document ID:
   <pre><a href="http://api.data.gov/regulations/v2/document.xml?api_key=DEMO_KEY&D=EPA_FRDOC_0001-10857">http://api.data.gov/regulations/v2/document.xml?api_key=DEMO_KEY&D=EPA_FRDOC_0001-10857</a></pre>
3. Using JSON output:
   <pre><a href="http://api.data.gov/regulations/v2/document.json?api_key=DEMO_KEY&FR=2011-31912">http://api.data.gov/regulations/v2/document.json?api_key=DEMO_KEY&FR=2011-31912</a></pre>

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
      <td><strong>API Key</strong></td>
      <td>Yes</td>
      <td>api_key</td>
      <td>Enter your API Key (an alphanumeric key provided upon request)</td>
    </tr>

    <tr>
      <td><em>One of the following must be present:</em></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td><strong>Document ID</strong></td>
      <td>No</td>
      <td>D</td>
      <td>FDMS Document ID</td>
    </tr>

    <tr>
      <td><strong>FR Number</strong></td>
      <td>No</td>
      <td>FR</td>
      <td>Document FR Number</td>
    </tr>
  </tbody>
</table>

## Sample Output: Document Information

<table>
  <thead>
    <tr>
      <th>Description of the XML Tags</th>
      <th>XML Output</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td></td>
      <td><strong>&lt;document&gt;</strong></td>
    </tr>

    <tr>
      <td><strong>Federal Agency who published the Document</strong></td>
      <td>&lt;agencyId&gt;<span style="color: rgb(0,0,255);">EPA</span>&lt;/agencyId&gt;</td>
    </tr>

    <tr>
      <td><strong>Late Comments accepted for this Document (true, false)</strong></td>
      <td>&lt;allowLateComment&gt;<span style="color: rgb(0,0,255);">false</span>&lt;/allowLateComment&gt;</td>
    </tr>

    <tr>
      <td><strong>Document ID</strong></td>
      <td>&lt;documentId&gt;<span style="color: rgb(0,0,255);">EPA_FRDOC_0001-10857</span>&lt;/documentId&gt;</td>
    </tr>

    <tr>
      <td><strong>Document Type</strong></td>
      <td>&lt;documentType&gt;<span style="color: rgb(0,0,255);">Rule</span>&lt;/documentType&gt;</td>
    </tr>

    <tr>
      <td><strong>Document Title</strong></td>
      <td>&lt;title&gt;<span style="color: rgb(0,0,255);">National Oil and Hazardous Substances Pollution Contingency Plan; National Priorities List: Deletion of Hiteman Leather Superfund Site</span>&lt;/title&gt;</td>
    </tr>

    <tr>
      <td><strong>Attachments, if any</strong></td>
      <td>&lt;attachments&gt;</td>
    </tr>

    <tr>
      <td><strong>Attachment 1</strong></td>
      <td>&lt;attachment&gt;</td>
    </tr>

    <tr>
      <td><strong>Agency Notes</strong></td>
      <td>&lt;agencyNotes&gt;&lt;/agencyNotes&gt;</td>
    </tr>

    <tr>
      <td><strong>Abstract</strong></td>
      <td>&lt;abstract&gt;&lt;/abstract&gt;</td>
    </tr>

    <tr>
      <td><strong>Content Files</strong></td>
      <td>&lt;fileFormats&gt;&lt;/fileFormats&gt;</td>
    </tr>

    <tr>
      <td><strong>Posting Restrictions</strong></td>
      <td>&lt;postingRestriction&gt;No_restrictions&lt;/postingRestriction&gt;</td>
    </tr>

    <tr>
      <td><strong>Reason the file is restricted</strong></td>
      <td>&lt;reasonRestricted/&gt;</td>
    </tr>

    <tr>
      <td><strong>Attachment Title</strong></td>
      <td>&lt;title&gt;Test Document&lt;/title&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td>&lt;attachment&gt;&lt;/attachments&gt;</td>
    </tr>

    <tr>
      <td><strong>Commenting enabled for Document (true, false)</strong></td>
      <td>&lt;canCommentOnDocument&gt;<span style="color: rgb(0,0,255);">false</span>&lt;/canCommentOnDocument&gt;</td>
    </tr>

    <tr>
      <td><strong>Comment Text, if available</strong></td>
      <td>&lt;commentText/&gt;</td>
    </tr>

    <tr>
      <td><strong>Docket ID</strong></td>
      <td>&lt;docketId&gt;<span style="color: rgb(0,0,255);">EPA_FRDOC_0001</span>&lt;/docketId&gt;</td>
    </tr>

    <tr>
      <td><strong>Docket Type (Rulemaking, Nonrulemaking)</strong></td>
      <td>&lt;docketType&gt;<span style="color: rgb(0,0,255);">RULEMAKING</span>&lt;/docketType&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td>&lt; metadata &gt;</td>
    </tr>

    <tr>
      <td><strong>Document Statues (Draft, Pending Post, Posted, Do Not Post, Withdrawn)</strong></td>
      <td>&lt;entry name="Status" &gt;<span style="color: rgb(0,0,255);">Posted</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Document Received Date</strong></td>
      <td>&lt;entry name="Received Date"&gt;<span style="color: rgb(0,0,255);">December 13 2011, at 11:06 AM Eastern Standard Time</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Date Posted</strong></td>
      <td>&lt;entry name="Date Posted"&gt;<span style="color: rgb(0,0,255);">December 13 2011, at 12:00 AM Eastern Standard Time</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Agency Defined Field: CFR Number</strong></td>
      <td>&lt;entry name="CFR"&gt;<span style="color: rgb(0,0,255);">40 CFR Part 300</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Federal Register Number</strong></td>
      <td>&lt;entry name="Federal Register Number"&gt;<span style="color: rgb(0,0,255);">2011-31912</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Starting and Ending Page Numbers</strong></td>
      <td>&lt;entry name="Start-End Page"&gt;<span style="color: rgb(0,0,255);">77388 - 77392</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Comment Start Date</strong></td>
      <td>&lt;entry name="Comment Start Date"&gt; <span style="color: rgb(0,0,255);">December 13 2011, at 12:00 AM Eastern Standard Time</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Comment Due Date</strong></td>
      <td>&lt;entry name="Comment Due Date"&gt;<span style="color: rgb(0,0,255);">January 12 2012, at 11:59 PM Eastern Standard Time</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Page Count</strong></td>
      <td>&lt;entry name="Page Count"/&gt;<span style="color: rgb(0,0,255);">5</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td>&lt;/metadata&gt;</td>
    </tr>

    <tr>
      <td><strong>File Formats (pdf, html, doc)</strong></td>
      <td>
        &lt;fileFormats&gt;<a>pdf" class="external-link" rel="nofollow"&gt;http://api.data.gov/regulations/v2/contentStreamer?objectId=0900006480b939e5&amp;disposition=attachment&amp;contentType=<span style="color: rgb(0,0,255);">pdf</span></a>

        &lt;/fileFormats&gt;
      </td>
    </tr>

    <tr>
      <td></td>
      <td>
        <p>&lt;fileFormats&gt;<br>
        <a href="http://regulations.gov/api/contentStreamer">http://api.data.gov/regulations/v2/contentStreamer</a>?<br>
        objectId=0900006480b939e5&amp;disposition=attachment&amp;contentType=<span style="color: rgb(0,0,255);">html</span>&lt;/fileFormats&gt;</p>
      </td>
    </tr>

    <tr>
      <td><strong>RIN Number</strong></td>
      <td>&lt;rin&gt;Not Assigned&lt;/rin&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td>&lt;/document&gt;</td>
    </tr>
  </tbody>
</table>

## Sample Output: JSON

```json
{
  document:{
    agencyId:"EPA",
    documentId:"EPA-2011-0002-0024",
    documentType:"Public Submission",
    frDoc:false,
    title:"Comment on EPA-2011-0002-0004",
    attachments:{
      attachment:[
        {
          agencyNotes:"",
          abstract:"",
          fileFormats:"http://api.data.gov/regulations/v2/contentStreamer?objectId=0900006480b95638&disposition=attachment&contentType=excel12book",
          postingRestriction:"No_restrictions",
          reasonRestricted:"",
          title:"Test 3"
        },
        {
          agencyNotes:"",
          abstract:"",
          fileFormats:"http://api.data.gov/regulations/v2/contentStreamer?objectId=0900006480b95639&disposition=attachment&contentType=ppt12"          postingRestriction:"No_restrictions",
          reasonRestricted:"",
          title:"Test 2"
        }
      ]
    },
    canCommentOnDocument:true,
    commentText:"Testing REGS-1639",
    docketId:"EPA-2011-0002",
    docketType:"NON_RULEMAKING",
    metadata:{
      entry:[
        {
          @name:"Document Subtype",
          $:"Comment Response"
        },
        {
          @name:"Received Date",
          $:"January 09 2012, at 12:00 AM Eastern Standard Time"
        },
        {
          @name:"Date Posted",
          $:"January 09 2012, at 12:00 AM Eastern Standard Time"
        },
        {
          @name:"Comment Start Date",
          $:"June 14 2011, at 12:00 AM Eastern Daylight Time"
        },
        {
          @name:"Comment Due Date",
          $:"June 14 2012, at 11:59 PM Eastern Daylight Time"
        },
        {
          @name:"Tracking Number",
          $:"80b95637"
        },

      ]
    },
    fileFormats:"http://api.data.gov/regulations/v2/contentStreamer?objectId=0900006480b95637&disposition=attachment&contentType=xml",
    rin:""
  }
}
```
