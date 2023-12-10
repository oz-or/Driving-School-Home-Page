function Tudasbazisitem({ title, texts }) {
  return (
    <div className="pb-5 w-[calc(100%_-_20px]">
      <div>
        <h3 className="mb-2.5 font-semibold text-white uppercase">{title}</h3>
        <img src="/Home/line-white.png" className="h-[2px] mb-4" />
      </div>
      <ul className="flex flex-col gap-y-1">
        {texts.map((text, i) => (
          <li key={i} className="text-[#a6a6a6] text-sm ">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tudasbazisitem;
