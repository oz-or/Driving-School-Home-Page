import { useState } from "react";

function MobileNavbarItem({ plus, i, text }) {
  const [whichIsOpen, setWhichIsOpen] = useState(0);

  function handleWhichIsOpen() {
    if (whichIsOpen !== i) setWhichIsOpen(i);
    if (whichIsOpen === i) setWhichIsOpen(0);
  }

  return (
    <li
      className="text-sm font-semibold border-dotted border-b border-b-[rgba(255,255,255,0.2)] py-[11px] "
      onClick={handleWhichIsOpen}
    >
      <div className="flex uppercase gap-x-1">
        <span>{plus}</span>
        {text}
      </div>

      {whichIsOpen === 1 && (
        <ul className="pl-[15px] space-y-1.5 text-sm mt-[5px] opacity-80 flex flex-col ">
          <li>Autó jogosítvány</li>
          <li>Jogosítvány ára</li>
          <li>Gyakori kérdések</li>
          <li>Oktatóink, oktatóautók</li>
        </ul>
      )}
      {whichIsOpen === 2 && (
        <ul className="pl-[15px] space-y-1.5 text-sm mt-[5px] opacity-80 flex flex-col ">
          <li>Motor jogosítvány</li>
          <li>Kategóriák, árak</li>
          <li>Gyakori kérdések</li>
          <li>Oktatóink</li>
          <li>Képek,videók</li>
        </ul>
      )}
      {whichIsOpen === 3 && (
        <ul className="pl-[15px] space-y-1.5 text-sm mt-[5px] opacity-80 flex flex-col ">
          <li>Teherautó jogosítvány</li>

          <li>Teherautó jogosítvány ára</li>

          <li>Oktatóink, járművek</li>
        </ul>
      )}
      {whichIsOpen === 4 && (
        <ul className="pl-[15px] space-y-1.5 text-sm mt-[5px] opacity-80 flex flex-col ">
          <li>Pótkocsi jogosítvány</li>

          <li>Pótkocsi jogosítvány ára</li>
          <li>Oktatóink, járművek</li>
        </ul>
      )}
      {whichIsOpen === 5 && (
        <ul className="pl-[15px] space-y-1.5 text-sm mt-[5px] opacity-80 flex flex-col ">
          <li>Buszjogosítvány</li>
          <li>Busz jogosítvány ára</li>
          <li>Oktatóink, járművek</li>
        </ul>
      )}
      {whichIsOpen === 6 && (
        <ul className="pl-[15px] space-y-1.5 text-sm mt-[5px] opacity-80 flex flex-col ">
          <li>GKI tanfolyam</li>
          <li>Tanfolyamválasztó</li>
          <li>GKI tanfolyam ára</li>
          <li>GKI időpontok</li>
          <li>GKI oktatók</li>
        </ul>
      )}
      {whichIsOpen === 7 && (
        <ul className="pl-[15px] space-y-1.5 text-sm mt-[5px] opacity-80 flex flex-col ">
          <li>Motoros vezetéstechnika</li>
          <li>Miért a Moto Safety Drive?</li>
          <li>Infók</li>
          <li>Képek</li>
        </ul>
      )}
    </li>
  );
}

export default MobileNavbarItem;
