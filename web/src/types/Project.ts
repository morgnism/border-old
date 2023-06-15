import { Project as SanityProject } from '../../../studio/schema';

export type Project = {
  _id: string;
  coverImage: {
    alt: string;
    src: string;
  };
  url: string;
  tags: string[];
  slug: string;
} & SanityProject;
