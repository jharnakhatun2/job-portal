import React, { useEffect, useState } from "react"

const slides = [
    {
        id: 1,
        image: 'https://i.ibb.co.com/zr56VDd/headphones-mouse-orange-background.jpg',
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
        image: 'https://i.ibb.co.com/DWNL7fh/contactimage.jpg',
        author: 'LUNDEV',
        title: 'DESIGN SLIDER',
        topic: 'ANIMAL',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?'
    }
];

const Convert = () => {
    const [items, setItems] = useState(slides);
    
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
        <>

            {/* <!-- carousel --> */}
            <div className="carousel h-screen w-full overflow-hidden relative">
                {/* <!-- list item --> */}
                <div className="list">
                    {
                        slides.map((item) => (
                            <div key={item.id} className="item absolute inset-0 w-full h-full">
                                <img className="w-full h-full object-cover" src={item.image} />
                                <div className="content absolute top-[20%] w-full sm:w-7xl left-1/2 -translate-x-1/2 pr-[30%] box-border text-white [text-shadow:0_5px_10px_#0004]">
                                    <div className="author font-bold tracking-[10px]">{item.author}</div>
                                    <div className="title text-[5em] font-bold leading-[1.3em]">{item.title}</div>
                                    <div className="topic text-[5em] font-bold leading-[1.3em] text-[#f1683a]">{item.topic}</div>
                                    <div className="des w-4/5">
                                        {/* <!-- lorem 50 --> */}
                                        {item.description}
                                    </div>
                                    <div className="w-1/2 buttons grid grid-cols-2 grid-rows-[40px] gap-[5px] mt-[20px]">
                                        <button className="border-none bg-[#eee] tracking-[3px] font-[Poppins] font-medium text-gray-900">SEE MORE</button>
                                        <button className="bg-transparent border border-white text-[#eee] tracking-[3px] font-[Poppins] font-medium">SUBSCRIBE</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* <!-- list thumnail --> */}
                <div className="thumbnail absolute bottom-[50px] right-3 sm:right-10 w-max z-[100] flex gap-[20px]">
                    {items.map(thumb => (
                        <div key={thumb.id} className="item w-[130px] h-[195px] sm:w-[150px] sm:h-[220px] shrink-0 relative">
                            <img className="w-full h-full object-cover rounded sm:rounded-[20px] shadow-lg" src={thumb.image} />
                            <div className="content absolute bottom-[10px] left-[10px] right-[10px] text-white">
                                <div className="title font-medium">
                                    Name Slider
                                </div>
                                <div className="description font-light">
                                    Description
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {/* <!-- next prev --> */}

                <div className="arrows absolute top-[80%] right-[52%] z-[100] w-[300px] max-w-[30%] flex gap-[10px] items-center">
                    <button onClick={prevSlide} className="w-[40px] h-[40px] rounded-full bg-[#eee4] border-none text-white font-mono font-bold transition duration-500 hover:bg-white hover:text-black" id="prev">{'<'}</button>
                    <button onClick={nextSlide} className="w-[40px] h-[40px] rounded-full bg-[#eee4] border-none text-white font-mono font-bold transition duration-500 hover:bg-white hover:text-black" id="next">{'>'}</button>
                </div>
                {/* <!-- time running --> */}
                <div className="time absolute z-[1000] w-0 h-[3px] bg-[#f1683a] left-0 top-0"></div>
            </div>

        </>
    )
};

export default Convert;
