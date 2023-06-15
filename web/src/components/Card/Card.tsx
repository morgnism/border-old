import { Post } from '@app-types/Post';
import { Project } from '@app-types/Project';
import SummaryPortableText from '@components/PortableText/SummaryPortableText';
import CardFooter from './CardFooter';
import CardImage from './CardImage';
import CardTags from './CardTags';
import CardTitle from './CardTitle';

type CardProps = {
  item: Post | Project;
};

const Card = ({ item }: CardProps) => {
  const {
    _type,
    coverImage,
    title = '',
    slug,
    external = '',
    publishedAt = '',
    summary,
    tags,
  } = item;

  return (
    <article className="flex flex-col max-w-md bg-white rounded-lg border border-gray-200 shadow-xl">
      {coverImage && <CardImage />}
      <div className="flex flex-col flex-grow p-5">
        <CardTitle {...{ _type, title, slug, external }} />
        {/* TODO: flatten the div classes into the portable text component */}
        <div className="mb-auto text-gray-500">
          <SummaryPortableText summary={summary} />
        </div>
        <CardTags tags={tags} />
        <CardFooter publishedAt={publishedAt} />
      </div>
    </article>
  );
};

export default Card;
