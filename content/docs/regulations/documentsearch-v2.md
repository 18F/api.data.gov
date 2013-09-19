---
title: Document Search
summary: This API allows users to build a query based on any of the parameters below.
disqus: true

---

# {{title}}
{{summary}}

<p style="background-color:#FFFFCC; border:2px solid #707070; padding: 5px">
Please review the Regulations.gov <a href="http://www.regulations.gov/#!developers;page=termsOfService">Terms of Service</a>
</p>

<ul id="toc"></ul>

## Request URL

<pre>GET http://api.data.gov/regulations/documentsearch/v1<em>.format?parameters</em></pre>

## Sample Requests

1. All EPA documents containing the search term 'tires': <pre><a href="http://api.data.gov/regulations/documentsearch/v1.xml?api_key=DEMO_KEY&a=EPA&rpp=10&po=0&s=tires&encoded=1&countsOnly=0">http://api.data.gov/regulations/documentsearch/v1.xml?api_key=DEMO_KEY&a=EPA&rpp=10&po=0&s=tires&encoded=1&countsOnly=0</a></pre>
2. All FR documents posted today: <pre><a href="http://api.data.gov/regulations/v2/documents.xml?api_key=DEMO_KEY&encoded=1&countsOnly=0&dct=N%252BFR%252BPR&np=0">http://api.data.gov/regulations/v2/documents.xml?api_key=DEMO_KEY&encoded=1&countsOnly=0&dct=N%252BFR%252BPR&np=0</a></pre>

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
      <td><strong>Document Type</strong></td>
      <td>No</td>
      <td>dct</td>
      <td>
        <p><strong>N</strong> (Notice)<br>
        <strong>PR</strong> (Proposed Rule)<br>
        <strong>FR</strong> (Rule)<br>
        <strong>O</strong> (Other)<br>
        <strong>SR</strong> (Supporting &amp; Related Material)<br>
        <strong>PS</strong> (Public Submission)</p>
      </td>
    </tr>

    <tr>
      <td><strong>Docket ID</strong></td>
      <td>No</td>
      <td>dktid</td>
      <td>Valid Docket ID (ex. SEC-2012-0044)</td>
    </tr>

    <tr>
      <td><strong>Docket Type</strong></td>
      <td>No</td>
      <td>dkt</td>
      <td>
        <p><strong>R</strong> (Rulemaking)<br>
        <strong>N</strong> (Nonrulemaking)</p>
      </td>
    </tr>

    <tr>
      <td><strong>Comment Period</strong></td>
      <td>No</td>
      <td>cp</td>
      <td>
        <p><strong>O</strong> (Open)<br>
        <strong>C</strong> (Closed)</p>
      </td>
    </tr>

    <tr>
      <td><strong>Federal Agency</strong></td>
      <td>No</td>
      <td>a</td>
      <td>Accepted values listed in Appendix A</td>
    </tr>

    <tr>
      <td><strong>Keyword</strong></td>
      <td>No</td>
      <td>s</td>
      <td>Keyword value as entered by user</td>
    </tr>

    <tr>
      <td><strong>Results Per Page</strong></td>
      <td>No</td>
      <td>rpp</td>
      <td><strong>10, 25, 100</strong></td>
    </tr>

    <tr>
      <td><strong>Page Offset</strong></td>
      <td>No</td>
      <td>po</td>
      <td>
        <p>Enter the page offset (always starts with <strong>0</strong>). This is used in conjunction with results per page to fetch large data sets in chunks. For example, if a search produces 82 results and the result per page is set to 25, this will generate 4 pages. 3 pages will have 25 results and the last page will have 7 results. Page offset values for each page will be<br>
        Page 1: po = 0<br>
        Page 2: po=25<br>
        Page 3: po=50<br>
        Page 4: po=75<br>
        <br>
        So total number of pages is [total results/results per page] and page offset for page X is [X-1 * results per page]</p>
      </td>
    </tr>

    <tr>
      <td><strong>Comment Period Closing Soon</strong></td>
      <td>No</td>
      <td>cs</td>
      <td>
        <p><strong>0</strong> (closing today)<br>
        <strong>3</strong> (closing within 3 days)<br>
        <strong>15</strong> (closing within 15 days)<br>
        <strong>30</strong> (closing within 30 days)<br>
        <strong>90</strong> (closing within 90 days)</p>
      </td>
    </tr>

    <tr>
      <td><strong>Newly Posted</strong></td>
      <td>No</td>
      <td>np</td>
      <td>
        <p><strong>0</strong> (posted today)<br>
        <strong>3</strong> (posted within last 3 days)<br>
        <strong>15</strong> (posted within last 15 days)<br>
        <strong>30</strong> (posted within last 30 days)<br>
        <strong>90</strong> (posted within last 90 days)</p>
      </td>
    </tr>

    <tr>
      <td><strong>Comment Period Start Date</strong></td>
      <td>No</td>
      <td>cmsd</td>
      <td>Enter a date in the form of <strong>MM</strong>%7C<strong>DD</strong>%7C<strong>YY</strong>. The date must be before the Comment Period End Date, if it is also provided.</td>
    </tr>

    <tr>
      <td><strong>Comment Period End Date</strong></td>
      <td>No</td>
      <td>cmd</td>
      <td>
        <p>Enter a date in the form of <strong>MM</strong>%7C<strong>DD</strong>%7C<strong>YY</strong>. The date must be after the Comment Period Start Date, if it is also provided.<br>
        <em>**Comment Period Start and End Dates are mutually exclusive with the "closing soon" parameter. If both are provided, "closing soon" will be ignored.</em></p>
      </td>
    </tr>

    <tr>
      <td><strong>Creation Date</strong></td>
      <td>No</td>
      <td>crd</td>
      <td>Enter a date in the form of <strong>MM</strong>%7C<strong>DD</strong>%7C<strong>YY</strong>.</td>
    </tr>

    <tr>
      <td><strong>Received Date</strong></td>
      <td>No</td>
      <td>rd</td>
      <td>Enter a date in the form of <strong>MM</strong>%7C<strong>DD</strong>%7C<strong>YY</strong>.</td>
    </tr>

    <tr>
      <td><strong>Posted Date</strong></td>
      <td>No</td>
      <td>pd</td>
      <td>Enter a date in the form of <strong>MM</strong>%7C<strong>DD</strong>%7C<strong>YY</strong>.</td>
    </tr>

    <tr>
      <td><strong>Document Category</strong></td>
      <td>No</td>
      <td>Cat</td>
      <td><strong>AD</strong> (Aerospace and Transportation) <strong>AEP</strong> (Agriculture, Environment and Public Lands) <strong>BFS</strong> (Banking and Financial) <strong>CT</strong> (Commerce and International) <strong>LES</strong> (Defense, Law Enforcement, and Security) <strong>EELS</strong> (Education, Labor, Presidential, and Government Services) <strong>EUMM</strong> (Energy, Natural Resources, and Utilities) <strong>HCFP</strong> (Food Safety, Health, and Pharmaceutical) <strong>PRE</strong> (Housing, Development, and Real Estate) <strong>ITT</strong> (Technology and Telecommunications)</td>
    </tr>

    <tr>
      <td><strong>Sort By</strong></td>
      <td>No</td>
      <td>sb</td>
      <td>
        <p><strong>docketId</strong> (Docket ID)<br>
        <strong>docId</strong> (Document ID)<br>
        <strong>title</strong> (Title)<br>
        <strong>postedDate</strong> (Posted Date)<br>
        <strong>agency</strong> (Agency)<br>
        <strong>documentType</strong> (Document Type)<br>
        <strong>submitterName</strong> (Submitter Name)<br>
        <strong>organization</strong> (Organization)</p>
      </td>
    </tr>

    <tr>
      <td><strong>Sort Order</strong></td>
      <td>No</td>
      <td>so</td>
      <td>
        <p><strong>ASC</strong> (Ascending)<br>
        <strong>DESC</strong> (Descending)</p>
      </td>
    </tr>

    <tr>
      <td><strong>Docket Subtype</strong></td>
      <td>No</td>
      <td>dkst</td>
      <td>Accepted values listed in Appendix B</td>
    </tr>

    <tr>
      <td><strong>Docket Sub-subtype</strong></td>
      <td>No</td>
      <td>dktst2</td>
      <td>Accepted values listed in Appendix C</td>
    </tr>

    <tr>
      <td><strong>Document Subtype</strong></td>
      <td>No</td>
      <td>dktst</td>
      <td>Accepted values listed in Appendix D</td>
    </tr>

    <tr>
      <td><strong>Counts Only</strong></td>
      <td>No</td>
      <td>countsOnly</td>
      <td>
        <p><strong>1</strong> (will return only the document count for a search query)<br>
        <strong>0</strong> (will return documents as well)</p>
      </td>
    </tr>

    <tr>
      <td><strong>Encoded</strong></td>
      <td>No</td>
      <td>encoded</td>
      <td>
        <p><strong>1</strong> (will accept Regulations.gov style encoded parameters)<br>
        <strong>0</strong> (will not accept such encoded parameters)<br>
        Individual parameters and values from Regulations.gov search URLs can be used, but since they are encoded, this flag tells the API service to decode them first. For example, below is the Regulations.gov URL for searching all open FR documents:<br>
        <span style="color: rgb(0,0,255);"><a href="http://www.regulations.gov/#!searchResults;dct=N%252BPR%252BFR%252BO;cp=O;rpp=10;po=0">http://www.regulations.gov/#!searchResults;dct=N%252BPR%252BFR%252BO;cp=O;rpp=10;po=0</a></span><br>
        In order to use this with the API, user will need to specify 'encoded=1' in the URL along with providing one or more encoded parameters.</p>

        <a href="http://api.data.gov/regulations/v2/documents.xml?encoded=1&amp;dct=N%252BPR%252BFR%252BO&amp;cp=O" style="line-height: 1.4285715;">http://api.data.gov/regulations/v2/documents.xml?encoded=1&amp;dct=N%252BPR%252BFR%252BO&amp;cp=O</a>
      </td>
    </tr>
  </tbody>
</table>

## Sample Output: Document Search

<table>
  <thead>
    <tr>
      <th>Description of the XML Tags</th>
      <th>XML Output</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><strong>Search result container tag</strong></td>
      <td>&lt;searchresult xmlns:ns2="http://api.data.gov/regulations"&gt;</td>
    </tr>

    <tr>
      <td><strong>Count of Documents returned</strong></td>
      <td>&lt;recordCount&gt;<span style="color: rgb(0,0,255);">4</span>&lt;/recordCount&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td>
        <p><a href="http://api.data.gov/regulations/v2/documents?api_key=DEMO_KEY&amp;encoded=1&amp;countsOnly=0&amp;dct=N%252BFR%252BPR&amp;np=0"><strong>-</strong></a> &lt;documents&gt;<br>
        <a href="http://api.data.gov/regulations/v2/documents?api_key=DEMO_KEY&amp;encoded=1&amp;countsOnly=0&amp;dct=N%252BFR%252BPR&amp;np=0"><strong>+</strong></a> &lt;document&gt;<br>
        <a href="http://api.data.gov/regulations/v2/documents?api_key=DEMO_KEY&amp;encoded=1&amp;countsOnly=0&amp;dct=N%252BFR%252BPR&amp;np=0"><strong>-</strong></a> &lt;document&gt;</p>
      </td>
    </tr>

    <tr>
      <td><strong>Federal Agency who published the Document</strong></td>
      <td>&lt;agency&gt;<span style="color: rgb(0,0,255);">FAA</span>&lt;/agency&gt;</td>
    </tr>

    <tr>
      <td><strong>Number of attachments</strong></td>
      <td>&lt;attachmentCount&gt;<span style="color: rgb(0,0,255);">0</span>&lt;/attachmentCount&gt;</td>
    </tr>

    <tr>
      <td><strong>Accepting comments (true, false)</strong></td>
      <td>&lt;acceptingComments&gt;<span style="color: rgb(0,0,255);">true</span>&lt;/acceptingComments&gt;</td>
    </tr>

    <tr>
      <td><strong>Comment Due Date</strong></td>
      <td>&lt;commentsDue&gt;<span style="color: rgb(0,0,255);">2012-01-17T00:00:00-05:00</span>&lt;/commentsDue&gt;</td>
    </tr>

    <tr>
      <td><strong>Comment Start Date</strong></td>
      <td>&lt;commentsBegin&gt;2012-01-11T00:00:00-05:00&lt;/commentsBegin&gt;</td>
    </tr>

    <tr>
      <td><strong>Comment Text</strong></td>
      <td>&lt;commentText /&gt;</td>
    </tr>

    <tr>
      <td><strong>Docket ID</strong></td>
      <td>&lt;docketId&gt;<span style="color: rgb(0,0,255);">FAA_FRDOC_0001</span>&lt;/docketId&gt;</td>
    </tr>

    <tr>
      <td><strong>Docket Title</strong></td>
      <td>&lt;docketTitle&gt;<span style="color: rgb(0,0,255);">Recently Posted FAA Rules and Notices.</span>&lt;/docketTitle&gt;</td>
    </tr>

    <tr>
      <td><strong>Docket Type (Rulemaking, Nonrulemaking)</strong></td>
      <td>&lt;docketType&gt;<span style="color: rgb(0,0,255);">RULEMAKING</span>&lt;/docketType&gt;</td>
    </tr>

    <tr>
      <td><strong>Document ID</strong></td>
      <td>&lt;documentId&gt;<span style="color: rgb(0,0,255);">FAA_FRDOC_0001-6111</span>&lt;/documentId&gt;</td>
    </tr>

    <tr>
      <td><strong>Document Status (Posted, Not Posted)</strong></td>
      <td>&lt;documentStatus&gt;<span style="color: rgb(0,0,255);">Posted</span>&lt;/documentStatus&gt;</td>
    </tr>

    <tr>
      <td><strong>Document Type (Rule, Proposed Rule, Notice, Public Submission, Supporting &amp; Related Materials, Other)</strong></td>
      <td>&lt;documentType&gt;<span style="color: rgb(0,0,255);">Rule</span>&lt;/documentType&gt;</td>
    </tr>

    <tr>
      <td><strong>Content File Location</strong></td>
      <td>&lt;fileFormats&gt;<a href="http://www.regulations.gov/api/contentStreamer?objectId=0900006480b92c58&amp;disposition=attachment&amp;contentType=pdf%3c/file">http://www.regulations.gov/api/contentStreamer?objectId=0900006480b92c58&amp;disposition=attachment&amp;contentType=pdf&lt;/file</a><span style="text-decoration: underline;">Formats</span>&gt;</td>
    </tr>

    <tr>
      <td><strong>Participating Agency (True, False)</strong></td>
      <td>&lt;fromParticipatingAgency&gt;<span style="color: rgb(0,0,255);">true</span>&lt;/fromParticipatingAgency&gt;</td>
    </tr>

    <tr>
      <td><strong>FR Document (True, False)</strong></td>
      <td>&lt;isFrDoc&gt;<span style="color: rgb(0,0,255);">false</span>&lt;/isFrDoc&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td><a href="http://api.data.gov/regulations/v2/documents?api_key=DEMO_KEY&amp;encoded=1&amp;countsOnly=0&amp;dct=N%252BFR%252BPR&amp;np=0"><strong>-</strong></a> &lt;metadata&gt;</td>
    </tr>

    <tr>
      <td><strong>Query for Document Status (Posted, Withdrawn)</strong></td>
      <td><a href="http://api.data.gov/regulations/v2/documents?api_key=DEMO_KEY&amp;encoded=1&amp;countsOnly=0&amp;dct=N%252BFR%252BPR&amp;np=0"><strong>-</strong></a> &lt;entry name="<span style="color: rgb(0,0,255);">Status</span>"&gt;<span style="color: rgb(0,0,255);">Posted</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Query for Date Posted (MM/DD/YYYY)</strong></td>
      <td><a href="http://api.data.gov/regulations/v2/documents?api_key=DEMO_KEY&amp;encoded=1&amp;countsOnly=0&amp;dct=N%252BFR%252BPR&amp;np=0"><strong>-</strong></a> &lt;entry name="<span style="color: rgb(0,0,255);">Date Posted</span>"&gt;<span style="color: rgb(0,0,255);">December 02 2011, at 12:00 AM Eastern Standard Time</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td><strong>Query for Comment Due Date (MM/DD/YYYY)</strong></td>
      <td><a href="http://api.data.gov/regulations/v2/documents?api_key=DEMO_KEY&amp;encoded=1&amp;countsOnly=0&amp;dct=N%252BFR%252BPR&amp;np=0"><strong>-</strong></a> &lt;entry name="<span style="color: rgb(0,0,255);">Comment Due Date</span>"&gt;<span style="color: rgb(0,0,255);">January 17 2012, at 11:59 PM Eastern Standard Time</span>&lt;/entry&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td>&lt;/metadata&gt;</td>
    </tr>

    <tr>
      <td>
        <p><br>
        <strong>Object ID</strong></p>
      </td>
      <td>&lt;objectId&gt;<span style="color: rgb(0,0,255);">0900006480b92c58</span>&lt;/objectId&gt;</td>
    </tr>

    <tr>
      <td><strong>Submitter Organization (only present on Non-FR documents)</strong></td>
      <td>&lt;organization /&gt;</td>
    </tr>

    <tr>
      <td><strong>Posted/Published Date (MM/DD/YYYY)</strong></td>
      <td>&lt;postedDate&gt;2012-01-11T00:00:00-05:00&lt;/postedDate&gt;</td>
    </tr>

    <tr>
      <td><strong>RIN (as entered by agency in RIN format, or "Not Assigned")</strong></td>
      <td>&lt;rin&gt;<span style="color: rgb(0,0,255);">Not Assigned</span>&lt;/rin&gt;</td>
    </tr>

    <tr>
      <td><strong>Submitter Name</strong></td>
      <td>&lt;submitterName /&gt;</td>
    </tr>

    <tr>
      <td><strong>Summary</strong></td>
      <td>&lt;summary /&gt;</td>
    </tr>

    <tr>
      <td><strong>Title</strong></td>
      <td>&lt;title&gt;<span style="color: rgb(0,0,255);">Airworthiness Directives: Quest Aircraft Design, LLC Airplanes</span>&lt;/title&gt;</td>
    </tr>

    <tr>
      <td></td>
      <td>
        <p>&lt;/document&gt;<br>
        &lt;/documents&gt;<br>
        &lt;/searchresult&gt;</p>
      </td>
    </tr>
  </tbody>
</table>

## Sample Output: JSON

```json
{
  searchresult:{
    recordCount:11,
    documents:{
      document:{
        agency:"SEC",
        attachmentCount:0,
        acceptingComments:false,
        commentsDue:"2012-02-01T00:00:00-05:00",
        commentsBegin:"2012-01-11T00:00:00-05:00",
        commentText:"",
        docketId:"SEC-2012-0044",
        docketTitle:"Self-Regulatory Organizations; Proposed Rule Changes: NYSE Amex LLC",
        docketType:"RULEMAKING",
        documentId:"SEC-2012-0044-0001",
        documentStatus:"Posted",
        documentType:"Notice",
        fileFormats:[
          "http://api.data.gov/regulations/v2/contentStreamer?objectId=0900006480b95b79&disposition=attachment&contentType=pdf",
          "http://api.data.gov/regulations/v2/contentStreamer?objectId=0900006480b95b79&disposition=attachment&contentType=html"
        ],
        fromParticipatingAgency:false,
        isFrDoc:false,
        metadata:{
          entry:[
            {
              @name:"Date Posted",
              $:"January 11 2012, at 12:00 AM Eastern Standard Time"
            },
            {
              @name:"Comment Start Date",
              $:"January 11 2012, at 12:00 AM Eastern Standard Time"
            },
            {
              @name:"Comment Due Date",
              $:"February 01 2012, at 11:59 PM Eastern Standard Time"
            }
          ]
        },
        objectId:"0900006480b95b79",
        organization:"",
        postedDate:"2012-01-11T00:00:00-05:00",
        rin:"",
        submitterName:"",
        summary:"",
        title:"Self-Regulatory Organizations; Proposed Rule Changes: NYSE Amex LLC"
      }
    }
  }
}
```
