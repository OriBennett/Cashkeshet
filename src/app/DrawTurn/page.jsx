"use client"
import Link from "next/link";
import { useState } from "react";
import seeds from "../lib/seeds";
import Canvas from "../components/Canvas";

const DrawTurnPage = () => {
  const [scribbleExists, setScribbleExists] = useState(false);
  const [seed] = useState(seeds[Math.floor(Math.random() * seeds.length)]);

  const [scribble, setScribble] = useState(null);

  return (
    <main className="main-container">
      <Canvas
            startingPaths={seed.paths}
            onScribble={setScribble}
            scribbleExists={scribbleExists}
            setScribbleExists={setScribbleExists}
          />

      DrawTurnPage
      <hr />
      <Link href="/WriteTurn">
        <button>WriteTurn</button>
      </Link>
      <Link href="/ResultsView">
        <button>ResultsView</button>
      </Link>

    </main>
  )
}

export default DrawTurnPage