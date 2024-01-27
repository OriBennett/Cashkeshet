"use client";
import Link from "next/link";
import { useState } from "react";

const WriteTurnPage = () => {
  const [guess, setGuess] = useState("");

  return (
    <main className="main-container flex-container">
      <img src="doodle.jpg"/>
      <label>What is drawn in the picture? </label>
      <br />
      <input type="text" onChange={(e) => setGuess(e.target.value)} />
      <br />
      <hr />
      <div className="flex-container">
        <Link href="/DrawTurn">
          <button>DrawTurn</button>
        </Link>
        <Link href="/ResultsView">
          <button>ResultsView</button>
        </Link>
      </div>
    </main>
  );
};

export default WriteTurnPage;
