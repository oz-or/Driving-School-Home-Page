import MobileNavbarItem from "./MobileNavbarItem";

function MobileNavbar({ isOpen }) {
  return (
    isOpen && (
      <div className=" px-5 absolute 1280:hidden bg-[rgba(4,4,4,0.98)] w-full h-[377px] text-white py-4 overflow-y-scroll z-40 pt-28">
        <ul>
          <MobileNavbarItem plus="+" i={1} text="AUTÓ JOGOSÍTVÁNY" />
          <MobileNavbarItem plus="+" i={2} text="Motor Jogosítvány" />
          <MobileNavbarItem plus="+" i={3} text="Teherautó Jogosítvány" />
          <MobileNavbarItem plus="+" i={4} text="Pótkocsi Jogosítvány" />
          <MobileNavbarItem plus="+" i={5} text="Busz Jogosítvány" />
          <MobileNavbarItem plus="+" i={6} text="Gki Tanfolyam" />
          <MobileNavbarItem plus="+" i={7} text="Motoros Tanfolyam" />

          <MobileNavbarItem text="Oktatóink" />

          <MobileNavbarItem text="Beiratkozás" />

          <MobileNavbarItem text="Kapcsolat" />

          <li className="flex items-center gap-x-1">
            <img
              src="../../../assets/Navbar/motorverzum-logo.png"
              alt="MotorVerzum Motorosbolt"
              className="h-[25px]"
            />
            <span className="text-sm text-[#eace04] font-semibold border-dotted border-b border-b-[rgba(255,255,255,0.2)] py-[11px] tracking-[0.01em] w-full">
              MOTOROSBOLT
            </span>
          </li>
        </ul>
      </div>
    )
  );
}

export default MobileNavbar;
