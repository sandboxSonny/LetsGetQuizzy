import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HostFormData } from "~/types/formTypes";
import { hostFormValidation } from "~/validations";
import { useQuiz } from "~/hooks";

export const HostFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm<HostFormData>({
    resolver: zodResolver(hostFormValidation),
  });
  const { setQuiz, setView } = useQuiz();

  const onSubmit = (data: HostFormData) => {
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
