import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: 'page';

  /**
   * Title — `string`
   *
   * Name of the page to generate
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Hint: some frontends will require a slug to be set to be able to show the post
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Body — `bodyPortableText`
   *
   *
   */
  body?: BodyPortableText;
}

/**
 * Articles
 *
 *
 */
export interface Post extends SanityDocument {
  _type: 'post';

  /**
   * Title — `string`
   *
   * Keep it short, catchy, and descriptive 👌🏽
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Hint: some frontends will require a slug to be set to be able to show the post
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Published at — `datetime`
   *
   * Hint: this can be used to schedule post for publishing
   */
  publishedAt?: string;

  /**
   * Main image — `mainImage`
   *
   *
   */
  mainImage?: MainImage;

  /**
   * Summary — `summaryPortableText`
   *
   * Hint: enhance SEO by including a summary
   */
  summary?: SummaryPortableText;

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Body — `bodyPortableText`
   *
   *
   */
  body?: BodyPortableText;
}

/**
 * Categories
 *
 *
 */
export interface Category extends SanityDocument {
  _type: 'category';

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: 'author';

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Image — `mainImage`
   *
   *
   */
  image?: MainImage;

  /**
   * Biography — `bioPortableText`
   *
   *
   */
  bio?: BioPortableText;
}

/**
 * Site Settings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings';

  /**
   * Site Title — `string`
   *
   * Default tile metadata to be displayed on each page
   */
  title?: string;

  /**
   * Site Description — `text`
   *
   * Describe your blog for search engines and social media.
   */
  description?: string;

  /**
   * Site URL — `string`
   *
   * The default canonical address for SEO optimization. Read more: https://moz.com/learn/seo/canonicalization
   */
  url?: string;

  /**
   * frontpage — `reference`
   *
   * Choose page to be the front page. If no page specified, the default will be used.
   */
  frontpage?: SanityReference<Page>;
}

/**
 * Navigation
 *
 *
 */
export interface Navigation extends SanityDocument {
  _type: 'navigation';

  /**
   * Sections — `array`
   *
   * Create nav menus with links for sections of the site.
   */
  sections?: Array<SanityKeyed<NavigationSection>>;
}

/**
 * Theme
 *
 *
 */
export interface Theme extends SanityDocument {
  _type: 'theme';

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Background — `object`
   *
   *
   */
  background?: {
    _type: 'background';
    /**
     * Background color — `string`
     *
     * Specify a color hex to use as the background.
     */
    backgroundColor?: string;

    /**
     * Background image — `image`
     *
     * Add an image to use as the background.
     */
    backgroundImage?: {
      _type: 'image';
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    };
  };

  /**
   * Heading 1 — `color`
   *
   * Set the heading 1 color.
   */
  headingOne?: Color;

  /**
   * Heading 2 — `color`
   *
   * Set the heading 2 color.
   */
  headingTwo?: Color;

  /**
   * Heading — `color`
   *
   * Set the heading 3 color.
   */
  headingThree?: Color;

  /**
   * Accent — `color`
   *
   * Set the color for links.
   */
  accent?: Color;

  /**
   * Typography — `string`
   *
   * Set the fonts for the site.
   */
  typography?: string;
}

export type MainImage = {
  _type: 'mainImage';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Alternative text — `string`
   *
   * Important for accessiblity and SEO.
   */
  alt?: string;
};

export type BodyPortableText = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<MainImage> | SanityKeyed<Code>
>;

export type BioPortableText = Array<SanityKeyed<SanityBlock>>;

export type SummaryPortableText = Array<SanityKeyed<SanityBlock>>;

export type NavigationSection = {
  _type: 'navigationSection';
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Links — `array`
   *
   *
   */
  links?: Array<SanityKeyed<Link>>;
};

export type Link = {
  _type: 'link';
  /**
   * Title — `string`
   *
   * Override title from the targeted article.
   */
  title?: string;

  /**
   * Internal Link — `reference`
   *
   * Select page or post for navigation
   */
  internalLink?: SanityReference<Page | Post>;

  /**
   * External URL — `url`
   *
   * Use fully qualified URLS for external link
   */
  externalUrl?: string;
};

export type Documents =
  | Page
  | Post
  | Category
  | Author
  | SiteSettings
  | Navigation
  | Theme;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Color = any;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Code = any;
