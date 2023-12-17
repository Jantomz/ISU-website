import Link from "next/link";

export default function Footer() {
  return (
    <main className="bg-techGreen flex w-full flex-col items-center justify-center gap-4 p-8">
      <div className="text-4xl">Created with &#9829; by Jaden Zhang</div>
      <Link href="https://google.com" target="_blank" className="text-2xl">
        Resources
      </Link>
    </main>
  );
}
