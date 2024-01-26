import Link from "next/link";

const DrawTurnPage = () => {
  return (
    <div>

      DrawTurnPage
      <hr />
      <Link href="/WriteTurn">
        <button>WriteTurn</button>
      </Link>
      <Link href="/ResultsView">
        <button>ResultsView</button>
      </Link>

    </div>
  )
}

export default DrawTurnPage