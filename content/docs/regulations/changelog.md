---
title: Change Log
summary: 
disqus: false
kind: info

---

# {{title}}
{{summary}}

# 2.1 - March 2014
- Improvements to XML and JSON allow for easier processing
- Each piece of information is now directly referrable via a key/element name
- Many attributes now include a human-readable label as well as a key
- Attributes missing from 1.0 to 2.0 have been restored
- Dates are formatted as ISO 8601 with the time zone
- Values now represented in a display-friendly format:	- documentStatus:  "POSTED" to "Posted"	- documentType: "PROPOSED_RULES" to "Proposed Rule".	- dockeType: "NON_RULEMAKING" to "Nonrulemaking"
- Charset is set to UTF-8 in all service responses
- Renamed the attribute commentEndDate to commentDueDate

## Document
- Renamed the parameters:
	- D to documentId
	- FR to federalRegisterNumber
- Fields renamed:
	- canCommentOnDocument to openForComment
	- commentText to comment
	- commentTrackingNbr to trackingNumber
	- frNumber to federalRegisterNumber (same as the parameter)
	- renditionTypes to fileFormats
- Fields removed:
	- commentOnObjId
	- isFrDoc
- Restored attributes: (missing from v1 to v2)
	- frCitation
	- postedDate
	- rin
	- docStatus
	- abstract
	- CommentOnDocf
		- Restored with simplified attributes.  Only documentId, documentType, and title are included 
- File Content download URL's now listed as api.data.gov links and a "Download" service
- fileFormats are no longer available for Public Submissions; Instead the values are available as metadata
- XML Improvements:
	- fileFormats tag surrounds fileFormat entries in XML response
	- Topics are now wrapped with a topics element, and each topic is singular
- Metadata 'entry' attributes are now at the root-level and include a label for data presentation.
	- Ex. `<entry name="Page Count">20</entry>` becomes `<pageCount label="Page Count">20</pageCount>`
	- Ex. `{ @name: "Page Count", $: "20" }` becomes `pageCount: { label: "Page Count", value: "20" }`


## Docket
- Renamed the parameter: D to docketId
- The "metadata" and "ualist" sets of attributes have been collapsed to the root level of the XML/Object
 
## Search
- File formats are no longer available. To download files, make a request for each Document
- Fields removed from Search Model: docketModel, wdm, properties, propertyNames
- Fields removed from Document Model: wdm, properties, propertyNames, fromParticipatingAgency, fileFormats, everOpenForComment, sortDir, objectId, fileFormats
- Renamed fields:
	- canComment to openForComment
	- acceptComment to allowLateComment
	- agencyId to agencyAcronym



# 2.0 - July 31, 2013
- Changed URL to use api.data.gov/regulations/
- Services renamed:
	- search to documents
	- getdocument to document
	- getdocket to docket
- New API Key's are required. Free registration for a new key at http://api.data.gov
- JSON format updated to be easier to use
- Unified Agenda metadata added to Dockets (where applicable)
- Comment Count added to Docket
- Rate limits introduced


# 1.0 - February 18, 2012
- Initial release of the Regulations.gov API
- 3 services available: Search, Document and Docket
