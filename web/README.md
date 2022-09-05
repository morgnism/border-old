# Border Static Blog

Front-end client consuming Sanity APIs.

## Sanity API

### Sanity Config

Sanity config takes the following env vars:

```bash
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_VERSION=
PRODUCTION=
```

and corresponds to the following:

```typescript
export const sanityConfig = {
  projectId: 'your-project-id',
  dataset: 'your-dataset',
  useCdn: true,
  apiVersion: "today's-date",
};
```

NOTE: keep `.env.local.example` up-to-date incase local `.env.local` is deleted. These env vars should always come from a local `.env` in development and Netlify env vars in production.

### Sanity API Chache

Sanity use a CDN, cached API for the client and end-user. Whereas, the live API fetches the latest data.

When in production, the Sanity API is only queried on build-time, and on-demand when responding to webhooks. Thus the data need to be fresh and API response time is less important.

When in development/working locally, it's more important to keep costs down as hot reloading can incurr a lot of API calls, and every page load calls getStaticProps.

To get the lowest latency, lowest cost, and latest data, use the Instant Preview mode.

### Sanity API Versioning

Versioning should be configured using UTC dates.

See more about versioining and how it works [here](https://www.sanity.io/docs/api-versioning).
See more from the changelog [here](https://www.sanity.io/changelog).

## Deploys

NOTE: Netlify UI Environment Variables need to be setup for this.

Netlify will build a node project with the standard `process.env` when building the site. NextJS uses `.env.local` for development right away.
