import { BiFileBlank } from 'react-icons/bi';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: BiFileBlank,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the page to generate',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Hint: some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
