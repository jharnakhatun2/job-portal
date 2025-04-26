import React from "react"
import Button from "../../util/Button/Button";
import { IoDocumentText } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const jobDetails = [
  {
    "topic": "Offered Salary",
    "icon": "https://i.ibb.co.com/QFQWHDCf/dollar.webp",
    "topic_value": "£15,000 - £20,000"
  },
  {
    "topic": "Career Level",
    "icon": "https://i.ibb.co.com/3YyVwztY/arrow.webp",
    "topic_value": "Executive"
  },
  {
    "topic": "Experience",
    "icon": "https://i.ibb.co.com/fRz6fd2/bag.webp",
    "topic_value": "2 Years"
  },
  {
    "topic": "Gender",
    "icon": "https://i.ibb.co.com/7xkzpJFn/man-search-svgrepo-com.webp",
    "topic_value": "Female"
  },
  {
    "topic": "INDUSTRY",
    "icon": "https://i.ibb.co.com/1YhhwgS0/factory.webp",
    "topic_value": "Management"
  },
  {
    "topic": "Qualification",
    "icon": "https://i.ibb.co.com/fdKmLPft/cap-education-hat-svgrepo-com.webp",
    "topic_value": "Bachelor Degree"
  },
]



const Body = () => {
  return (
    <div className="text-gray-600 text-sm font-inter font-light ">
      <div className="lg:flex gap-10">
        <div>
          <h2 className="uppercase font-semibold">Job Overview</h2>
          <div className="space-y-2 text-gray-600 text-sm font-inter font-light tracking-wide py-2">
            <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much dog out the much alas evasively neutral lazy reset.</p>
            <p>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much dog out the much alas evasively neutral lazy reset.</p>
            <p>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and.</p>
          </div>
          <h4 className="font-semibold text-[16px]">Skills Required</h4>
          <div className="space-y-2 py-2">
            <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously. Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally.</p>
            <div className="space-y-2">
              <li>Strong Market connections for business development of the bank.</li>
              <li>Strong knowledge of Corporate products and regulatory requirements.
              </li>
              <li>Proficiency in spoken and written English.
              </li>
              <li>Analytical skills
              </li>
              <li>Knowledge of Corporate Banking, Risk Management, Compliance and Central Bank regulations.</li>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="uppercase font-semibold border-b border-gray-300 pb-4 pt-5 sm:pt-0">Job Detail</h2>

          {
            jobDetails.map((detail, index) => {
              return (
                <div key={index} className="flex items-center gap-4 py-4 border-b border-gray-300">
                  <img src={detail.icon} alt="icon" className="text-black w-4" />
                  <div>
                    <p className="text-xs font-bold text-gray-400">{detail.topic}</p>
                    <p className="font-bold">{detail.topic_value}</p>
                  </div>
                </div>
              )

            })
          }

          <div className="py-5">
            <Button icon={<CiHeart />}>Shortlist</Button>
            <Button icon={<IoDocumentText />}>Apply Now</Button>
            <Button icon={<FaLinkedinIn />}>Apply With Linkedin</Button>
            <span className="text-xs">Never pay anyone for job application test or interview.</span>
          </div>

        </div>
      </div>
      <div className="space-y-3 sm:space-y-2">
        <h2 className="text-xl font-bold">Related Jobs (2)</h2>
        
          <div className="sm:flex gap-3">
            <p className="text-[16px] text-gray-800 hover:text-primary cursor-pointer">Java Developer Linux Java Dev <span className="text-gray-400 text-sm"> on</span></p>
            <div className="flex justify-between sm:w-3/5 text-sm">
              <p className="text-gray-500">July 10, 2023</p>
              <a href="#" className="text-green-700 underline cursor-pointer">Freelance</a>
            </div>
          </div>
          <div className="sm:flex gap-3">
            <p className="text-[16px] text-gray-800 hover:text-primary cursor-pointer">Senior Stock Technician Required <span className="text-gray-400 text-sm"> on</span></p>
            <div className="flex justify-between sm:w-3/5 text-sm">
              <p className="text-gray-500">July 10, 2023</p>
              <a href="#" className="text-red-700 underline cursor-pointer">Internship</a>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Body;
