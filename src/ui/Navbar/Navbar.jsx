import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";
import Menu from "../../../assets/Navbar/Menu";
import Phone from "../../../assets/Navbar/Phone";
import Close from "../../../assets/Navbar/Close";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarVehicleCategoryItem from "./NavbarVehicleCategoryItem";
import NavbarBlackBgListItem from "./NavbarBlackBgListItem";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import Busz from "../../../assets/Navbar/Busz";
import Car from "../../../assets/Navbar/Car";
import Potkocsi from "../../../assets/Navbar/Potkocsi";
import Teherauto from "../../../assets/Navbar/Teherauto";
import Motor from "../../../assets/Navbar/Motor";

function Navbar() {
  //TODO: I have to make the navbar bigger when the user scrolls to a certain position

  const window = useWindowSize();

  const [{ y }] = useWindowScroll();
  console.log(y);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`${
          !isOpen ? "border-y-[5px]" : "border-t-[5px]"
        } bg-[url(../../assets/Navbar/header-background-responsive.png)] 1280:bg-[url(../../assets/Navbar/bg.png)]
         bg-no-repeat bg-center border-t-[#e8000a] transition duration-500 ${
           y < 200
             ? "1280:shadow-[inset_0_-10px_0_0_#000] border-b-[#040404] shadow-[0_0_8px_rgba(0,0,0,0.6)] 1280:border-b-[30px] border-b-[5px] 1280:pb-9 1280:pt-7 h-[100px] 1280:h-[190px]"
             : " border-b-none py-2.5 shadow-[0_0_8px_rgba(0,0,0,0.6)] "
         }  bg-[#f4f4f4] flex flex-col 1200:flex-row justify-center fixed w-full z-50 top-0 `}
      >
        <nav
          className={`h-[90px] px-5 1280:px-0 flex items-center justify-between 1200:w-[1200px] `}
        >
          <img
            src="../../assets/Navbar/sosjogsi-logo.svg"
            alt="SOS Autósiskola Budapest"
            className={`h-[80px] 1280:h-[113px] cursor-pointer hover:opacity-60 transition duration-500  ${
              y >= 200 && "1280:translate-y-1"
            }`}
          />

          {window.width >= 1280 && (
            <ul className="flex gap-x-1.5 ml-3 ">
              <NavbarVehicleCategoryItem
                to={"/jogositvany"}
                vehicle="Autó"
                img={y < 200 ? <Car size="65px" /> : ""}
                hoverImg={y < 200 ? <Car size="65px" fill={"#fff"} /> : ""}
              />
              <NavbarVehicleCategoryItem
                to={"/motor"}
                img={y < 200 ? <Motor /> : ""}
                hoverImg={y < 200 ? <Motor fill={"#fff"} /> : ""}
                vehicle="Motor"
              />

              <NavbarVehicleCategoryItem
                to={"/teherauto-jogositvany"}
                vehicle="Teherautó"
                img={y < 200 ? <Teherauto /> : ""}
                hoverImg={y < 200 ? <Teherauto fill={"#fff"} /> : ""}
              />

              <NavbarVehicleCategoryItem
                to={"/potkocsi-jogositvany"}
                vehicle="Pótkocsi"
                img={y < 200 ? <Potkocsi /> : ""}
                hoverImg={y < 200 ? <Potkocsi fill={"#fff"} /> : ""}
              />

              <NavbarVehicleCategoryItem
                to={"/busz-jogositvany"}
                vehicle="Busz"
                img={y < 200 ? <Busz /> : ""}
                hoverImg={y < 200 ? <Busz fill={"#fff"} /> : ""}
              />
            </ul>
          )}
          {window.width < 1280 ? (
            isOpen === false ? (
              <div className="flex items-center gap-x-3">
                <div className="rotate-[270deg] cursor-pointer ">
                  <Phone size="45px" fill="#e8000a" />
                </div>

                <div onClick={() => setIsOpen(true)} className="cursor-pointer">
                  <Menu size="36px" fill="#e8000a" />
                </div>
              </div>
            ) : (
              isOpen === true && (
                <div
                  onClick={() => setIsOpen(false)}
                  className="mr-[-10px] cursor-pointer"
                >
                  <Close size="42px" fill="#e8000a" />
                </div>
              )
            )
          ) : (
            <div className="flex ml-10 gap-x-2">
              <div className="rotate-[270deg] cursor-pointer">
                <Phone size="60px" fill="#e8000a" />
              </div>
              <div className="flex flex-col text-[#e8000a] font-semibold w-[180px] cursor-pointer">
                <span className="text-2xl">SEGÍTÜNK</span>
                <span className="text-xl mt-[-5px]">+36 70 3 40 40 40</span>
              </div>
            </div>
          )}
        </nav>
        {y < 200 && (
          <ul className="absolute hidden 1280:flex text-white top-36 text-[13px] font-semibold items-center ml-[-70px]">
            <NavbarBlackBgListItem to="/gki" text="Gki Tanfolyam" />
            <NavbarBlackBgListItem
              to="/motoros-vezetestechnika"
              text="Motoros Vezetéstechnika"
            />
            <NavbarBlackBgListItem
              to="/sos-autosiskola-oktatok"
              text="Oktatóink"
            />
            <NavbarBlackBgListItem
              to="/e-learning-elmeleti-tanfolyamok"
              text="Beiratkozás"
            />
            <NavbarBlackBgListItem
              to="/autosiskola-budapest"
              text="Kapcsolat"
            />
            <Link to="/motorosbolt">
              <li className="flex items-center gap-x-1 px-2.5">
                <img
                  src="../../../assets/Navbar/motorverzum-logo.png"
                  alt="MotorVerzum Motorosbolt"
                  className="h-[20px]"
                />
                <span className="text-sm text-[#eace04] font-semibold border-dotted border-b border-b-[rgba(255,255,255,0.2)] py-[11px] tracking-[0.01em] w-full">
                  MOTOROSBOLT
                </span>
              </li>
            </Link>
          </ul>
        )}
      </header>

      <MobileNavbar isOpen={isOpen} />
    </>
  );
}

export default Navbar;
