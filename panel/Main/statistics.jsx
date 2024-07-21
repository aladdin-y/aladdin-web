import Link from "next/link";
import Image from "next/image";
import Lottie from 'lottie-react';
import animationData from '/public/img/statistics.json';
import { useEffect } from 'react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Breadcrumbs from '/components/Breadcrumbs';  
import InfoCard from '/components/Dashboard/info-card';  
import ApexChart from '/components/Dashboard/ApexChart';



export default function Index() {

 return (
    <>
    
      <div data-aos="fade-down" className="py-20 mb-15 max-w-3xl mx-auto">


      <div className="w-2/5 mx-10"><Lottie  animationData={animationData} loop={true} /></div>
     
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
 




      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24" style={{ direction: 'rtl' }}>
      <div className="col-span-5 text-right">
    <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html: "أحصائيات الموقع" }} />
    <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "احصائيات الموقع بشكل عام (كم زائر وكم عمل جديد تم اضافتة ...) بقسمين قسم ارقام و قسم رسم تخطيطي للتوضيح بشكل افضل." }} />
  </div>

  <div className="col-span-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6">
    <InfoCard info={{ name: "Monthly visitors", text: "1234", icon: "fa-solid fa-user" }} />
    <InfoCard info={{ name: "Monthly projects", text: "123456", icon: "fa-regular fa-list-tree" }} />
    <InfoCard info={{ name: "Type most projects", text: "12345678", icon: "fa-solid fa-handshake" }} />
  </div>
</div>


<div className=" grid grid-cols-1 lg:grid-cols-1  gap-6">
<ApexChart className="col-span-full " name="مقارنه مين كل types لذا الشهر" series={[{name: 'Series 1',data: [10, 41, 35, 51, 49, 62, 69, 91, 148]},]} categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']} type="bar" />
<ApexChart className="col-span-full " name="مقارنه مين كل types لذا الشهر" series={[{name: 'Series 1',data: [10, 41, 35, 51, 49, 62, 69, 91, 148]},]} categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']} type="area" />
<ApexChart className="col-span-full " name="مقارنه مين كل types لذا الشهر" series={[{name: 'Series 1',data: [10, 41, 35, 51, 49, 62, 69, 91, 148]},]} categories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']} type="area" />


</div>

      </>
  )
}
