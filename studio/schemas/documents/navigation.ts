import { BiNavigation } from 'react-icons/bi';

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: BiNavigation,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'items',
      title: 'Menu',
      type: 'array',
      description: 'Select pages for the main navigation',
      of: [{ type: 'navigationItem' }],
    },
  ],
};
