"use client"
import Image from "next/image";
import ArikTest from "./components/ArikTest";
import { useState } from "react";
import seeds from "./lib/seeds";
import Canvas from "./components/Canvas";


export default function Home() {
  const [scribbleExists, setScribbleExists] = useState(false);
  const [seed] = useState(seeds[Math.floor(Math.random() * seeds.length)]);

  const [scribble, setScribble] = useState(null);

  return (
    <main >
      GOOD LUCK FOR US 🍀

        <ArikTest/>
        <Canvas
            startingPaths={seed.paths}
            onScribble={setScribble}
            scribbleExists={scribbleExists}
            setScribbleExists={setScribbleExists}
          />

    </main>
  );
}
