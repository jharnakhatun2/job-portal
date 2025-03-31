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
            <img src={data.logo} alt="company logo" className="border border-gray-200"/>
            <div>
               <h3 className="uppercase font-bold">{data.title}</h3> 
               <p className="font-semibold">Posted <span className="ml-10">{data.posted}</span></p>
               <p className="font-semibold">Specialism <span className="ml-10">{data.specialism}</span></p>
               <p className="font-semibold">Location <span className="ml-10">{data.location}</span></p>
               <p>{data.description}</p>
            </div>
            <div>
                <p>{data.vacancy_type}</p>
                <button>♡</button>
            </div>
        </div>
      ))}
    </div>
  )
};

export default Card;
