import React from "react";
import styleButton from "./button.module.css";
import "./Header.scss";

const Item = () => {
  return (
    <section className="py-1 mx-60">
      <div className="container">
        <div className=" bg-[#FFFFFF] w-60 text-center">
          <img className="w-60" src="./public/img1.jpg" alt="" />
          <h2 className="font-bold my-3">Card title</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit,
            <br /> Sapiente esse necessitatibus neque.
          </p>
          <div className="bg-[#F7F7F7]">
            <p className="item_content"></p>
            <button className={styleButton.btn_item}>Find Out More!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
