import React, { useState } from 'react'

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
        }
    ]);

  return (
    <>
    <div id='3' className='main-container py-8'>
        <h1 className='text-5xl font-bold text-center'>My Projects</h1>

        <div className='projects-container flex mt-12 space-x-5 px-10'>

            {data.map((set) => (
                <div className=' hover:bg-slate-300 cursor-pointer bg-slate-200 p-5 text-center space-y-4 shadow-2xl rounded-xl'>
                    <h1 className='text-3xl'>
                        {set.title}
                    </h1>
                    <p>{set.description} 
                    </p>
                    <button onClick={set.actionButton.onClick} className='bg-blue-700 text-white hover:bg-blue-900 px-3 py-2 rounded-full'>{set.actionButton.title}</button>
                </div>
            ))}

        </div>
    </div>
    </>
  )
}

export default Projects