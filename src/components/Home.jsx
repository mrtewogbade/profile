import React from 'react'
import HeroImg from '../assets/others/heroLong.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div>

        <div>
            <div>
                <h2>
                    I am a Full Stack Developer
                </h2>

                <p>
                    I am a Full Stack Developer with a passion for creating beautiful and functional web applications. I have experience in both front-end and back-end development, and I am always looking for new challenges to expand my skill set.
                </p>

                <div>
                    <button>
                        View Projects
                       <span>
                         <FaArrowRightLong />
                       </span>
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home