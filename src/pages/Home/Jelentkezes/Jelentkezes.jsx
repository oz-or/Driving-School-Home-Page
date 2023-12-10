import JelentkezesItem from "./JelentkezesItem";

function Jelentkezes() {
  return (
    <section id="jelentkezes">
      <div className="1280:flex 1280:justify-center">
        <div className="text-[#040404] px-5 1280:px-10 1280:w-[1280px]">
          <JelentkezesItem
            title="Információ a jelentkezéshez"
            text="A regisztrációs adatlap kéri az orvosi alkalmassági csoport típusát. Ezt meg kell adni akkor is, ha még nem csináltattad meg, de az elméleti vizsgára való jelentkezéshez majd kelleni fog. Az 1-es csoportút add meg, ha B, BE, A, A1, vagy A2 kategóriára jelentkezel. Ha C, CE, vagy D kategóriát szeretnél, akkor a 2-es csoportú orvosit kell megadni."
          />
          <JelentkezesItem
            title="További Költségek"
            text="Elméleti vizsga, elsősegély vizsga, gyakorlati órák díja (oktatónként eltérő lehet), gyakorlati vizsga díja."
          />
          <div>
            <JelentkezesItem title="Segítség az Online Beiratkozáshoz (B Kategória)" />
            <div className="relative h-[420px] shadow-[0_0_4px_rgba(0,0,0,0.20)] mb-[50px]">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/2QCp4_6Yl54?si=I-4jffR5Z2PXZW8d"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#ebebeb] 1280:bg-[url(/Home/nkh-background.png)] py-[30px] px-5 1280:flex 1280:justify-center 1280:bg-center 1280:px-16">
        <div className="flex flex-col items-center text-center 1280:flex-row 1280:gap-x-12 1280:w-[1150px]">
          <img
            src="/Home/nkh-logo.png"
            alt="Kiváló Autósiskola"
            className="h-20 1280:h-[111px]"
          />

          <div className="text-sm 1280:text-start 1280:w-[580px] ">
            <h2 className="text-[#e8000a] font-semibold text-2xl my-4">
              KIVÁLÓ AUTÓSISKOLA
            </h2>
            <p>
              Autósiskolánk átlagostól kiemelkedőbb szakmai felkészültségét, és
              oktatóink kiváló pedagógiai képességét még a Nemzeti Közlekedési
              Hatóság is dícsérettel illette.
            </p>
            <span className="text-[#e8000a]">
              Nézd meg, miben vagyunk jobbak!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jelentkezes;
