import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import {
  AutoJogositvany,
  JogositvanyAra,
  JogositvanyGyik,
  JogositvanyOktatok,
  BuszJogositvany,
  BuszJogositvanyAra,
  BuszJogositvanyOktatok,
  GkiTanfolyam,
  GkiIdopontok,
  GkiMegujitas,
  GkiOktatok,
  GkiTanfolyamAr,
  MotorJogositvany,
  MotorJogositvanyGyik,
  MotorJogositvanyOktatok,
  MotorKategoriak,
  MotorosOktatasKepekVideok,
  MotorosVezetesTechnika,
  MotorosVezetesTechnikaKepek,
  MotoSafetyDrive,
  VezetesTechnikaiTrening,
  PotkocsiJogositvany,
  PotkocsiJogositvanyAra,
  PotkocsiJogositvanyOktatok,
  TeherautoJogositvany,
  TeherautoJogositvanyAra,
  TeherautoJogositvanyOktatok,
  AutosiskolaOktatok,
  ELearningElmeletiTanfolyamok,
  Kapcsolat,
  Home,
  Motorosbolt,
  MotorosVedofelszereles,
} from "./pages/importPages";
import PageNotFound from "./ui/Errors/PageNotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { element: <Home />, path: "/" },

      /* {
        element: <AutoJogositvany />,
        path: "/jogositvany",
        children: [
          { element: <JogositvanyAra />, path: "/jogositvany-ara" },
          { element: <JogositvanyGyik />, path: "/jogositvany-gyik" },
          { element: <JogositvanyOktatok />, path: "/jogositvany-oktatok" },
        ],
      },
      {
        element: <MotorJogositvany />,
        path: "/motor",
        children: [
          { element: <MotorKategoriak />, path: "/motor-kategoriak" },
          {
            element: <MotorJogositvanyGyik />,
            path: "/motor-jogositvany-gyik",
          },
          {
            element: <MotorJogositvanyOktatok />,
            path: "/motor-jogositvany-oktatok",
          },
          {
            element: <MotorosOktatasKepekVideok />,
            path: "/motoros-oktatas-kepek-videok",
          },
        ],
      },
      {
        element: <TeherautoJogositvany />,
        path: "/teherauto-jogositvany",
        children: [
          {
            element: <TeherautoJogositvanyAra />,
            path: "/teherauto-jogositvany-ara",
          },

          {
            element: <TeherautoJogositvanyOktatok />,
            path: "/teherauto-jogositvany-oktatok",
          },
        ],
      },
      {
        element: <PotkocsiJogositvany />,
        path: "/potkocsi-jogositvany",
        children: [
          {
            element: <PotkocsiJogositvanyAra />,
            path: "/potkocsi-jogositvany-ara",
          },

          {
            element: <PotkocsiJogositvanyOktatok />,
            path: "/potkocsi-jogositvany-oktatok",
          },
        ],
      },
      {
        element: <BuszJogositvany />,
        path: "/busz-jogositvany",
        children: [
          {
            element: <BuszJogositvanyAra />,
            path: "/busz-jogositvany-ara",
          },

          {
            element: <BuszJogositvanyOktatok />,
            path: "/busz-jogositvany-oktatok",
          },
        ],
      },
      {
        element: <GkiTanfolyam />,
        path: "/gki",
        children: [
          { element: <GkiMegujitas />, path: "/gki-megujitas" },
          {
            element: <GkiTanfolyamAr />,
            path: "/gki-tanfolyam-ar",
          },
          {
            element: <GkiIdopontok />,
            path: "/gki-idopontok",
          },
          {
            element: <GkiOktatok />,
            path: "/gki-oktatok",
          },
        ],
      },
      {
        element: <MotorosVezetesTechnika />,
        path: "/motoros-vezetestechnika",
        children: [
          {
            element: <MotoSafetyDrive />,
            path: "/motoros-vezetestechnika/moto-safety-drive",
          },
          {
            element: <VezetesTechnikaiTrening />,
            path: "/motoros-vezetestechnikai-trening",
          },
          {
            element: <MotorosVezetesTechnikaKepek />,
            path: "/motoros-vezetestechnika-kepek",
          },
        ],
      },
      { element: <AutosiskolaOktatok />, path: "/sos-autosiskola-oktatok" },
      {
        element: <ELearningElmeletiTanfolyamok />,
        path: "/e-learning-elmeleti-tanfolyamok",
      },
      { element: <Kapcsolat />, path: "/autosiskola-budapest" },
      { element: <Motorosbolt />, path: "/motorosbolt" },
      { element: <MotorosVedofelszereles />, path: "/motoros-vedofelszereles" }, */
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
