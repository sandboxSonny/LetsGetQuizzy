import clsx from "clsx";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useQuiz } from "~/hooks";
import { TriviaCategory } from "~/types/quiz";

type Props = {
  category: TriviaCategory;
};

export const CategoryItem = ({ category }: Props) => {
  const { register } = useFormContext();
  const { quiz } = useQuiz();
  const [isChecked, setIsChecked] = useState(
    quiz.categories?.includes(category.name)
  );

  return (
    <label
      className={clsx(
        "p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform relative",
        isChecked ? "bg-primary" : "bg-neutral"
      )}
    >
      <p
        className={clsx(
          "text-sm font-bold",
          isChecked && "text-primary-content"
        )}
      >
        {category.name}
      </p>
      <input
        className="checkbox checkbox-xs absolute top-2 right-2"
        type="checkbox"
        value={category.name}
        {...register("categories")}
        onChange={(event) => setIsChecked(event.target.checked)}
      />
    </label>
  );
};
