const HeroBanner = () => (
  // add dark mode style "dark:bg-gray-900"
  <section className="bg-white">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      {/* add dark mode style "dark:text-white" */}
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl">
        Exploring beyond the boundaries of learning and development.
      </h1>
      {/* add dark mode style "dark:text-gray-400" */}
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
        Read the latest in data web development, software engineering, best
        practices and analytics.
      </p>
    </div>
  </section>
);

export default HeroBanner;
