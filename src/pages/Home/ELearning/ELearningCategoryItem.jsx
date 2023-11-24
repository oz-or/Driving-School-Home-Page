import { useState } from "react";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: [0.3, 1.1, 0.9, 1.03, 0.97],
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, type: "spring", bounce: 0.65 },
  },
};

function ELearningCategoryItem({
  categoryName,
  categoryMeaning,
  price,
  smallText,
  vehicleSVG,
  hoverVehicleSVG,
}) {
  const [isHovered, setIsHovered] = useState(0);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: "all" }}
      className="bg-[#ececec] hover:bg-[#e8000a] hover:text-white text-[#040404] rounded-xl flex justify-center text-center p-4 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[200px] flex flex-col items-center">
        <div>
          <div className="uppercase">
            <h2 className="text-xl font-semibold">{categoryName} Kategória</h2>
            <h3 className="text-xs font-semibold">{categoryMeaning}</h3>
          </div>
          <h4
            className={` ${
              !isHovered ? "text-[#e8000a]" : " text-white"
            } font-semibold text-xl my-1`}
          >
            Elmélet: {price} Ft
          </h4>
          <p className="mb-3 text-xs font-semibold leading-relaxed">
            {smallText}
          </p>
        </div>
        <div className="scale-[140%] my-2">
          {!isHovered ? vehicleSVG : hoverVehicleSVG}
        </div>
      </div>
    </motion.div>
  );
}

export default ELearningCategoryItem;
