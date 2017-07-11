
This document is to memorialize internal project procedures.  Other agencies or teams not at GSA are free to adopt them as well, but don't have to in order to use the software.  

### AWS Access 

* Org 
* Project 

### GitHub Access 

... 

### Api.data.gov Access 

...

### Cloud.gov Access 

...




### Weekly Monitoring Checklist

The development team checks for security events weekly. Any unusual or suspicious activities are immediately brought to the team's attention in the project slack channel (#api-data-gov) and the system owner coordinates appropriate investigation and followup. The team will follow the [18F incident response handbook](https://handbook.18f.gov/security-incidents/).

Checklist:
1. Create an issue in the project's [issue tracker](https://github.com/18F/api.data.gov/issues) to track this Security Event Review.
2. Review Gemnasium for all repositories and open a ticket for all "red" alerts.
3. Review [production logs](https://logs.fr.cloud.gov) for unapproved and unusual activities. 
4. Review actionable security events on production logs for successful and unsuccessful account logon events, account management events, object access, policy change, privilege functions, process tracking, system events, all administrator activity, authentication checks, authorization checks, data deletions, data access, data changes, and permission changes.
5. Deactivate any cloud.gov and github access for people who have left the team.
6. Note any findings in the Security Event Review issue.
7. Close the Security Event Review issue.

### Monitoring of New Relic Alerts

New Relic alerts are emailed to the full team immediately.  The first team member to see the alert checks the site's status and posts in the project slack channel (#api-data-gov) the results.  The system owner then coordinates any necessary followup.  
