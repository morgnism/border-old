export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
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
};
