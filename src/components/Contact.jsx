import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tcf7dcs",
        "template_lprpeus",
        form.current,
        "c5UmX57JM8lF2Ug2r"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sent mail");

          Swal.fire({
            title: "Good job!",
            text: "Message Sent!",
            icon: "success",
          });
        },
        (error) => {
          console.log(error.text);
          console.log("error");

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      );
  };

  return (
    <div id="5" className=" w-full my-15 py-5">
      <h1 className="text-center text-5xl font-bold">Contact Me</h1>

      <div className=" mt-10  ">
        {/* <div className='rounded-full flex justify-center w-2/4  '>
                <img className='w-2/6 ' src={conImage} alt="" />
            </div> */}

        <div className=" flex justify-center  space-y-4 ">
          <div className=" border-solid border-2 px-20 py-2 bg-white shadow-2xl shadow-indigo-500/50 border-indigo-600  rounded-3xl 2/4  text-center">
            <form className="  " ref={form} onSubmit={sendEmail}>
              <ul className="  ">
                <li className=" ">
                  <label className="block text-lg py-3 font-semibold leading-6 text-gray-900">
                    Name:{" "}
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </li>

                <li className=" ">
                  <label className="block text-lg py-3 font-semibold leading-6 text-gray-900">
                    {" "}
                    Email:{" "}
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </li>
                <li className="">
                  <label className="block text-lg py-3 font-semibold leading-6 text-gray-900">
                    {" "}
                    Message:{" "}
                  </label>
                  <textarea
                    name="message"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </li>
                <li className="">
                  <input
                    className="bg-blue-800 text-white my-5 px-4 py-2 rounded-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                    type="submit"
                    value="Send"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
