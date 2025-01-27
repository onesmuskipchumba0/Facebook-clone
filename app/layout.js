import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {FaCamera, FaCameraRetro, FaFacebook, FaFacebookMessenger, FaGamepad, FaHome, FaHouseUser, FaPeopleArrows, FaSearch, FaStore, FaUsers } from "react-icons/fa"
import {SiFacebook, SiPearson} from 'react-icons/si'
import { AiFillHome } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import {FiGrid} from "react-icons/fi"
import { IoNotificationsSharp } from "react-icons/io5";


import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dta-theme='dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Nav bar */}
        <nav className="pt-3 mb-5 flex flex-row items-center">
          {/* Search bar */}
          <div className="flex flex-row mr-auto items-center ml-2">
            <SiFacebook size={32} color="#1877F2"/>
            <div className="flex flex-row items-center ml-2 rounded-2xl bg-base-200 px-2 gap-3">
              <FaSearch size={16} />
              <input type="text" className="px-5 py-1 focus:outline-none bg-transparent" placeholder="search facebook"/>
            </div>
          </div>
          {/* Center nav */}
          <div className="flex flex-row items-center gap-6 lg:gap-8 justify-evenly w-1/3 md:gap-6 sm:gap-2">
            <Link href={"/"}><AiFillHome size={24}/></Link>
            <Link href={"/reels"}><MdOndemandVideo size={24}/></Link>
            <Link href={"/marketplace"}><FaStore size={24}/></Link>
            <Link href={"/groups"}><FaUsers size={24}/></Link>
            <Link href={"/gaming"}><FaGamepad size={24}/></Link>
          </div>
          {/* Right div */}
          <div className="flex flex-row ml-auto mr-5 items-center gap-3 lg:gap-5 md:gap-5 sm:gap-2">
            <Link href={"/more"}><FiGrid size={24}/></Link>
            <Link href={"/messages"}><FaFacebookMessenger size={24}/></Link>
            <Link href={"/notifications"}><IoNotificationsSharp size={24}/></Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
