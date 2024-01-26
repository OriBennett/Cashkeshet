import Link from "next/link";

const WriteTurnPage = () => {
  return (
      <main className="main-container">
          
          WriteTurnPage
      
          <hr />
          <Link href="/DrawTurn">
              <button>DrawTurn</button>
          </Link>
          <Link href="/ResultsView">
              <button>ResultsView</button>
          </Link>
      
      
      </main>
  )
}

export default WriteTurnPage