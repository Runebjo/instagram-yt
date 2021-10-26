import React from 'react';
import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <div>
      <div className="flex justify-between bg-white max-w-6xl">
        <div className="relative w-24 hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Search input Sonny */}
        {/* <div className="mt-1 relative p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md 
            focus:ring-black focus:border-black"
          />
        </div> */}

        {/* Search input Rune*/}
        <div className="mt-1 p-3 rounded-md flex items-center">
          <SearchIcon className="h-5 w-5 text-gray-500 -mr-8 z-50" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md 
            focus:ring-black focus:border-black"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
