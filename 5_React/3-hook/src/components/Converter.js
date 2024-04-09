import { useState, useEffect } from "react";

const Converter = ({ click, text }) => {
  return (
    <>
      <h1>Time Converter</h1>
      <input type="text" id="minutes" placeholder="Minutes">
        Minutes
      </input>
    </>
  );
};
export default Converter();
