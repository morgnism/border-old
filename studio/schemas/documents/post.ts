import { format, parseISO } from 'date-fns';

export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Keep it short, catchy, and descriptive 👌🏽',
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'Hint: this can be used to schedule post for publishing',
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
      name: 'summary',
      type: 'summaryPortableText',
      title: 'Summary',
      description: 'Hint: enhance SEO by including a summary',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
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
      publishedAt: 'publishedAt',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare({ title = 'No title', publishedAt, author, media }) {
      const post = {
        title,
        media,
        subtitle: author && `By ${author}`,
      };

      if (publishedAt) {
        const dateSegment = format(parseISO(publishedAt), 'yyyy-MM');
        post.subtitle = `${post.subtitle} on ${dateSegment}`;
      }

      return post;
    },
  },
};
