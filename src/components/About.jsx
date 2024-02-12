// About Compo

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 md:mt-20">
          I find pure love in building Full stack applications with React for
          Front-end and NodeJs for Backend. When I discovered React, I was blown
          away by its interactivity and speed. Its virtual DOM and and efficient
          rendering mechanisms allows me to create dynamic user interfaces that
          responded to user actions in real time.
        </p>
        <br />

        <p className="text-xl">
          In addition to React, I also have experience building server-side
          applications using Node.js and Express.js, and integrating with
          Sanity.io for headless CMS needs. I&apos;ve worked with MongoDB and
          SQL databases, and I&apos;m comfortable with DevOps practices using
          Docker and Kubernetes. My experience spans across the entire stack,
          from front-end development with React, to back-end development with
          Node.js, Express.js, and Sanity.io, and finally to managing databases
          with MongoDB and SQL, and orchestrating deployments with Docker and
          Kubernetes. I&apos;m proud of my ability to handle a wide range of
          tasks and deliver high-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
