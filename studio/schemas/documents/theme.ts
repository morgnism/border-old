export default {
  name: 'theme',
  title: 'Theme',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'background',
      title: 'Background',
      type: 'object',
      fields: [
        {
          name: 'backgroundColor',
          title: 'Background color',
          description: 'Specify a color hex to use as the background.',
          type: 'string',
        },
        {
          name: 'backgroundImage',
          title: 'Background image',
          description: 'Add an image to use as the background.',
          type: 'image',
        },
      ],
    },
    {
      name: 'headingOne',
      title: 'Heading 1',
      type: 'color',
      description: 'Set the heading 1 color.',
    },
    {
      name: 'headingTwo',
      title: 'Heading 2',
      type: 'color',
      description: 'Set the heading 2 color.',
    },
    {
      name: 'headingThree',
      title: 'Heading',
      type: 'color',
      description: 'Set the heading 3 color.',
    },
    {
      name: 'accent',
      title: 'Accent',
      type: 'color',
      description: 'Set the color for links.',
    },
    {
      name: 'typography',
      title: 'Typography',
      type: 'string',
      description: 'Set the fonts for the site.',
    },
  ],
};
