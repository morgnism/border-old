import { BiBold, BiItalic, BiCode } from 'react-icons/bi';

export default {
  name: 'bioPortableText',
  type: 'array',
  title: 'Excerpt',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          {
            title: 'Strong',
            value: 'strong',
            blockEditor: {
              icon: BiBold,
            },
          },
          {
            title: 'Emphasis',
            value: 'em',
            blockEditor: {
              icon: BiItalic,
            },
          },
          {
            title: 'Code',
            value: 'code',
            blockEditor: {
              icon: BiCode,
            },
          },
        ],
      },
    },
  ],
};
