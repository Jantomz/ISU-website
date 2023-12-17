import Head from "next/head";
import Link from "next/link";
import Gallery from "~/components/gallery";
import IndexHero from "~/components/indexHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>CV In ML</title>
        <meta
          name="ISU project for ICS4U about Computer Vision in Machine Learning"
          content="Created by Jaden"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <IndexHero></IndexHero>

        {/* First Body */}
        <h3 className="max-w-2xl pt-24 text-7xl">What is Computer Vision?</h3>
        <p className="py-6 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae
          voluptates quod, voluptatibus iure iusto iste error facere quidem,
          odit explicabo consequuntur eaque. Eaque fugiat sit dolorum odio amet
          quas nemo officia, laudantium consequatur pariatur. Quo officia soluta
          quod sequi ducimus. Inventore iure sequi tempore expedita saepe? Autem
          quasi sint et adipisci explicabo dicta dolorem blanditiis doloremque
          similique debitis quos omnis dolorum distinctio repudiandae iure
          inventore ad asperiores eum expedita, ipsa, sed consequuntur pariatur?
          Repellendus molestiae quae nulla omnis optio doloribus vel quasi natus
          iste! Consequuntur soluta blanditiis delectus esse laudantium minima
          dolorem, praesentium commodi assumenda harum inventore, consectetur
          impedit.
        </p>
        <p className="py-6 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae
          voluptates quod, voluptatibus iure iusto iste error facere quidem,
          odit explicabo consequuntur eaque. Eaque fugiat sit dolorum odio amet
          quas nemo officia, laudantium consequatur pariatur. Quo officia soluta
          quod sequi ducimus. Inventore iure sequi tempore expedita saepe? Autem
          quasi sint et adipisci explicabo dicta dolorem blanditiis doloremque
          similique debitis quos omnis dolorum distinctio repudiandae iure
          inventore ad asperiores eum expedita, ipsa, sed consequuntur pariatur?
          Repellendus molestiae quae nulla omnis optio doloribus vel quasi natus
          iste! Consequuntur soluta blanditiis delectus esse laudantium minima
          dolorem, praesentium commodi assumenda harum inventore, consectetur
          impedit.
        </p>

        {/* Second Body */}
        <h3 className="max-w-2xl pt-24 text-7xl">Congruent Fields of Study</h3>
        <main className="bg-mustyGray border-techGreen mx-36 mt-24 flex flex-col items-center rounded-md border-[36px] border-solid">
          <h3 className="pt-12 text-7xl">Digital Imaging</h3>
          <p className="p-16 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iure,
            sunt ab facilis ipsa illo omnis rem harum soluta sint similique eum
            reprehenderit necessitatibus at itaque exercitationem laborum
            tempore adipisci fuga maxime repudiandae? Exercitationem tempora
            amet architecto. Quod unde voluptatum provident natus, magni facilis
            iure consectetur? Quis, fuga deserunt? Repellendus accusamus
            repudiandae minus, corporis quas nisi aspernatur illo omnis,
            possimus doloribus nobis necessitatibus dolores at repellat sint
            suscipit vel facere in voluptatum eos. Quis alias doloribus
            incidunt? Reiciendis modi error nulla cumque deleniti dolor,
            asperiores quibusdam. Ab commodi omnis animi reiciendis obcaecati
            nostrum blanditiis excepturi corrupti magnam cupiditate, nisi
            tenetur et cum qui quibusdam hic voluptatibus quia placeat officiis,
            sit earum, accusamus quo impedit.
          </p>
        </main>
        <main className="bg-mustyGray m-auto h-24 w-16"></main>
        <main className="bg-mustyGray m-auto h-6 w-72 rounded-md"></main>

        {/* Third Body */}
        <h3 className="pt-24 text-7xl">Personal Experiences</h3>
        <p className="py-6 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae
          voluptates quod, voluptatibus iure iusto iste error facere quidem,
          odit explicabo consequuntur eaque. Eaque fugiat sit dolorum odio amet
          quas nemo officia, laudantium consequatur pariatur. Quo officia soluta
          quod sequi ducimus. Inventore iure sequi tempore expedita saepe? Autem
          quasi sint et adipisci explicabo dicta dolorem blanditiis doloremque
          similique debitis quos omnis dolorum distinctio repudiandae iure
          inventore ad asperiores eum expedita, ipsa, sed consequuntur pariatur?
          Repellendus molestiae quae nulla omnis optio doloribus vel quasi natus
          iste! Consequuntur soluta blanditiis delectus esse laudantium minima
          dolorem, praesentium commodi assumenda harum inventore, consectetur
          impedit.
        </p>
        <p className="py-6 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae
          voluptates quod, voluptatibus iure iusto iste error facere quidem,
          odit explicabo consequuntur eaque. Eaque fugiat sit dolorum odio amet
          quas nemo officia, laudantium consequatur pariatur. Quo officia soluta
          quod sequi ducimus. Inventore iure sequi tempore expedita saepe? Autem
          quasi sint et adipisci explicabo dicta dolorem blanditiis doloremque
          similique debitis quos omnis dolorum distinctio repudiandae iure
          inventore ad asperiores eum expedita, ipsa, sed consequuntur pariatur?
          Repellendus molestiae quae nulla omnis optio doloribus vel quasi natus
          iste! Consequuntur soluta blanditiis delectus esse laudantium minima
          dolorem, praesentium commodi assumenda harum inventore, consectetur
          impedit.
        </p>
      </main>
      <Gallery></Gallery>
    </>
  );
}
