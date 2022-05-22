import React from 'react';

type HeroProps = {
  description: string;
};

const Hero: React.FC<HeroProps> = ({ description }) => (
  <div className="grid grid-cols-12 gap-6 pt-20 pb-20 my-20">
    <p className="col-start-4 col-span-6 text-4xl text-center">{description}</p>
  </div>
);

export default Hero;
