import { BiNavigation } from 'react-icons/bi';

export default {
  name: 'navigationSection',
  title: 'Navigation Section',
  type: 'object',
  icon: BiNavigation,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'link' }],
    },
  ],
};
