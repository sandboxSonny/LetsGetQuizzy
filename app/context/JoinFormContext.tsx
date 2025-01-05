import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { JoinFormData } from "~/types/formTypes";
import { joinFormValidation } from "~/validations";

export const JoinFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm<JoinFormData>({
    resolver: zodResolver(joinFormValidation),
  });

  const onSubmit = (data: JoinFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
