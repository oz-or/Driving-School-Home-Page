import { useWindowSize } from "@uidotdev/usehooks";
import Lightbulb from "../../../assets/Home/Lightbulb";
import AKOTable from "./Tables/AKOTable";
import KKTable from "./Tables/KKTable";
import VSMTable from "./Tables/VSMTable";
import Tudasbazisitem from "./Tudasbazisitem";

function Statisztikak() {
  const window = useWindowSize();

  return (
    <section id="statisztikák">
      <div>
        <div className="bg-[#040404] flex flex-col 1280:flex-row px-5 1280:px-0 1280:justify-center">
          <div className="bg-[#e8000a] flex justify-center items-center rounded-b-2xl py-4 1280:rounded-r-2xl 1280:rounded-bl-none  1280:py-10 flex-col 1280:w-[330px] mr-5">
            <h2 className="hidden ml-10 text-xl font-semibold text-white uppercase 1280:block">
              Jogosítvány <br /> Tudásbázis
            </h2>
            <div className="mt-2 ml-10 opacity-50">
              <Lightbulb width="60px" height="90px" fill="#e8e8e8" />
            </div>
          </div>

          <div className="grid py-5 600:grid-cols-2 gap-x-5 1000:grid-cols-3 1280:py-10 1280:w-[950px]">
            <Tudasbazisitem
              title="Tanuló Tájékoztatók"
              texts={[
                "Koronavírussal kapcsolatos felhívás",
                "A kategória tanuló tájékoztató",
                "B kategória tanuló tájékoztató",
                "C, D, E kategória tanuló tájékoztató",
                "GKI tanuló tájékoztató",
              ]}
            />
            <Tudasbazisitem
              title="Vizsga Információk"
              texts={[
                "Vizsga útvonalak",
                "Vizsga feladatok",
                "BÜ vizsga feladatok (C és CE kategória)",
              ]}
            />
            <Tudasbazisitem
              title="Hasznos Információk"
              texts={[
                "26 KRESZ teszt kérdés",
                "Jogosítvány kategóriák",
                "Mire figyelj jogosítványszerzés közben?",
                "Gépjárművezetői alkalmasság",
                "Jogosítvány bevonása",
              ]}
            />
          </div>
        </div>

        {window.width < 1280 && (
          <div className="px-5 py-[50px]">
            <div className="hidden 1280:block">
              <img
                src="assets/Home/sosjogsi-logo-bw.svg"
                alt="SOS Autósiskola Budapest"
                className="w-[300px] opacity-25"
              />
            </div>

            <div className="flex flex-col gap-y-7">
              <AKOTable />
              <KKTable />
              <VSMTable />
            </div>
          </div>
        )}
        {window.width >= 1280 && (
          <div className="1280:flex 1280:justify-center">
            <div className="px-10 py-[50px] max-w-[1280px]">
              <div className="flex gap-x-[30px] mb-[30px] w-full">
                <div className="w-[700px] flex flex-col items-center">
                  <img
                    src="assets/Home/sosjogsi-logo-bw.svg"
                    alt="SOS Autósiskola Budapest"
                    className="w-[300px] opacity-25 translate-y-[-25px]"
                  />
                  <div className="w-full">
                    <AKOTable />
                  </div>
                </div>
                <div className="w-[460px]">
                  <KKTable />
                </div>
              </div>
              <VSMTable />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Statisztikak;
