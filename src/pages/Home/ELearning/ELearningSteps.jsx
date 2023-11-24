import AngleDoubleRight from "../../../../assets/Home/AngleDoubleRight";

function ELearningSteps() {
  return (
    <div className="items-center 1000:flex gap-x-4 1280:gap-x-12">
      <div className="flex text-[#040404] justify-center 600:gap-x-0 gap-x-8 relative">
        <div className="relative">
          <img
            src="assets\Home\el-step-1.svg"
            className="w-[81px] 600:w-[150px] 600:relative 600:z-40"
          />
          <span className="absolute text-xs font-bold top-[46px] left-3 600:text-sm 600:py-3 600:w-[120px] 600:left-4 600:top-20 600:bg-[#e8000a] 600:rounded-xl  600:text-white 600:text-center 1000:top-20  ">
            KATTINTS
          </span>
        </div>

        <div className="hidden h-20 translate-y-[-10px] mx-[-10px] 600:block">
          <AngleDoubleRight fill="#ececec" size="70px" />
        </div>

        <div className="relative">
          <img
            src="assets\Home\el-step-2.svg"
            className="w-[81px] 600:w-[150px] 600:relative 600:z-40"
          />
          <span className="absolute text-xs font-bold top-[46px] left-5 600:text-sm 600:py-3 600:w-[120px] 600:left-[14px] 600:top-20 600:bg-[#e8000a] 600:rounded-xl  600:text-white 600:text-center 1000:top-20 ">
            FIZESS
          </span>
        </div>

        <div className="hidden h-20 translate-y-[-10px] mx-[-10px] 600:block">
          <AngleDoubleRight fill="#ececec" size="70px" />
        </div>

        <div className="relative">
          <img
            src="assets\Home\el-step-3.svg"
            className="w-[81px] 600:w-[150px] 600:relative 600:z-40"
          />
          <span className="absolute text-xs font-bold top-[46px] left-[18px] 600:text-sm 600:py-3 600:w-[120px] 600:left-4 600:top-20 600:bg-[#e8000a] 600:rounded-xl  600:text-white 600:text-center 1000:top-20 ">
            TANULJ
          </span>
        </div>
      </div>

      <div className="text-[#040404] mt-7 text-justify">
        <span className="text-[#e8000a] font-bold ">
          Online elméleti tanfolyam éjjel-nappal elérhető bankkártyás
          fizetéssel!
        </span>
        <p className="my-4 text-sm">
          A regisztráció csupán néhány percet vesz igénybe, és már kezdheted is
          a tanulást!
        </p>
        <ol className="pl-3 mb-4 text-sm">
          <li>lépés: kategória kiválasztása és adatok megadása</li>
          <li>lépés: regisztráció az e-Titán oktató programba</li>
          <li>lépés: elméleti tanfolyam díjának kifizetése bankkártyával</li>
        </ol>
        <p className="mb-8 text-xs">
          A feltételekről és a további díjakról kategóriánként részletes
          információt találsz a honlapunkon.
        </p>
      </div>
    </div>
  );
}

export default ELearningSteps;
