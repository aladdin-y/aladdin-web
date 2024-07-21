import Link from "next/link";
import Image from "next/image";
import Lottie from 'lottie-react';
import animationData from '/public/img/welcome.json';
import { useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

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
        <div className="flex w-full justify-center">
      {/* <img width="500" src="/img/bck.png" /> */}
      
      <div className="w-96"><Lottie  animationData={animationData} loop={true} /></div>

      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Aladdin
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
        Aladdin, a proficient programmer with two years of experience. My expertise includes developing advanced Discord bots and comprehensive full-stack web applications.
	  </p>
        <div className="animateHeader  flex flex-wrap items-center justify-center gap-x-4">
  
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
         </div>

     
      </div>

     <div data-aos="fade-down" className="container mx-auto  py-24 overflow-hidden w-full">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Trusted By</h2>
            <div className="relative">
            <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        slidesPerView={1}
        breakpoints={{
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }}
                    loop={true}
                    navigation={false}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
                    {servers.map((server, index) => (
                        <SwiperSlide key={index} >
                            <div className=" flex relative left-0 md:w-full md:left-0  items-center  bg-gradient-to-r lg:px-30 from-transparent to-amber-800/90  justify-start  rounded-xl p-6 shadow-lg transform -translate-x-6 md:-translate-x-0">
                                <div className="flex-grow text-center text-white text-xl font-semibold">
                                    <p>{server.name}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <img className=" mx-2 w-16 h-16 rounded-full" src={server.img} alt={server.name} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>



      <div  id="my-work" className=" grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div data-aos="fade-down" className="col-span-4">
              <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"My Work "  }} />  
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "A little of my work in website programming. To see more, go to my work page" }}/>
        
          </div>
          <div className="py-20"></div>

          <div  className="col-span-11 grid grid-cols-1 lg:grid-cols-2 gap-14">
           
          <div data-aos="fade-down" className="my-work scale-105 bg-900-80 rounded-xl ease-in duration-300 hover:scale-110 flex items-center justify-center">
          <div className="text-white text-center">
        <p className="text-xl font-semibold mt-5"><i className="fa fa-regular fa-user text-2xl text-amber-400" /> Portfolio website        </p>
        <div className="py-2"></div>
      
        {/* <p className="text-gray-500 line-clamp-4">With fast and customizable settings specific to your server, MusicMaker gives you a musical pleasure to the fullest.</p> */}
        <img className="w-11/12 mx-auto" src="/img/aladdin_web.png" /> 
        <div className="py-2"></div>
</div>

              </div>


              <div data-aos="fade-down" className="my-work scale-105 bg-900-80 rounded-xl ease-in duration-300 hover:scale-110 flex items-center justify-center">
    <div className="text-white text-center">
        <p className="text-xl font-semibold mt-5"><i className="fa fa-regular fa-user text-2xl text-amber-400" /> Store website        </p>
        <div className="py-2"></div>
      
        {/* <p className="text-gray-500 line-clamp-4">With fast and customizable settings specific to your server, MusicMaker gives you a musical pleasure to the fullest.</p> */}
        <img className="w-11/12 mx-auto" src="/img/Store_website.png" /> 
        <div className="py-2"></div>
</div>

              </div>

              <div  data-aos="fade-down" className="my-work scale-105 bg-900-80 rounded-xl ease-in duration-300 hover:scale-110 flex items-center justify-center">
    <div className="text-white text-center">
        <p className="text-xl font-semibold mt-5"><i className="fa fa-regular fa-user text-2xl text-amber-400" /> Dashboard website        </p>
        <div className="py-2"></div>
      
        {/* <p className="text-gray-500 line-clamp-4">With fast and customizable settings specific to your server, MusicMaker gives you a musical pleasure to the fullest.</p> */}
        <img className="w-11/12 mx-auto" src="/img/Dashboard_website.png" /> 
        <div className="py-2"></div>
</div>

              </div>

              <div data-aos="fade-down" className="my-work scale-105 bg-900-80 rounded-xl ease-in duration-300 hover:scale-110 flex items-center justify-center">
    <div className="text-white text-center">
        <p className="text-xl font-semibold mt-5"><i className="fa fa-regular fa-user text-2xl text-amber-400" /> Business website        </p>
        <div className="py-2"></div>
      
        {/* <p className="text-gray-500 line-clamp-4">With fast and customizable settings specific to your server, MusicMaker gives you a musical pleasure to the fullest.</p> */}
        <img className="w-11/12 mx-auto" src="/img/Business_website.png" /> 
        <div className="py-2"></div>
</div>

              </div>
              <div className="col-span-1 lg:col-span-2 mx-auto">
           <Link href="/my_work">
            <a  className="mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white">
             See More <i class="fa-solid fa-arrow-turn-up text-2xl"></i> 
            </a></Link>
        </div>
          </div>
         
      </div>



{/* 
      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://media.discordapp.net/attachments/907378577253744640/1176892776877666325/image.png"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">Best Your Bot</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Are you ready to throw the best parties with MusicMaker, the best and most up-to-date bot?</p>
                </div>
                <img src="https://media.discordapp.net/attachments/907378577253744640/1176892776877666325/image.png" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div> */}

      </>
  )
}
