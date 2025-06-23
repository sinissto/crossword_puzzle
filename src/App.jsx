import { useEffect, useState } from "react";
import "./App.css";
import { Crossword } from "./Crossword";

function App() {
  const { handleOutput, wordGrid, createGrid } = Crossword();
  // console.log(createGrid());

  return <div className="App"></div>;
}

export default App;
