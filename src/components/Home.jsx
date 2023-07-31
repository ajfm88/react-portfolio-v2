import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import BackgroundAnimation from './BackgroundAnimation';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Alejandro J. Foucault
        </h1>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I’m a Software Engineer.
        </h1>
        <p className='text-[#cacedd] py-4 max-w-[700px]'>
          I am a very ambitious Junior Software Developer working full time for
          a company in the Hollywood film industry, where I debug, test,
          enhance, and add new features to a Full Stack Web Application. I have
          a passion for creating innovative and efficient solutions to complex
          problems and building excellent software that improves the lives of
          people.
        </p>
        <p className='text-[#cacedd] py-4 max-w-[700px]'>
          I am also a fitness enthusiast, an avid reader (both fiction and
          non-fiction), a language learner (currently at an N3 (intermediate
          level) in Japanese), and a Yelp Elite Squad member who loves ramen,
          especially Tonkotsu and Tsukemen. いただきます！ 🍜
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
