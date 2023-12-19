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
              automobiles, there is a grand shift towards autonomous vehicleU
            </p>
            <p className=" text-black">
              Vehicles are able to see all obstacles and obstructions
              (pedestrians, objects and other vehicles and process them
              simultaneously to produce the safest route and fast crises
              prevention (AugmentedStartups)
            </p>
          </div>

          <div className="m-6 flex flex-col flex-wrap rounded-md bg-techGreen p-3">
            <h1 className="text-center text-xl text-black">Careers</h1>
            <p className="pb-3 text-black">
              Career opportunities to create the program models that create CV
              models will be necessary for individual organisations (Indeed,
              uToronto)
            </p>
            <p className="pb-3 text-black">
              Each organisation will want to create a model specific to their
              own needs, so the career to create the programs in which this
              models can be created and trained is essential (Indeed, uTorontoA)
            </p>
            <p className="text-black">
              For example, a new automobile company wants to create their own
              model that can assess road smoothness and roughness for enjoyable
              travel will need specific types of programs to train their model
              on 3D road
            </p>
          </div>
        </div>
        <h1 className="pt-8 text-center text-lg">
          This was my first introduction to AI when I was 10! I love this video
          and I think it explains excellently the negative aspects of AI in
          general (these can be applied to CV)
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
              the world’s automobile industry will evolve once again (from
              horses and biological muscles to cars and mechanical muscles)
              (AugmentedStartups)
            </p>
            <p className=" text-black">
              With AR using CV, the industry for entertainment, products and
              services in VR grows substantially This flow of cash can bring
              opportunities to local economies with specialised industries while
              also lifting up the global economy
            </p>
            <h2 className="py-4 text-xl text-black">Negative:</h2>
            <p className=" text-black">
              Computer vision and machine learning has a big downside in
              possibly reducing the relevance of human labor, which is a huge
              way many people make a living. (But less labor can also be seen as
              a positive!)
            </p>
          </div>
          <div className="m-6 flex w-4/5 flex-col flex-wrap rounded-md bg-mustyGray p-3">
            <h1 className="text-center text-xl text-black">Solutions</h1>
            <p className="pb-3 text-black">
              The prevention to the problem of labour relies heavily on workers
              being able to take advantage of their power before they are being
              replaced (protests and workforce protection laws)
            </p>
            <p className=" text-black">
              Additionally, there must be an increase in high quality jobs that
              are currently out of reach for computer vision (nursing, teaching,
              social workers)
            </p>
          </div>
        </div>

        <h3 className="w-100% pt-24 text-5xl">Environment</h3>
        <div className="flex justify-center">
          <div className="m-6 flex flex-col flex-wrap rounded-md bg-seashell p-3">
            <h1 className="text-center text-xl text-black">Impacts</h1>
            <p className="pb-3 text-black">
              Computer vision can detect and quantify the pollution from
              different areas without the need of human supervision (LinkedIn)
              <br></br>
              Computer vision can detect the emission output from factories,
              power plans, vehicles, livestock and neighbourhoods to then be
              used as data for emission reduction plans (LinkedIn)
            </p>
            <p className="pb-3 text-black">
              Computer vision can monitor ecosystems and their health with
              different satellite and surveillance imagery (LinkedIn)
            </p>
            <h2 className="py-4 text-xl text-black">Negative:</h2>
            <p className=" pb-3 text-black">
              With all these positives, the only major downside of computer
              vision is its push towards artificial intelligence increases use
              of machines, which necessitates the use of energy
            </p>
            <p className="text-black">
              The current state of the world does not offer great means to
              acquire this energy apart from emissions in burning fossil fuels
            </p>
          </div>
          <div className="m-6 flex w-4/5 flex-col flex-wrap rounded-md bg-mustyGray p-3">
            <h1 className="text-center text-xl text-black">Solutions</h1>
            <p className="pb-3 text-black">
              The best way to combat the negative aspect of burning fossil fuels
              is to push towards green energy
            </p>
            <p className=" text-black">
              We need to invest in the future by building the infrastructure for
              green energy now, thus creating proper means to not depend on
              emission based energy in the future especially with general energy
              usage increasing, there is a high demand for energy, and this
              results in more pollution if energy does not get swapped out
            </p>
          </div>
        </div>

        <h3 className="w-100% pt-24 text-right text-5xl">Human Health</h3>
        <div className="flex justify-center">
          <div className="m-6 flex flex-col flex-wrap rounded-md bg-seashell p-3">
            <h1 className="text-center text-xl text-black">Impacts</h1>
            <p className="pb-3 text-black">
              Cancer identifying CV programs are used to detect tumours in MRI’s
              (Mihajlovic)
            </p>
            <p className="text-black">
              Doctors are humans, and humans are not the greatest in picking up
              every subtle pattern. Thus, computer vision allows subtle patterns
              in medical imaging to be picked up, increasing the rate of
              successful early catches on diseases or other possible
              complications (AugmentedStartups)
            </p>
            <h2 className="py-4 text-xl text-black">Negative:</h2>
            <p className=" text-black">
              With computer vision giving humans the ability to augment their
              reality, they may fall into isolation and less interaction with
              true reality, decreasing mental well-being
            </p>
          </div>
          <div className="m-6 flex flex-col flex-wrap rounded-md bg-mustyGray p-3">
            <h1 className="text-center text-xl text-black">Solutions</h1>
            <p className="pb-3 text-black">
              A solution to this problem can be summed up in the fact that more
              awareness about this possibility should be advertised to the
              public. Just like mental health has been destigmatized with public
              announcements, awareness of the mental dangers of AR from hightech
              CV should be promoted
            </p>
            <p className="pb-3 text-black">
              It is possible that AR can actually be used to treat isolation by
              giving humans a chance to connect when it is much more difficult
              to connect in-person
            </p>
          </div>
        </div>
        <div className="m-6 flex flex-col flex-wrap rounded-md bg-seashell p-3">
          <h1 className="text-center text-xl text-black">Careers</h1>
          <p className="text-black">
            Some computer science doctors may begin to arise due to the
            interconnection between human health and mechanical health
          </p>
          <p className="text-black">
            With the new development in biotechnology, there is a vast field
            ready to be explored. For example, nurses who can create programs
            for patients microbots to provide medicine may very well be a future
            requirement.
          </p>
        </div>

        <h3 className="w-100% pt-24 text-right text-5xl">Ethics</h3>
        <div className="flex justify-center">
          <div className="m-6 flex flex-col flex-wrap rounded-md bg-seashell p-3">
            <h1 className="text-center text-xl text-black">Negative Impacts</h1>
            <p className="pb-3 text-black">
              Using computers to “see” and analyse visual elements is a prime
              zone for espionage and privacy concerns in a consumers day to day
              lives
            </p>
            <p className="pb-3 text-black">
              Big companies are already using computer vision to access data
              about a users social media output for target advertising
            </p>
            <p className=" pb-3 text-black">
              It is possible that in the future, computer vision can be used to
              discriminate against different groups for insurance or otherwise
              due to images and videos that their social media or camera
              elements have picked up
            </p>
            <p className=" pb-3 text-black">
              It is possible that in the future, computer vision can be used to
              discriminate against different groups for insurance or otherwise
              due to images and videos that their social media or camera
              elements have picked up
            </p>
            <p className=" pb-3 text-black">
              Having your face logged on security cameras and remembered using
              computer vision leads to leaks in privacy of location and
              identification (LinkedIn)
            </p>
          </div>
          <div className="m-6 flex flex-col flex-wrap rounded-md bg-mustyGray p-3">
            <h1 className="text-center text-xl text-black">Solutions</h1>
            <p className="pb-3 text-black">
              To prevent the ethical issues of privacy, there will need to be
              cut backs on the permissions of computer systems and their vision
              in all aspects of life, even though they may take away some
              benefits of the system (LinkedIn)
            </p>
            <p className="pb-3 text-black">
              Opt-in must be mandatory for service providers that have computer
              vision, as it should be a system where the user is assumed to give
              no consent, unless explicitly mentioned otherwise
            </p>
            <p className="pb-3 text-black">
              The general practice of caution and licensable programs and models
              with computer vision should be surveilled, there is very little
              ability to predict what can happen with this new technology
            </p>
          </div>
        </div>
        <div className="m-6 flex flex-col flex-wrap rounded-md bg-seashell p-3">
          <h1 className="text-center text-xl text-black">Careers</h1>
          <p className="pb-3 text-black">
            In these cases, jobs in legal action for and against CV and AI will
            become commonplace
          </p>
          <p className="text-black">
            There will always be a demand for people to properly evaluate and
            train CV models to prevent discrimination. I predict this job will
            only exist for a short while before CV models begin evaluating other
            CV models just like Ian Goodfellow's approach to training models
            against each other
          </p>
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
              minds and computer science
            </li>
            <li className="list-disc text-lg text-black">
              There will need to be an understanding of the rights of a machine
              and its uses
            </li>
            <li className="list-disc text-lg text-black">
              Being able to analyse data in conjunction with understanding how
              computer vision (and human vision) will see the result is
              important
            </li>
            <li className="list-disc text-lg text-black">
              Discriminatory biases are an important part of the job of
              reviewing data, and a post- secondary education in ethnic studies
              would be useful to understand the different ways data-sets may be
              trained incorrectly
            </li>
            <li className="list-disc text-lg text-black">
              For this segment, you will basically need a double major in these
              fields, as these career opportunities are so novel that it’s not
              something that institutions provide readily
            </li>
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
              Specialty in computer sciences, mathematics and specifically AI
            </li>
            <li className="list-disc text-lg text-black">
              There will need to be an understanding of the rights of a machine
              and its uses
            </li>
            <li className="list-disc text-lg text-black">
              Being able to write scripts that can create convolutional neural
              networks that build CV models is crucial for this career
            </li>
            <li className="list-disc text-lg text-black">
              An example of a real post-secondary education segment is this
              department at the University of Toronto: (uToronto)
            </li>
            <li className="list-disc text-lg text-black">
              University of Waterloo definitely uses the basis of computer
              science and technology to build into AI, which leads into machine
              learning, neural networks and then finally the specifics of
              computer vision (LinkedIn)
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
              A great encapsulation of this course is UToronto's Master of
              Applied Science Department
            </li>
            <li className="list-disc text-lg text-black">
              Being able to analyse data in conjunction with understanding how
              computer vision (and human vision) will see the result is
              important
            </li>
            <li className="list-disc text-lg text-black">
              There are these requirements from their site (
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
                Equivalents (FCEs))
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
              They are awarded by your internship supervisor, so be nice to
              them!
            </li>
          </ul>
        </div>
      ) : null}
    </main>
  );
}
