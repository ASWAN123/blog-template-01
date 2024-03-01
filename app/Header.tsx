import React from 'react'
import {
    LogoIcon,
    ShareIcon,
    LightIcon,
    QrcodeIcon,
    SearchIcon,
} from "./component/Icons";

const Header = () => {
  return (
    <header className="bg-[#ffffff] container w-full mx-auto px-2 py-6 flex items-center justify-between gap-4  sticky top-0 left-0 right-0  ">
                    <div className="flex space-x-1  items-center">
                        <LogoIcon  className=" w-6 h-6 text-[#8fb2ff] " />
                        <p className="font-semibold text-[#8fb2ff] text-xl">
                            Oudant
                        </p>
                    </div>
                    <nav>
                        <ul className="flex items-center justify-between  space-x-8 ">
                            {[
                                "Home",
                                "Blog Posts",
                                "Categories & Tags",
                                "Featured Content",
                            ].map((item, index) => {
                                return (
                                    <li
                                        className="text-gray-600 hover:cursor-pointer hover:text-gray-900 first:text-gray-900"
                                        key={index}
                                    >
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1 md:mr-8 ">

                            <SearchIcon className=" w-6 h-6  hover:cursor-pointer hover:text-blue-400 " />
                            {/* <input
                                className=" border-b py-1 outline-none px-2  "
                                placeholder="search for a blog"
                                type="text"
                                name=""
                                id=""
                            /> */}
                        </div>
                        
                        
                        <ShareIcon className="w-6 h-6  hover:cursor-pointer hover:text-blue-400    " />

                        <QrcodeIcon className="w-6 h-6  hover:cursor-pointer hover:text-blue-400    " />

                        <LightIcon className="w-6 h-6  hover:cursor-pointer hover:text-blue-400    " />
                    </div>
                </header>
  )
}

export default Header
