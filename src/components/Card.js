import React from "react";
import {FaQuoteLeft , FaQuoteRight } from "react-icons/fa";

function Card(props){
    let review = props.review;
    return (
        <div className="flex flex-col md:relative  ">
            <div className=" absolute top-[-7rem] z-[10] mz-auto ">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]  " src={review.image} alt="" />
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-20] left-[10px] "></div>
            </div>



            <div className="text-center mt-7" >
            <p className="font-bold text-2xl capitalize tracking-wider " >{review.name}</p>
            <p className="text-sm text-violet-300 uppercase "  >{review.job}</p>
            </div>
            
            <div className="mt-5 mx-auto text-violet-500 " >
            <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500 ">
                {review.text}
            </div>

            <div className="mt-5 mx-auto text-violet-500 ">
                <FaQuoteRight/>
            </div>





        </div>
    )
}

export default Card