import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = (listItem): boolean =>
  !['siteSettings'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Base')
    .items([
      // creates singleton
      createMainNode(
        'Settings',
        // creates sub panel
        createChildNode('Config', [
          // creates editable view
          createChildListItem('Metadata', 'siteSettings'),
        ]),
      ),
      S.divider(),
      // batch displays other schemaTypes
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

const createMainNode = (
  panelTitle: string,
  subPanelItem: ReturnType<typeof createChildNode>,
) => S.listItem().title(panelTitle).child(subPanelItem);

const createChildNode = (
  subPanelTitle: string,
  subPanelListItems: ReturnType<typeof createChildListItem>[],
) => S.list().title(subPanelTitle).items(subPanelListItems);

const createChildListItem = (title: string, schemaType: string) =>
  S.listItem()
    .title(title)
    .child(S.document().schemaType(schemaType).documentId(schemaType));
