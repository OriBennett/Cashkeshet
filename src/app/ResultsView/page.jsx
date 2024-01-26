import Link from "next/link";

const ResultsViewPage = () => {
  return (
    <main className="main-container flex-container">
      ResultsViewPage
      <hr />
      <div className="flex-container">
        <Link href="/">
          <button>New Game</button>
        </Link>
      </div>
    </main>
  );
};

export default ResultsViewPage;
