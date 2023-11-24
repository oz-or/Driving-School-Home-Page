import CategoryBtnItem from "./CategoryBtnItem";
import JogosítvanyokInfoiItem from "./JogosítvanyokInfoiItem";
import { motion } from "framer-motion";

function JogositvanyokInfoiGridItem({
  categoryletter,
  to,
  title,
  text1,
  text2,
  text3,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "all", once: true }}
      transition={{ duration: 0.75 }}
      className="flex flex-col-reverse mt-5 1000:flex-row gap-x-7 1280:gap-x-14"
    >
      <CategoryBtnItem categoryletter={categoryletter} to={to} />

      <JogosítvanyokInfoiItem
        title={title}
        text1={text1}
        text2={text2}
        text3={text3}
      />
    </motion.div>
  );
}

export default JogositvanyokInfoiGridItem;
