import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return(
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-200">
      <div className="text-center  ">
        <h1 className="text-4xl font-bold  ">OUR Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1  "></div>
        <Testimonials reviews = {reviews}/>
      </div>
    </div>
  );
};

export default App;
