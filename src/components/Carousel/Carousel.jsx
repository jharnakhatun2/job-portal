import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/SrsmzJg/real-estate-agent-with-house-model-keys.jpg',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
  },
  {
    id: 2,
    image: 'https://i.ibb.co.com/wyXjnHJ/newsletter.png',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
  },
  {
    id: 3,
    image: 'https://i.ibb.co.com/zr56VDd/headphones-mouse-orange-background.jpg',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
  },
  {
    id: 4,
    image: 'https://i.ibb.co.com/DWNL7fh/contactimage.jpg',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailItems, setThumbnailItems] = useState(slides);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideTimerRef = useRef(null);
  const thumbnailTimerRef = useRef(null);
  const progressRef = useRef(null);

  // Animation timing
  const ANIMATION_DURATION = 5000;
  const AUTO_ADVANCE_DELAY = 5000;

  // Rotate thumbnails forward: move first to end
  const rotateThumbnailsNext = () => {
    setThumbnailItems((prev) => {
      const updated = [...prev];
      const first = updated.shift();
      updated.push(first);
      return updated;
    });
  };

  // Rotate thumbnails backward: move last to start
  const rotateThumbnailsPrev = () => {
    setThumbnailItems((prev) => {
      const updated = [...prev];
      const last = updated.pop();
      updated.unshift(last);
      return updated;
    });
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    resetTimers();
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
    rotateThumbnailsNext();
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
    rotateThumbnailsPrev();
  };

  const resetTimers = () => {
    clearTimeout(slideTimerRef.current);
    clearTimeout(thumbnailTimerRef.current);

    slideTimerRef.current = setTimeout(goToNext, AUTO_ADVANCE_DELAY);
    thumbnailTimerRef.current = setTimeout(() => {
      rotateThumbnailsNext();
      goToNext();
    }, AUTO_ADVANCE_DELAY);

    // Reset progress bar
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      setTimeout(() => {
        progressRef.current.style.transition = `width ${AUTO_ADVANCE_DELAY / 1000}s linear`;
        progressRef.current.style.width = '100%';
      }, 10);
    }
  };

  useEffect(() => {
    resetTimers();
    return () => {
      clearTimeout(slideTimerRef.current);
      clearTimeout(thumbnailTimerRef.current);
    };
  }, [currentIndex]);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, ANIMATION_DURATION);

    return () => clearTimeout(animationTimeout);
  }, [currentIndex]);

  // Handle thumbnail click
  const handleThumbnailClick = (id) => {
    const newIndex = slides.findIndex(slide => slide.id === id);
    if (newIndex !== currentIndex) {
      // Determine rotation direction
      const currentThumbIndex = thumbnailItems.findIndex(item => item.id === slides[currentIndex].id);
      const clickedThumbIndex = thumbnailItems.findIndex(item => item.id === id);

      if (clickedThumbIndex < currentThumbIndex) {
        rotateThumbnailsPrev();
      } else {
        rotateThumbnailsNext();
      }

      goToSlide(newIndex);
    }
  };

  return (
    <div className=" relative h-screen w-full text-white overflow-hidden font-sans">
      {/* Main Carousel */}
      <div className="carousel relative h-full w-full mt-[-50px]">
        {/* Slides */}
        <div className="list relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`item absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >

              <img
                src={slide.image}
                alt={slide.title}
                className={`
    w-[150px] h-[220px]
    absolute bottom-[50px] left-1/2
    rounded-[30px]
    ${goToNext ? 'animate-showImage' : ''}
    ${currentIndex === index ? 'w-full h-full bottom-0 left-0 rounded-none' : ''}
  `}
              />

              <div className="content absolute top-[20%] left-[50%] transform translate-x-[-50%] w-full sm:w-7xl sm:pr-[30%] px-3 sm:px-0">
                <div className={`author font-bold tracking-[10px] mb-4 transition-all duration-500 ${index === currentIndex ? 'translate-y-0 opacity-100 blur-none' : 'translate-y-12 opacity-0 blur-sm'}`}>
                  {slide.author}
                </div>
                <div className={`title text-5xl font-bold leading-tight mb-2 transition-all duration-500 ${index === currentIndex ? 'translate-y-0 opacity-100 blur-none' : 'translate-y-12 opacity-0 blur-sm'}`} style={{ transitionDelay: '0.2s' }}>
                  {slide.title}
                </div>
                <div className={`topic text-5xl font-bold leading-tight text-[#f1683a] mb-6 transition-all duration-500 ${index === currentIndex ? 'translate-y-0 opacity-100 blur-none' : 'translate-y-12 opacity-0 blur-sm'}`} style={{ transitionDelay: '0.4s' }}>
                  {slide.topic}
                </div>
                <div className={`des w-full sm:w-4/6 text-sm leading-relaxed mb-8 transition-all duration-500 ${index === currentIndex ? 'translate-y-0 opacity-100 blur-none' : 'translate-y-12 opacity-0 blur-sm'}`} style={{ transitionDelay: '0.6s' }}>
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
        <div className="thumbnail absolute bottom-[50px] right-3 sm:right-10 w-max z-50 flex gap-[20px]">
          {thumbnailItems.map((item) => {
            const isActive = item.id === slides[currentIndex].id;

            return (
              <div
                key={item.id}
                onClick={() => handleThumbnailClick(item.id)}
                // Hide all non-active thumbnails on small devices
                className={`
          item w-[150px] h-[220px] rounded-xl overflow-hidden cursor-pointer transition-all flex-shrink-0
          ${isActive ? 'ring-2 ring-[#f1683a] scale-110' : 'opacity-70 hover:opacity-90'}
          ${isActive ? 'block' : 'hidden'} sm:block
        `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>


        {/* Navigation Arrows */}
        <div className="arrows absolute top-[80%] right-[52%] z-50 w-[300px] max-w-[30%] flex gap-2">
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
        <div className="absolute bottom-0 left-0 w-full h-[5px] bg-white/20 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-[#f1683a] transition-all duration-[5000ms] ease-linear"
            style={{ width: '0%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;