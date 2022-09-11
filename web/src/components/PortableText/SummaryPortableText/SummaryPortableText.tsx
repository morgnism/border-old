import { PortableText } from '@portabletext/react';
import { SummaryPortableText } from '../../../../../studio/schema';

const SummaryPortableText = ({ summary }: { summary: SummaryPortableText }) => (
  <PortableText
    value={summary}
    components={{
      block: {
        span: ({ value }) => <>{value}</>,
      },
    }}
  />
);

export default SummaryPortableText;
