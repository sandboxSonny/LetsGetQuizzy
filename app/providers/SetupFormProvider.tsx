import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetupFormData } from "~/types/formTypes";
import { setupFormValidation } from "~/validations";
import { useQuiz } from "~/hooks";

export const SetupFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm<SetupFormData>({
    resolver: zodResolver(setupFormValidation),
  });
  const { setQuiz, setView } = useQuiz();

  const onSubmit = (data: SetupFormData) => {
    console.log(data);
    setQuiz((previousData) => {
      return {
        ...previousData,
        ...data,
      };
    });
    setView("waiting-room");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
