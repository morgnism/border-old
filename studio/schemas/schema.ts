// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import author from './documents/author';
import bodyPortableText from './objects/bodyPortableText';
import category from './documents/category';
import post from './documents/post';
import project from './documents/project';
import page from './documents/page';
import siteSettings from './documents/siteSettings';
import navigation from './documents/navigation';
import theme from './documents/theme';

// Object types
import summaryPortableText from './objects/summaryPortableText';
import mainImage from './objects/mainImage';
import bioPortableText from './objects/bioPortableText';
import navigationSection from './objects/navigationSection';
import link from './objects/link';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    page,
    post,
    project,
    category,
    author,
    siteSettings,
    navigation,
    mainImage,
    bodyPortableText,
    bioPortableText,
    summaryPortableText,
    navigationSection,
    link,
    theme,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
