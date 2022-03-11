import { BiCog } from 'react-icons/bi';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'Default tile metadata to be displayed on each page',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'Describe your blog for search engines and social media.',
    },
    {
      name: 'url',
      title: 'Site URL',
      type: 'string',
      description:
        'The default canonical address for SEO optimization. Read more: https://moz.com/learn/seo/canonicalization',
    },
    {
      name: 'frontpage',
      type: 'reference',
      description:
        'Choose page to be the frontpage. If no page specified, the default will be used.',
      to: { type: 'page' },
    },
    {
      name: 'mainNav',
      title: 'Main navigation',
      description: 'Select menu for main navigation',
      type: 'reference',
      to: { type: 'navigation' },
    },
    {
      name: 'socialNav',
      title: 'Social navigation',
      description: 'Select menu for external social links.',
      type: 'reference',
      to: { type: 'navigation' },
    },
  ],
};
