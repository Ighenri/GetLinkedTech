import React from "react";

export default function Button({ children, styleList }) {
  return (
    <button
      className={`px-8 mt-6 md:mt-0 md:px-10 py-2 rounded-md text-center font-bold bg-gradient-to-r from-light-purple to-linear md:ml-10 lg:ml-20 hover:bg-gradient-to-r hover:from-linear to hover:to-black hover:border hover:border-white ${styleList}`}
    >
      {children}
    </button>
  );
}
