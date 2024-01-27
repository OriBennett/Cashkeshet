"use client";
import Link from "next/link";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { categories } from "./data/data";
import { useEffect, useState } from "react";


export default function Home() {

  const [subject, setSubject] = useState( categories[Math.floor(Math.random() * categories.length)])

  useEffect(() => {

    localStorage.setItem('Cashkeshet', subject)
  },[])

  return (
    <main className="main-container flex-container">
      <h1>Welcome to CashCashIt</h1>
      <img src="welcome.webp"/>
      <br />

      <Link href="/GameRoom">
        <button>Cachkesh It!</button>
      </Link>
    </main>
  );
}
