import S from '@sanity/desk-tool/structure-builder';
import { IconType } from 'react-icons';
import { BiCode, BiCog, BiFolder } from 'react-icons/bi';

const hiddenDocTypes = (listItem): boolean =>
  !['siteSettings'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Base')
    .items([
      // creates singleton
      createMainNode(
        'Settings',
        BiCog,
        // creates sub panel
        createChildNode('Config', [
          // creates editable view
          createChildListItem('Metadata', BiCode, 'siteSettings'),
        ]),
      ),
      S.divider(),
      // batch displays other schemaTypes
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

const createMainNode = (
  panelTitle: string,
  icon: IconType = BiFolder,
  subPanelItem: ReturnType<typeof createChildNode>,
) => S.listItem().icon(icon).title(panelTitle).child(subPanelItem);

const createChildNode = (
  subPanelTitle: string,
  subPanelListItems: ReturnType<typeof createChildListItem>[],
) => S.list().title(subPanelTitle).items(subPanelListItems);

const createChildListItem = (
  title: string,
  icon: IconType = BiFolder,
  schemaType: string,
) =>
  S.listItem()
    .icon(icon)
    .title(title)
    .child(S.document().schemaType(schemaType).documentId(schemaType));
