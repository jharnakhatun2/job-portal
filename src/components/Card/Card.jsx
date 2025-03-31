import axios from "axios";
import { div } from "framer-motion/client";
import React from "react"
import { useState } from "react";
import { useEffect } from "react";

const Card = () => {
    const [jobData, setJobData] = useState([]);

    // data fetching
    useEffect(()=>{
		axios.get('data.json')
		.then(data => {
            console.log(data.data)
            setJobData(data.data);
        })
},[])

  return (
    <div>
      {jobData.map((data)=>(
        <div key={data.id}>
            <img src={data.logo} alt="company logo" />
            <div>
                
            </div>
        </div>
      ))}
    </div>
  )
};

export default Card;
