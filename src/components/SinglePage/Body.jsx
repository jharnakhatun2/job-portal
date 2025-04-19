import React from "react"
import { FiDollarSign } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaGraduationCap, FaRegUser, FaToolbox } from "react-icons/fa";
import { MdOutlineManageHistory } from "react-icons/md";

// Create a mapping between icon names and icon components
const iconComponents = {
  dollar: FiDollarSign,
  arrow: FaArrowTrendUp,
  bag: FaToolbox,
  cap: FaGraduationCap,
  man: FaRegUser,
  industry: MdOutlineManageHistory,
};

const jobDetails = [
  {
    "topic": "Offered Salary",
    "icon": "dollar",
    "topic_value": "£15,000 - £20,000"
  },
  {
    "topic": "Career Level",
    "icon": "arrow",
    "topic_value": "Executive"
  },
  {
    "topic": "Experience",
    "icon": "bag",
    "topic_value": "2 Years"
  },
  {
    "topic": "Gender",
    "icon": "man",
    "topic_value": "Female"
  },
  {
    "topic": "INDUSTRY",
    "icon": "industry",
    "topic_value": "Management"
  },
  {
    "topic": "Qualification",
    "icon": "cap",
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
              const IconComponent = iconComponents[detail.icon] || null;
              return (
                <div key={index} className="flex items-center gap-4 py-4 border-b border-gray-300">
                  {IconComponent && <IconComponent className="text-black" />}
                  <div>
                    <p className="text-xs font-bold text-gray-400">{detail.topic}</p>
                    <p className="font-bold">{detail.topic_value}</p>
                  </div>
                </div>
              )

            })
          }

          <div>
            <button className="">Shortlist</button>
            <button>Apply Now</button>
            <button className="text-primary btn btn-outline btn-primary w-full">
  <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="primary" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
  Apply with Linkedin
</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
};

export default Body;
