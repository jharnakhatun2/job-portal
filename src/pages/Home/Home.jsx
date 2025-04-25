import React from "react"
import Carousel from "../../components/Carousel/Carousel";
import SinglePage from "../../components/SinglePage/SinglePage";
import CounterView from "../../features/counter/CounterView";
import PostView from "../../features/posts/PostView";




const Home = () => {
  return (
    <>
    <Carousel/>
    <div className="sm:max-w-7xl mx-auto w-full px-3 xl:px-0 py-8">
      Home
    </div>
    <SinglePage/>
    </>
  )
};

export default Home;
