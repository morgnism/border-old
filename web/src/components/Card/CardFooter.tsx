import format from 'date-fns/format';

type CardFooterProps = {
  publishedAt: string;
};

const CardFooter = ({ publishedAt }: CardFooterProps) => (
  <p className="text-sm">{format(new Date(publishedAt), 'MMM do, yyyy')}</p>
);

export default CardFooter;
