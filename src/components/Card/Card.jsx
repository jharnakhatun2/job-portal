import { useDispatch, useSelector } from "react-redux";
import Loader from "../../util/Loader/Loader";
import { useEffect } from "react";
import { fetchData } from "../../features/posts/PostSlice";
import { fetchJobData } from "../../features/job/jobSlice";


const Card = () => {
  const jobs = useSelector(state => state.job)
  const { job, isLoading, error } = jobs;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobData())
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <p>Something went wrong!!!</p>
  }
  console.log(jobs)
  return (
    <div>
      {job && job.map((data) => (
        <div key={data.id} className="space-y-5 sm:flex gap-3 sm:gap-10 sm:items-start justify-between">
          <img src={data.logo} alt="company logo" className="border border-gray-200" />
          <div className="space-y-3">
            <h3 className="uppercase font-bold">{data.title}</h3>
            <div className="text-[13px] space-y-1">
              {/* job posted date */}
              {
                Array.isArray(data.date_posted) && (
                  data.date_posted.map((post, index) => (
                    <p key={index} className="font-semibold">Posted <span className="ml-12">{post}</span></p>
                  ))
                )
              }
              {/* Specialism */}
              {
                Array.isArray(data.specialism) && (
                  data.specialism.map((specialism, index) => (
                    <p key={index} className="font-semibold">Specialism <span className="ml-6">{specialism}</span></p>
                  ))
                )
              }

              <p className="font-semibold">Location <span className="ml-9">{data.location}</span></p>
            </div>
            <p className="text-gray-600 text-sm font-light font-roboto">{data.description.slice(0, 150)}{data.description.length > 150 && "..."} <span className="text-xs text-primary font-bold underline">Read More ➢</span></p>
          </div>
          <div className="flex gap-2 items-center">
            {/*vacancy_type */}
            {Array.isArray(data.vacancy_type) ? (
              data.vacancy_type.map((type, index) => (
                <p
                  key={index}
                  className={`uppercase border px-3 py-[3px] rounded text-sm ${type === 'Internship' ? "text-red-600" :
                    type === 'Freelance' ? "text-green-700" :
                      "text-black"
                    }`}
                >
                  {type}
                </p>
              ))
            ) : (
              // If single value, render once
              <p
                className={`uppercase border px-3 py-[3px] rounded text-sm ${data.vacancy_type === 'Internship' ? "text-red-600" :
                  data.vacancy_type === 'Freelance' ? "text-green-700" :
                    "text-black"
                  }`}
              >
                {data.vacancy_type}
              </p>
            )}

            {/* Heart button (renders once) */}
            <button className="px-2 bg-primary rounded text-white text-xl">♡</button>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Card;
