import Image from "next/image";
import Link from "next/link";
import { FaUser, FaClock, FaBookmark, FaUsers, FaVideo, FaStore, FaCalendarAlt, FaChartBar } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="mx-3 text-white">
      <Link href={"/user"} className="flex items-center gap-2 flex-row">
        <FaUser size={24} style={{ margin: '1rem 0' }} color="#1877F2"/>
        <p>Friend</p>
      </Link>
      <Link href={"/memories"} className="flex items-center gap-2 flex-row">
        <FaClock size={24} style={{ margin: '1rem 0' }} className="text-white" />
        <p>Memories</p>
      </Link>
      <Link href={"/saved"} className="flex flex-row items-center gap-2">
        <FaBookmark size={24} style={{ margin: '1rem 0' }} className="text-purple-500"/>
        <p>Saved</p>
      </Link>
      <Link href={"/groups"} className="flex flex-row items-center gap-2">
        <FaUsers size={24} style={{ margin: '1rem 0' }} className="text-blue-400"/>
        <p>Groups</p>
      </Link>
      <Link href={"/reels"} className="flex flex-row items-center gap-2">
      <FaVideo size={24} style={{ margin: '1rem 0' }} className="text-indigo-600"/>
      <p>Feeds</p>
      </Link>
      <Link href={"/marketplace"} className="flex flex-row items-center gap-2">
        <FaStore size={24} style={{ margin: '1rem 0' }} className="text-indigo-500"/>
        <p>Marketplace</p>
      </Link>
      <Link href={"/events"} className="flex flex-row items-center gap-2">
        <FaCalendarAlt size={24} style={{ margin: '1rem 0' }} className="text-blue-600" />
        <p>Events</p>
      </Link>
      <Link href={"/adsManager"} className="flex flex-row items-center gap-2">
        <FaChartBar size={24} style={{ margin: '1rem 0' }} className="text-blue-800"/>
        <p>Ads Manager</p>
      </Link>
    </div>
  );
}
