import { BiNavigation } from 'react-icons/bi';

export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: BiNavigation,
  fields: [
    {
      name: 'text',
      title: 'Navigation Text',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Navigation Item URL',
      type: 'link',
    },
  ],
};
