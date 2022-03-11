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
  ],
};
