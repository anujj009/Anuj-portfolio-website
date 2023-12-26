import bannerImage from "../assets/pic1.jpg";
import bannerBackground from "../assets/17545.jpg";

const Banner = () => {
  return (
    <div id="1" 
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className=" main-container md:w-full p-4 h-2/4 sm:flex items-center justify-between sm:px-5 "
    >
      {/* first box */}

      <div className="  sm:w-fit sm:mx-15 lg:mx-20 mx-5 flex justify-center ">
        
        {/*text */}
        <div className="h-auto max-w-screen-md mx-auto md:mx-0">
          <h3 className="sm:text-3xl sm:font-semibold font-semibold text-3xl">Hi, I am</h3>
          <h1 className="mt-3 sm:text-5xl sm:font-semibold font-bold text-5xl">Anuj Sahu</h1>
          <h2 className="mt-3 text-lg sm:text-3xl ">I am a <span className="font-semibold">Full Stack Developer</span></h2>
          <p className="mt-3  text-base ">
            Welcome to my portfolio..  <span>Please take a look around.</span>
            
          </p>

          <div className="icons-container justify-center sm:justify-start w-auto sm:mt-3 sm:mb-3 flex sm:space-x-5">
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

        </div>
      </div>

      {/* second box */}

      <div className=" w-auto lg:mr-20 flex justify-center">
      
        {/*image */}
        <img className="rounded-full max-w-4/5 sm:min-w-4/5 shadow-2xl lg:max-w-sm h-auto" src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
