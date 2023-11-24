import Hero from "./Hero/Hero";
import ELearning from "./ELearning/ELearning";
import Jelentkezes from "./Jelentkezes/Jelentkezes";
import JogositvanyokInfoi from "./JogositvanyokInfoi/JogositvanyokInfoi";
import Statisztikak from "./Statisztikak/Statisztikak";

function Home() {
  return (
    <div>
      <Hero />
      <ELearning />
      <Jelentkezes />
      <JogositvanyokInfoi />
      <Statisztikak />
    </div>
  );
}

export default Home;

//icons: font awesome lightbulb, font awesome angle double right
