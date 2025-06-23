import { useEffect, useState } from "react";
import "./App.css";
import { Crossword } from "./Crossword";

function App() {
  const { handleOutput, wordGrid, createGrid, checkGrid } = Crossword();

  return (
    <div className="App">
      <header>
        <h1 className={"Title"}>Crossword puzzle</h1>
      </header>
      <div className="GridContainer">
        {wordGrid.map((box, index) => (
          <div className={"GridChild"} key={index}>
            {box.char === "." ? (
              <p></p>
            ) : (
              <div>
                {box.status === "C" ? (
                  <input
                    className={".correctBox"}
                    maxLength={1}
                    type={"text"}
                    value={box.char}
                    onChange={(event) => handleOutput(event, index)}
                  />
                ) : (
                  <input
                    className={"inputBox"}
                    maxLength={1}
                    type={"text"}
                    value={box.char}
                    placeholder={box.label}
                    onChange={(event) => handleOutput(event, index)}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={"buttonRow"}>
        <button className={"cButton"} type={"submit"} onClick={createGrid}>
          Reset
        </button>
        <button className={"cButton"} type={"submit"} onClick={checkGrid}>
          Check
        </button>
      </div>
    </div>
  );
}

export default App;
