import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { TriviaCategory } from "~/types/quiz";

type Props = {
  category: TriviaCategory;
  selectedCategories: TriviaCategory[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<never[]>>;
};

export const CategoryItem = ({
  category,
  selectedCategories,
  setSelectedCategories,
}: Props) => {
  const { register } = useFormContext();
  console.log(selectedCategories);
  const selectedCategoriesValues = selectedCategories.map(
    (category) => category.name
  );

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;

    if (selectedCategoriesValues.includes(value)) {
      const categoryIndex = selectedCategoriesValues.indexOf(value);
      setSelectedCategories((previousValue) =>
        previousValue.splice(categoryIndex, 1)
      );
    }

    setSelectedCategories((previousValue) => [...previousValue]);
  };

  return (
    <label
      className={clsx(
        "p-4 rounded-lg flex flex-col items-center justify-center",
        selectedCategoriesValues.includes(category.name)
          ? "bg-primary"
          : "bg-neutral"
      )}
    >
      <p className="text-sm font-bold">{category.name}</p>
      <input
        className="hidden"
        type="checkbox"
        value={category.name}
        {...register("category", {
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            handleCategoryChange(event);
          },
        })}
      />
    </label>
  );
};
