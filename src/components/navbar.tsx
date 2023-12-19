import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-32 bg-techGreen p-8">
      <Link href="/" className="text-xl">
        Overview
      </Link>
      <Link href="/history" className="text-xl">
        History
      </Link>
      <Link href="/impacts" className="text-xl">
        Impacts
      </Link>
    </nav>
  );
}
