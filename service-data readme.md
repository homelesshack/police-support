# Service Data
A node.js script to scrape selected service details from the homeless link pages.

## Operation

'$ node westminster.js > outputfile.csv

## Limitations
- Currently produces csv to stdout
- Currently hard coded to search for westminster services
- Some services to do not provide all of the expected data (e.g. addresses)
- Microsoft Excel does not import address fields even though the data exists in the csv. Other tools (e.g. Libre Office do import these fields)
- It is desirable to extract min max age information for services but this is in free text form
- May need to introduce some kind of rate limiting to avoid swamping the source website
- Would be best to negotiate a recognised download or API with the source
