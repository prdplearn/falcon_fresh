import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <section className={`w-full container mx-auto px-4  md:px-6 !2xl:px-0 ${
      className ? className :'2xl:max-w-[1536px]'
    }`}>
      {children}
    </section>
  );
};

export default Wrapper;

