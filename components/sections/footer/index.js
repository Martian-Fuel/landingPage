import Image from 'next/image';
import React from 'react';
import { github, instagram, telegram, twitter } from '../../../assets/icons';

const Footer = () => {
  return (
    <section className="px-8 md:px-40 mt-20 md:mt-0">
      <div className="flex flex-wrap items-center justify-between border-y py-3 md:py-6 border-light-grey">
        <div className="text-xs md:text-base">© 2022 Martianplace</div>
        <div className="flex items-center justify-between">
          <button>
            <Image src={telegram} />
          </button>
          <button className="ml-3">
            <Image src={instagram} />
          </button>
          <button className="ml-3">
            <Image src={twitter} />
          </button>
          <button className="ml-3">
            <Image src={github} />
          </button>
        </div>
        <div className="hidden md:block">
          <div className="flex">
            <p className="font-light text-xs">Privacy policy</p>
            <p className="font-light ml-5 text-xs">Terms of service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
