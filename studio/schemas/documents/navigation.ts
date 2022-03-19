import { BiNavigation } from 'react-icons/bi';

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: BiNavigation,
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      description: 'Create nav menus with links for sections of the site.',
      of: [{ type: 'navigationSection' }],
    },
  ],
};
