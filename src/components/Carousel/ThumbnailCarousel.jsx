import React, { useEffect, useState } from 'react';

const thumbnails = [
  { img: 'image/img1.jpg', title: 'Slider 1', description: 'Description 1' },
  { img: 'image/img2.jpg', title: 'Slider 2', description: 'Description 2' },
  { img: 'image/img3.jpg', title: 'Slider 3', description: 'Description 3' },
  { img: 'image/img4.jpg', title: 'Slider 4', description: 'Description 4' },
];

const ThumbnailCarousel = () => {
  const [items, setItems] = useState(thumbnails);

  // Rotate array: move first to end
  const nextSlide = () => {
    setItems((prev) => {
      const updated = [...prev];
      const first = updated.shift();
      updated.push(first);
      return updated;
    });
  };

  // Rotate backward: move last to start
  const prevSlide = () => {
    setItems((prev) => {
      const updated = [...prev];
      const last = updated.pop();
      updated.unshift(last);
      return updated;
    });
  };

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <div className="flex justify-center gap-4 transition-all duration-500 ease-in-out">
        {items.map((item, index) => (
          <div key={index} className="w-36 h-52 relative flex-shrink-0">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white p-1 rounded">
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="text-xs">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        ⬅
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        ➡
      </button>
    </div>
  );
};

export default ThumbnailCarousel;
