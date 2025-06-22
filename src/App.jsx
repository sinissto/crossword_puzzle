import { useEffect, useState } from "react";
import "./App.css";
import { Crossword } from "./Crossword";

function App() {
  const { handleOutput, wordGrid } = Crossword();

  return <div classname="App"></div>;
}

export default App;
