import React, {useState} from "react";
import Button from "./Button";
import {styles} from "../styles";
import {menu} from "../constants";

const Navbar = ({onDataUpdate}) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
    onDataUpdate(toggle);
  };

  return (
    <>
      <nav className={`${styles.paddingY} m-auto flexBetween gap-3 relative`}>
        <img
          src="/images/logo.svg"
          alt="logo"
          className="md:w-1/4 lg:w-auto z-0"
        />
        <ul className="max-md:hidden w-auto flexCenter md:gap-3 lg:gap-7 list-none font-medium text-[#0b111c] md:text-[13px] lg:text-[16px]">
          {menu.map(
            (item, index) =>
              index !== 0 &&
              index !== menu.length - 1 && (
                <li className="hover:text-[#9095a7]" key={index}>
                  {item}
                </li>
              )
          )}
        </ul>
        <Button
          title={"Get Started"}
          hidden="hidden"
          block="md:block"
          bg_color="bg-[#e66e19]"
        />
        {/* Medium-Small Devices */}
        <div className="md:hidden">
          <div className="">
            <img
              className="md:hidden w-7"
              src={
                toggle
                  ? "/images/icons8-menu-50.png"
                  : "/images/icons8-close-50.png"
              }
              onClick={handleToggle}
            />
          </div>
        </div>
        <div
          className={`w-full md:hidden mt-20 absolute z-20 top-10 ${
            !toggle ? "block" : "hidden"
          } shadow-xl shadow-black-500/50`}
        >
          <ul className="py-6 flexCenter gap-4 font-medium overflow-hidden flex-col list-none text-[#0b111c] bg-[##fff6eb]">
            {menu.map((item, index) => (
              <li className="hover:text-[#9095a7]" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
