import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData } from "~/types/formTypes";
import { hostFormValidation } from "~/validations";
import { useQuiz } from "~/hooks";

export const RegisterFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(hostFormValidation),
  });
  const { setQuiz, setView } = useQuiz();

  const onSubmit = (data: RegisterFormData) => {
    setQuiz((previousData) => {
      return {
        ...previousData,
        ...data,
      };
    });
    setView("setup");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
