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
  const { setQuiz, setView, quiz } = useQuiz();
  const methods = useForm<SetupFormData>({
    resolver: zodResolver(setupFormValidation),
    defaultValues: quiz,
  });

  const onSubmit = (data: SetupFormData) => {
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
