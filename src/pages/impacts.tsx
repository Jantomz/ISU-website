import Link from "next/link";
import { useState } from "react";
import ImpactsHero from "~/components/impactsHero";

export default function Impacts() {
  const [showBit, setShowBit] = useState(1);

  return (
    <main className="container">
      <ImpactsHero />

      <div>
        <h3 className="w-100% pt-24 text-5xl">Society</h3>
        <div className="flex justify-center">
          <div className="m-6 flex flex-col rounded-md bg-seashell p-4">
            <h1 className="text-center text-xl text-black">Impacts</h1>
            <p className="pb-3 text-black">
              For general society and the culture surrounding travel and
              automobiles, there is a grand shift towards autonomous vehicles
              (Hill).
            </p>
            <p className=" text-black">
              Vehicles are able to see all obstacles and obstructions
              (pedestrians, objects and other vehicles) and process them
              simultaneously to produce the safest route (AugmentedStartups).
            </p>
          </div>

          <div className="m-6 flex flex-col flex-wrap rounded-md bg-techGreen p-3">
            <h1 className="text-center text-xl text-black">Careers</h1>
            <p className="pb-3 text-black">
              Each corporation will want to create a model specific to their own
              needs, so the job market in computer science would increase
              (Indeed, uTorontoA)!
            </p>
            <p className="text-black">
              For example, a new automobile company might want to create their
              own CV program that can assess road smoothness and roughness for
              enjoyable travel.
            </p>
          </div>
        </div>
        <h1 className="pt-8 text-center text-lg">
          This was my first introduction to AI when I was 10! I love this video
          and I think it explains well some of the scary aspects of AI (these
          can be applied to CV in similar ways).
        </h1>
        <iframe
          className="m-8 mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7Pq-S557XQU?start=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <h3 className="w-100% pt-24 text-right text-5xl">Economy</h3>
        <div className="flex justify-center">
          <div className="m-6 flex flex-col flex-wrap rounded-md bg-seashell p-3">
            <h1 className="text-center text-xl text-black">Impacts</h1>
            <p className="pb-3 text-black">
              With autonomous vehicles helping society (like mentioned above),
              the world’s automobile industry will evolve again; like when
              horses and biological muscles evolved to cars and mechanical
              muscles (AugmentedStartups).
            </p>
            <p className=" text-black">
              With AR using CV, the products and services in VR and the
              entertainment industry grow<br></br>This flow of cash can bring
              opportunities to local economies (Forbes).
            </p>
            <h2 className="py-4 text-xl text-black">Negative:</h2>
            <p className=" text-black">
              Computer vision and machine learning has a big downside in
              possibly reducing the relevance of human labor and jobs. Computers
              are gaining the ability to process the physical world without
              human input.
            </p>
          </div>
          <div className="m-6 flex w-4/5 flex-col flex-wrap rounded-md bg-mustyGray p-3">
            <h1 className="text-center text-xl text-black">Solutions</h1>
            <p className="pb-3 text-black">
              The prevention to the problem of labour relies heavily on workers
              being able to take advantage of their power before they are
              replaced (protests and workforce protection laws like those of the
              Hollywood Writers Strike) (Coyle).
            </p>
            <p className=" text-black">
              There must also be an increase in jobs that are currently out of
              reach for computer vision (nurses, teachers, social workers).
            </p>
          </div>
        </div>

        <h3 className="w-100% pt-24 text-5xl">Environment</h3>
        <div className="flex justify-center">
          <div className="m-6 flex flex-col flex-wrap rounded-md bg-seashell p-3">
            <h1 className="text-center text-xl text-black">Impacts</h1>
            <p className="pb-3 text-black">
              Computer vision can detect the emission output from factories,
              power plants, vehicles, livestock and neighbourhoods to then be
              used as data for emission reduction plans (LinkedIn).
            </p>
            <p className="pb-3 text-black">
              Computer vision can monitor ecosystems and their health with
              satellite and surveillance imagery (LinkedIn).
            </p>
            <h2 className="py-4 text-xl text-black">Negative:</h2>
            <p className=" pb-3 text-black">
              The push towards artificial intelligence increases the use of
              energy.
            </p>
            <p className="text-black">
              The current state of the world does not offer great means to
              acquire fast and reliable energy apart from burning fossil fuels.
            </p>
          </div>
          <div className="m-6 flex w-4/5 flex-col flex-wrap rounded-md bg-mustyGray p-3">
            <h1 className="text-center text-xl text-black">Solutions</h1>
            <p className="pb-3 text-black">
              The best way to combat the negative aspect of burning fossil fuels
              is to push towards green energy in anticipation of the future
              (LinkedIn).
            </p>
            <p className=" text-black">
              There may be no way to stop the AI revolution, so the best
              solution may be to invest in green infrastructure to keep up with
              high energy demands.
            </p>
            <p className=" text-black">
              This would be transitioning to more renewable sources of energy
              and reducing large industries' usages (the typical plans).
            </p>
            <br></br>
            <p className=" text-black">
              An interesting comparison is the large growth of cryptocurrency
              mining to AI for energy usage. Cryptocurrency uses a large amount
              of energy and encourages people to act without environmental
              stewardship. With some places banning crypto-mining, a similar
              process can be taken for CV if it runs too far!
            </p>
          </div>
        </div>

        <h3 className="w-100% pt-24 text-right text-5xl">Human Health</h3>
        <div className="flex justify-center">
          <div className="m-6 flex flex-col flex-wrap rounded-md bg-seashell p-3">
            <h1 className="text-center text-xl text-black">Impacts</h1>
            <p className="pb-3 text-black">
              Cancer identifying CV programs are used to detect tumours in MRI’s
              (Mihajlovic).
            </p>
            <p className="text-black">
              Computer vision allows subtle patterns in medical imaging to be
              picked up, increasing the rate of successful early catches for
              health complications (AugmentedStartups, Javaid).
            </p>
            <h2 className="py-4 text-xl text-black">Negative:</h2>
            <p className=" text-black">
              Computer vision gives humans the ability to augment reality at
              higher qualities. Computers being able to process images allows
              for high-tech vision devices! People may fall into isolation if
              too attached to virtual reality, decreasing mental well-being.
            </p>
          </div>
          <div className="m-6 flex flex-col flex-wrap rounded-md bg-mustyGray p-3">
            <h1 className="text-center text-xl text-black">Solutions</h1>
            <p className="pb-3 text-black">
              The major solution to this problem would be summed up in the fact
              that more awareness about mental health and technology use should
              be advertised to the public.
            </p>
            <p className="pb-3 text-black">
              Additionally, the problem should be used against itself. It is
              possible that AR can actually be used to treat isolation by giving
              humans a chance to connect online when it is much more difficult
              to connect in-person (like during the Covid pandemic)!
            </p>
          </div>
        </div>
        <div className="m-6 flex flex-col flex-wrap rounded-md bg-techGreen p-3">
          <h1 className="text-center text-xl text-black">Careers</h1>
          <p className="text-black">
            "Computer science doctors" may arise due to the interconnection
            between human health and mechanical health.
          </p>
          <p className="text-black">
            With the new development in biotechnology, there is a vast field
            ready to be explored. For example, nurses who can create programs
            for patients' microbots to administer medicine may be a future job
            (Forbes).
          </p>
        </div>

        <h3 className="w-100% pt-24 text-right text-5xl">Ethics</h3>
        <div className="flex justify-center">
          <div className="m-6 flex flex-col flex-wrap rounded-md bg-seashell p-3">
            <h1 className="text-center text-xl text-black">
              Negative Implications
            </h1>
            <p className="pb-3 text-black">
              Using computers to “see” and analyse visual elements is a prime
              zone for espionage and privacy concerns in a consumers day to day
              life (LinkedIn).
            </p>
            <p className="pb-3 text-black">
              Big companies are already using computer vision to access data
              about a user's social media output for targeted advertising.
            </p>
            <p className=" pb-3 text-black">
              Computer vision can be used to discriminate against different
              groups for insurance or other services.
            </p>

            <p className=" pb-3 text-black">
              Having your face logged on security cameras using computer vision
              leads to leaks in privacy of location and identification
              (LinkedIn).
            </p>
          </div>
          <div className="m-6 flex flex-col flex-wrap rounded-md bg-mustyGray p-3">
            <h1 className="text-center text-xl text-black">Solutions</h1>
            <p className="pb-3 text-black">
              There will need to be cut backs on the permissions of computer
              systems. Laws must be established, even though they may take away
              some benefits of CV (LinkedIn).
            </p>
            <p className="pb-3 text-black">
              Opt-in must be mandatory for service providers that have computer
              vision, as it should be a system where the user is assumed to give
              no consent, unless explicitly mentioned otherwise.
            </p>
            <p className="pb-3 text-black">
              The general practice of caution and licensable CV models should be
              controlled when used at a corporate level.
            </p>
          </div>
        </div>
        <div className="m-6 flex flex-col flex-wrap rounded-md bg-techGreen p-3">
          <h1 className="text-center text-xl text-black">Careers</h1>
          <p className="pb-3 text-black">
            Jobs in legal action for and against CV and AI may become
            commonplace (Srivasta).
          </p>
          <p className="text-black">
            There also may be a demand for people to properly evaluate and train
            CV models to prevent discrimination. However, I predict this job
            will only exist for a short while before CV models begin evaluating
            themselves. This approach is like Ian Goodfellow's GAN system of
            training models by referencing each other (MotionMetrics).
          </p>
        </div>
      </div>
      <h1 className="p-5 text-center text-3xl text-seashell">
        Post-Secondary Requirements for Career Options!
      </h1>
      <div className="flex justify-center gap-1">
        <button
          className={`bg-nightPurple p-4 ${
            showBit === 1 ? `bg-opacity-70` : `hover:bg-mustyGray`
          }`}
          onClick={() => setShowBit(1)}
        >
          Ethical, Law and Data Analysis
        </button>
        <button
          className={`bg-nightPurple p-4 ${
            showBit === 2 ? `bg-opacity-70` : `hover:bg-mustyGray`
          }`}
          onClick={() => setShowBit(2)}
        >
          Implementation, Training and Maintenance
        </button>
        <button
          className={`bg-nightPurple p-4 ${
            showBit === 3 ? `bg-opacity-70` : `hover:bg-mustyGray`
          }`}
          onClick={() => setShowBit(3)}
        >
          Theoretical/Mathematical
        </button>
      </div>
      {showBit === 1 ? (
        <div className="bg-techGreen p-8">
          <h1 className="text-bold pb-4 text-xl text-black">
            For the ethical, law and data analysis portions of computer vision
            and artificial intelligence, the requirements of education will be
            based around:
          </h1>
          <ul>
            <li className="list-disc text-lg text-black">
              Law school in conjunction with the understanding of mechanical
              minds and computer science (Indeed).
            </li>
            <li className="list-disc text-lg text-black">
              There will need to be an understanding of the rights of a machine
              and its users.
            </li>
            <li className="list-disc text-lg text-black">
              Discriminatory biases will be a part of the job, and a
              post-secondary education in ethnic studies may be useful to
              understand the different ways datasets can be trained poorly.
            </li>
            <li className="list-disc text-lg text-black">
              For this segment, you will most likely require a double major in
              computer science and any of these subjects: law, ethics,
              philosophy, racial studies... as these career opportunities are so
              novel that it’s not something that institutions commonly
              (currently) provide (Indeed).
            </li>
            <Link
              className="text-lg underline decoration-mustyGray"
              target="_blank"
              href="https://osgoodepd.ca/professional-development/short-courses-and-conferences/artificial-intelligence-ai-and-the-law/"
            >
              Osgoode York is innovating with this program!
            </Link>
          </ul>
        </div>
      ) : null}
      {showBit === 2 ? (
        <div className="bg-techGreen p-8">
          <h1 className="text-bold pb-4 text-xl text-black">
            For the implementation, creation, training, testing and maintenance
            of CV, it will require many of the new programs offered recently at
            universities in AI and ML:
          </h1>
          <ul>
            <li className="list-disc text-lg text-black">
              You will need a specialty in computer sciences, mathematics and
              specifically AI
            </li>
            <li className="list-disc text-lg text-black">
              An example of a real post-secondary education segment is this
              department at the University of Toronto:{" "}
              <Link
                className="text-seashell underline decoration-mustyGray"
                href="https://www.engineering.utoronto.ca/research-innovation/industry-partnerships-with-u-of-t-engineering/data-analytics-artificial-intelligence/"
              >
                DATA ANALYTICS & ARTIFICIAL INTELLIGENCE
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
      {showBit === 3 ? (
        <div className="bg-techGreen p-8">
          <h1 className="text-bold pb-4 text-xl text-black">
            There is also a need to understand the inner workings of the
            mathematical portion of CV, as that allows for you to break and
            rebuild the structure:
          </h1>
          <ul>
            <li className="list-disc text-lg text-black">
              Being able to create your own CV with pure mathematical logic is
              something that very few can do, and is a huge asset to
              organisations that want cutting-edge technology.
            </li>
            <li className="list-disc text-lg text-black">
              A great encapsulation of this idea is UToronto's Master of Applied
              Science Department.
            </li>
            <li className="list-disc text-lg text-black">
              There are requirements for the Masters (
              <Link
                href="https://mscac.utoronto.ca/concentrations/applied-math/"
                className="text-seashell underline decoration-seashell"
              >
                UToronto
              </Link>
              ):
            </li>
            <ul className="pl-12">
              <li className="list-disc text-lg text-black">
                Complete six graduate level courses (totalling 3.0 Full Course
                Equivalents (FCEs)).
              </li>
              <li className="list-disc text-lg text-black">
                Two courses (1.0 FCEs) chosen from the Department of Mathematics
                course schedule. These must be MAT-1000 level courses or higher.
              </li>
              <li className="list-disc text-lg text-black">
                Two courses (1.0 FCEs) chosen from the Department of Computer
                Science’s (CSC designator) course schedule.
              </li>
              <li className="list-disc text-lg text-black">
                Two required courses (1.0 FCEs): Communication for Computer
                Scientists (CSC 2701H) and Technical Entrepreneurship (CSC
                2702H).
              </li>
            </ul>
            <li className="list-disc text-lg text-black">
              Students also need an 8 month internship graded on a pass/fail.
              They are awarded by your internship supervisor,
              <strong> so be nice to them!</strong>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="main"></div>
    </main>
  );
}
