import React, { useState } from "react";

const Button = ({ Icon, name, clicked, className = "" }) => {

    // const [click,setclick] = useState(clicked);

    return (
        <button
            // onClick={()=>setclick((prev)=>!prev)}
            className={`flex items-center gap-2 w-fit ${clicked ? "bg-white text-orange-600 border-orange-600" : "bg-black text-white border-black"} rounded-3xl px-4 py-2 my-2 text-[14px] ${className}`}
        >
            {Icon && <Icon size={20} />}
            <p>{name}</p>
        </button>
    );
};

export default Button;
