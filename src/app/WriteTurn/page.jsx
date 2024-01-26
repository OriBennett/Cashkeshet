import Link from "next/link";

const WriteTurnPage = () => {
  return (
      <div>
          
          WriteTurnPage
      
          <hr />
          <Link href="/DrawTurn">
              <button>DrawTurn</button>
          </Link>
          <Link href="/ResultsView">
              <button>ResultsView</button>
          </Link>
      
      
      </div>
  )
}

export default WriteTurnPage