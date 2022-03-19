export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Override title from the targeted article.',
    },
    {
      name: 'internalLink',
      title: 'Internal Link',
      description: 'Select page or post for navigation',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'post' }],
      hidden: ({ parent, value }) => !value && parent?.externalUrl,
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
      hidden: ({ parent, value }) => !value && parent?.internalLink,
    },
  ],
  preview: {
    select: {
      title: 'title',
      targetTitle: 'internalLink.title',
    },
    prepare: ({ title, targetTitle }) => ({
      title: title || targetTitle,
    }),
  },
};
