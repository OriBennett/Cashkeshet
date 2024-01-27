"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// import fetchRandomDoodle from "../lib/getDoodleFromApi";
import { categories } from "../data/data";

const WriteTurnPage = () => {
  const [guess, setGuess] = useState("");
  const [randomDoodle, setRandomDoodle] = useState("");
  const [category, setCategory] = useState(categories[7]);


  useEffect(() => {
    const fetchRandomDoodle = async (category) => {
      const apiUrl = `https://pixabay.com/api/?key=21054801-09e9951a2ca09cf628ee27e12&q=black+white+doodle+dog&image_type=illustration`;
      // const apiUrl = `https://pixabay.com/api/?key=21054801-09e9951a2ca09cf628ee27e12&q=black+white+doodle+${category}&image_type=illustration`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch doodle');
        }
        const doodleData = await response.json();
        console.log('doodleData:', doodleData)
        // console.log('doodleData:', doodleData.hits[Math.floor(Math.random() * doodleData.hits.length)].largeImageURL);
        setRandomDoodle(doodleData.hits[0].largeImageURL); // Update randomDoodle state with fetched doodle data
        // setRandomDoodle(doodleData.hits[Math.floor(Math.random() * doodleData.hits.length)].largeImageURL); // Update randomDoodle state with fetched doodle data
      } catch (error) {
        console.error('Error fetching doodle:', error);
      }
    };
    console.log(categories[Math.floor(Math.random() * categories.length)])
    // setCategory(categories[Math.floor(Math.random() * categories.length)])
    fetchRandomDoodle(); // Call the fetchRandomDoodle function
    console.log('fetchRandomDoodle(category):', fetchRandomDoodle(category))
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 67) { // Check if the pressed key is "c"
        alert(` ${category}`);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [category]);


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
