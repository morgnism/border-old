import { BiCategory } from 'react-icons/bi';

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: BiCategory,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
