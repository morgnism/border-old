/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'bodyPortableText'
 *  }
 */
import {
  BiBold,
  BiCode,
  BiHighlight,
  BiItalic,
  BiLink,
  BiLinkExternal,
  BiListOl,
  BiListUl,
  BiStrikethrough,
  BiUnderline,
} from 'react-icons/bi';

export default {
  title: 'Block Content',
  name: 'bodyPortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Hidden', value: 'blockComment' },
      ],
      lists: [
        {
          title: 'Bullet',
          value: 'bullet',
          blockEditor: {
            icon: BiListUl,
          },
        },
        {
          title: 'Numbered',
          value: 'number',
          blockEditor: {
            icon: BiListOl,
          },
        },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
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
          {
            title: 'Underline',
            value: 'underline',
            blockEditor: {
              icon: BiUnderline,
            },
          },
          {
            title: 'Strike-through',
            value: 'strike-through',
            blockEditor: {
              icon: BiStrikethrough,
            },
          },
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: BiHighlight,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
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
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'mainImage',
      options: { hotspot: true },
    },
    {
      type: 'code',
    },
  ],
};
