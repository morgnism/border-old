export const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  useCdn:
    typeof document !== 'undefined' && process.env.PRODUCTION === 'production',
  // any valid past or present date
  apiVersion: process.env.SANITY_API_VERSION || '2022-09-01',
};
