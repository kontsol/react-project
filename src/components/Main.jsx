import React, {useState, useEffect} from "react";
import Button from "./Button";
import {styles} from "../styles";

const Main = () => {
  return (
    <>
      <div
        // ${styles.paddingX} ${styles.paddingY}
        className={`relative ${styles.paddingY} flex justify-between flex-col-reverse m-auto md:flex-row`}
      >
        <div className="w-full h-full justify-center flex-1 mt-6 sm:mt-12 text-center md:text-start">
          <div className="md:w-[85%]">
            <h1 className={`${styles.headText}`}>
              Bring everyone together to build better products
            </h1>
            <p
              className={`${styles.sectionText} md:w-[70%] mt-4 lg:mt-9 xl:mt-10 leading-7`}
            >
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <Button title={"Get Started"} />
          </div>
        </div>
        <div className="max-w-full h-auto m-auto flex-1">
          <img
            className="w-[100%] z-0"
            src="/images/illustration-intro.svg"
            alt="Illustration"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
