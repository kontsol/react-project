import React from "react";
import {management} from "../constants";
import {styles} from "../styles";
import Button from "./Button";

const About = () => {
  return (
    <>
      <div
        className={`${styles.paddingY} w-full md:flex md:justify-between gap-5 md:place-items-start`}
      >
        {/*  */}
        <div className="w-full md:text-start text-center md:flex-1">
          <h1 className={`${styles.mediumHeadText} m-auto`}>
            What's different about Manage?
          </h1>
          <p className={`${styles.sectionText} mt-5 md:w-[80%]`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex-1 mt-12 md:mt-0 ">
          {management.map((item, index) => (
            <div key={index} className="gap-5 ">
              <div className="flex items-center gap-5 mb-2 text-center">
                <Button title={`0${index + 1}`} block="block" />
                <h1 className={`${styles.smallHeadText}`}>{item.title}</h1>
              </div>
              <p className={`${styles.sectionText}`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
