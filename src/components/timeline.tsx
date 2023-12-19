import Link from "next/link";

export default function Timeline() {
  return (
    <main className="container">
      {/* Part One */}
      <div className="flex justify-center">
        <div className="w-1/2 border-r-2 border-r-techGreen p-4 text-right">
          <h1 className="py-4 text-3xl font-bold">1956 AI Seminar</h1>
          The first instance of computer vision was introduced at a Dartmouth
          College summer seminar on Artificial Intelligence (Srivasta).
          <p className="pt-8 text-xl">
            This is deemed the official conception of AI, CV and ML (by
            Dartmouth... and many other scientists)!
          </p>
        </div>

        <div className="w-1/2 p-4">
          <img
            className="rounded-lg"
            src="https://callisto.ggsrv.com/imgsrv/FastFetch/UBER1/ZI-2483-2006-WIN00-IDSI-86-1"
            alt="..."
          ></img>
        </div>
      </div>

      {/* Part Two */}

      <div className="flex justify-center">
        <div className="w-1/2 border-r-2 border-r-techGreen p-4 text-right">
          <img
            className="rounded-lg"
            src="https://www.cdnmedhall.ca/sites/default/files/2021-03/David%20Hubel%20Timeline.jpg"
            alt="..."
          ></img>
        </div>
        <div className="w-1/2 p-4">
          <h1 className="py-4 text-3xl font-bold">1959 Cat Vision</h1>
          <p className="py-4">
            Harvard neurophysiologists David H. Hubel and Torsten Wiesel
            examined the primary visual cortex of a cat by using a
            microelectrode to measure neuron impulses (Srivasta).
          </p>
          <p className="py-4">
            This is the beginnings of mimicking human vision and using biology
            as a congruent field of study!
          </p>
          <img
            className="w-1/2 rounded-lg"
            src="https://i.pinimg.com/originals/9a/3c/3f/9a3c3fb5f73822af8514df07f6676392.gif"
            alt="..."
          ></img>
        </div>
      </div>
      {/* Part Three */}
      <div className="flex justify-center">
        <div className="w-1/2 border-r-2 border-r-techGreen p-4 text-right">
          <h1 className="py-4 text-3xl font-bold">1962 Hough Transform</h1>
          The Hough Transform was a massive breakthrough in pattern recognition
          using functions and mathematics to detect lines (Srivasta).
          <br></br>
          You can read more about the way it accomplishes this and the theory
          here:<br></br>
          <Link
            className="text-lg underline decoration-mustyGray"
            href="https://www.analyticsvidhya.com/blog/2022/06/a-complete-guide-on-hough-transform/#:~:text=Hough%20Transform%20is%20a%20computer,they're%20broken%20or%20obscured."
            target="_blank"
          >
            The Complete Guide on Hough Transform
          </Link>
        </div>
        <div className="w-1/2 p-4"></div>
      </div>

      {/* Part Four */}

      <div className="flex justify-center">
        <div className="w-1/2 border-r-2 border-r-techGreen p-4 text-right">
          <img
            className="rounded-lg"
            src="https://hightechforum.org/wp-content/uploads/2019/01/larry.jpg"
            alt="..."
          ></img>
        </div>
        <div className="w-1/2 p-4">
          <h1 className="py-4 text-3xl font-bold">1963 Lawrence Roberts</h1>
          Computers began visualising and calculating what 3 dimensional vision
          would be like in a 2 dimensional display (Srivasta).
          <p className="text-xl">
            Lawrence “Larry” Roberts, deemed the father of computer vision,
            explored extracting 3D information from 2D views (so that computer
            vision can be applied to our 3D world)!
          </p>
        </div>
      </div>
      {/* Part Five */}
      <div className="flex justify-center">
        <div className="w-1/2 border-r-2 border-r-techGreen p-4 text-right">
          <h1 className="py-4 text-3xl font-bold">1969 David Marr</h1>
          <p>
            David Marr, British neuroscientist, published seminal papers about
            vision and the brain (Srivasta).
          </p>
          <p className="text-xl">
            Coined the ‘stages of vision’ primal sketch, 2.5D sketch and 3D
            sketch
          </p>
          <p className="text-xl">
            This was a good rundown of the way vision is assessed by our brain!
          </p>
        </div>
        <div className="w-1/2  p-4">
          <img
            className="rounded-lg"
            src="https://homepages.inf.ed.ac.uk/rbf/CVonline/LOCAL_COPIES/GOMES1/img1.gif"
            alt="..."
          ></img>
        </div>
      </div>

      {/* Part Six */}

      <div className="flex justify-center">
        <div className="w-1/2 border-r-2 border-r-techGreen p-4 text-right">
          <img
            className="rounded-lg"
            src="https://nico-curti.github.io/NumPyNet/NumPyNet/images/maxpool.gif"
            alt="..."
          ></img>
        </div>
        <div className="w-1/2 p-4">
          <h1 className="py-4 text-3xl font-bold">1990 Max Pooling</h1>
          Yamaguchi (and partner researchers) created max pooling, a filtering
          operation to calculate the values at certain pixel regions so that
          computers can group pixels together (Srivasta).
          <p className="text-lg">
            Max pooling contributed to Convolutional Neural Networks (CNN), a
            work derived from the research of Hubel and Wiesel (from 1959)!
          </p>
        </div>
      </div>

      {/* Part Seven */}
      <div className="flex justify-center">
        <div className="w-1/2 border-r-2 border-r-techGreen p-4 text-right">
          <h1 className="py-4 text-3xl font-bold">2001 Viola Jones</h1>
          <p>
            The Viola Jones face detection framework was proposed by Paul Viola
            and Michael Jones (Srivasta).
          </p>
          <p>
            Bounding faces and detecting their presence in images was a complex
            pattern recognition problem before then, now it is used everywhere
            (think apple and android image face detection)!
          </p>
          <p className="text-lg">
            Simply put, when an image has 2 similarly colored pixel regions
            (eyes) with a long similarly colored pixel region below (mouth) it
            may be a face!
          </p>
        </div>
        <div className="w-1/2 p-4">
          <img
            className="rounded-lg"
            src="https://cdn.technologyreview.com/i/images/Face%20detection.png"
            alt="..."
          ></img>
        </div>
      </div>
      {/* Part Six */}

      <div className="flex justify-center">
        <div className="w-1/2 border-r-2 border-r-techGreen p-4 text-right">
          <img
            className="rounded-lg"
            src="https://wordpress.deeplearning.ai/wp-content/uploads/2021/01/HODLIanGoodfellow-1.jpg"
            alt="..."
          ></img>
        </div>
        <div className="w-1/2 p-4">
          <h1 className="py-4 text-3xl font-bold">2014 Zero Sum Game</h1>
          Ian Goodfellow developed the generative adversarial network (GAN) for
          generative AI and computer vision (Srivasta).
          <p className="pt-4">
            The competition of two neural networks in a zero sum game (the win
            of a player is the loss of another) creates an unsupervised training
            that increases turing ability (ability to fool the “human” factor)
            by using the discriminator (one of the neural networks) which
            verifies the realistic-ness of the other model...
          </p>
          <p className="pt-4">
            Basically... two AI's battled/trained each other to become smarter!
            (Not super accurate, but a fun way to think of it)!
          </p>
        </div>
      </div>
      <h1 className="py-4 text-center text-3xl font-bold">Now</h1>
      <p className="text-center text-xl">
        In today’s world, computer vision is used everywhere! Anytime you take a
        picture on your phone, the CPU processes the faces and objects in the
        picture to categorise them for you! With new processing power from the
        innovations of quantum computers, the future holds amazing (but also
        detrimental) possibilities with CV!
      </p>
      <img
        className="mx-auto my-8 rounded-lg"
        src="https://miro.medium.com/v2/resize:fit:1400/1*8gmgaAkFdI-9OHY5cA93xQ.png"
        alt="..."
      ></img>
    </main>
  );
}
