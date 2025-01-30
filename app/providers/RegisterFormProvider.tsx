import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData } from "~/types/formTypes";
import { hostFormValidation } from "~/validations";
import { Form } from "@remix-run/react";

export const RegisterFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(hostFormValidation),
  });

  return (
    <FormProvider {...methods}>
      <Form method="post">{children}</Form>
    </FormProvider>
  );
};
