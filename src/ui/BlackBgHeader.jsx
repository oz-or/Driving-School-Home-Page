function BlackBgHeader({ title }) {
  return (
    <div className="shadow-[0_0_8px_rgba(0,0,0,0.45)] px-4 rounded-xl mb-8 600:mb-12 1000:mb-0 elearning-bg bg-[#040404] flex justify-center">
      <h2 className="text-white border-b-[#e8000a] py-4 font-semibold border-b-[5px] 600:text-xl uppercase">
        {title}
      </h2>
    </div>
  );
}

export default BlackBgHeader;
