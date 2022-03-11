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
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
    },
  ],
};