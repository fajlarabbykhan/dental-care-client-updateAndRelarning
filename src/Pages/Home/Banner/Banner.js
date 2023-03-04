import React from "react";
import chair from "../../../assets/images/chair.png";
import chairbackground from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div className="hero  " style={{ background: `url(${chairbackground})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className=" rounded-lg shadow-2xl w-1/2" />
        <div className="">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            className="btn btn-primary bg-gradient-to-r from-primary to-saccent
          text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
