
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/mrtewogbade",
            style: 'rounded-tr-md'
            
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://www.github.com/mrtewogbade",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:johndharey@gmail.com",            
        },
        {
            id: 4,
            child: (
                <>
                    Twitter <FaTwitter size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/mrtewogbade",
            
        },
        
    ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank" rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
