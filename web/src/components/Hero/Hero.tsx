import React from 'react';

type HeroProps = {
  description: string;
};

const Hero: React.FC<HeroProps> = ({ description }) => {
  return (
    <section className="col-span-6">
      <div className="col-start-2 col-span-3">
        <p>{description}</p>
      </div>
      <div className="col-span-3">image</div>
    </section>
  );
};

export default Hero;
