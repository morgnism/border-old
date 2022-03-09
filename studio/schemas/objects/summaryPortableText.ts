import {
  BiBold,
  BiCode,
  BiItalic,
  BiLink,
  BiLinkExternal,
} from 'react-icons/bi';

export default {
  name: 'summaryPortableText',
  type: 'array',
  title: 'summary',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [], // list key with empty array dsiables lists
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
        annotations: [
          {
            title: 'Internal link',
            name: 'internalLink',
            type: 'object',
            blockEditor: {
              icon: BiLink,
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                to: [{ type: 'post' }, { type: 'author' }],
              },
            ],
          },
          {
            title: 'External Link',
            name: 'externalLink',
            type: 'object',
            blockEditor: {
              icon: BiLinkExternal,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean',
              },
            ],
          },
        ],
      },
    },
  ],
};
