'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';


const GameRoomPage = () => {
    const router = useRouter();

    const [playerName, setPlayerName] = useState('')

    const submitName = (e) => {
        e.preventDefault();
        alert(playerName);
        router.push('/');
    }

  return (
      <div>
          
          <form onSubmit={submitName}>
              <label>What your name?</label>
              <br />
              <input type="text" onChange={(e) => setPlayerName(e.target.value)}/>
              <br />

              <button >SUBMIT</button>
          </form>
    </div>
  )
}

export default GameRoomPage