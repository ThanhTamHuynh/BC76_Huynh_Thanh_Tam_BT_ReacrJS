import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header className=" bg-black w-full">
      <div className="container">
        <div className="header_content flex justify-between p-2 w-full">
          <a href="" className="text-[#fff] text-xl">
            <span>Start Bootstrap</span>
          </a>
          <nav>
            <ul className="flex">
              <li className="mx-2">
                <a className="active text-[#fff]" href="#">
                  Home
                </a>
              </li>
              <li className="mx-2">
                <a className="text-[#ffffffa8]" href="#">
                  About
                </a>
              </li>
              <li className="mx-2">
                <a className="text-[#ffffffa8]" href="#">
                  Services
                </a>
              </li>
              <li className="mx-2">
                <a className="text-[#ffffffa8]" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
