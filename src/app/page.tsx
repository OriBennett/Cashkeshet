"use client"
import Link from "next/link";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {  
  return (
    <main >
      <h1>Welcome to CashCashIt</h1>


      <mark>Image with details text</mark>
      <br />

      <Link href="/GameRoom">
        <button>Cachkesh It!</button>
      </Link>

      {/*  */}

    </main>
  );
}
