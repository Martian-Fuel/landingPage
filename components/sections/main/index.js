import Image from 'next/image';
import React from 'react';
import { space } from '../../../assets/icons';

const Main = () => {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-2 px-40">
        <div>
          <h2 className="text-[43px] font-bold text-primary">
            About Martianplace
          </h2>
          <h5 className="text-[22px] font-light mb-8">
            The perfect place to connect Artists and NFT buyers
          </h5>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div>
            <button className="bg-primary text-white w-[175px] px-10 py-3 rounded-3xl transition-all ease duration-500 hover:opacity-9">
              Signup
            </button>
          </div>
        </div>

        <div>
          <Image src={space} />
        </div>
      </div>
    </section>
  );
};

export default Main;
