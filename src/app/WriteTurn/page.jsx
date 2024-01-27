"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// import fetchRandomDoodle from "../lib/getDoodleFromApi";
import { categories } from "../data/data";

const WriteTurnPage = () => {
  const [guess, setGuess] = useState("");
  const [randomDoodle, setRandomDoodle] = useState("");
  // const [item, setItem] = useState('');


  useEffect(() => {
    const fetchRandomDoodle = async (category) => {
      const apiUrl = `https://pixabay.com/api/?key=21054801-09e9951a2ca09cf628ee27e12&q=black+white+${category}&image_type=illustration`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch doodle');
        }
        const doodleData = await response.json();
        setRandomDoodle(doodleData.hits[0].largeImageURL); // Update randomDoodle state with fetched doodle data
      } catch (error) {
        console.error('Error fetching doodle:', error);
      }
    };
    const rand = Math.floor(Math.random() * 100)
    console.log( localStorage.getItem('Cashkeshet'))
    fetchRandomDoodle(localStorage.getItem('Cashkeshet'))

  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 67) { // Check if the pressed key is "c"
        alert(` ${localStorage.getItem('Cashkeshet')}`);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <main className="main-container flex-container">
      {
        randomDoodle &&
        <Image priority width={300} height={300} src={randomDoodle} alt={'??'} />
      }
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
