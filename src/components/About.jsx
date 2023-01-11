import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hi. I'm Alejandro, nice to meet you. Please take a look around.
            </p>
          </div>
          <div className='text-justify'>
            <p>
              I'm a very ambitious Junior Software Developer working full time
              for a company based in Los Angeles. I am passionate about building
              excellent software that improves the lives of those around me. I
              aim to improve myself and hone my coding and problem solving
              skills daily. The tech world advances at a rapid pace and the only
              way to keep up is to be on top of the latest technologies.
            </p>
            <p>
              I am also a fitness enthusiast, an avid reader (both fiction and
              non-fiction), a language learner (currently at an intermediate
              level in Japanese), and a Yelp Elite Squad member who loves ramen,
              especially Tonkotsu ramen and Tsukemen. .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
