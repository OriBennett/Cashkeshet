"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const GameRoomPage = () => {
  const router = useRouter();

  const [playerName, setPlayerName] = useState("");
  const [showLinks, setShowLinks] = useState(false);

  const submitName = (e) => {
    e.preventDefault();
    alert("Hello " + playerName);
    setShowLinks(true);
    router.push('/DrawTurn')
  };

  return (
    <main className="main-container">
      <form onSubmit={submitName} className="flex-container">
        <label>What your name?</label>
        <br />
        <input type="text" onChange={(e) => setPlayerName(e.target.value)} />
        <br />

        <button>SUBMIT</button>

        {/* {showLinks ? (
          <>
            <hr />
            <div>
              <Link href="/DrawTurn">
                <button>DrawTurn</button>
              </Link>
              <Link href="/WriteTurn">
                <button>WriteTurn</button>
              </Link>
            </div>
          </>
        ) : null} */}
      </form>
    </main>
  );
};

export default GameRoomPage;
