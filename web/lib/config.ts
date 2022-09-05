import { ClientConfig } from 'next-sanity';

const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.SANITY_DATASET || 'production';
const SANITY_API_VERSION = process.env.SANITY_API_VERSION || '2022-09-01'; // any valid past or present date
const PRODUCTION = process.env.PRODUCTION;

if (!SANITY_PROJECT_ID) {
  throw new Error('Missing Sanity project id');
}

if (!SANITY_DATASET) {
  throw new Error(
    "Missing Sanity dataset name. Provide a dataset to access this site's Content Lake",
  );
}

if (!SANITY_API_VERSION) {
  throw new Error('Missing Sanity dataset name');
}

// useCdn == true gives fast, cheap responses using a globally distributed cache.
const useCdn = typeof document !== 'undefined' && PRODUCTION === 'production';

export const sanityConfig: ClientConfig = {
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn,
  apiVersion: SANITY_API_VERSION,
};
