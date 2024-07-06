import Link from "next/link";
import { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";

const MobileNavbar = ({ open, setOpen, NavItems }) => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`${open ? "" : "hidden"} w-full h-full z-50 fixed overflow-none top-0 backdrop-blur-sm lg:hidden`}
      />
      <div
        className={`transform ${open ? "" : "translate-x-full"} transition-all duration-300 bg-black bg-opacity-90 text-white w-80 fixed rounded-l-xl z-60 right-0 top-0 h-full lg:translate-x-full`}
      >
        <div className="relative w-full h-full">
          <div className="flex justify-between border-b border-white/20 items-center px-5 py-4">
            <div className="flex items-center">
              <img width="32" className="rounded-full icon-glow" src="/img/logo.png" />
              <p className="font-extrabold ml-1 text-2xl">Aladdin</p>
            </div>
            <button onClick={() => setOpen(!open)}>
              <i className="cursor-pointer fa fa-times text-xl mr-2" />
            </button>
          </div>
          {NavItems.filter((a) => a.link).map((item, itemIndex) => (
            <Link href={item.href} key={itemIndex}>
              <div
                key={itemIndex}
                className={`${router.asPath === item.href ? "bg-white bg-opacity-5" : ""} my-2 cursor-pointer p-4 opacity-75 hover:opacity-100 hover:underline transition-all duration-150 block`}
              >
                <i className={`${router.asPath === item.href ? item.activeIcon : item.icon} mr-2`} />
                {item.name}
              </div>
            </Link>
          ))}
          {NavItems.filter((a) => !a.link).map((item, itemIndex) => (
            <a href={item.href} key={itemIndex}>
              <div
                key={itemIndex}
                className={`my-2 cursor-pointer p-4 opacity-75 hover:opacity-100 hover:underline transition-all duration-150 block`}
              >
                <i className={`${router.asPath === item.href ? item.activeIcon : item.icon} mr-2`} />
                {item.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const Header = ({ NavItems }) => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [colors, setColors] = useState(false);

  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const colorsThemes = [
    { id: "violet", color: "violet", label: "Violet" },
    { id: "blue", color: "blue", label: "Sky" },
    { id: "emerald", color: "emerald", label: "Emerald" },
    { id: "rose", color: "rose", label: "Rose" },
    { id: "amber", color: "amber", label: "Amber" },
  ];

  const ChangeColor = (id) => {
    setTheme(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-900-30 backdrop-blur-md" : ""}`}>
        <div className="max-w-7xl px-5 mx-auto py-5 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <img src="/img/logo2.png" className="rounded-full" width="48" height="48" />
              <p className="invisible md:visible text-xl text-white font-semibold">
                <a >
                  <span className="text-amber-400">Ala</span>ddin
                </a>
              </p>
            </div>
            <ul className="hidden lg:flex items-center space-x-4">
              {NavItems.filter((a) => a.link).map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link href={item.href}>
                    <a
                      className={`border-b-2 ${router.asPath === item.href ? "text-amber-500 border-amber-500" : "border-black/0 text-white/75 hover:text-white"} transition-all duration-200 font-medium pb-3`}
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
              {NavItems.filter((a) => !a.link).map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a target="_blank" href={item.href}>
                    <div
                      className={`border-b-2 ${router.asPath === item.href ? "text-amber-500 border-amber-500" : "border-black/0 text-white/75 hover:text-white"} transition-all duration-200 font-medium`}
                    >
                      {item.name}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-2 relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-transparent py-2 px-3 text-white rounded-md text-center lg:hidden hover:bg-amber-400 hover:bg-opacity-20"
            >
              <i className={`fa ${open ? "fa-times" : "fa-bars"} text-lg`} />
            </button>
            <Menu as="div" className="relative text-left">
              <div>
                <Menu.Button>
                  <div
                    onClick={() => setColors(!colors)}
                    className="bg-gradient-to-tl from-amber-500 to-amber-700 text-white w-11 h-11 rounded-xl hover:opacity-80 transition-all duration-200 relative"
                  >
                    <div className="flex w-full h-full items-center justify-center">
                      <i className="far fa-swatchbook text-zin-900" />
                    </div>
                  </div>
                </Menu.Button>
              </div>
              <Transition
                show={colors}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-50 text-base right-0 p-1 w-56 mt-2 origin-top-right border bg-white border-black/10 dark:border-white/10 dark:bg-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" static>
                  <div className="px-1 py-2 space-y-1">
                    {colorsThemes.map((th, thIdx) => (
                      <Menu.Item key={thIdx}>
                        <button
                          onClick={() => ChangeColor(th.id)}
                          className={`group flex rounded-md items-center w-full px-3 py-2 transition-all duration-150 ${
                            theme === th.id ? "text-white bg-500 shadow-md shadow-violet-500/10" : "text-black/75 dark:text-white/75 hover:text-black/100 dark:hover:text-white/100 hover:bg-gray-100/50 dark:hover:bg-gray-800/20"
                          }`}
                        >
                          <div className="w-full flex items-center justify-between">
                            <span>{th.label} </span>
                            <i className={`${theme === th.id ? "border-white dark:border-black" : "border-black/0"} border-2 rounded-full fad fa-circle text-500-${String(th.color)} mr-1`} />
                          </div>
                        </button>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <a 
            href="https://discord.gg/4Kk6KBkxVV"
                    className="bg-gradient-to-tl from-amber-500 to-amber-700 text-white w-11 h-11 rounded-xl hover:opacity-80 transition-all duration-200 relative"
                  >
                    <div className="flex w-full h-full items-center justify-center">
                      <i className=" fa-brands fa-discord text-zin-900" />
                    </div>
                  </a>
          </div>
        </div>
      </header>

      <MobileNavbar open={open} setOpen={setOpen} NavItems={NavItems} Menu={() => setOpen(!open)} />
    </>
  );
};

export default Header;
