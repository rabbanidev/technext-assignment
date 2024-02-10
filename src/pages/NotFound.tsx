import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="container">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 xl:py-24">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500">
              Sorry, can't find that page.
            </p>
            <Link
              to="/"
              className="inline-flex text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
              Back to users page
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default NotFound;
