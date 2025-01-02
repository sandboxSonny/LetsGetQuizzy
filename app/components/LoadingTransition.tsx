import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useQuiz } from "~/hooks/useQuiz";

export const LoadingTransition = () => {
  const { globalLoading, setGlobalLoading } = useQuiz();
  const [isExiting, setIsExiting] = useState(false);

  const animationLeftVariant = {
    initial: { transform: "translateX(-100%)" },
    animate: { transform: "translateX(0)" },
    exit: { transform: "translateX(-100%)" },
  };

  const animationRightVariant = {
    initial: { transform: "translateX(100%)" },
    animate: { transform: "translateX(0)" },
    exit: { transform: "translateX(100%)" },
  };

  const handleAnimationComplete = () => {
    if (isExiting) {
      setGlobalLoading(false);
    } else {
      setIsExiting(true);
    }
  };

  useEffect(() => {
    if (!globalLoading) {
      setIsExiting(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [globalLoading, setGlobalLoading]);

  if (!globalLoading && !isExiting) return;

  return (
    <>
      <motion.div
        initial="initial"
        animate={isExiting ? "exit" : "animate"}
        className="w-6/12 h-screen bg-primary fixed left-0 top-0"
        variants={animationLeftVariant}
        onAnimationComplete={handleAnimationComplete}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        initial="initial"
        animate={isExiting ? "exit" : "animate"}
        className="w-6/12 h-screen bg-primary fixed right-0 top-0"
        variants={animationRightVariant}
        onAnimationComplete={handleAnimationComplete}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};
