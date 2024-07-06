import { Menu, Transition } from "@headlessui/react";
import { useEffect, useState, Fragment } from "react";
import Breadcrumbs from '../components/Breadcrumbs';  
import Pagination from '../components/Pagination';  

export default function MyWork() {
  const [filter, setFilter] = useState(false);
  const [selectedColor, setSelectedColor] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const Sort = [
    { id: "all", icon: "fa-brands fa-github",label: "All" },
    { id: "discord",icon: "fa-brands fa-discord", label: "Discord bots" },
    { id: "discord2",icon: "fa-brands fa-instagram", label: "Discord bots2" },
  ];

  const myWorkItems = [
    { id: "test.css", sort: "discord2", label: "test css1", description: `CSS CSS CSS `, img: "/img/aladdin_web.png", lastupdate: "20/05/2022 🆕️", price: "50$" },
    { id: "test2.css", sort: "discord", label: "test css2", description: `CSS library`, img: "/img/aladdin_web.png", lastupdate: "20/05/2022 🆕️", price: "50$" },
    { id: "test3.css", sort: "discord2", label: "test css3", description: `CSS library`, img: "/img/aladdin_web.png", lastupdate: "20/05/2022 🆕️", price: "50$" },
    { id: "test4.css", sort: "discord2", label: "test css4", description: `CSS library`, img: "/img/aladdin_web.png", lastupdate: "20/05/2022 🆕️", price: "50$" },
    { id: "test5.css", sort: "discord", label: "test css5", description: `CSS library`, img: "/img/aladdin_web.png", lastupdate: "20/05/2022 🆕️", price: "50$" },
  ];

  useEffect(() => {
    const savedColor = sessionStorage.getItem('selectedColor');
    if (savedColor) {
      setSelectedColor(savedColor);
    }
  }, []);

  useEffect(() => {
    if (selectedColor) {
      sessionStorage.setItem('selectedColor', selectedColor);
    }
  }, [selectedColor]);

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  }

  function SortSelected(selected) {
    setSelectedColor(selected);
    setFilter(false); // Close the filter menu after selection
    setCurrentPage(1); // Reset to the first page on sort change
  }

  const filteredItems = myWorkItems
    .filter((item) => selectedColor === "all" ? true : item.sort === selectedColor)
    .filter((item) => item.label.toLowerCase().includes(searchTerm.toLowerCase()));

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const breadcrumbsPaths = [
    { label: 'Home', href: '/' },
    { label: 'My Work', href: '/my-work' }
  ];

  return (
    <>
      <main data-aos="fade-down" className="bg-gray-800 border-amber-500 border-2 rounded-lg p-4 mx-auto max-w-7xl">
        <header className="flex flex-col md:flex-row justify-between items-center mb-6 border-b-2 py-4 border-amber-500">
          <div>
            <p className="text-2xl text-white mb-4 md:mb-0 font-semibold">My Work</p>
            <div className="text-sm text-gray-300 font-sans"><br /><Breadcrumbs paths={breadcrumbsPaths} /></div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
            <Menu as="div" className="relative text-left">
              <Menu.Button>
                <div
                  onClick={() => setFilter(!filter)}
                  className="bg-gradient-to-tl from-amber-500 to-amber-700 text-white w-11 h-11 rounded-xl hover:opacity-80 transition-all duration-200 relative"
                >
                  <div className="flex w-full h-full items-center justify-center">
                    <i className="fa-solid fa-filter text-zin-900" />
                  </div>
                </div>
              </Menu.Button>
              <Transition
                show={filter}
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
                    {Sort.map((th, thIdx) => (
                      <Menu.Item key={thIdx}>
                        <button
                          onClick={() => SortSelected(th.id)}
                          className={`group flex rounded-md items-center w-full px-3 py-2 transition-all duration-150 ${
                            selectedColor === th.id ? "text-white bg-500 shadow-md shadow-violet-500/10" : "text-black/75 dark:text-white/75 hover:text-black/100 dark:hover:text-white/100 hover:bg-gray-100/50 dark:hover:bg-gray-800/20"
                          }`}
                        >
                            <i className={`${th.icon} px-1`}/>
                          {th.label}
                        </button>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {filteredItems.length > 0 ? (
            filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((work, idx) => (
              <div key={idx} data-aos="fade-down" className="my-work scale-105 bg-900-80 rounded-xl ease-in duration-300 hover:scale-110 flex items-center justify-center">
                <div className="text-white text-left">
                  <div className="py-2"></div>
           
                  <img className="w-11/12 mx-auto" src={work.img} alt={work.label} />
                  <p className="text-center text-xl font-semibold mt-5 px-2">

                  {Sort.map((th, thIdx) => (
  th.id === work.sort ? (
    <i key={thIdx} className={`${th.icon} px-1 text-amber-400`} />
  ) : null
))}

                    <i className={`fa text-2xl text-amber-400 ${work.icon}`} /> {work.label}
                  </p>
                  <div className="py-1"></div>
                  <p className="text-gray-200 px-2 max-h-20 overflow-y-auto line-clamp-4 text-sm">{work.description}</p>
                  <div className="py-2"></div>
                  <p className="text-gray-500 px-2 line-clamp-4 text-sm">
                    <span className="grid grid-cols-[auto,1fr]">
                      <span>Last Update: {work.lastupdate}</span>
                      <span className="col-start-2 justify-self-end inline-flex items-center rounded-md bg-amber-300 px-2 border-2 py-1 text-xs font-medium text-amber-600 ring-1 ring-inset ring-purple-700/10">
                        {work.price}
                      </span>
                    </span>
                  </p>
                  <div className="py-2"></div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center col-span-full">No items found</p>
          )}
        </section>
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  );
}
