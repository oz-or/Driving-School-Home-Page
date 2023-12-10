import KisPotkocsi from "../../../svgs/home/KisPotkocsi.jsx";
import SegedmotorosKerekpar from "../../../svgs/home/SegedmotorosKerekpar.jsx";
import Busz from "../../../svgs/navbar/Busz.jsx";
import Car from "../../../svgs/navbar/Car.jsx";
import Motor from "../../../svgs/navbar/Motor.jsx";
import Potkocsi from "../../../svgs/navbar/Potkocsi.jsx";
import Teherauto from "../../../svgs/navbar/Teherauto.jsx";
import ELearningCategoryItem from "./ELearningCategoryItem";

function ELearningCategories() {
  return (
    <div className="grid gap-y-4 600:grid-cols-2 gap-x-4 768:grid-cols-3 1000:grid-cols-4 1280:grid-cols-5">
      <ELearningCategoryItem
        categoryName={"AM"}
        categoryMeaning={"(Segédmotoros Kerékpár)"}
        price={"29.990"}
        smallText={
          "75 óra/180 nap hozzáférési idő Kresz + Elsősegély tanfolyam"
        }
        vehicleSVG={<SegedmotorosKerekpar size="35px" />}
        hoverVehicleSVG={<SegedmotorosKerekpar size="35px" fill="#fff" />}
      />
      <ELearningCategoryItem
        categoryName={"A1"}
        categoryMeaning={"(Motorkerékpár)"}
        price={"34.990"}
        smallText={
          "75 óra/180 nap hozzáférési idő Kresz + Elsősegély tanfolyam"
        }
        vehicleSVG={<Motor />}
        hoverVehicleSVG={<Motor fill="#fff" />}
      />
      <ELearningCategoryItem
        categoryName={"A1"}
        categoryMeaning={"B Jogsival (Motorkerékpár)"}
        price={"29.990"}
        smallText={"75 óra/180 nap hozzáférési idő Kresz tanfolyam"}
        vehicleSVG={<Motor />}
        hoverVehicleSVG={<Motor fill="#fff" />}
      />
      <ELearningCategoryItem
        categoryName={"A2"}
        categoryMeaning={"(Motorkerékpár)"}
        price={"34.990"}
        smallText={
          "75 óra/180 nap hozzáférési idő Kresz + Elsősegély tanfolyam"
        }
        vehicleSVG={<Motor />}
        hoverVehicleSVG={<Motor fill="#fff" />}
      />
      <ELearningCategoryItem
        categoryName={"A"}
        categoryMeaning={"(Korlátlan Motorkerékpár)"}
        price={"34.990"}
        smallText={
          "75 óra/180 nap hozzáférési idő Kresz + Elsősegély tanfolyam"
        }
        vehicleSVG={<Motor />}
        hoverVehicleSVG={<Motor fill="#fff" />}
      />
      <ELearningCategoryItem
        categoryName={"B"}
        categoryMeaning={"(Személygépjármű)"}
        price={"39.990"}
        smallText={
          "75 óra/180 nap hozzáférési idő Kresz + Elsősegély tanfolyam"
        }
        vehicleSVG={<Car size="65px" />}
        hoverVehicleSVG={<Car size="65px" fill="#fff" />}
      />
      <ELearningCategoryItem
        categoryName={"BE"}
        categoryMeaning={"(Pótkocsi)"}
        price={"55.000"}
        smallText={"75 óra/180 nap hozzáférési idő Kresz tanfolyam"}
        vehicleSVG={<KisPotkocsi size="50px" />}
        hoverVehicleSVG={<KisPotkocsi size="50px" fill="#fff" />}
      />
      <ELearningCategoryItem
        categoryName={"C"}
        categoryMeaning={"(Teherauto)"}
        price={"65.000"}
        smallText={"75 óra/180 nap hozzáférési idő Kresz tanfolyam"}
        vehicleSVG={<Teherauto />}
        hoverVehicleSVG={<Teherauto fill="#fff" />}
      />
      <ELearningCategoryItem
        categoryName={"CE"}
        categoryMeaning={"(Pótkocsi)"}
        price={"60.000"}
        smallText={"75 óra/180 nap hozzáférési idő Kresz tanfolyam"}
        vehicleSVG={<Potkocsi />}
        hoverVehicleSVG={<Potkocsi fill="#fff" />}
      />
      <ELearningCategoryItem
        categoryName={"D"}
        categoryMeaning={"(Autóbusz)"}
        price={"60.000"}
        smallText={"75 óra/180 nap hozzáférési idő Kresz tanfolyam"}
        vehicleSVG={<Busz />}
        hoverVehicleSVG={<Busz fill="#fff" />}
      />
    </div>
  );
}

export default ELearningCategories;
