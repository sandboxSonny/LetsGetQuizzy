import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { animations } from "~/consts";
import { useQuiz } from "~/hooks/useQuiz";
import { AnimationType } from "~/types/quiz";

export const LoadingTransition = () => {
  const { globalLoading, setGlobalLoading } = useQuiz();
  const [isExiting, setIsExiting] = useState(false);
  const [animationState, setAnimationState] =
    useState<AnimationType>("close-side");

  const animationLeftVariant = {
    initial: { transform: "translateX(-100%)" },
    animate: { transform: "translateX(0)" },
    exit: { transform: "translateX(-100%)" },
  };

  const animationTopVariant = {
    initial: { transform: "translateY(-100%)" },
    animate: { transform: "translateY(0)" },
    exit: { transform: "translateY(-100%)" },
  };

  const animationRightVariant = {
    initial: { transform: "translateX(100%)" },
    animate: { transform: "translateX(0)" },
    exit: { transform: "translateX(100%)" },
  };

  const animationBottomVariant = {
    initial: { transform: "translateY(100%)" },
    animate: { transform: "translateY(0)" },
    exit: { transform: "translateY(100%)" },
  };

  const animationSwipeVariant = {
    initial: { transform: "translateX(100%)" },
    animate: { transform: "translateX(0)" },
    exit: { transform: "translateX(-100%)" },
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
      setAnimationState((previousValue) => {
        const animationIndex = animations.indexOf(previousValue);
        const nextAnimationIndex =
          animationIndex + 1 == animations.length ? 0 : animationIndex + 1;
        return animations[nextAnimationIndex];
      });
      setIsExiting(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [globalLoading, setGlobalLoading]);

  if (!globalLoading && !isExiting) return;

  if (animationState == "swipe")
    return (
      <>
        <motion.div
          initial="initial"
          animate={isExiting ? "exit" : "animate"}
          className="h-screen w-screen bg-primary fixed left-0 top-0"
          variants={animationSwipeVariant}
          onAnimationComplete={handleAnimationComplete}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        ></motion.div>
      </>
    );

  if (animationState == "close-top")
    return (
      <>
        <motion.div
          initial="initial"
          animate={isExiting ? "exit" : "animate"}
          className="h-3/6 w-screen bg-primary fixed left-0 top-0"
          variants={animationTopVariant}
          onAnimationComplete={handleAnimationComplete}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          initial="initial"
          animate={isExiting ? "exit" : "animate"}
          className="h-3/6 w-screen bg-primary fixed right-0 bottom-0"
          variants={animationBottomVariant}
          onAnimationComplete={handleAnimationComplete}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        ></motion.div>
      </>
    );

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
