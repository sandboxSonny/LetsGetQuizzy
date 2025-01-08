import { TriviaCategory } from "~/types/quiz";
import { CategoryItem } from "./CategoryItem";
import { useFormContext } from "react-hook-form";

type Props = {
  categories: TriviaCategory[];
};

export const CategoryGrid = ({ categories }: Props) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-xl">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
      {errors.categories && (
        <span className="text-sm text-error">
          {errors.categories.message as string}
        </span>
      )}
    </>
  );
};
