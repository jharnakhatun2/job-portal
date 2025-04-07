import React, { useState } from "react";

const filters = [
    {
        "topics": "Offered Salary",
        "sub": [
            {
                "sub_name": "0- £15,000",
                "total": "2"
            },
            {
                "sub_name": "0- £15,000",
                "total": "2"
            },
            {
                "sub_name": "£15,000 - £20,000",
                "total": "0"
            },
            {
                "sub_name": "£20,000 - £30,000",
                "total": "2"
            },
            {
                "sub_name": "£30,000 - £50,000",
                "total": "2"
            },
            {
                "sub_name": "£50,000+",
                "total": "0"
            }
        ]
    },
    {
        "topics": "Career Level",
        "sub": [
            {
                "sub_name": "Manager",
                "total": "0"
            },
            {
                "sub_name": "Officer",
                "total": "2"
            },
            {
                "sub_name": "Student",
                "total": "4"
            },
            {
                "sub_name": "Executive",
                "total": "0"
            },
            {
                "sub_name": "Others",
                "total": "0"
            }
        ]
    },
    {
        "topics": "Experience",
        "sub": [
            {
                "sub_name": "Fresh",
                "total": "2"
            },
            {
                "sub_name": "Less Than 1 Year",
                "total": "2"
            },
            {
                "sub_name": "2 Years",
                "total": "0"
            },
            {
                "sub_name": "3 Years",
                "total": "0"
            },
            {
                "sub_name": "4 Years",
                "total": "0"
            },
            {
                "sub_name": "5 Years",
                "total": "0"
            },
            {
                "sub_name": "6 Years",
                "total": "0"
            },
            {
                "sub_name": "7 Years",
                "total": "1"
            },
            {
                "sub_name": "8 Years +",
                "total": "1"
            }
        ]
    },
    {
        "topics": "Gender",
        "sub": [
            {
                "sub_name": "Male",
                "total": "0"
            },
            {
                "sub_name": "Female",
                "total": "5"
            },
            {
                "sub_name": "Both",
                "total": "1"
            }
        ]
    },
    {
        "topics": "Industry",
        "sub": [
            {
                "sub_name": "Development",
                "total": "1"
            },
            {
                "sub_name": "Management",
                "total": "0"
            },
            {
                "sub_name": "Finance",
                "total": "2"
            },
            {
                "sub_name": "Html Department",
                "total": "1"
            },
            {
                "sub_name": "Banking",
                "total": "0"
            },
            {
                "sub_name": "Designing",
                "total": "0"
            }
        ]
    },
    {
        "topics": "Qualification",
        "sub": [
            {
                "sub_name": "Certificate",
                "total": "2"
            },
            {
                "sub_name": "Diploma",
                "total": "2"
            },
            {
                "sub_name": "Associate Degree",
                "total": "1"
            },
            {
                "sub_name": "Bachelor Degree",
                "total": "0"
            },
            {
                "sub_name": "Master's Degree",
                "total": "0"
            },
            {
                "sub_name": "Doctorate Degree",
                "total": "1"
            }
        ]
    }
];

const Collapse = () => {
    const [openStates, setOpenStates] = useState(filters.map(() => false));

    const toggleAll = () => {
        const shouldExpand = openStates.some(open => !open);
        setOpenStates(filters.map(() => shouldExpand));
    };

    const toggleSingle = (index) => {
        const newStates = [...openStates];
        newStates[index] = !newStates[index];
        setOpenStates(newStates);
    };

    return (
        <div className="w-full border border-gray-200 rounded bg-white">
            {/* Expand/Collapse All Button */}
            <div
                className="flex justify-between items-center px-4 py-2 bg-gray-400 text-white cursor-pointer text-[13px] rounded-t"
                onClick={toggleAll}
            >
                <span>
                    {openStates.every((open) => open)
                        ? "Collapse All Filters"
                        : "Expand All Filters"}
                </span>
                <span className="text-xl">
                    {openStates.every((open) => open) ? "−" : "+"}
                </span>
            </div>

            {/* Filter Groups */}
            {filters.map((filter, index) => (
                <div
                    key={index}
                    className="border-t border-gray-200"
                >
                    {/* Title */}
                    <div
                        className="flex justify-between items-center px-4 py-3 cursor-pointer text-sm font-bold uppercase text-zinc-600 transition"
                        onClick={() => toggleSingle(index)}
                    >
                        <span className="tracking-wide">{filter.topics}</span>
                        <span
                            className={`transform transition-transform duration-300 text-gray-400 text-xs ${openStates[index] ? "-rotate-90" : "rotate-0"
                                }`}
                        >
                            ◀
                        </span>
                    </div>

                    {/* Content */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out px-4 ${openStates[index] ? "max-h-60 py-2" : "max-h-0 py-0"
                            }`}
                    >
                        {
                            filter.sub?.map((option, index) => (
                                <div className="flex items-center gap-2 justify-between cursor-pointer ">
                                    <label className="fieldset-label">
                                        <input type="checkbox" />
                                        <span className="text-[13px] font-semibold">{option.sub_name}</span>
                                    </label>
                                    <p>({option.total})</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Collapse;
