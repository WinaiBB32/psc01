import Image from "next/image";
import useprofile from "../Assets/S__6004750.jpg"
import Logo from "../Assets/Logo.svg"
import {

  BiSolidBell
} from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
        <div className="Logo_name">ระบบครุภัณฑ์</div>
      </div>
      <div className="smart-icons">
        <span className="notification">
          <BiSolidBell />
          <span className="notification-badge">5</span>
        </span>
        <div className="profile">
          <button><Image src={useprofile} alt="userimage" ></Image></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar