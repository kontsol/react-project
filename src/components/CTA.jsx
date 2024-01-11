import React from "react";
import Button from "./Button";
import {styles} from "../styles";

const CTA = () => {
  return (
    <section
      className={`mt-28 bg-[#e66e19] w-full py-24 flex flex-col items-center`}
    >
      <div className="w-[80%] flex flex-col lg:flex-row lg:justify-between items-center">
        <h1
          className={`${styles.headText} lg:text-3xl xl:text-5xl  text-white w-[70%] 2xl:w-[40%] lg:w-[50%] text-center lg:text-start`}
        >
          Simplify how your team works today.
        </h1>
        <Button title="Get Started" bg_color="bg-[#fafafa]" text_color={true} />
      </div>
    </section>
  );
};

export default CTA;
