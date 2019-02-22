---
title: System Upgrades
date: '2019-02-22T16:48:05.585Z'
scheduled: '2019-02-23T21:00:00.000Z'
duration: 1440
severity: under-maintenance
affectedsystems:
  - gateway
  - api
  - admin
resolved: false
---

We're planning some system upgrades and database migrations this weekend. We don't anticipate much noticeable impact, but there are a couple of possible things to be aware of:

- For a period of 1-2 minutes, users that sign up for new API keys won't be able to use those API keys for 1-2 minutes. Existing API keys should be unaffected. The new API keys will also work after 1-2 minutes.
- For a few hours, some of the analytics available in the admin may be missing some recent data. The data will be restored, but it may take a while for everything to sync up. We recommend waiting until the maintenance is complete if you're planning to pull usage numbers from the analytics.

We will update this status page if there are any unanticipated issues.
