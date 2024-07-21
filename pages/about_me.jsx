import Link from "next/link";
import Image from "next/image";
import Lottie from 'lottie-react';
import animationData from '/public/img/About_Me.json';
import { useEffect } from 'react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const servers = [
  { name: "Black Hole", img: "https://cdn.discordapp.com/icons/1080952839934844950/a_a9b7b9b0633df9384ae0c2075d6eaca3.png" },
  { name: "WH | COMMUNITY", img: "https://cdn.discordapp.com/icons/981887391470059560/0a28910351ed73e7a0dfe75f29628133.png" },
  { name: "Nata Hosting", img: "https://cdn.discordapp.com/avatars/1195063445859614831/aa62b5078b4ff00c111ac9e74b086216.webp" },
  { name: "Yakitore", img: "https://cdn.discordapp.com/icons/910954811321643058/a_2dff662ed563772869509ad25a6d7ced" },



  // Add more servers as needed
];
export default function Index() {

  return (
    <>
      <div data-aos="fade-down" className="py-20 mb-32 max-w-3xl mx-auto">
        <div>
        <div className="flex w-full justify-center">
      {/* <img width="500" src="/img/bck.png" /> */}
      
      <div className="w-96"><Lottie  animationData={animationData} loop={true} /></div>

      </div>
      <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-address-card text-amber-400 mr-2" />
                    About Me
                </h1>
                </div>


     
        {/* <div className="animateHeader  flex flex-wrap items-center justify-center gap-x-4">
  
   <ScrollLink
  to="my-work"
  smooth={true}
  duration={500}
  className="flex cursor-pointer items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"
>
  <i className="fa-solid fa-briefcase text-2xl"></i>
  My Work
</ScrollLink>
   <div className="py-24"></div>
   <Link href={"/Partners"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
                <i class="fa-solid fa-handshake text-2xl"/>
                Partners
              </a>
            </Link>
         </div> */}

     
      </div>
 
      <div className="flex flex-row w-full  h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-bl lg:px-30 from-amber-900/50 items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
  <>
    <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-left justify-center flex-col text-left w-full lg:w-3/4 lg:text-left lg:flex-none">
      <img src="https://cdn.discordapp.com/avatars/376752463971352577/be3abeb2a490fe90f228d0d3d8db6df7.png?size=1024" width="256" className="lg:hidden rounded-xl mb-5 ml-5 shadow-xl shadow-black" />
      <p className="text-3xl text-left text-white font-semibold">Aladdin</p>
      <p className="text-md text-left w-full lg:w-auto font-medium text-gray-500 line-clamp-5">
        Aladdin, a proficient programmer with two years of experience. My expertise includes developing advanced Discord bots and comprehensive full-stack web applications.
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-white perspective-left text-2xl"></i>
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-white perspective-left text-2xl"></i>
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-white perspective-left text-2xl"></i>
        </a>
        <a href="mailto:your.email@example.com">
          <i className="fas fa-envelope text-white perspective-left text-2xl"></i>
        </a>
      </div>
    </div>
    <img src="https://cdn.discordapp.com/avatars/376752463971352577/be3abeb2a490fe90f228d0d3d8db6df7.png?size=1024" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
  </>
</div>



<div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Quick Stats" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "Explore essential figures about us at a glance: number of clients, completed projects, partners, and project types. Get a quick overview of our impact and activities." }}/>
       
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white text-center">
                  <p className="text-2xl font-semibold mt-5"><i className={`fa-solid fa-users text-2xl text-amber-500`} /> Clients</p>
                  <p className="text-amber-500 font-semibold line-clamp-4 text-4xl mx-5">+100</p>
                </div>
              </div>
    
              <div>
                <div className="text-white text-center">
                  <p className="text-2xl font-semibold mt-5"><i className={`fa-solid fa-bars-progress text-2xl text-amber-500`} /> Completed Projects</p>
                  <p className="text-amber-500 font-semibold line-clamp-4 text-4xl mx-5">+100</p>
                </div>
              </div>
              <div>
                <div className="text-white text-center">
                  <p className="text-2xl font-semibold mt-5"><i className={`fa-solid fa-handshake text-2xl text-amber-500`} /> Partners</p>
                  <p className="text-amber-500 font-semibold line-clamp-4 text-4xl mx-5">+100</p>
                </div>
              </div>
    
              <div>
                <div className="text-white text-center">
                  <p className="text-2xl font-semibold mt-5"><i className={`fa-solid fa-diagram-project text-2xl text-amber-500`} /> project types</p>
                  <p className="text-amber-500 font-semibold line-clamp-4 text-4xl mx-5">+100</p>
                </div>
              </div>
    
          </div>
      </div>
      <i class="fa-solid fa-diagram-project"></i>



      </>
  )
}
