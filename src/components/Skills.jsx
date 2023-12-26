import React, { useState } from "react";

const Skills = () => {
  const [data, setData] = useState([
    {title: "HTML"},
    {title: "CSS"},
    {title: "JavaScript"},
    {title: "React"},
    {title: "Tailwind CSS"},
    {title: "Java"},
    {title: "J2EE"},
    {title: "Spring"},
    {title: "Springboot"},
    {title: "REST API"},
    {title: "Thymeleaf"},
    {title: "JDBC"},
    {title: "Hibernate ORM"},
    {title: "SQL"},
    {title: "MySQL"},
    {title: "Git"},
    {title: "GitHub"},
    {title: "Linux"},
    
     
  ]);

  return (
    <>
      <div id="4" className="my-3 py-5">
        <h1 className="mb-10  text-5xl font-bold text-center">My Skills</h1>
        {/* boxed section */}
        <div className="box-container lg:flex py-15">
          <div className=" lg:w-2/4 md:w-fit justify-center mb-5">
            {/*text container*/}
            <div className="w-fit  lg:flex-none mx-auto text-center text-lg space-y-4">
              <h1 className="">I'm aware of these technologies.</h1>
              <p className="hidden md:block">
              Navigating both the front-end and back-end realms, I've honed my skills in a diverse range of technologies.
              These are technologies I've worked with to write purpose-driven code for various functionalities. 
                
              </p>
              
            </div>
          </div>

          {/*skills*/}

          <div className="flex max-w-full justify-center  ">
            <div className=" flex justify-center max-w-full md:max-w-prose lg:mr-12 mx-5  space-x-2 flex-wrap  ">
              {data.map((skill) => (
                <p 
                  className="bg-gray-100 w-fit h-fit px-3 py-2 mb-2 rounded-full hover:bg-slate-400 hover:cursor-default"
                >
                  {skill.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
