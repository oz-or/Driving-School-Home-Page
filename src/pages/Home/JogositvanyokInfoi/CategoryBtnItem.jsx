import { motion } from "framer-motion";

function CategoryBtnItem({ categoryletter, to }) {
  return (
    <motion.div className="flex flex-col items-center">
      <span
        className={` font-bold text-[#ececec]  hidden 1000:block mt-[20px] ${
          categoryletter.length > 1
            ? "text-[120px] leading-[80px]"
            : "text-[200px] leading-[130px]"
        }`}
      >
        {categoryletter}
      </span>

      <button className="bg-[url(../../../../assets/Home/dotted-btn-border.svg)] bg-center bg-cover bg-no-repeat text-[#e8000a] font-semibold uppercase w-[220px] h-[50px]">
        Érdekel
      </button>
    </motion.div>
  );
}

export default CategoryBtnItem;
