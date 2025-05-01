import React from 'react';
import config from '@payload-config';
import { getPayload } from 'payload';
import { PortfolioHeader11, type PortfolioHeader11Props } from './Portfolio11';

// A Server Component that fetches `portfolio` entries via Payload's Local API
const PortfolioCms = async () => {
  const payload = await getPayload({ config });
  const result = await payload.find({ collection: 'portfolio', limit: 10 });
  // Cast docs to our component props type
  const docs = result.docs as unknown as PortfolioHeader11Props[];

  return (
    <>
      {docs.map((item, idx) => (
        <PortfolioHeader11 key={idx} {...item} />
      ))}
    </>
  );
};

export default PortfolioCms;
