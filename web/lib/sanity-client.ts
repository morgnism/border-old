import { createClient } from 'next-sanity';
import { sanityConfig } from './config';

// Set up the client for fetching data in the getProps page functions
// Uses a cached API version (latest drafts will be omitted)
export const sanityClient = createClient(sanityConfig);

// Set up the client for fetching data in the getProps page functions
// Uses a live API version with serverless authentication for drafts
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview: boolean) =>
  usePreview ? previewClient : sanityClient;
