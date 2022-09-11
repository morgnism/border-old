import { postBySlugQuery } from '@lib/queries';
import { previewClient } from '@lib/sanity.server';
import { NextApiRequest, NextApiResponse } from 'next';

function redirectToPreview(res: NextApiResponse, Location: string) {
  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});
  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location });
  res.end('Preview mode enabled.');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!req.query.secret) {
    return res.status(401).json({ message: 'No secret token' });
  }

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid secret token' });
  }

  if (!req.query.slug) {
    redirectToPreview(res, '/');
  }

  // Check if the post with the given `slug` exists
  const post = await previewClient.fetch(postBySlugQuery, {
    slug: req.query.slug,
  });

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  redirectToPreview(res, `/posts/${post.slug}`);
}
