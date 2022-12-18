import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Git from '../assets/git.png';
import Firebase from '../assets/firebase.png';
import TailwindCSS from '../assets/tailwindcss.png';
import TypeScript from '../assets/typescript.png';
import NextJS from '../assets/nextjs.png';
import MongoDB from '../assets/mongodb.png';
import Express from '../assets/express.svg';
import ReactJS from '../assets/reactjs.png';
import NodeJS from '../assets/nodejs.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Skills
          </p>
          {/* <p className='py-4'>
            // These are some of the technologies I've had the chance to work
            with:
          </p> */}
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a
              href='https://html.spec.whatwg.org'
              target='_blank'
              rel='noreferrer'
            >
              <img className='w-20 mx-auto' src={HTML} alt='HTML5 icon' />{' '}
            </a>
            <p className='my-4'>HTML5</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a
              href='https://www.w3.org/Style/CSS'
              target='_blank'
              rel='noreferrer'
            >
              <img className='w-20 mx-auto' src={CSS} alt='CSS3 icon' />
            </a>
            <p className='my-4'>CSS3</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a
              href='https://www.ecma-international.org/publications-and-standards/standards/ecma-262'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='w-20 mx-auto'
                src={JavaScript}
                alt='JavaScript ES6 icon'
              />
            </a>
            <p className='my-4'>JAVASCRIPT ES6</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a
              href='https://www.typescriptlang.org'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='w-20 mx-auto'
                src={TypeScript}
                alt='TypeScript icon'
              />
            </a>
            <p className='my-4'>TYPESCRIPT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a href='https://www.mongodb.com' target='_blank' rel='noreferrer'>
              <img className='w-20 mx-auto' src={MongoDB} alt='MongoDB icon' />
            </a>
            <p className='my-4'>MONGO DB</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a href='https://expressjs.com' target='_blank' rel='noreferrer'>
              <img
                className='w-20 mx-auto bg-white'
                src={Express}
                alt='ExpressJS icon'
              />
            </a>
            <p className='my-4'>EXPRESS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
              <img className='w-20 mx-auto' src={ReactJS} alt='ReactJS icon' />
            </a>
            <p className='my-4'>REACT JS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a href='https://nodejs.org' target='_blank' rel='noreferrer'>
              <img className='w-20 mx-auto' src={NodeJS} alt='NodeJS icon' />
            </a>
            <p className='my-4'>NODE JS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a
              href='https://firebase.google.com'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='w-20 mx-auto'
                src={Firebase}
                alt='Firebase icon'
              />
            </a>
            <p className='my-4'>FIREBASE</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a href='https://tailwindcss.com' target='_blank' rel='noreferrer'>
              <img
                className='w-20 mx-auto'
                src={TailwindCSS}
                alt='Tailwind CSS icon'
              />
            </a>
            <p className='my-4'>TAILWIND CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a href='https://nextjs.org' target='_blank' rel='noreferrer'>
              <img className='w-20 mx-auto' src={NextJS} alt='NextJS icon' />
            </a>
            <p className='my-4'>NEXTJS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <a href='https://git-scm.com' target='_blank' rel='noreferrer'>
              <img className='w-20 mx-auto' src={Git} alt='Git icon' />
            </a>
            <p className='my-4'>GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
