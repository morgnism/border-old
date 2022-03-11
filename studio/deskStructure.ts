// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = (listItem): boolean =>
  !['siteSettings'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Base')
    .items([
      // creates singleton
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Config')
            .items([creteListItem('Metadata', 'siteSettings')]),
        ),
      S.divider(),
      // batch displays other schemaTypes
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

const creteListItem = (title: string, schemaType: string) =>
  S.listItem()
    .title(title)
    .child(S.document().schemaType(schemaType).documentId(schemaType));
