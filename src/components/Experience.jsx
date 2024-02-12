
import css from "../assets/utils/css.png";
import html from "../assets/utils/html.png";
import javascript from "../assets/utils/js.png";
import nodejs from "../assets/utils/nodejs.png";
import mongoDb from "../assets/utils/mongodb.png";
import sql from "../assets/utils/sql.png";
import nextJs from "../assets/utils/nextjs.svg";
import reactImg from "../assets/utils/react.png";
import solidity from "../assets/utils/solidity.svg";
import tailwind from "../assets/utils/tailwind-css.svg";
import ethereum from "../assets/utils/ethereum-cryptocurrency.svg";
import github from "../assets/utils/github.svg";
import docker from "../assets/utils/docker.png";

const Experience = () => {
  const techStack = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-200",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImg,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nodejs,
      title: "NODEJS",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: mongoDb,
      title: "MONGODB",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: nextJs,
      title: "NEXTJS",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: github,
      title: "GITHUB",
      style: "shadow-yellow-500",
    },
    {
      id: 10,
      src: solidity,
      title: "SOLIDITY",
      style: "shadow-gray-500",
    },
    {
      id: 11,
      src: ethereum,
      title: "ETHEREUM",
      style: "shadow-gray-500",
    },
    {
      id: 12,
      src: tailwind,
      title: "TAILWINDCSS",
      style: "shadow-sky-400",
    },
    {
      id: 13,
      src: docker,
      title: "DOCKER",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techStack.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
