import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/edubuklogo.png";
import cetaLogo from "../assets/cetaLogo.png";
import { RxCross2 } from "react-icons/rx";
import { MdClose, MdLogout } from "react-icons/md";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import InfoRow from "./InfoRow";
import { useAuth } from "../context/auth";
interface NavLink {
  name: string;
  path: string;
}
const Navbar = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  //console.log("Path", location);

  const links: NavLink[] = [
    { name: "Home", path: "/home" },
    { name: "CETA", path: "#ceta" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setOpenPopup(false);
    setAuth({ user: null, token: "" });
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-4">
      <img src={logo} className="w-fit h-24 sm:h-30 md:h-38"></img>
      <div
        className="flex justify-center items-center gap-1 w-full lg:hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex justify-center flex-col items-center gap-1">
          <div
            className={`relative flex lg:hidden flex-col items-center justify-center w-8 h-8 cursor-pointer space-y-1.5 transition-all duration-300 ease-in-out ${
              isOpen ? "open" : ""
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            <span
              className={`block w-8 h-1 bg-[#03257e] rounded transition duration-300 ease-in-out ${
                isOpen ? "transform translate-y-3 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-[#f14419] rounded transition duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-[#006666] rounded transition duration-300 ease-in-out ${
                isOpen ? "transform -translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
      {/* <RxHamburgerMenu
    className="flex md:hidden w-10 h-10 text-[#006666]"
    onClick={() => setOpen(true)}
  /> */}
      <div className="flex justify-center items-center">
        <div className="hidden lg:flex p-2 gap-6">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`${
                location.hash === link.path
                  ? "text-[#F14419]"
                  : "text-[#000000]"
              } 
            ${
              location.pathname === link.path
                ? "text-[#F14419]"
                : "text-[#000000]"
            }
            text-[20px] font-medium`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://edubuklms.com"
            className=" text-[20px] font-bold text-black cursor-pointer"
          >
            Courses
          </a>
          <a
            href="#about"
            className="bg-[#F14419] py-[8px] px-3 text-[#ffffff] rounded-full cursor-pointer"
          >
            About Edubuk
          </a>
          {auth.user ? (
            <CgProfile
              className="text-[#006666] w-8 h-8 md:w-10 md:h-10"
              onClick={() => setOpenPopup(!openPopup)}
            />
          ) : (
            <Link
              to="/login"
              className="text-black border-1 border-gray-300 rounded-full py-[8px] px-10 font-bold hover:bg-gray-200"
            >
              Login
            </Link>
          )}
        </div>
        {auth.user && (
          <CgProfile
            className="flex sm:hidden text-[#006666] w-8 h-8 md:w-10 md:h-10"
            onClick={() => setOpenPopup(!openPopup)}
          />
        )}{" "}
        {openPopup && (
          <div className="w-[300px] sm:w-[350px] absolute right-2 top-32 p-4 flex flex-col justify-center items-start z-20 bg-white border border-gray-200 rounded shadow-md ">
            <MdClose
              className="absolute top-2 w-6 h-6  right-2 text-gray-500 cursor-pointer"
              onClick={() => setOpenPopup(false)}
            />
            <InfoRow label="Name" value={auth.user.name} />
            <InfoRow
              label="School/College"
              value={auth.user.college}
              sliceLength={15}
            />
            <InfoRow label="Email" value={auth.user.email} sliceLength={15} />

            <button
              onClick={handleLogout}
              className="flex justify-center items-center text-[#006666] p-2 border-1 border-gray-200 rounded cursor-pointer"
            >
              Logout <MdLogout className="ml-1" />
            </button>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex flex-col justify-start items-center gap-4 z-20 bg-white p-6 h-fit fade-in-down transition-all duration-300 ease-in-out">
          <div className="w-full flex justify-end">
            <RxCross2
              className="w-6 h-6 text-gray-700 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`${
                location.hash === link.path
                  ? "text-[#F14419]"
                  : "text-[#006666]"
              } text-[20px] font-medium`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://edubuklms.com"
            className=" text-[20px] font-bold text-[#006666] cursor-pointer"
          >
            Courses
          </a>
          {!auth.user && (
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="text-[#006666] border-1 border-gray-300 rounded-full py-[10px] px-6 sm:px-8 font-bold hover:bg-gray-200"
            >
              Login
            </Link>
          )}
        </div>
      )}
      <img src={cetaLogo} className=" w-fit h-24 sm:h-30 md:h-38"></img>
    </div>
  );
};

export default Navbar;
