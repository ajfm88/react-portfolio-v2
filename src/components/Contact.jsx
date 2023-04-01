import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/73ae0802-70bd-4635-a205-59253b029ea1'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            // If you wish to get in contact with me, please submit the form
            below or send me an email to: ajfoucaultmo@mail.usf.edu
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button
          type='submit'
          className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
        >
          Let's Collaborate
        </button>
        <button
          type='button'
          className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
        >
          <a href='https://drive.google.com/file/d/1PaMnfocfEEbOowfjpGdQ9gjMky9i1o6A'>
            See Resume
          </a>
        </button>
      </form>
    </div>
  );
};

export default Contact;
