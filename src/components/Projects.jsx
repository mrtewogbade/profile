// Projects Component

import musicApp from "../assets/projects/musicap.png";
import launchingSoon from "../assets/projects/launchingSoon.png";
import wardDiere from "../assets/projects/wardDiere.png";
import bookLib from "../assets/projects/book.png"
import bookMgt from "../assets/projects/bookWeb.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: bookLib,
      codeLink: "https://github.com/mrtewogbade/book-library.git",
      demoLink: "https://mrtewogbade.github.io/book-library/",
    },
    {
      id: 2,
      src: bookMgt,
      codeLink: "https://github.com/mrtewogbade/library-mgt-system.git",
      demoLink: "https://www.example.com/project1-demo",
    },
    {
      id: 3,
      src: musicApp,
      codeLink: "https://github.com/mrtewogbade/music-app_UI.git",
      demoLink: "https://mrtewogbade.github.io/music-app_UI/",
    },
    {
      id: 4,
      src: launchingSoon,
      codeLink: "https://github.com/mrtewogbade",
      demoLink: "https://www.example.com/project2-demo",
    },
    {
      id: 5,
      src: wardDiere,
      codeLink: "https://github.com/mrtewogbade",
      demoLink: "https://www.example.com/project3-demo",
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
