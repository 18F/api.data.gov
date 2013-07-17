---
title: About api.data.gov
---

# About api.data.gov

[api.data.gov](http://api.data.gov/) is a free API management service for federal agencies. Our aim is to make it easier for you to release and manage your APIs.

## How It Works

api.data.gov acts as a layer above your existing APIs. It transparently adds  extra functionality to your APIs and helps deal with some of the repetitive parts of managing APIs.

- **You're in control:** You still have complete control of building and hosting your APIs however you like.
- **No changes required:** No changes are required to your API, but when it's accessed through api.data.gov, we'll transparently add features and handle the boring stuff.
- **Focus on the APIs:** You're freed from worrying about things like API keys, rate limiting, and gathering usage stats, so you can focus on building the next great API.

## Features
![features of api.data.gov](http://farm4.staticflickr.com/3680/9302707420_dbc7c2c437_o.png)
### API Keys

We'll handle API keys for you:

- **API key signup:** It's quick and easy for users to signup for an API key and start using it immediately.
- **Shared across services:** Users can reuse their API key across all participating api.data.gov APIs.
- **No coding required:** No code changes are required to your API. If your API is being hit through api.data.gov, you can simply assume it's from a valid user.

### Analytics

We'll track all the traffic to your API and give you tools to easily analyze it:

- **Demonstrate value:** Understand how your API is being used so you can gauge the value and success of your APIs.
- **Visualize usage and trends**: View graphs of the overall usage trends for your APIs.
- **Flexible querying**: Drill down into the stats based on any criteria. Find out how much traffic individual users are generating, or answer more complex  questions about aggregate usage.
- **Monitor API performance**: We gather metrics on the speed of your API, so you can keep an eye on how your API is performing.
- **No coding required**: No code changes are required to your API. If your API is being hit through api.data.gov, we can take care of logging the necessary details.

### Documentation

We can help with publishing documentation for your API:
- **Hosted or linked:** We can host the documentation of your API, or, if you already have your own developer portal, we can simply link to it.

![join the api.data.gov federated api network!](http://farm6.staticflickr.com/5515/9299911959_bdc195fb56_o.png)

- **One stop shop:** As more agencies add APIs to api.data.gov, users will be able to discover and explore more government APIs all at one destination.

### Rate Limiting

You might not want to allow all users to have uncontrolled access to your APIs:

- **Prevent abuse:** Your API servers won't see traffic from users exceeding their limits, preventing additional load on your servers.
- **Per user limits:** Individual users can be given higher or lower rate limits.
- **No coding required:** No code changes are required to your API. If your API is being hit, you can simply assume it's from a user that hasn't exceeded their rate limits.

## How To Participate

If you're interested in exploring any of this for your APIs please [contact us](http://api.data.gov/contact). In general, it's easy to take an existing API and put it behind api.data.gov, so you can see how things work.

## Roadmap

This is our loose plan, but [let us know](http://api.data.gov/contact) if you think other things should be prioritized:

- **Self service web admin for managing APIs (August 2013):** Allow agencies to add and edit API routing rules to the proxy via the web admin (currently this is handled through config file changes).
- **Improved documentation management / interactive docs (August 2013):** Explore the possibility of using Swagger or I/O Docs for managing the documentation and providing interactive docs.
- **Better user management in the web admin (August 2013):** Make it easier for admin users to manage user accounts via the web admin (assigning per-user rate limits, creating keys, etc).
- **More granular admin permissions (September 2013):** Introduce more granular admin accounts, so agencies only have access to manage and view their own APIs (currently admins can see and do everything).
- **More granular rate limits (September 2013):** Allow rate limits to be set on a per-agency or per-API basis (currently the rate limits are global across all api.data.gov APIs).
- **Saved analytics reports (November 2013):** Make it easier for admins to pull common stats by allowing them to save pre-filled analytics queries.

Other ideas/possibilities:

- **Caching:** Help agencies scale their APIs by providing an optional caching layer.
- **User accounts:** Allow users to have an optional account where they can manage their API keys and view analytics of their own usage (currently users get API keys, but there's no account management beyond that).
- **Authentication mechanisms / OAuth2:** Our focus is on very simple API keys, but other things like OAuth2 are always a possibility.
