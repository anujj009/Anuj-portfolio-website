import React, { useState } from 'react';

const Projects = () => {

    const [data,setData] = useState([
        {
            id: 'one',
            title: "Contact Manager",
            description: "A user-friendly web-based contact management system for efficient contact organization for different users.",
            actionButton: {
                title: "GitHub",
                onClick: ()=> window.open("https://github.com/anujj009/contact-manager-project"),
            }
        },
        {
            id: 'two',
            title: "Hospital Management System",
            description: "Streamlining healthcare operations with a hospital management system for efficient patient care and administrative processes.",
            actionButton: {
                title: "GitHub",
                onClick: ()=> window.open("https://github.com/anujj009/Hospital_Servlet_project"),
            }
        },
        {
            id: 'three',
            title: "To-Do App",
            description: "This web app is designed to help users organize and keep track of their tasks, to-do items, and schedules in a digital format.",
            actionButton: {
                title: "GitHub",
                onClick: ()=> window.open("https://github.com/anujj009/ToDo-Webapp-Java-jsp-Servlet-Mysql"),
            }
        },
      
    ]);

  return (
    <>
    <div id='3' className='main-container py-8'>
        <h1 className='text-5xl font-bold text-center'>My Projects</h1>

        <div className='  projects-container  overflow-auto mt-12 md:space-x-5 md:flex space-y-5 md:space-y-0 px-5 md:px-10'>

            {data.map((set) => (
                // <div className=' hover:bg-slate-300 cursor-pointer  bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500 border-solid border-2 border-gray-600  p-5 text-center space-y-4 shadow-2xl rounded-xl'>
                <div className=' justify-center text-center overflow-ellipsis space-y-3 md:space-y-5 
                hover:bg-slate-300 cursor-pointer  bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500 border-solid border-2 border-gray-600 p-2 text-inherit shadow-2xl rounded-xl'>
                    {/* <div className='border'> */}
                        <h1 className='text-2xl font-semibold '>
                            {set.title}
                        </h1>
                        <p>{set.description} 
                        </p>
                        <button onClick={set.actionButton.onClick} className='bg-blue-700 text-white hover:bg-blue-900 px-3 py-2 rounded-full'>{set.actionButton.title}</button>
                    {/* </div> */}
                </div>
            ))}

        </div>
    </div>
    </>
  )
}

export default Projects