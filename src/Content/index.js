import React from 'react';
import image from '../images/image.jpg';

const Content = () => {
    return (
        <div className="flex flex-col md:flex-row rounded-l-xl ">
            <img src={image} className="object-fit rounded-xl h-80 md:h-90 md:rounded-l-xl 
            md:rounded-r-none transform hover:scale-105" />
            <div className="flex flex-col m-6 md:justify-center md:m-10">
                <h2 className="text-white text-xl font-serif text-center md:text-left">
                    Get diet and fitness tips in your inbox
                </h2>
                <p className="text-white max-w-xs my-4 text-xs text-center md:text-left leading-5 tracking-wide">
                    Eat better and exercise better. Sign up for the Diet&Fitness newsletter.
                </p>
                <div className='flex flex-col md:flex-row mt-5 space-y-4 md:space-x-3 md:space-y-0'>
                    <input type='text'
                        placeholder='Enter your email address'
                        className='p-2 px-4 text-center tex-white bg-zinc-800 border border-zinc-600 placeholder:text-xs
                    placeholder:text-center focus:outline-none'/>
                    <button className='px-5 py-3 bg-lime-500 hover:bg-lime-700 hover:text-white 
                    duration-500 text-xs rounded-md text-zinc-800'>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Content;