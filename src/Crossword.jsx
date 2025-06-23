import React from "react";
import { useEffect, useState } from "react";

export const Crossword = () => {
  const gridSize = 7;
  const [wordGrid, setWordGrid] = useState([]);

  useEffect(() => {
    createGrid();
  }, []);

  //Add your lists and functions here.
  const wordList = [
    { pos: "A0", word: "VITEST" },
    { pos: "D0", word: "VITE" },
    { pos: "D2", word: "TWITTER" },
    { pos: "A16", word: "IMAGE" },
    { pos: "D20", word: "ECHO" },
    { pos: "A30", word: "TIE" },
    { pos: "A42", word: "CORES" },
  ];

  const createGrid = () => {
    let wordLabel = 1;
    const tempArr = new Array(gridSize * gridSize).fill({
      char: ".",
      status: "W",
    });

    for (const wordListItemIndex in wordList) {
      const direction = wordList[wordListItemIndex].pos.at(0);
      const startPosition = wordList[wordListItemIndex].pos.slice(1);

      if (direction === "A") {
        for (const charIndex in wordList[wordListItemIndex].word) {
          if (charIndex === "0") {
            if (
              !tempArr[parseInt(startPosition) + parseInt(charIndex)]?.label
            ) {
              tempArr[parseInt(startPosition) + parseInt(charIndex)] = {
                char: "",
                status: "W",
                label: wordLabel,
              };
              wordLabel += 1;
            }
          } else {
            tempArr[parseInt(startPosition) + parseInt(charIndex)] = {
              char: "",
              status: "W",
            };
          }
        }
      } else if (direction === "D") {
        for (const charIndex in wordList[wordListItemIndex].word) {
          if (charIndex === "0") {
            if (
              !tempArr[parseInt(startPosition) + parseInt(charIndex) * gridSize]
                ?.label
            ) {
              tempArr[
                parseInt(startPosition) + parseInt(charIndex) * gridSize
              ] = {
                char: "",
                status: "W",
                label: wordLabel,
              };
              wordLabel += 1;
            }
          } else {
            tempArr[parseInt(startPosition) + parseInt(charIndex) * gridSize] =
              {
                char: "",
                status: "W",
              };
          }
        }
      }
    }

    setWordGrid(tempArr);
  };

  const checkGrid = () => {
    const curWordGrid = [...wordGrid];
    for (const wordListItem in wordList) {
      const direction = wordList[wordListItem].pos.at(0);
      const position = wordList[wordListItem].pos.slice(1);
      if (direction === "A") {
        for (const charIndex in wordList[wordListItem].word) {
          if (
            wordList[wordListItem].word[charIndex] ===
            curWordGrid[parseInt(position) + parseInt(charIndex)].char
          ) {
            curWordGrid[parseInt(position) + parseInt(charIndex)] = {
              char: curWordGrid[parseInt(position) + parseInt(charIndex)].char,
              status: "C",
              label:
                curWordGrid[parseInt(position) + parseInt(charIndex)].label,
            };
          } else {
            curWordGrid[parseInt(position) + parseInt(charIndex)] = {
              char: "",
              status: "W",
              label:
                curWordGrid[parseInt(position) + parseInt(charIndex)].label,
            };
          }
        }
      } else if (direction === "D") {
        for (const charIndex in wordList[wordListItem].word) {
          if (
            wordList[wordListItem].word[charIndex] ===
            curWordGrid[parseInt(position) + parseInt(charIndex) * gridSize]
              .char
          ) {
            curWordGrid[parseInt(position) + parseInt(charIndex) * gridSize] = {
              char: curWordGrid[
                parseInt(position) + parseInt(charIndex) * gridSize
              ].char,
              status: "C",
              label:
                curWordGrid[parseInt(position) + parseInt(charIndex) * gridSize]
                  .label,
            };
          } else {
            curWordGrid[parseInt(position) + parseInt(charIndex) * gridSize] = {
              char: "",
              status: "W",
              label:
                curWordGrid[parseInt(position) + parseInt(charIndex) * gridSize]
                  .label,
            };
          }
        }
      }
    }

    setWordGrid(curWordGrid);
  };

  const handleOutput = (event, index) => {
    //Create your handleOutput function here
    const checkWord = [...wordGrid];
    checkWord[index].char = event.target.value.toUpperCase();
    setWordGrid(checkWord);
  };

  return { handleOutput, wordGrid, createGrid, checkGrid };
};
