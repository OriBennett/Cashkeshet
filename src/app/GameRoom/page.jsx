'use client'

import Link from "next/link";
import { useState } from "react";
// import { useRouter } from 'next/navigation';



const GameRoomPage = () => {
    // const router = useRouter();

    const [playerName, setPlayerName] = useState('');
    const [showLinks, setShowLinks] = useState(false);

    const submitName = (e) => {
        e.preventDefault();
        alert('Hello ' + playerName);
        setShowLinks(true)
    }

    return (
        <div>

            <form onSubmit={submitName}>
                <label>What your name?</label>
                <br />
                <input type="text" onChange={(e) => setPlayerName(e.target.value)} />
                <br />

                <button >SUBMIT</button>

                {showLinks ?
                    <>
                        <hr />
                        <div >
                            <Link href="/DrawTurn">
                                <button>DrawTurn</button>
                            </Link>
                            <Link href="/WriteTurn">
                                <button>WriteTurn</button>
                            </Link>
                        </div>
                    </>
                    : null}
            </form>
        </div>
    )
}

export default GameRoomPage