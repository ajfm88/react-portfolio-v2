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
        <p className='text-[#cacedd] py-4 max-w-[700px]'>
          I specialize in building (and occasionally designing) exceptional
          digital experiences. I am currently employed at a company in Los
          Angeles as a Junior Software Developer, where I work on improving and
          enhancing a Full Stack Web App.
        </p>
        <p className='text-[#cacedd] py-4 max-w-[700px]'>
          Every day I strive to keep honing my problem-solving and coding
          skills, both in and outside of work, and I also always maintain a
          hunger for learning more about the intricate and fascinating world of
          Software Engineering, especially as it relates to web development.
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
