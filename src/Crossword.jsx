import React from "react";
import { useEffect, useState } from "react";

export const Crossword = () => {
  const gridSize = 7;
  const [wordGrid, setWordGrid] = useState([]);

  //Add your lists and functions here.

  const handleOutput = (event, index) => {
    //Create your handleOutput function here
  };

  return { handleOutput, wordGrid };
};
