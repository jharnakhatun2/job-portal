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
        <div key={data.id} className="space-y-5">
            <img src={data.logo} alt="company logo" className="border border-gray-200"/>
            <div className="space-y-3">
               <h3 className="uppercase font-bold">{data.title}</h3> 
               <div className="text-sm">
               <p className="font-semibold">Posted <span className="ml-12">{data.posted}</span></p>
               <p className="font-semibold">Specialism <span className="ml-6">{data.specialism}</span></p>
               <p className="font-semibold">Location <span className="ml-9">{data.location}</span></p>
               </div>
               <p className="text-gray-500 text-sm font-normal">{data.description}</p>
            </div>
            <div className="flex gap-2 items-center">
                <p className={`uppercase border px-3 py-[3px] rounded text-sm ${data.vacancy_type === 'Internship'? "text-red-600" : data.vacancy_type === 'Freelance'?"text-green-700":"text-black"}`}>{data.vacancy_type}</p>
                <button className="px-2 bg-primary rounded text-white text-xl">♡</button>
            </div>
        </div>
      ))}
    </div>
  )
};

export default Card;
