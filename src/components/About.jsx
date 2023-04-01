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
              Hi. I’m Alejandro, nice to meet you. Please take a look around.
            </p>
          </div>
          <div className='text-justify'>
            <p>
              Welcome to my personal website and portfolio! My name is Alejandro
              J. Foucault, and I am a Junior Software Developer with a passion
              for creating innovative and efficient solutions to complex
              problems and building excellent software that improves the lives
              of those around me.
            </p>
            <br />
            <p>
              I have experience in multiple programming languages such as
              JavaScript, Python, and C++ and I am always eager to learn new
              technologies and tools to improve my skills. My experience
              includes The Coder School, and The MBS Group where I have had the
              opportunity to work on various aspects of software development.
            </p>
            {/* such as teaching coding to kids, tweens and teenagers (The Coder
              School), and working on a Full Stack App being used by over 200 of
              our employees (The MBS Group/ISSProps).
            </p> */}
            <br />
            {/* <p>
              Every day I strive to keep honing my problem-solving and coding
              skills, both in and outside of work, and I also always maintain a
              hunger for learning more about the intricate and fascinating world
              of Software Engineering, especially as it relates to web
              development. The tech world advances at a rapid pace and the only
              way to keep up is to be on top of the latest technologies.
            </p>
            <br />
            <p>
              In addition to my technical skills, I am a strong collaborator and
              communicator. I understand the importance of working closely with
              others to deliver high-quality products and I am dedicated to
              learning from my team members. I am excited to continue my career
              in Software Engineering, and I am actively seeking new
              opportunities to grow and learn. Thank you for visiting my
              website, and please feel free to contact me if you have any
              questions or if you would like to discuss potential collaboration.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
