
"use client";
import { ReactNode, useState } from "react";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
import "./style.css";

interface Props {
    children: ReactNode
}

const Sidebar: React.FC<Props> = ({ children }) => {

    const [open, setOpen] = useState<Boolean>(true);

    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User" },
        { title: "Schedule ", src: "Calendar" }
    ];

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-24"
                    } bg-dark-purple h-screen relative duration-300`}
            >
                <div className="flex gap-x-4 items-center flex-col justify-center md:rounded-l-3xl rounded-l-xl bar-header bg-black md:pb-16 sm:pb-14 pb-12 md:pt-8 sm:pt-6 pt-4">
                    <h2
                        className={`cursor-pointer anta-regular font-semibold text-white duration-500 ${open ? "rotate-[360deg] md:text-3xl sm:text-2xl text-xl rounded-3xl" : "md:text-xl sm:text-lg text-base"
                            }`}
                    >Varatia.</h2>

                    <button onClick={() => setOpen(!open)} className={`${!open && "rotate-180"} md:mt-5 sm:mt-4 mt-3 rounded-2xl bg-white text-black md:py-5 md:px-5  sm:py-4 sm:px-4 py-3 px-3`}>
                        <FaArrowRight
                            className={`cursor-pointer md:text-lg sm:text-base text-sm `}
                        />
                    </button>
                </div>

                <ul className="pt-6 relative md:rounded-tr-3xl rounded-tr-xl bar-nav-items">
                    <div className={`bg-black md:rounded-2xl rounded-xl flex flex-col ${!open && "items-center"} justify-center md:py-5 py-3 md:mr-5 mr-4`}>
                        {Menus.map((Menu, index) => (
                            <li
                                key={index}
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                           md:mt-5 sm:mt-4 mt-3 ${index === 0 && "bg-light-white"
                                    } `}
                            >
                                <img className="md:h-10 md:w-10 h-8 w-8 rounded-full" src={`https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg`} />
                                <span className={`${!open && "hidden"} origin-left duration-200 text-white`}>
                                    {Menu.title}
                                </span>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>

            <div className="h-screen flex-1 p-7 bg-black rounded-3xl rounded-tl-none">
                <h1 className="text-2xl font-semibold text-white">Home Page</h1>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
Sidebar.propTypes = {
    children: PropTypes.node
}