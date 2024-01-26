"use client"
import Image from "next/image";
import { useState } from "react";
import seeds from "./lib/seeds";
import Canvas from "./components/Canvas";
import Link from "next/link";


export default function Home() {
  const [scribbleExists, setScribbleExists] = useState(false);
  const [seed] = useState(seeds[Math.floor(Math.random() * seeds.length)]);

  const [scribble, setScribble] = useState(null);

  return (
    <main >
      <h1>Welcome to CashCashIt</h1>


      <mark>Image with details text</mark>
      <br />

      <Link href="/GameRoom">
        <button>Cachkesh It!</button>
      </Link>

      {/* <Canvas
            startingPaths={seed.paths}
            onScribble={setScribble}
            scribbleExists={scribbleExists}
            setScribbleExists={setScribbleExists}
          /> */}

    </main>
  );
}
