import Image from 'next/image';
import React from 'react';
import { martian } from '../../../assets/icons';

const Hero = () => {
  return (
    <section className="mt-10">
      <div className="flex items-center px-8 md:px-40 flex-wrap ">
        <div>
          <Image src={martian} />
        </div>
        <div className="ml-0 text-center md:text-left md:ml-14">
          <h2 className="text-[48px] font-bold text-primary leading-[1.2] mb-6 md:mb-0">
            Coming soon Martianplace
          </h2>
          <p>
            Buy, sell and discover rare digital NFT art, cards and collectibles
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
