function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      className="relative carousel carousel-fade slide "
      data-bs-ride="carousel"
    >
      <div className="relative mt-[-16px] carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          data-bs-interval="1000"
          className="absolute left-[-79px] hidden 600:block active top-8 indent-0 bg-transparent text-[#fff] font-bold text-3xl"
          aria-current="true"
          aria-label="Slide 1"
        >
          1{" "}
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          data-bs-interval="1000"
          className="hidden 600:block absolute left-[-78px] top-[75px] indent-0 bg-transparent text-[#fff] font-bold text-3xl"
          aria-label="Slide 2"
        >
          2{" "}
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          data-bs-interval="1000"
          className="hidden 600:block absolute left-[-77.5px]  top-[120px] indent-0 bg-transparent text-[#fff] font-bold text-3xl"
          aria-label="Slide 3"
        >
          3{" "}
        </button>
      </div>
      <div className="carousel-inner rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.45)]">
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src="/Home/main-oc-elearning-simplepay.jpg"
            alt="Prémium B kategóriás e-learning elméleti tanfolyam!"
            className="rounded-r-xl  object-cover w-full 600:ml-14 600:h-[345px] 600:w-[530px]"
          />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="/Home/main-oc-motoros-vezetestechnikai-kepzes-2017.jpg"
            alt="Ingyenes motoros biztonságtechnikai tréning!"
            className="rounded-r-xl   object-cover w-full 600:ml-14 600:h-[345px] 600:w-[530px]"
          />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="/Home/main-oc-gki-kepzes-megujitas.jpg"
            alt="GKI tanfolyam, GKI megújítás most ingyen e-learning képzéssel!"
            className="rounded-r-xl  object-cover w-full 600:ml-14 600:h-[345px] 600:w-[530px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
