import clsx from "clsx";
import { motion } from "motion/react";

type Props = {
  text: string;
};

export const RevealText = ({ text }: Props) => {
  const characters = text.split("");
  return (
    <div>
      {characters.map((character, index) => (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            scale: {
              type: "spring",
              visualDuration: 0.4,
              delay: index * 0.5,
            },
          }}
          key={`${text}-${index}`}
          className={clsx(character !== " " && "inline-block")}
        >
          {character}
        </motion.span>
      ))}
    </div>
  );
};
