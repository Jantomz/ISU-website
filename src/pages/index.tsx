import { useState } from "react";
import Gallery from "~/components/gallery";
import IndexHero from "~/components/indexHero";

export default function Home() {
  const [carouselItem, setCarouselItem] = useState(0);
  const handleBack = () => {
    if (carouselItem > 0) {
      setCarouselItem(carouselItem - 1);
    } else {
      setCarouselItem(3);
    }
  };

  const handleForward = () => {
    if (carouselItem < 3) {
      setCarouselItem(carouselItem + 1);
    } else {
      setCarouselItem(0);
    }
  };

  return (
    <main className="container">
      <IndexHero></IndexHero>
      {/* First Body */}
      <h3 className=" pt-24 text-5xl">What is Computer Vision?</h3>
      <p className="py-6 text-xl">
        Computer vision, a branch of machine learning and artificial
        intelligence, is a fast growing field where machines are given visual
        input for processing (IBM). By allowing computers to “see” the world and
        process what it is seeing, it pushes technology towards one of
        humanity’s most valuable senses, sight. With a market value of 22.27
        billion USD, CV is becoming much more accurate with the possibilities of
        99% identification accuracy (Statista).
      </p>
      <h3 className=" pt-24 text-right text-5xl">Simplified Explanation</h3>
      <p className="py-6 text-xl">
        CV has different types of layers for different functionalities, but I
        will focus on classification-type CV. A simple way computers process an
        image is by only using black and white pictures. The brightness of each
        pixel can be converted to their respective values and placed in an
        array. The array can then be analysed for many different types of
        patterns (Simplilearn). The patterns are associated with their
        respective labels for the objects in the images. After many different
        images from a data set and tweaks to the types of template patterns, a
        model is compiled that knows the patterns of pixels for specific shapes
        (V7Labs). When novel images are given to the model, it compares the new
        patterns to known patterns and gives a similarity rating. The label with
        the highest matching rate is the classification given to the image
        (IBM).
      </p>
      <div className="pt-4 text-center text-2xl">Helpful Video!</div>
      <iframe
        className="m-8 mx-auto"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-4E2-0sxVUM?start=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      {/* Second Body */}
      <h3 className="max-w-2xl pt-24 text-5xl">Congruent Fields of Study</h3>
      <p className="pt-12 text-xl">
        To build up to its current-day abilities, CV needed a base of fields to
        learn from!
      </p>
      <main className="monitor mx-36 mt-24 flex items-center justify-center rounded-md border-[36px] border-solid border-techGreen bg-mustyGray">
        <button onClick={handleBack}>
          <span className="material-symbols-outlined p-4">arrow_back_ios</span>
        </button>

        <section className="overflow-hidden">
          {carouselItem === 0 && (
            <>
              <h3 className="flex flex-col items-center pt-12 text-center text-5xl">
                Digital Imaging
              </h3>

              <ul className="p-6 text-sm duration-700 ease-in-out">
                <li className="list-disc">
                  Learning how to get visual input to CV models for processing
                  is the first step to vision (Microsoft).
                </li>
                <li className="list-disc">
                  It is vital for computer vision to receive the data with as
                  much detail as possible, so that the models can be precise.
                </li>
                <li className="list-disc">
                  If other types of imaging can also be researched and developed
                  (IR and sound wave imaging), computers can receive more than
                  the typical visual information.
                </li>
                <li className="list-disc">
                  Simply put, to allow computers to see, you need to have
                  digital stuff to look at!
                </li>
              </ul>
            </>
          )}
          {carouselItem === 1 && (
            <>
              <h3 className="flex flex-col items-center pt-12 text-center text-5xl">
                Mathematics
              </h3>
              <ul className="p-6 text-sm duration-700 ease-in-out">
                <li className="list-disc">
                  The study of graphs and functions in mathematics is important
                  to figure out how computers can model the patterns they see
                  (Krishnamurthy).
                </li>
                <li className="list-disc">
                  Studying functions that mimic neurons is a good way to
                  determine the action potential (possibility to fire a signal)
                  of a node in an ML model.
                </li>
                <li className="list-disc">
                  Each node has a certain threshold at which it will be
                  processed. This threshold is calculated using complex
                  functions through multiple layers of "neurons" or nodes.
                </li>
              </ul>
            </>
          )}
          {carouselItem === 2 && (
            <>
              <h3 className="flex flex-col items-center pt-12 text-center text-5xl">
                Neuroscience
              </h3>
              <ul className="p-6 text-sm duration-700 ease-in-out">
                <li className="list-disc">
                  Biological vision offers insights into how we can structure
                  computer vision. There is a start with basic lines and shapes
                  like David Marr established in 1969 (Check "History" tab in
                  the navbar!) (Statista).
                </li>
                <li className="list-disc">
                  Our brains process the outlines of objects before the details!
                  That is the same process used for CV!
                </li>
                <li className="list-disc">
                  The study of CV was born from the study of optical functions
                  in a cat (check the "History" in the navbar!) (MotionMetrics).
                </li>
                <li className="list-disc">
                  The brain is a complex machine and CV mimics such a system
                  with mechanical minds.
                </li>
              </ul>
            </>
          )}

          {carouselItem === 3 && (
            <>
              <h3 className="flex flex-col items-center pt-12 text-center text-5xl">
                Hardware
              </h3>
              <ul className="p-6 text-sm duration-700 ease-in-out">
                <li className="list-disc">
                  CV requires a large amount of storage, processing power and
                  electricity.
                </li>
                <li className="list-disc">
                  The amount of storage humans have in their brains is extremely
                  high, as there are a thousand trillion synapses for
                  connections in our brain (Zhang).
                </li>
                <li className="list-disc">
                  The necessity to process all the individual patterns must be
                  done with extremely powerful processing units.
                </li>
                <li className="list-disc">
                  The improvement of CPUs and memory over the decades has
                  increased the ceiling on CV.
                </li>
              </ul>
            </>
          )}
          <div className="m-auto py-2 text-center">{carouselItem + 1}/4</div>
        </section>

        <button onClick={handleForward}>
          <span className="material-symbols-outlined p-4">
            arrow_forward_ios
          </span>
        </button>
      </main>

      <main className="stand m-auto h-24 w-16 bg-mustyGray"></main>
      <main className="stand m-auto h-6 w-72 rounded-md bg-mustyGray"></main>
      {/* Third Body */}
      <h3 className="pt-24 text-5xl">Personal Experiences</h3>
      <ul className="py-6 text-xl">
        <li className="list-disc p-2">
          I have used tensorflow keras with python to set up a deep learning
          program that creates a CV ML model to classify foods based on my data
          set of food categories (Tensorflow).
        </li>
        <li className="list-disc p-2">
          My team and I used ReLu functions for each layer to act as the
          function that determined the action potential of the nodes to mimic
          neurons (Krishnamurthy).
        </li>
        <a
          href="https://devpost.com/software/pentous"
          className="text-mustyGray underline decoration-mustyGray"
          target="_blank"
        >
          Click here to see the devpost of my first hackathon! We have gotten
          better since!
        </a>
        <p className="pt-8">This video was my excellent starting point!</p>
        <iframe
          className="m-8 mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jztwpsIzEGc?start=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <p className="py-3">
          Our model, named JART, was part of our first ever hackathon project.
          JART was not particularly amazing, but had a training accuracy rate of
          99%. The problem is that this rate was only achieved with the training
          set, not with new data (Renotte).
        </p>
        <p className="py-3">
          Images had to be scaled before they could be processed. This was done
          by unlocking the aspect ratio and forcing the image to be within a
          specific square ratio.
        </p>
      </ul>
      <p className="p-16 text-center text-2xl text-seashell">
        We used: Typescript (T3 Stack), CSS (Really just Tailwind though),
        React, Python, Tensorflow Keras and HTML to create Pentous!
      </p>
      <Gallery></Gallery>
      <div className="main"></div>
    </main>
  );
}
