import { useState } from "react";

import bannerImage from "../assets/imag2.jpg";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "",
    desc1: ` I have done Full Stack Development Course where I've learn many technologies.
    I have a strong understanding of both front-end and back-end development, and I am proficient in a variety of programming languages and technologies.`,
    desc2: ` I am a team player and I am always willing to go the extra mile. I am passionate about web development and I am always looking for new ways to learn and grow. 
              I have a strong work ethic and I am always willing to take on new challenges.`,
    desc3: `I am looking for a new opportunity to use my skills and experience to make a positive impact on the world. I am confident that I would be a valuable asset to any team.`,
    // actionButton: {
    //   title: "Read More..",
    //   link: "/readmore",
    // },
  });

  return (
    <>
      <div id="2" className=" main-container pt-10 ">
        <h1 className="text-5xl mb-8 text-center font-bold">About Me</h1>

        <div className="flex items-center px-8 ">
          {/*image*/}
          <div className="w-fit lg:pl-24 flex justify-center  ">
            <img className="h-2/4 w-fit rounded-full shadow-2xl" src={data.image} alt="" />
          </div>

          {/*text*/}
          <div className=" w-full flex justify-center">
            <div className="space-y-5 text-lg font-medium w-2/3">
              {/* <h1 className="text-4xl font-semibold ">{data.title}</h1> */}
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <p>{data.desc3}</p>
              {/* <button className="bg-orange-500 px-3 py-2 text-1xl rounded-full">
                {data.actionButton.title}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
