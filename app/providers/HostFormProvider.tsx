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
  const { setView } = useQuiz();

  const methods = useForm<HostFormData>({
    resolver: zodResolver(hostFormValidation),
  });

  const onSubmit = (data: HostFormData) => {
    console.log("Form submitted:", data);
    setView("waiting-room");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
