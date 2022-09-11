import Container from '@components/Container';
import cn from 'classnames';
import Link from 'next/link';

const Alert: React.FC<{ preview: boolean }> = ({ preview }) => {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm text-black">
          This page is a preview.{' '}
          <Link href="/api/exit-preview">
            <a className="underline hover:text-cyan duration-200 transition-colors">
              Click here
            </a>
          </Link>{' '}
          to exit preview mode.
        </div>
      </Container>
    </div>
  );
};

export default Alert;
