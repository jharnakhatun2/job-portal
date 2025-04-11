import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import required modules
import { Autoplay} from 'swiper/modules';

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
 
  return (
    <Swiper spaceBetween={0} slidesPerView={1} loop={true}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    >
      {slides.map(item =>(
        <SwiperSlide key={item.id}><img src={item.image} alt="Slide 1" className='w-screen h-screen'/></SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;