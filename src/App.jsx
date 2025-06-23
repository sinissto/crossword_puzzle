import { useEffect, useState } from "react";
import "./App.css";
import { Crossword } from "./Crossword";

function App() {
  const { handleOutput, wordGrid, createGrid, checkGrid, hintList } =
    Crossword();

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
      <div className={"hintsCard"}>
        <h2 className={"cardTitle"}>Hints</h2>
        <div>
          <h3>Down</h3>
          {hintList.map((word, index) => (
            <div key={index}>
              {word.direction === "Down" ? (
                <div>
                  <p>
                    {word.label} - {word.hint}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
          <h3>Across</h3>
          {hintList.map((word, index) => (
            <div key={index}>
              {word.direction === "Across" ? (
                <div>
                  <p>
                    {word.label} - {word.hint}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
