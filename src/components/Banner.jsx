import bannerImage from "../assets/pic1.jpg";
import bannerBackground from "../assets/17545.jpg";

const Banner = () => {
  return (
    <div id="1" 
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className=" main-container md:w-full p-4 h-2/4 flex items-center  sm:p-8 "
    >
      {/* first box */}

      <div className=" w-screen sm:w-full sm:mx-20 mx-8 flex justify-center ">
        
        {/*text */}
        <div className="h-auto  max-w-screen-lg mx-auto md:mx-0">
          <h3 className="sm:text-3xl sm:font-semibold font-semibold text-lg">Hi, I am</h3>
          <h1 className="mt-3 sm:text-5xl sm:font-semibold font-bold text-3xl">Anuj Sahu</h1>
          <h2 className="mt-3 sm:text-3xl ">I am a <span className="font-semibold">Full Stack Developer</span></h2>
          <p className="mt-3 text-sm ">
            Welcome to my portfolio, nice to meet you. Please take a look around.
            
          </p>

          <div className="icons-container mt-3 mb-3 flex space-x-5">
            <a href="https://www.facebook.com/Anujj009/" target="_blank" className="boder cursor-pointer px-3 py-4 w-16 h-16 flex justify-center items-center rounded-full hover:bg-blue-500">
              <i class="fa-brands text-4xl fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/anuj__sahu/" target="_blank" className="boder cursor-pointer px-3 py-4 w-16 h-16 flex justify-center items-center rounded-full hover:bg-blue-500">
              <i class="fa-brands text-4xl fa-square-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/anujj572/" target="_blank" className="boder cursor-pointer px-3 py-4 w-16 h-16 flex justify-center items-center rounded-full hover:bg-blue-500">
              <i class="fa-brands text-4xl fa-linkedin"></i>
            </a>
            <a href="https://github.com/anujj009" target="_blank" className="boder cursor-pointer px-3 py-4 w-16 h-16 flex justify-center items-center rounded-full hover:bg-blue-500">
              <i class="fa-brands text-4xl fa-github"></i>
            </a>
          </div>

          {/* <a
            className="px-3 py-2 rounded-full bg-orange-500 shadow-lg"
            href="/contact">
            Contact Me
          </a> */}
        </div>
      </div>

      {/* second box */}

      <div className=" w-full ml-20 flex justify-center">
      
        {/*image */}
        <img className="rounded-full shadow-2xl  max-w-sm h-auto" src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
