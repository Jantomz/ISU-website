import Link from "next/link";

export default function Footer() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-4 bg-techGreen p-8">
      <div className="text-2xl">Created with &#9829; by Jaden Zhang</div>
      <Link
        href="https://docs.google.com/document/d/1BfxnATptMYDse5OSkxZVuEud8WqxzWvC9HfMQrPUJvw/edit?usp=sharing"
        target="_blank"
        className="text-xl underline decoration-mustyGray"
      >
        Resources
      </Link>
    </main>
  );
}
