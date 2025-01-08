import { useEffect, useState } from "react";
import { PageWrapper, RevealText, CategoryGrid } from "~/components";
import { LoadingPage } from "../LoadingPage/LoadingPage";
import { TriviaCategories } from "~/types/quiz";
import { SetupFormProvider } from "~/providers";

export const Setup = () => {
  const [categories, setCategories] = useState<TriviaCategories | undefined>(
    undefined
  );

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
        <div className="grid gap-4">
          <CategoryGrid categories={categories.trivia_categories} />
          <button className="btn btn-primary">Continue</button>
        </div>
      </SetupFormProvider>
    </PageWrapper>
  );
};
