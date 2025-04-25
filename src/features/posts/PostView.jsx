import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./PostSlice";
import Loader from "../../util/Loader/Loader";

const PostView = () => {
    const postData = useSelector(state => state.posts);
    const {isLoading, posts, error} = postData;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchData())
    },[])
    console.log(posts)

    if(isLoading){
        return <Loader/>
    }

    if(error){
        return <h1> Something went wrong!</h1>
    }

  return (
    <div>
      {posts && posts.map(post => (
    <div key={post.id}>
        <h1>{post.title}</h1>
    </div>
      ))}
    </div>
  )
};

export default PostView;
