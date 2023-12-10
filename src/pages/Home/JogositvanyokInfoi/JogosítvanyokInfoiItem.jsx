import { motion } from "framer-motion";

function JogosítvanyokInfoiItem({ title, text1, text2, text3 }) {
  return (
    <motion.div className="my-[30px]">
      <h3 className="font-semibold uppercase ">{title}</h3>
      <img src="/Home/line-red.png" className="h-[2px] mt-2 mb-4 " />
      <p className="grid leading-6 text-justify gap-y-3">
        <span>{text1 || ""}</span>
        <span>{text2 || ""}</span>
        <span>{text3 || ""}</span>
      </p>
    </motion.div>
  );
}

export default JogosítvanyokInfoiItem;
