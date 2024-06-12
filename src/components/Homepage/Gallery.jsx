import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';



function Gallery() {
    const slides = [
        {
            url: 'src/assets/galleryimages/1.jpg',
        },
        {
            url: 'src/assets/galleryimages/2.jpg',
        },
        {
            url: 'src/assets/galleryimages/3.jpg',
        },
        {
            url: 'src/assets/galleryimages/4.jpg',
        },
        {
            url: 'src/assets/galleryimages/5.jpg',
        }


    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className="mt-20">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
                    A Glimpse of{" "}
                    <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
                        Android alchemy.
                    </span>
                </h2>
                <br />
                <br />
            </div>
            <div className='text-center align-middle'>
                <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase mx-2">
                    Events
                </span>
                <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase mx-2">
                    Competitions
                </span>
                <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase mx-2" >
                    Hackathons
                </span>
                <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase mx-2">
                    and much more to come
                </span>
            </div>


            <div className='max-w-[1400px] h-[780px] w-full m-auto pb-20 pt-0 px-4 group relative mt-20 border-b border-neutral-800 min-h-[800px]'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                ></div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Gallery;