import React from "react";
import styleButton from "./button.module.css";
const Banner = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className=" mx-60 bg-[#E8ECEF] p-12 text-left">
          <h1 className="text-6xl mb-2">A warm welcome!</h1>
          <p className="text-xl text-slate-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            ipsam, eligendi, in quo sunt possimus non incidunt odit vero
            <br /> aliquid similique quaerat nam nobis illo aspermatur vitae
            fugiat numquam repellat.
          </p>
          <button className={styleButton.btn_primary}>Call to action</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
