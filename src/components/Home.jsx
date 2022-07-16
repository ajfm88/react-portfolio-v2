import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import BackgroundAnimation from './BackgroundAnimation';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Alejandro J. Foucault
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Engineer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a Software Engineer and Front End Developer specializing in
          building (and occasionally designing) exceptional digital experiences.
          I work for a company in Los Angeles as a Junior Software Developer,
          and I split my time between L.A. County and Orange County. Currently,
          I’m focused on learning Back End Development and how to build
          full-stack web applications.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className='max-w-[500px] flex flex-col'>
        <BackgroundAnimation />
      </div>
    </div>
  );
};

export default Home;
