import React from "react"

const Button = ({children, icon}) => {
    return (
        <button className="flex items-center my-2 text-primary fill-primary hover:text-gray-800 hover:fill-gray-800 font-normal w-full gap-1 transition-all ease-in-out duration-500 text-sm border px-2 py-[10px] cursor-pointer rounded">
            {icon && <span>{icon}</span>}
            {children}
        </button>
    )
};

export default Button;
