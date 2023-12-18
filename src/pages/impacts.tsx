import { useState } from "react";
import ImpactsHero from "~/components/impactsHero";

export default function Impacts() {
  const [showBit, setShowBit] = useState(1);

  return (
    <main className="container">
      <ImpactsHero />

      <div>
        <h3 className="w-100% pt-24 text-7xl">Society</h3>
        <div className="flex flex-wrap justify-center">
          <div className="m-12 flex w-1/4 flex-col flex-wrap bg-seashell p-3">
            <h1 className="text-black">Impacts</h1>
            <p className="text-black">HI</p>
          </div>
          <div className="m-12 flex w-1/4 flex-col flex-wrap bg-mustyGray p-3">
            <h1 className="text-black">Solutions</h1>
            <p className="text-black">HI</p>
          </div>
          <div className="m-12 flex w-1/4 flex-col flex-wrap bg-seashell p-3">
            <h1 className="text-black">Careers</h1>
            <p className="text-black">HI</p>
          </div>
        </div>

        <h3 className="w-100% pt-24 text-right text-7xl">Economy</h3>
        <div className="flex flex-wrap justify-center">
          <div className="m-12 flex w-1/2 flex-col flex-wrap bg-seashell p-3">
            <h1 className="text-black">Impacts</h1>
            <p className="text-black">HI</p>
          </div>
          <div className="m-12 flex w-1/4 flex-col flex-wrap bg-mustyGray p-3">
            <h1 className="text-black">Solutions</h1>
            <p className="text-black">HI</p>
          </div>
        </div>

        <h3 className="w-100% pt-24 text-7xl">Environment</h3>
        <div className="flex flex-wrap justify-center">
          <div className="m-12 flex w-1/2 flex-col flex-wrap bg-seashell p-3">
            <h1 className="text-black">Impacts</h1>
            <p className="text-black">HI</p>
          </div>
          <div className="m-12 flex w-1/4 flex-col flex-wrap bg-mustyGray p-3">
            <h1 className="text-black">Solutions</h1>
            <p className="text-black">HI</p>
          </div>
        </div>

        <h3 className="w-100% pt-24 text-right text-7xl">Human Health</h3>
        <div className="flex flex-wrap justify-center">
          <div className="m-12 flex w-1/4 flex-col flex-wrap bg-seashell p-3">
            <h1 className="text-black">Impacts</h1>
            <p className="text-black">HI</p>
          </div>
          <div className="m-12 flex w-1/4 flex-col flex-wrap bg-mustyGray p-3">
            <h1 className="text-black">Solutions</h1>
            <p className="text-black">HI</p>
          </div>
          <div className="m-12 flex w-1/4 flex-col flex-wrap bg-seashell p-3">
            <h1 className="text-black">Careers</h1>
            <p className="text-black">HI</p>
          </div>
        </div>

        <h3 className="w-100% pt-24 text-7xl">Ethics</h3>
        <div className="flex flex-wrap justify-center">
          <div className="m-12 flex w-1/4 flex-col flex-wrap bg-seashell p-3">
            <h1 className="text-black">Impacts</h1>
            <p className="text-black">HI</p>
          </div>
          <div className="m-12 flex w-1/4 flex-col flex-wrap bg-mustyGray p-3">
            <h1 className="text-black">Solutions</h1>
            <p className="text-black">HI</p>
          </div>
          <div className="m-12 flex w-1/4 flex-col flex-wrap bg-seashell p-3">
            <h1 className="text-black">Careers</h1>
            <p className="text-black">HI</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-1">
        <button className="bg-nightPurple p-4" onClick={() => setShowBit(1)}>
          Ethical, Law and Data Analysis
        </button>
        <button className="bg-nightPurple p-4" onClick={() => setShowBit(2)}>
          Implementation, Training and Maintenance
        </button>
        <button className="bg-nightPurple  p-4" onClick={() => setShowBit(3)}>
          Theoretical
        </button>
      </div>
      {showBit === 1 ? (
        <p className="text-black bg-techGreen p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste
          voluptas perspiciatis laboriosam ipsum provident maxime asperiores
          eum, doloremque reiciendis cumque sunt animi facilis reprehenderit?
          Accusantium libero impedit reiciendis aliquid?1
        </p>
      ) : null}
      {showBit === 2 ? (
        <p className="text-black bg-techGreen p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste
          voluptas perspiciatis laboriosam ipsum provident maxime asperiores
          eum, doloremque reiciendis cumque sunt animi facilis reprehenderit?
          Accusantium libero impedit reiciendis aliquid?2
        </p>
      ) : null}
      {showBit === 3 ? (
        <p className="text-black bg-techGreen p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste
          voluptas perspiciatis laboriosam ipsum provident maxime asperiores
          eum, doloremque reiciendis cumque sunt animi facilis reprehenderit?
          Accusantium libero impedit reiciendis aliquid?3
        </p>
      ) : null}
    </main>
  );
}
