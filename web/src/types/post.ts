import { Post as SanityPost } from '../../../studio/schema';

/** Type overrides for groq mappings */
export type Post = {
  coverImage: {
    alt: string;
    src: string;
  };
  tags: string[];
  slug: string;
} & SanityPost;
