import Gallery from "~/components/gallery";
import IndexHero from "~/components/indexHero";

export default function Home() {
  const handleBack = () => {
    return null;
  };

  const handleForward = () => {
    return null;
  };

  return (
    <main className="container">
      <IndexHero></IndexHero>

      {/* First Body */}
      <h3 className="max-w-2xl pt-24 text-7xl">What is Computer Vision?</h3>
      <p className="py-6 text-2xl">
        Computer vision, a branch of machine learning and artificial
        intelligence, is a fast growing field of study for all industries due to
        its numerous applications and possible benefits for the future (4). To
        begin, computer vision (CV) is a branch of artificial intelligence that
        deals with giving electronic systems the ability to observe and process
        the visual world. By allowing computers to “see” the world and process
        what it is seeing, it pushes technology towards one of humanity’s
        strongest senses, sight. By giving a program many different images in a
        dataset and having the objects labelled, the system can learn what each
        object in an image looks like and can classify future objects. With a
        market value of 22.27 billion, CV is becoming much more accurate with
        the possibilities of 99% identification accuracy (6).
      </p>
      <p className="py-6 text-2xl">
        CV is extremely complex with many different kinds of layers, but it can
        be simplified for the sake of my own broad current understanding. CV has
        many different types of layers for different functionalities, but I will
        focus on classification-type CV. A simple way computers process an image
        is by only using black and white high contrast. The brightnesses of each
        pixel can be converted to their respective numbers (representing the
        brightness of the pixel) and can be placed in an array. The array can
        then be analyzed for many different types of patterns (2). The patterns
        are associated with their respective labels for the objects in the
        images. After many different images from a data set and tweaks to the
        types of patterns, a model is compiled that knows the patterns of pixels
        for types of shapes. When novel images are given to the model, it
        compares the patterns to known patterns and gives a similarity rating.
        The label with the highest matching rate is the classification given to
        the image. This simplification of the process demonstrates the possible
        route our brains and the systems can go through to obtain vision. The
        general process has many different layers of pattern recognition, each
        with their own programmed specialty.
      </p>

      {/* Second Body */}
      <h3 className="max-w-2xl pt-24 text-7xl">Congruent Fields of Study</h3>
      <main className="mx-36 mt-24 flex flex-col items-center rounded-md border-[36px] border-solid border-techGreen bg-mustyGray">
        <h3 className="pt-12 text-7xl">Digital Imaging</h3>
        <div className="flex items-center justify-center">
          <button onClick={handleBack}>Backward</button>
          <p className="p-16 text-2xl">
            Learning how to get good visual information to CV models is the
            first step in CÂ É It is vital for computer vision to receive the
            data with as much relevance as possible, so that the models can be
            precisÇ É If other types of imaging can also be researched and
            developed (IR and sound wave imaging), computers can receive more
            than the typical visual information
          </p>
          <button onClick={handleForward}>Forward</button>
        </div>
      </main>
      <main className="m-auto h-24 w-16 bg-mustyGray"></main>
      <main className="m-auto h-6 w-72 rounded-md bg-mustyGray"></main>

      {/* Third Body */}
      <h3 className="pt-24 text-7xl">Personal Experiences</h3>
      <ul className="py-6 text-2xl">
        <li className="list-disc p-2">
          I have used tensorflow js using python and computer vision to set up a
          deep learning program that creates a model to classify based on my
          data set
        </li>
        <ul className="pl-12">
          <li className="list-disc p-2">
            JART was our image classification model that classified foods and
            their food group
          </li>
        </ul>
        <ul className="pl-12">
          <li className="list-disc p-2">
            We used ReLu functions for each layer and the different built in
            options for layers when building JART
          </li>
        </ul>
        <li className="list-disc p-2">
          A lot of the individual things had to be explained to me outside of
          the video, and yet I am still cloudy on the exact method these
          programs can ‘see'
        </li>
        <li className="list-disc p-2">
          Creating the program in python and displaying different views during
          the training process was very informational
        </li>
        <li className="list-disc p-2">
          Images had to be scaled before they could be processed
        </li>
        <ul className="pl-12">
          <li className="list-disc p-2">
            This was done by unlocking the aspect ratio and forcing the image to
            be within a specific square ratio
          </li>
        </ul>
        <ul className="pl-12">
          <li className="list-disc p-2">
            This standardization was essential in keeping patterns and
            processing equal among images
          </li>
        </ul>
      </ul>

      <Gallery></Gallery>
    </main>
  );
}
