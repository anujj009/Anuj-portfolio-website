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
        <h1 className="mb-16 text-5xl font-bold text-center">My Skills</h1>
        {/* boxed section */}
        <div className="box-container flex py-15">
          <div className="flex  w-2/4 justify-center">
            {/*text container*/}
            <div className="w-2/3 text-center text-lg space-y-4">
              <h1>I'm aware of these technologies</h1>
              <p>
              Navigating both the front-end and back-end realms, I've honed my skills in a diverse range of technologies.
              These are technologies I've worked with to write purpose-driven code for various functionalities. 
                
              </p>
              
            </div>
          </div>

          {/*skills*/}

          <div className="flex  max-w-fit justify-center">
            <div className=" flex justify-center max-w-sm md:max-w-prose md:mr-12 mr-10 space-x-3 flex-wrap  ">
              {data.map((skill) => (
                <p 
                  className="bg-gray-200 w-fit h-fit px-3 py-2 rounded-full hover:bg-slate-400 hover:cursor-default"
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
