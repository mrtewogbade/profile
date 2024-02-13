// Docs Component

import docsOne from "../assets/Docs/Docs1.png";
import docsTwo from "../assets/Docs/Docs2.png";
import docsThree from "../assets/Docs/Docs3.png";

const Docs = () => {
  const writing = [
    {
      id: 1,
      src: docsOne,
      readLink:
        "https://medium.com/@johndharey/unlocking-the-potentials-of-technology-a-guide-to-effortless-software-navigation-8ce32e14f5e7",
    },
    {
      id: 2,
      src: docsTwo,
      readLink: "#",
    },
    {
      id: 3,
      src: docsThree,
      readLink: "#",
    },
  ];

  return (
    <div
      name="docs"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Documentation
          </p>
          <p className="py-6">
            Check out some of my articles and documentations here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {writing.map(({ id, src, readLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={readLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Click here to read!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Docs;
