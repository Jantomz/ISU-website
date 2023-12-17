import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-32 bg-techGreen p-8">
      <Link href="/" className="text-3xl">
        Overview
      </Link>
      <Link href="/history" className="text-3xl">
        History
      </Link>
      <Link href="/impacts" className="text-3xl">
        Impacts
      </Link>
    </nav>
  );
}
