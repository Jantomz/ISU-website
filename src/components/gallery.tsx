export default function Gallery() {
  return (
    <main>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/561/853/datas/original.png"
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1915px-Tensorflow_logo.svg.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg bg-nightPurple"
              src="https://raw.githubusercontent.com/t3-oss/create-t3-app/99286f37324330ecdf75132fae1f246440a88035/www/public/images/t3-dark.svg"
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </main>
  );
}
