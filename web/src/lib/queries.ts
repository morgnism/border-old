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

export const allPostsQuery = groq`
*[_type == "post" && publishedAt < now()] | order(publishedAt desc)
`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;
