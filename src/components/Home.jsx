import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import BackgroundAnimation from './BackgroundAnimation';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* <div className='max-w-[500px]'>
          <BackgroundAnimation style={{ zIndex: '-1' }} />
        </div> */}
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Alejandro J. Foucault
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I’m a Software Engineer.
        </h2>
        <p className='text-[#cacedd] py-4 max-w-[700px]'>
          I specialize in building (and occasionally designing) exceptional
          digital experiences. I'm a very ambitious Junior Software Developer
          working full time for a company based in Los Angeles, where I work on
          improving and enhancing a Full Stack Web App.
        </p>
        <p className='text-[#cacedd] py-4 max-w-[700px]'>
          I am also a fitness enthusiast, an avid reader (both fiction and
          non-fiction), a language learner (currently at an intermediate level
          in Japanese), and a Yelp Elite Squad member who loves ramen,
          especially Tonkotsu ramen and Tsukemen.
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
    </div>
  );
};

export default Home;
