import BlackBgHeader from "../../../ui/BlackBgHeader";
import JogositvanyokInfoiGridItem from "./JogositvanyokInfoiGridItem";

function JogositvanyokInfoi() {
  return (
    <section id="jogositvanyok" className="1280:flex 1280:justify-center">
      <div className="py-[50px] px-5 1280:w-[1280px] 1280:px-10">
        <div>
          <BlackBgHeader title="Autósiskola,Jogosítvány,GKI Tanfolyam, Motoros Vezetéstechnika Budapesten" />
        </div>
        <div className="mt-[50px]">
          <JogositvanyokInfoiGridItem
            categoryletter="B"
            to="/jogositvany"
            title="Autó Jogosítvány"
            text1="Az első jogosítvány megszerzése mindenki életében mérföldkőnek számít. Zuglói központtal működő autósiskolánk abban szeretne segítséget nyújtani, hogy jogosítványodat kellemes körülmények között, türelmes oktatókkal, lehetőleg stressz mentesen tudd megszerezni."
            text2="Vezetni megtanulni nem könnyű, de az biztos, hogy az autósiskolánkban megszerzett tudás egy életre szól, ugyanakkor egy életen át fejleszthető. Komoly szakmai múlttal rendelkező oktatógárdánk mindent megtesz a színvonalas és korrekt szolgáltatásért, illetve azért, hogy minden vizsgád elsőre sikeres legyen!"
          />

          <JogositvanyokInfoiGridItem
            categoryletter="A"
            to="/motor"
            title="Motor Jogosítvány"
            text1="Iskolánk évek óta rengeteg energiát fektet a motor jogosítvány képzésbe, több száz tanuló tesz nálunk sikeres vizsgát évente. Ha tetszik a motorozás, de még nem próbáltad, akkor is bátran hívj, a tanpályán bármilyen költség nélkül megnézheted az oktatást és közösen kiválasztjuk az igényeidnek megfelelő motort."
            text2="Saját motorodon szeretnél tanulni? Nálunk nem probléma! A gyakorlati tandíj árából így akár 20% kedvezményt is kaphatsz és a motor szállítását, illetve a tárolását is megoldjuk!"
          />

          <JogositvanyokInfoiGridItem
            categoryletter="C"
            to="/teherauto-jogositvany"
            title="Teherautó Jogosítvány"
            text1="C kategóriás jogosítvány megszerzésén gondolkozol? Autósiskolánk abban is tud segíteni! Nálunk rövid időn belül kezedben lehet teherautó jogosítványod!"
            text2="C kategóriás jogosítvány meghatározása: Autóbusz és trolibusz kivételével a 3500 kg megengedett legnagyobb össztömeget meghaladó gépkocsi, valamint az ilyen gépkocsiból és könnyű pótkocsiból álló járműszerelvény."
          />

          <JogositvanyokInfoiGridItem
            categoryletter="D"
            to="/potkocsi-jogositvany"
            title="Busz Jogosítvány"
            text1="D kategóriás jogosítvány megszerzésén gondolkozol? Autósiskolánk abban is tud segíteni! Nálunk rövid időn belül kezedben lehet autóbusz jogosítványod!"
            text2="D kategóriás jogosítvány meghatározása: Autóbusz, valamint az autóbuszból és könnyű pótkocsiból álló járműszerelvény."
          />

          <JogositvanyokInfoiGridItem
            categoryletter="E"
            to="/busz-jogositvany"
            title="Nehézpótkocsi Jogosítvány"
            text1="E kategóriás jogosítvány megszerzésén gondolkozol? Autósiskolánk abban is tud segíteni! Nálunk rövid időn belül kezedben lehet nehézpótkocsi jogosítványod!"
            text2="E kategória meghatározása: C kategóriába sorolt gépkocsiból és nehéz pótkocsiból álló járműszerelvény vagy B kategóriába sorolt gépkocsiból és nehéz pótkocsiból álló járműszerelvény."
          />

          <JogositvanyokInfoiGridItem
            categoryletter="GKI"
            to="/gki"
            title="Gki Tanfolyam"
            text1="A GKI vizsga váltja fel a korábbi belföldi árufuvarozó és belföldi autóbuszvezető, valamint nemzetközi árufuvarozó és nemzetközi autóbuszvezető tanfolyamot. A GKI vizsga gépkocsivezető és személyszállító tevékenység végzéséhez szükséges."
            text2="Minden olyan teherautó vezetőnek szüksége van erre a tanfolyamra, aki C1, C, C1+E, C+E kategóriás jogosítvánnyal, illetve minden olyan autóbuszvezetőnek, aki D1, D, D1+E, D+E kategóriás jogosítvánnyal rendelkezik és hivatásos gépjárművezetőként jövedelemszerzés céljából járművet kíván vezetni."
            text3="A megszerzett GKI igazolvány birtokában az Európai Unió területén bárhol munkát vállalhat a gépjárművezető."
          />

          <JogositvanyokInfoiGridItem
            categoryletter="A"
            to="/motoros-vezetestechnika"
            title="Motoros Vezetéstechnika"
            text1="A gépjárművezető képzés /jogosítványszerzés/ feladata a KRESZ szabályainak megismertetése, és az azok betartásához szükséges készségszintű járműkezelési tudás átadása, míg a vezetéstechnikai képzések legfőbb célja olyan motorkezelési tudás átadása, mely segítségével a balesetek megelőzhetőek, a kialakult veszélyhelyzetek pedig sérülésmentesen elháríthatók."
            text2="A cél egy olyan vezetéstechnikai tréning kidolgozása volt, mely minden felesleges – időhúzó – elemet mellőz, gyakorlati képzésen alapul és minden motoros számára elérhető."
          />
        </div>
      </div>
    </section>
  );
}

export default JogositvanyokInfoi;
