import { groq } from 'next-sanity';

const postField = groq`
  _id,
  title,
  "slug": slug.current,
  "authorName": author->name,
  "tags": categories[]->title,
  "authorImage": author->image,
  body,
  "description": summary[0].children[0].text,
`;

const projectField = groq`
  _id,
  title,
  "slug": slug.current,
  "tags": categories[]->title,
  body,
  "description": summary[0].children[0].text,
`;

// export const siteMetadataQuery = groq`
// *[_type == "siteSettings"][0]{
//   mainNav->{
//     _id,
//     "slug": slug.current,
//     title,
//     "items": items[]{
//       text,
//       url
//     }
//   }
// }
// `;

export const siteMetadataQuery = groq`
*[_type == "siteSettings"][0]{
  title,
  description,
  url
}
`;

export const allPostsQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "authorName": author->name,
  "tags": categories[]->title,
  "coverImage": mainImage{
    alt,
    "src": asset->url
  },
  // "summary": summary[0].children[0].text,
  summary,
  external,
  publishedAt
}
`;

export const allProjectsQuery = groq`
*[_type == "project"]{
  _id,
  title,
  "slug": slug.current,
  "tags": categories[]->title,
  "coverImage": mainImage{
    alt,
    "src": asset->url
  },
  body,
  external,
  publishedAt
}
`;

export const allPostsProjectsMetaQuery = groq`
{
  "metaData": ${siteMetadataQuery},
  "posts": ${allPostsQuery},
  "projects": ${allProjectsQuery},
}
`;

export const postQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  ${postField}
}`;

export const projectQuery = groq`
*[_type == "project" && slug.current == $slug][0]{
  ${projectField}
}`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postField}
}
`;

export const allPostSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const allProjectSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`;
