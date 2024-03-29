import { format, parseISO } from 'date-fns';
import { BiEdit } from 'react-icons/bi';

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: BiEdit,
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
      readOnly: ({ parent, value }) => !value && parent?.external,
      options: {
        source: 'title',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 96)
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'external',
      type: 'url',
      title: 'URL',
      description: 'Provide a URL to an externally linked post',
      readOnly: ({ parent, value }) => !value && parent?.slug,
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
      type: 'mainImage',
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
      type: 'markdown',
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
        subtitle: author && `by ${author}`,
      };

      if (publishedAt) {
        const dateSegment = format(parseISO(publishedAt), 'yyyy-MM');
        post.subtitle = `${post.subtitle} on ${dateSegment}`;
      }

      return post;
    },
  },
};
