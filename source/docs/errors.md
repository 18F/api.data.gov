---
title: General Web Service Errors
hidden_child: true

---

# General Web Service Errors

Certain, general errors will be returned in a standardized way from all Data.gov Web services. Additional, service-specific error messages may also be returned (see individual service documentation for those details). The following list describes the general errors any application may return:

<table border="0" cellpadding="0" cellspacing="0" class="doc-parameters">
  <thead>
    <tr>
      <th class="doc-parameters-name" scope="col" style="width: 100px;">HTTP Status Code</th>
      <th class="doc-parameters-required" scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="doc-parameter-name" scope="row">403</th>
      <td class="doc-parameter-description">
        Forbidden - Either no api_key parameter was supplied in the URL, or an invalid api_key was given. You can <a href="/signup">get your own API key</a>.
      </td>
    </tr>
    <tr>
      <th class="doc-parameter-name" scope="row">429</th>
      <td class="doc-parameter-description">
        Too Many Requests - Your API key has exceeded the rate limits. See <a href="/docs/rate-limits">rate limits</a> for more detail.
      </td>
    </tr>
  </tbody>
</table>

## Error Messages

A brief description of the error will be returned in the response body. These error message are subject to change, so it's suggested any error handling use the HTTP status code and not the contents of this message.

### Error Message Response Formats
Depending on the requested format, the error message response may be returned in JSON, XML, CSV, or plain text. Unknown request formats will return errors in plain text format.

#### JSON Example

```json
{
  "errors":[
    "An invalid api_key was supplied. Get one at http://api.data.gov/"
  ]
}
```

#### XML Example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<errors>
  <error>An invalid api_key was supplied. Get one at http://api.data.gov/</error>
</errors>
```

#### CSV Example

```
Error
An invalid api_key was supplied. Get one at http://api.data.gov/
````

#### Plain Text Example

```
Error: An invalid api_key was supplied. Get one at http://api.data.gov/
````
