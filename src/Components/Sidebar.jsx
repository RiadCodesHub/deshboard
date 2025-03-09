import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faChartColumn,
  faBuilding,
  faBagShopping,
  faPlay,
  faUsers,
  faNewspaper,
  faFileLines,
  faGear,
  faArrowRight,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

const SidebarItems = [
  { id: 1, name: "Home", src: <FontAwesomeIcon icon={faHouseChimney} />, isActive: true },
  { id: 2, name: "Stats", src: <FontAwesomeIcon icon={faChartColumn} />, isActive: false },
  { id: 3, name: "Bank Stats", src: <FontAwesomeIcon icon={faBuilding} />, isActive: false },
  { id: 4, name: "Cart", src: <FontAwesomeIcon icon={faBagShopping} />, isActive: false },
  { id: 5, name: "Blog", src: <FontAwesomeIcon icon={faPlay} />, isActive: false },
  { id: 6, name: "Clients", src: <FontAwesomeIcon icon={faUsers} />, isActive: false },
  { id: 7, name: "News", src: <FontAwesomeIcon icon={faNewspaper} />, isActive: false },
  { id: 8, name: "Documents", src: <FontAwesomeIcon icon={faFileLines} />, isActive: false },
  { id: 9, name: "Settings", src: <FontAwesomeIcon icon={faGear} />, isActive: false },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [items, setItems] = useState(SidebarItems);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleActive = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isActive: true } : { ...item, isActive: false }
    );
    setItems(updatedItems);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DesktopSidebar = () => (
    <nav
      className={`${
        isOpen ? "w-[250px]" : "w-[80px]"
      } h-screen bg-gray-900 px-4 pt-4 relative transition-all duration-300 flex flex-col items-start`}
    >
      <h1
        className={`${
          !isOpen ? "text-[16px]" : "text-[20px]"
        } text-white font-semibold mb-6 text-center w-full`}
      >
        dapper
      </h1>
      <hr className="w-full text-slate-400 mb-2"/>
      <ul className="flex flex-col gap-2 items-start w-full">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleActive(item.id)}
            className={`${
              item.isActive ? "border-l-2 border-white bg-gray-700" : ""
            } flex w-full items-center px-2 py-2 text-white hover:bg-gray-700 cursor-pointer`}
          >
            <span className="text-[16px] w-[20px] text-center flex-shrink-0">
              {item.src}
            </span>
            {isOpen && (
              <span className="text-[14px] font-semibold ml-4">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="w-full h-[42px] bg-slate-800 absolute flex items-center justify-center bottom-0 left-0 transform -translate-y-0 translate-x-0">
        <button
          onClick={toggleSidebar}
          className="w-full text-gray-900 text-[16px]"
          aria-expanded={isOpen}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`${
              isOpen ? "rotate-180 text-[25px]" : "text-[18px]"
            } transition-transform duration-300  font-bold text-white`}
          />
        </button>
      </div>
    </nav>
  );

  const MobileMenu = () => (
    <div className="w-[50%] fixed z-80  h-full top-0">
      <div className="w-full bg-white h-full shadow-lg p-6">
        <h1 className="text-[20px] font-bold text-gray-800 text-center">Menu</h1>
        <hr  className="w-full text-slate-400 mt-2"/>
        <ul className="mt-4 flex flex-col gap-2 scroll-y-auto">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleActive(item.id)}
            className={`${
              item.isActive ? "border-l-2 border-black bg-gray-200" : ""
            } flex w-full items-center px-2 py-2 hover:bg-gray-200 cursor-pointer`}
          >
            <span className="text-[16px] w-[20px] text-center flex-shrink-0">
              {item.src}
            </span>
            {isOpen && (
              <span className="text-[14px] font-semibold ml-4">
                {item.name}
              </span>
            )}
          </li>
        ))}
        </ul>
        <div className="relative">
        <button
          className="mt-20 w-full bg-red-500 text-white py-2 rounded-md"
          onClick={toggleMobileMenu}
        >
          Close
        </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full relative">
      {windowWidth >= 896 ? (
        <DesktopSidebar />
      ) : (
        <>
          <button 
            className={`z-60 p-4 text-gray-800 cursor-pointer absolute mx-0 top-0 left-0  transform translate-x-0 translate-y-0`}
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBarsStaggered} className="text-[24px]" />
          </button>
          {isMobileMenuOpen && <MobileMenu />}
        </>
      )}
    </div>
  );
}
