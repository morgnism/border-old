import { groq } from 'next-sanity';

const postField = groq`
  _id,
  title,
  "slug": slug.current,
  "authorName": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
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
*[_type == "siteSettings"][0].title
`;

export const postQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  content,
  ${postField}
}`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postField}
}
`;

export const allPostSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
