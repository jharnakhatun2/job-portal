import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/SrsmzJg/real-estate-agent-with-house-model-keys.jpg',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id: 2,
    image: 'https://i.ibb.co.com/wyXjnHJ/newsletter.png',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id: 3,
    image: 'https://i.ibb.co.com/zr56VDd/headphones-mouse-orange-background.jpg',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id: 4,
    image: 'https://i.ibb.co.com/DWNL7fh/contactimage.jpg',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const thumbnailTimerRef = useRef(null);  // Ref for thumbnail auto scroll
  const progressRef = useRef(null);
  
  

  // Animation timing
  const ANIMATION_DURATION = 3000;
  const AUTO_ADVANCE_DELAY = 3000; // Change to 3 seconds for auto slide

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    resetTimer();
  };

  const goToNext = () => {
    goToSlide((currentIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(goToNext, AUTO_ADVANCE_DELAY);
  };

  const resetThumbnailAutoScroll = () => {
    if (thumbnailTimerRef.current) {
      clearTimeout(thumbnailTimerRef.current);
    }
    thumbnailTimerRef.current = setTimeout(() => {
      // Loop thumbnails smoothly
      const nextThumbnailIndex = (currentIndex + 1) % slides.length;
      goToSlide(nextThumbnailIndex);
    }, AUTO_ADVANCE_DELAY);
  };

  useEffect(() => {
    resetTimer();
    resetThumbnailAutoScroll();  // Start auto scrolling for thumbnails

    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(thumbnailTimerRef.current);
    };
  }, [currentIndex]);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, ANIMATION_DURATION);

    return () => clearTimeout(animationTimeout);
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="container mx-auto max-w-[1140px] px-4 py-4 flex">
          <a href="#" className="text-white mr-10 hover:text-gray-300">Home</a>
          <a href="#" className="text-white mr-10 hover:text-gray-300">Contacts</a>
          <a href="#" className="text-white mr-10 hover:text-gray-300">Info</a>
        </nav>
      </header>

      {/* Main Carousel */}
      <div className="relative h-full w-full mt-[-50px]">
        {/* Slides */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Slide Content */}
              <div className="absolute top-[20%] left-[50%] transform translate-x-[-50%] w-[1140px] max-w-[80%] pr-[30%]">
                <div className={`author font-bold tracking-[10px] mb-4 transition-all duration-500 ${index === currentIndex ? 'translate-y-0 opacity-100 blur-none' : 'translate-y-12 opacity-0 blur-sm'}`}>
                  {slide.author}
                </div>
                <div className={`title text-5xl font-bold leading-tight mb-2 transition-all duration-500 ${index === currentIndex ? 'translate-y-0 opacity-100 blur-none' : 'translate-y-12 opacity-0 blur-sm'}`} style={{ transitionDelay: '0.2s' }}>
                  {slide.title}
                </div>
                <div className={`topic text-5xl font-bold leading-tight text-[#f1683a] mb-6 transition-all duration-500 ${index === currentIndex ? 'translate-y-0 opacity-100 blur-none' : 'translate-y-12 opacity-0 blur-sm'}`} style={{ transitionDelay: '0.4s' }}>
                  {slide.topic}
                </div>
                <div className={`description text-sm leading-relaxed mb-8 transition-all duration-500 ${index === currentIndex ? 'translate-y-0 opacity-100 blur-none' : 'translate-y-12 opacity-0 blur-sm'}`} style={{ transitionDelay: '0.6s' }}>
                  {slide.description}
                </div>
                <div className={`buttons flex gap-2 transition-all duration-500 ${index === currentIndex ? 'translate-y-0 opacity-100 blur-none' : 'translate-y-12 opacity-0 blur-sm'}`} style={{ transitionDelay: '0.8s' }}>
                  <button className="bg-white text-black px-6 py-2 text-xs font-medium tracking-wider">
                    SEE MORE
                  </button>
                  <button className="bg-transparent border border-white text-white px-6 py-2 text-xs font-medium tracking-wider">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-[50px] left-[45%] transform translate-x-0 z-50 flex gap-5">
          {items.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`w-[150px] h-[220px] rounded-xl overflow-hidden cursor-pointer transition-all ${index === currentIndex ? 'ring-2 ring-[#f1683a]' : 'opacity-70 hover:opacity-90'}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white">
                <div className="text-sm font-medium">Name Slider</div>
                <div className="text-xs">Description</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-[80%] right-[52%] z-50 w-[300px] max-w-[30%] flex gap-2">
          <button
            onClick={goToPrev}
            disabled={isAnimating}
            className="w-10 h-10 rounded-full bg-white/20 text-white font-bold hover:bg-white/40 transition-colors flex items-center justify-center"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            disabled={isAnimating}
            className="w-10 h-10 rounded-full bg-white/20 text-white font-bold hover:bg-white/40 transition-colors flex items-center justify-center"
          >
            &gt;
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent z-[1000]">
          <div
            ref={progressRef}
            className="h-full bg-[#f1683a]"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
