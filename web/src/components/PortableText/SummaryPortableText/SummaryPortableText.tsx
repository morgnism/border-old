import { PortableText } from '@portabletext/react';
import { SummaryPortableText } from '../../../../../studio/schema';

const SummaryPortableText = ({
  summary,
}: {
  summary?: SummaryPortableText;
}) => {
  if (!summary) {
    return null;
  }

  return (
    <PortableText
      value={summary}
      components={{
        block: {
          span: ({ value }) => <>{value}</>,
        },
      }}
    />
  );
};

export default SummaryPortableText;
