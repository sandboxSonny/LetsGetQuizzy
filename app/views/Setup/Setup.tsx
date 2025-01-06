import { useEffect, useState } from "react";
import { PageWrapper, RevealText, CategoryItem } from "~/components";
import { LoadingPage } from "../LoadingPage/LoadingPage";
import { TriviaCategories } from "~/types/quiz";
import { SetupFormProvider } from "~/providers";

export const Setup = () => {
  const [categories, setCategories] = useState<TriviaCategories | undefined>(
    undefined
  );
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://opentdb.com/api_category.php`);
      const data = await response.json();
      setCategories(data);
    };

    fetchData();
  }, []);

  if (!categories) return <LoadingPage />;

  return (
    <PageWrapper width="xl">
      <h1 className="text-5xl font-bold">
        Lets get you <RevealText text="setup" />
      </h1>
      <SetupFormProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.trivia_categories.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          ))}
        </div>
      </SetupFormProvider>
    </PageWrapper>
  );
};
