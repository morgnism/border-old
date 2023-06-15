import { Post as SanityPost } from '../../../studio/schema';

/** Type overrides for groq mappings */
export type Post = {
  _id: string;
  coverImage: {
    alt: string;
    src: string;
  };
  tags: string[];
  slug: string;
} & SanityPost;
