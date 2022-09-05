import { groq } from 'next-sanity';

export const siteMetadataQuery = groq`
*[_type == "siteSettings"][0]{
  mainNav->{
    _id,
    "slug": slug.current,
    title,
    "items": items[]{
      text,
      url
    }
  }
}
`;
