import BlackBgHeader from "../../../ui/BlackBgHeader";
import ELearningCategories from "./ELearningCategories";
import ELearningSteps from "./ELearningSteps";

function ELearning() {
  return (
    <section
      id="e-learning"
      className="pt-[50px] pb-5 px-5 1280:flex 1280:flex-col 1280:items-center"
    >
      <div className="1280:w-[1280px] 1280:px-10 ">
        <BlackBgHeader title="E-Learning - Online Kresz Tanfolyam" />

        <ELearningSteps />

        <ELearningCategories />
      </div>
    </section>
  );
}

export default ELearning;
