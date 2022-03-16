import S from '@sanity/desk-tool/structure-builder';
import { DocumentListBuilder } from '@sanity/structure/dist/dts/DocumentList';
import React from 'react';
import { IconType } from 'react-icons';
import {
  BiCode,
  BiCog,
  BiColorFill,
  BiEdit,
  BiFolder,
  BiNavigation,
} from 'react-icons/bi';

// /deskStructure.js
const JsonPreview = ({ document }) => (
  <>
    <h1>JSON Data for "{document.displayed.title}"</h1>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </>
);

// Modifies the editable document view
export const getDefaultDocumentNode = ({ documentId, schemaType }) => {
  if (schemaType === 'post' || documentId === 'siteSettings') {
    return S.document().views([
      S.view.form(),
      S.view.component(JsonPreview).title('JSON'),
    ]);
  }
};

const hiddenDocTypes = (listItem): boolean =>
  !['siteSettings', 'post', 'theme', 'navigation'].includes(listItem.getId());

/**
 * TODO - add these list items
 * - Favicons (Metadata)
 * - Social links (Metadata and by author)
 * - Analytics (Metadata)
 * - Header and Footer (Sections)
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      createMainNode(
        'Articles',
        BiEdit,
        // creates sub panel
        createChildNode('Articles', [
          // creates sub panel filtered group
          createChildListItem(
            'All Articles',
            BiEdit,
            // creates panel for editable view
            S.documentTypeList('post').title('All Articles'),
          ),
          createChildListItem(
            'Articles By Category',
            BiEdit,
            createDynamicChildListItem(
              'Articles By Category',
              'category',
              (categoryId) =>
                S.documentList()
                  .title('Articles')
                  .filter('_type == "post" && $categoryId in categories[]._ref')
                  .params({ categoryId }),
            ),
          ),
        ]),
      ),
      // batch displays other schemaTypes
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.divider(),
      // creates singleton
      createMainNode(
        'Settings',
        BiCog,
        // creates sub panel
        createChildNode(
          'Config',
          // creates editable views
          [
            createChildListItem(
              'Metadata',
              BiCode,
              createChildDocument('siteSettings'),
            ),
            createChildListItem(
              'Navigation',
              BiNavigation,
              createChildDocument('navigation'),
            ),
            createChildListItem(
              'Theme',
              BiColorFill,
              createChildDocument('theme'),
            ),
          ],
        ),
      ),
    ]);

// build a main content panel list
// ex.: Page, Articles
const createMainNode = (
  panelTitle: string,
  icon: IconType = BiFolder,
  subPanelItem: ReturnType<typeof createChildNode>,
) => S.listItem().icon(icon).title(panelTitle).child(subPanelItem);

// build a sub panel list
// ex.: Settings -> Config -> [MetaData, Navigation, ...]
const createChildNode = (
  subPanelTitle: string,
  subPanelListItems: ReturnType<typeof createChildListItem>[],
) => S.list().title(subPanelTitle).items(subPanelListItems);

// build a sub panel content section
// ex.: Settings -> Config -> MetaData
const createChildListItem = (
  title: string,
  icon: IconType = BiFolder,
  childNode,
) => S.listItem().icon(icon).title(title).child(childNode);

// build a sub panel content for document type
// ex.: Settings -> Config -> MetaData -> EditView
const createChildDocument = (schemaType: string) =>
  S.document().schemaType(schemaType).documentId(schemaType);

// build a sub panel content section with filtered groups
// ex.: Articles -> Atricles By Category -> Categories -> Articles
const createDynamicChildListItem = (
  title: string,
  documentType: string, // matches document type
  filter?: (key: string) => DocumentListBuilder,
) => S.documentTypeList(documentType).title(title).child(filter);
