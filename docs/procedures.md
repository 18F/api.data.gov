
This document is to memorialize internal project procedures.  Other agencies or teams not at GSA are free to adopt them as well, but don't have to in order to use the software.  

### GitHub Access 


##### api.data.gov 

The System owner and current project developers need commit rights to api.data.gov project repositories ([here](https://github.com/18F/api.data.gov) and [here](https://github.com/18F/api.data.gov-ops).  The system owner (currently Gray Brooks) manages this access, granting access to new project developers when they come onboard and removing access when they leave.  

Specifically, current developers are managed as the `api.data.gov` team in the 18F GitHub organization.   

Both of the adding and removing processes should be initiated by creating an issue in the project's [issue tracker](https://github.com/18F/api.data.gov/issues).  Any one can create the issue, but the system owner should be the one who addresses and closes it.  

These accounts are created for developers that need access to contribute code and deploy apps.

1. [Create an account](https://github.com/) with GitHub and [enable multi factor authentication](https://github.com/blog/1614-two-factor-authentication).
2. Make sure you have [gitseekrets](https://github.com/18F/laptop/tree/master/seekret-rules) installed on your Mac or in your virtualbox, if that is where you do your development. (If you are a Windows only user, you can be exempt from this requirement while the windows version is in development.) 
3. Then, you will want to contact the system owner, currently Gray Brooks. In that message, include your name, the name of your supervisor, confirm you have two-factor authentication on and have installed gitseekrets. 
4. The system owner will confirm the GSA identity of the applicant, and signal approval in the ticket. 
5. The system owner will then add the GitHub handle for the new member to the api.data.gov 18F GitHub team and close the ticket.

##### API Umbrella 

For the api.data.gov service, we utilize [a public, opensource project](https://github.com/nrel/api-umbrella) that is managed by the National Renewable Energy Laboratory (NREL), a component of the Department of Energy.  It has been developed in partnership with GSA over several years, though we access its code and update our service with it using the same public access that anyone else would have.  NREL's IT department manages GitHub access to the project.  GSA does not manage access, nor does it need to.  

### Api.data.gov Access - Application Administrators

The System owner and current project developers need application admin rights within the [api.data.gov system](https://api.data.gov/admin).  The system owner (currently Gray Brooks) manages this access, granting access to new project developers when they come onboard and removing access when they leave.  

Both of the adding and removing processes should be initiated by creating an issue in the project's [issue tracker](https://github.com/18F/api.data.gov/issues).  Any one can create the issue, but the system owner should be the one who addresses and closes it.  

These accounts are created for developers that need access to view system data across all participating APIs and to help set up and manage agency access to the system.

1. Create an issue in the project's [issue tracker](https://github.com/18F/api.data.gov/issues) to track the request.  
3. The system owner, currently Gray Brooks, should see and respond to it.  If there's any urgency, contact him via Slack or Email.  
4. The system owner will confirm the GSA identity of the applicant, and signal approval in the ticket. 
5. The system owner will then create the api.data.gov admin account for the new member, grant them the appropriate permissions,  and close the ticket.

### Api.data.gov Access - Agencies 


Agency contacts need api.data.gov accounts in order to view the api key users and api analytics data for their APIs.  The system owner (currently Gray Brooks) manages this access, granting access to new agency admins when they come onboard.  

The adding process should be initiated by creating an issue in the project's [ops issue tracker](https://github.com/18f/api.data.gov-ops/issues).  Any one can create the issue, but the system owner should be the one who addresses and closes it.  

1. Create an issue in the project's [issue tracker](https://github.com/18F/api.data.gov/issues) to track the request.  
3. The system owner, currently Gray Brooks, should see and respond to it.  If there's any urgency, contact him via Slack or Email.  
4. The system owner will confirm the agency identity of the applicant, and signal approval in the ticket. 
5. The system owner will then create the api.data.gov admin account for the new members, grant them the appropriate permissions, and close the ticket.

 
### Cloud.gov Access 

The System owner and current project developers need cloud.gov access to api.data.gov.  The system owner (currently Gray Brooks) manages this access, granting access to new project developers when they come onboard and removing access when they leave.  

Specifically, current developers are [granted](https://cloud.gov/docs/apps/managing-teammates/) OrgManager rights to `gsa-tts-api-data-gov`.  

Both of the adding and removing processes should be initiated by creating an issue in the project's [issue tracker](https://github.com/18F/api.data.gov/issues).  Any one can create the issue, but the system owner should be the one who addresses and closes it.    

These accounts are created for developers that need access to contribute code and debug apps.

1. Create an issue in the project's [issue tracker](https://github.com/18F/api.data.gov/issues) to track the request.  

1. [Create an account]() with cloud.gov and this will include multi factor authentication with [Google authenticator](https://support.google.com/accounts/answer/1066447?hl=en) or [authy](https://www.authy.com/).

4. The system owner will confirm the GSA identity of the applicant and comment on the ticket to show approval. 

5. The system owner will add a person to the api.data.gov organization in cloud.gov. 
 
6. The system owner will document the permissions that were assigned in the issue and close the issue when completed.  



### AWS Access 

The System owner and current project developers need cloud.gov access to api.data.gov.  The system owner (currently Gray Brooks) manages this access, granting access to new project developers when they come onboard and removing access when they leave.  

Specifically, current developers are [granted](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) `Developer` rights to the `apidatagov` AWS account.  

Both of the adding and removing processes should be initiated by creating an issue in the project's [issue tracker](https://github.com/18F/api.data.gov/issues).  Any one can create the issue, but the system owner should be the one who addresses and closes it.    

These accounts are created for developers that need access to contribute code and debug apps.

1. Create an issue in the project's [issue tracker](https://github.com/18F/api.data.gov/issues) to track the request.  

2. The system owner will confirm the GSA identity of the applicant and comment on the ticket to show approval.

3. The system owner will add a person to the `apidatagov` AWS account and grant them Developer rights. 

4. The new developer will be prompted to change their password and set up MFA on first login.  

5. The system owner will document the permissions that were assigned in the issue and close the issue when completed.  


### Public API Users 

Pulic API users may self-provision API keys at any of a number of public signup forms ([example](https://developer.nrel.gov/signup/)).  These keys then allow them general, public access to participating API programs.  Several programs change their settings to block all access except api keys that are manually whitelisted by the API program.  

These keys are then used to identify the developer when making API calls, but do not provide any site authentication.  There is no login or admin experience by which a public API user interacts with or manages their API key(s).  


### Weekly Monitoring Checklist

The development team checks for security events weekly. Any unusual or suspicious activities are immediately brought to the team's attention in the project slack channel (#api-data-gov) and the system owner coordinates appropriate investigation and followup. The team will follow the [18F incident response handbook](https://handbook.18f.gov/security-incidents/).

Checklist:
1. Create an issue in the project's [issue tracker](https://github.com/18F/api.data.gov/issues) to track this Security Event Review.
2. Review tool for all repositories and open a ticket for all "red" alerts.
3. Review [production logs](https://logs.fr.cloud.gov) for unapproved and unusual activities. 
4. Review actionable security events on production logs for successful and unsuccessful account logon events, account management events, object access, policy change, privilege functions, process tracking, system events, all administrator activity, authentication checks, authorization checks, data deletions, data access, data changes, and permission changes.
5. Deactivate any cloud.gov and github access for people who have left the team.
6. Note any findings in the Security Event Review issue.
7. Close the Security Event Review issue.

### Monitoring of New Relic Alerts

New Relic alerts are emailed to the full team immediately.  The first team member to see the alert checks the site's status and posts in the project slack channel (#api-data-gov) the results.  The system owner then coordinates any necessary followup.  

### Analysis of Security Impacts

Every change is assessed for potential impact on security posture as part of the change request submission, and is code reviewed by GitHub Actions. Changes with a potential impact on security include a review of standards and guidelines as part of requirements development. After a deployment, security posture is reviewed and confirmed via the GSA SecOps scanning suite during regular scanning.   Dependabot is used across TTS Github repos to automatically scan for vulnerabilities and dependency versioning. If an update is identified as needed, the team reviews documentation and takes necessary action.
