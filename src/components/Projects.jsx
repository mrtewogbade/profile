// Projects Component


import heshbon from "../assets/projects/heshbon.png";
import arennah from "../assets/projects/arennah.png";
import imerch from "../assets/projects/imerch.png";
import laptop from "../assets/projects/laptop.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: heshbon,
      codeLink: "https://heshbontech.com/",
      demoLink: "https://heshbontech.com/",
    },
    {
      id: 2,
      src: arennah,
      codeLink: "https://arennah.com",
      demoLink: "https://arennah.com",
    },
    {
      id: 3,
      src: imerch,
      codeLink: "https://imerchlimited.com",
      demoLink: "https://imerchlimited.com/",
    },
    {
      id: 4,
      src: laptop,
      codeLink: "https://www.laptopwarehouseonline.net/",
      demoLink: "https://www.laptopwarehouseonline.net/",
    },
   
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my works right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, src, codeLink, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
