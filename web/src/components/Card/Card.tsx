import { Post } from '@app-types/post';
import SummaryPortableText from '@components/PortableText/SummaryPortableText';
import CardFooter from './CardFooter';
import CardImage from './CardImage';
import CardTags from './CardTags';
import CardTitle from './CardTitle';

type CardProps = {
  post: Post;
};

const Card = ({ post }: CardProps) => {
  const {
    coverImage,
    title = '',
    slug,
    external = '',
    publishedAt = '',
    summary,
    tags,
  } = post;

  return (
    <article className="flex flex-col max-w-md bg-white rounded-lg border border-gray-200 shadow-xl">
      {coverImage && <CardImage />}
      <div className="flex flex-col flex-grow p-5">
        <CardTitle {...{ title, slug, external }} />
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
