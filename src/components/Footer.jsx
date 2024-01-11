import React, {useState} from "react";
import {styles} from "../styles";
import {menu, icon} from "../constants";
import Button from "./Button";

const Footer = () => {
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");

  const handleInput = (event) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  const handleButton = (event) => {
    event.preventDefault();
    console.log("button is clicked");

    if (message.trim().length === 0) {
      setActive(true);
      console.log("empty message");
    } else {
      setActive(false);
      console.log("not empty message");
    }
  };

  return (
    <section className="py-12 bg-[#1d1e25] w-full h-full">
      <div className="w-[80%] flex flex-col m-auto lg:flex-row items-center lg:justify-between gap-12">
        {/* Search and button */}
        <div className="lg:order-1">
          <div className="flex lg:flex-col gap-12">
            <div className="flex gap-3 items-center relative ">
              <input
                className={`py-2.5 pe-20 ps-6 lg:pe-4 rounded-full ${
                  active
                    ? "border-2 border-solid border-red-500 "
                    : "border-none"
                }`}
                placeholder="Updates in your inbox..."
                onChange={handleInput}
              />
              <label
                className={`${
                  active ? "block" : "hidden"
                } text-red-700 absolute -bottom-4 left-1`}
              >
                Please insert a valid email
              </label>
              <Button title="GO" onClick={handleButton} />
            </div>
            <div className="text-end">
              <p className={`${styles.sectionText} hidden lg:block text-end`}>
                Copyright 2020. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
        {/*  */}

        {/* MENU */}
        <div className="m-auto">
          <ul
            className={`${styles.sectionText} grid grid-cols-2 grid-rows-4 gap-x-24 gap-y-2 lg:gap-y-0 lg:gap-x-10  m-auto`}
          >
            {menu.map((item, index) => (
              <li className="text-[#9095a7] text-start" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/*  */}

        {/* LOGO, ICONS */}
        <div className="flex flex-col lg:flex-col-reverse lg:order-[-1] gap-16">
          <div className="w-full lg:order-1">
            <ul className="flex gap-10 lg:gap-3 items-center justify-center">
              {icon.map((item, index) => (
                <li className="" key={index}>
                  <img className="w-11 lg:w-7" src={`../../images/${item}`} />
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-col items-center lg:order-1">
            <img
              src="../../images/logo.svg"
              className="object-contain w-[55%] sm:w-[65%] lg:w-[95%] h-full"
            />
          </div>
        </div>
        {/*  */}

        <div className="">
          <p className={`${styles.sectionText} block lg:hidden`}>
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
