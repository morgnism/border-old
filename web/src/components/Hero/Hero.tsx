import React from 'react';

type HeroProps = {
  description: string;
};

const Hero: React.FC<HeroProps> = ({ description }) => (
  <div className="grid grid-cols-12 gap-6 mb-20">
    <p className="col-start-2 col-span-6 text-2xl">{description}</p>
  </div>
);

export default Hero;
