"use client";
import Link from "next/link";
import { useState } from "react";

const WriteTurnPage = () => {
  const [guess, setGuess] = useState("");

  return (
    <main className="main-container flex-container">
      Picture here
      <label>What is your guess?</label>
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
