import { Fade } from "@mui/material";
import Carousel from "./Carousel";

function Hero() {
  //TODO: FIX THE CAROUSEL(e.g. the position of the traingle) and the numbers of it aren't working

  return (
    <section
      id="hero"
      className="bg-[url(/Home/banner-background.jpg)] w-full bg-no-repeat bg-center py-5 bg-cover 600:flex 600:justify-center pt-56"
    >
      <div className="flex flex-col px-5 gap-y-2 600:w-[585px] 600:px-0 600:gap-y-5 1280:flex-row 1280:w-full 1280:py-5 1280:px-12 1200:gap-x-7 1200:justify-center">
        <Fade in={true} timeout={2000}>
          <div className="600:bg-[#e8000a] 600:w-[585px] 600:rounded-xl 600:shadow-[0_0_8px_rgba(0,0,0,0.45)] bg-transparent relative ">
            <Carousel />
          </div>
        </Fade>

        <div className="flex flex-col gap-y-2 600:flex-row 600:gap-x-5 1200:gap-x-7 ">
          <Fade in={true} timeout={4000}>
            <img
              src="/Home/main-motorverzum.jpg"
              alt="MotorVerzum - motoros védőfelszerelés"
              className="rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.45)] h-[210px] object-cover w-full 600:h-[345px] 600:w-[265px] 1200:w-[277px]"
            />
          </Fade>

          <div className="flex flex-col gap-y-2 600:gap-y-5 600:h-[345px] 1200:gap-y-7 ">
            <div>
              <Fade in={true} timeout={6000}>
                <img
                  src="/Home/main-visszahivas.jpg"
                  alt="Visszahívást kérek"
                  className="rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.45)] h-[150px] object-cover w-full 600:h-[163px] 1200:w-[277px] "
                />
              </Fade>
            </div>
            <div>
              <Fade in={true} timeout={8000}>
                <img
                  src="/Home/main-ajandekutalvany.jpg"
                  alt="Jogosítvány ajándékutalvány"
                  className="rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.45)]  object-cover h-[150px] w-full 600:h-[161px] 1200:w-[277px] 1200:h-[150px] "
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
