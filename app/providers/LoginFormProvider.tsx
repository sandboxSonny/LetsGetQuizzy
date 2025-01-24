import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData } from "~/types/formTypes";
import { hostFormValidation } from "~/validations";
import { useQuiz } from "~/hooks";

export const LoginFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(hostFormValidation),
  });
  const { setQuiz, setView } = useQuiz();

  const onSubmit = (data: LoginFormData) => {
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
