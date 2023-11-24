import Tudasbazisitem from "../pages/Home/Statisztikak/Tudasbazisitem";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#040404] border-t-[#e8000a] border-t-[5px] text-white  1280:flex 1280:justify-center"
    >
      <div className="px-5 py-[35px] max-w-[1280px] 1280:p-[40px] ">
        <div className="hidden 1280:flex 1280:gap-x-5">
          <Tudasbazisitem
            title="Jogosítvány"
            texts={[
              "A kategóriás jogosítvány",
              "B kategóriás jogosítvány",
              "C kategóriás jogosítvány",
              "D kategóriás jogosítvány",
              "E kategóriás jogosítvány",
            ]}
          />
          <Tudasbazisitem
            title="Elméleti Tanfolyamok"
            texts={[
              "Autósiskola VII. kerület",
              "Autósiskola XIV. kerület",
              "Autósiskola XI. kerület",
            ]}
          />
          <Tudasbazisitem
            title="Jogosítvány Árak"
            texts={[
              "A kategóriás jogosítvány ára",
              "B kategóriás jogosítvány ára",
              "C kategóriás jogosítvány ára",
              "D kategóriás jogosítvány ára",
              "E kategóriás jogosítvány ára",
            ]}
          />
          <Tudasbazisitem
            title="Motoros Vezetéstechnika"
            texts={[
              "Miért a Moto Safety Drive?",
              "Vezetéstechnikai képzés Budapesten",
              "Vezetéstechnikai képzés Zuglóban",
            ]}
          />
        </div>

        <div className="leading-6 1280:border-t 1280:border-t-white 1280:py-[15px] text-sm">
          <p>
            © 2007 - 2023 SOS Jogsi Autósiskola Budapest. SOS Autósiskola Kft. -
            minden jog fenntartva. | <span>Adatkezelési tájékoztató</span>
          </p>
          <p>
            SOS Autósiskola Kft | 1074 Budapest, Hársfa utca 21. | +36 70 3 40
            40 40 | info@sosjogsi.hu
          </p>
        </div>
        <div className="flex items-center gap-x-1.5 text-[#4d4d4d] mt-4 1280:mt-0">
          {/* <span className="1280:flex text-[13px]">
            <a href="https://www.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_16304771.htm#query=404%20car&position=2&from_view=search&track=ais&uuid=0cd9cea5-e087-4d43-9059-86cf5cfb7486">
              404 Image by jcomp on Freepik
            </a>
          </span> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
