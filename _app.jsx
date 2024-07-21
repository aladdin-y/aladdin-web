import "../public/css/global.css";
import "../public/css/tippy.css";
import "../public/css/customColors.css";
import "tailwindcss/tailwind.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import LampContainer  from "/components/ui/lamp.jsx";

import { useEffect } from 'react';
import NProgress from "nprogress";
import Router, { useRouter } from "next/router";
import Head from "next/head";

import Header from "../components/Static/Header.jsx";
import Header2 from "../components/Dashboard/Static/Header.jsx";
import Header3 from "../components/Dashboard/Static/Header2.jsx";
import MainWidg from "../components/Dashboard/mainWidg.jsx";
import Footer from "../components/Static/Footer.jsx";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

import { ThemeProvider } from 'next-themes';

export default function AwardApp({ Component, pageProps }) {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 30,
        duration: 400,
        easing: 'ease',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
      });
    });
  }, []);

  const router = useRouter();
   
  const NavItems = [
    {
      link: true,
      name: "Home",
      icon: "fal fa-house",
      activeIcon: "fa fa-home",
      href: "/",
    },
    {
      link: true,
      name: "About me",
      icon: "fal fa-address-card",
      activeIcon: "fa-solid fa-address-card",
      href: "/about_me",
    },
    {
      link: true,
      name: "My Work",
      icon: "fal fa-briefcase",
      activeIcon: "fa-solid fa-briefcase",
      href: "/my_work",
    },
    {
      link: true,
      name: "Partners",
      icon: "fal fa-handshake",
      activeIcon: "fa fa-handshake",
      href: "/Partners",
    }
  ]; 
  
  const NavItems2 = [
    {
      name: "Main",
      icon: "fal fa-hammer",
      activeIcon: "fa-solid fa-hammer",
      folder: "Main",
      list: [
        {
          link: true,
          name: "Statistics",
          icon: "fa-regular fa-chart-pie",
          activeIcon: "fa-solid fa-chart-pie",
          href: "/statistics",
        },
      ],
    },
    {
      name: "Home Page",
      icon: "fal fa-home",
      activeIcon: "fa-solid fa-home",
      folder: "Home_page",
      list: [
        {
          link: true,
          name: "About me",
          icon: "fal fa-address-card",
          activeIcon: "fa fa-address-card",
          href: "/About_Me",
        },
        {
          link: true,
          name: "Truste By",
          icon: "fal fa-handshake",
          activeIcon: "fa fa-handshake",
          href: "/Trusted_By",
        },
        {
          link: true,
          name: "My Work",
          icon: "fa fa-briefcase",
          activeIcon: "fal fa-briefcase",
          href: "/My_Work",
        },
      ],
    },
  ];
  const getIconByPath = (path) => {
    for (const item of NavItems2) {
      if(item.folder == router.asPath.split("/")[2]) {
      if (item.list) {
        for (const subItem of item.list) {
          if (subItem.href.split("/")[1] === path) {
            return subItem.activeIcon;
          }
          }
        }
      }
    }
    return 'fa-solid fa-default-icon'; // Default icon if not found
  };

  const currentPath = router.asPath.split("/")[3];
  const currentIcon =  getIconByPath(currentPath);
  // للتحقق من وجود الصفحة الحالية
  const is404 = pageProps?.statusCode === 404;

  return (
    <ThemeProvider defaultTheme='violet'>
      <div className="h-screen relative border-t-4 border-amber-600">
        <div className="bg-gradient-to-b z-10 opacity-[50%] absolute top-0 w-full from-amber-600 to-transparent" style={{ height: "500px" }} />

        <Head>
          <title>Aladdin</title>
        </Head>

        <main className="transition-all duration-200 z-10 absolute inset-0 px-5 h-screen max-w-7xl w-full mx-auto">
          {router.asPath.split("/")[1] !== "panel" ? (
            <>
              <div className="relative top-0">
                <Header NavItems={NavItems} />
              </div>
              <div className="block px-5 md:px-0 mt-32">
                <Component {...pageProps} />
              </div>
              <Footer />
            </>
          ) : (<>
            <div className="block relative top-0">
              <Header2 NavItems={NavItems2} />
              <Header3 NavItems={NavItems2} />
            </div>
            <div className="relative block px-5 md:px-0 lg:ml-72">
              <div>
                <div className='border-b-4 border-b-amber-600'>
                  <MainWidg 
                    info={{ name: `${router.asPath.split("/")[3]}`, icon: currentIcon }} 
                    breadcrumbsPaths={[
                      { label: 'Home', href: '/' },
                      { label: 'Panel', href: '/panel' },
                      { label: `${router.asPath.split("/")[2]}`, href: `/panel/${router.asPath.split("/")[2]}/${router.asPath.split("/")[3]}` },
                      { label: `${router.asPath.split("/")[3]}`, href: `/panel/main/${router.asPath.split("/")[3]}` }
                    ]} 
                  />
                </div>
              </div>
              {!is404 && <Component {...pageProps} />}
              {is404 && <p className="text-white text-center mt-5">Page Not Found</p>}
            </div>
          </>
          
          )}
        </main>

        <div>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
          <script src="/js/main.js?i=2"></script>
        </div>
      </div>
    </ThemeProvider>
  );
}
