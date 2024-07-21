import Link from "next/link";
import { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";

const Sidebar = ({ NavItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [colors, setColors] = useState(false);

  const router = useRouter();
  const { theme, setTheme } = useTheme();
const url = router.asPath.split("/");
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
  const [openSubMenuIndexes, setOpenSubMenuIndexes] = useState(NavItems.map(() => true));
  const toggleSubMenu = (index) => {
    const updatedSubMenus = openSubMenuIndexes.map((isOpen, i) => i === index ? !isOpen : isOpen);
    setOpenSubMenuIndexes(updatedSubMenus);
  };
  
  return (
    <>
      <aside className={` hidden lg:block fixed top-0 left-0  w-64 z-50 h-full transition-all duration-300 bg-900-30 backdrop-blur-md bg-opacity-90 text-white ${isScrolled ? "bg-opacity-80" : ""}`}>
        <div className="h-full flex flex-col justify-between " >
          <div className="flex flex-col items-center p-4 overflow-auto">
          <div className=" overflow">
              <br />
              <br />
              <br />
            </div>
            <div className="overflow-auto w-full"> 
            <ul className="flex flex-col items-start w-full">
  {NavItems.map((item, itemIndex) => (
    <li key={itemIndex} className="w-4/6 mx-5">
      <div className="flex items-center justify-between py-2" onClick={() => toggleSubMenu(itemIndex)}>
        <div className="flex items-center">
          <i className={`${url[2] === item.folder ? item.activeIcon : item.icon}`}></i>
          <span className="mx-2">{item.name}</span>
        </div>
        <i className={`fa-solid ${openSubMenuIndexes[itemIndex] ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
        </div>
      <ul className={`flex flex-col border-t-4 border-amber-400 ${openSubMenuIndexes[itemIndex] ? '' : 'hidden'}`}>
        {item.list.map((item2, itemIndex2) => (
          <li key={itemIndex2} className="w-full">
            <Link href={`/panel/${item.folder}${item2.href}`}>
              <a className={`block w-full text-left px-4 py-2 border-l-4 ${url[2] + "/" + url[3] === item.folder + item2.href ? "text-amber-500 border-amber-500" : "border-black/0 text-white/75 hover:text-white hover:border-amber-500/50"} transition-all duration-200 font-medium`}>
          <i className={`${url[2] + "/" + url[3] === item.folder + item2.href ? item2.activeIcon : item2.icon} mx-2`}></i>
              
                {item2.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  ))}
</ul>



            </div>
          </div>
      
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
