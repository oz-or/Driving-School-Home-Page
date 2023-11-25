function JelentkezesItem({ title, text }) {
  return (
    <div className="my-[30px] ">
      <h3 className="font-semibold uppercase ">{title}</h3>
      <img src="assets/Home/line-black.png" className="h-[2px] mt-2 mb-4 " />
      <p className="text-justify">{text || ""}</p>
    </div>
  );
}

export default JelentkezesItem;
