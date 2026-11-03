import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <div className="text-2xl font-bold">Jervy Mercado</div>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
