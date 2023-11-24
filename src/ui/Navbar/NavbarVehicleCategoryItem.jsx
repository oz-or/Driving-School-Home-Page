import { useWindowScroll } from "@uidotdev/usehooks";
import { useState } from "react";

function NavbarVehicleCategoryItem({ to, vehicle, img, hoverImg }) {
  const [isHovered, setIsHovered] = useState(false);

  const [{ y }] = useWindowScroll();

  return (
    <li
      className={`shadow-[0_0_4px_rgba(0,0,0,0.20)] rounded-3xl text-center flex flex-col items-center justify-center bg-[rgba(255,255,255,0.5)] w-[150px]  ${
        y < 200 ? "h-[130px]" : "h-[85px]"
      } cursor-pointer hover:text-white hover:bg-[#e8000a] transition duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col mb-3">
        <h2 className="text-xl font-semibold uppercase ">{vehicle}</h2>
        <span className="text-sm">JOGOSÍTVÁNY</span>
      </div>
      <div className="scale-[135%] mt-1 transition duration-500">
        {!isHovered ? img : hoverImg}
      </div>
    </li>
  );
}

export default NavbarVehicleCategoryItem;
