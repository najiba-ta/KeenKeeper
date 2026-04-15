import React from 'react';
import MyLink from "./MyLink";
import { IoHome } from 'react-icons/io5';
import { ImStatsDots } from 'react-icons/im';
import { IoMdTime } from 'react-icons/io';
const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home",
            icon: <IoHome />
        },
        {
            path: "/timeline",
            text: "Timeline",
            icon: <IoMdTime />
        },

        {
            path: "/stats",
            text: "Stats",
            icon: <ImStatsDots />
        }

    ]
    return (
        <nav className="shadow-sm px-5 bg-base-100">
            <div className="navbar container mx-auto flex justify-between px-0">

               
                <div className="navbar-start w-auto">
                    <div className="dropdown lg:hidden">
                       
                        <label tabIndex={0} className="btn btn-ghost btn-circle border border-gray-200 bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </label>

                       
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z- p-2 shadow-xl bg-white rounded-box w-52 border border-purple-100">
                            {navItems.map((item, index) => (
                                <li key={index} className="hover:bg-purple-50 rounded-lg">
                                    <MyLink href={item.path} className="flex gap-2 text-gray-700 font-medium">
                                        {item.icon}
                                        {item.text}
                                    </MyLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-green-900 ml-2 lg:ml-0">
                        Keen<span className='font-semibold text-black'>Keeper</span>
                    </h2>
                </div>

                <div className="navbar-end hidden lg:flex w-full justify-end">
                    <div className="flex gap-6">
                        {navItems.map((item, index) => (
                            <MyLink key={index} href={item.path} className="flex items-center gap-2 font-medium hover:text-green-700 transition-colors">
                                {item.icon}
                                {item.text}
                            </MyLink>
                        ))}
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;