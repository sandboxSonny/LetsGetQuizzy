import { PageWrapper, RevealText, FormField } from "~/components";
import { RegisterFormProvider } from "~/providers";

export const Register = () => {
  return (
    <PageWrapper>
      <div className="grid gap-4">
        <h1 className="text-5xl font-bold">
          <RevealText text="Register" />
        </h1>
        <RegisterFormProvider>
          <div className="grid gap-4">
            <FormField name="email" label="Email" />
            <FormField name="password" label="Password" />
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
            <a href="/login" className="btn btn--text">
              Login
            </a>
          </div>
        </RegisterFormProvider>
      </div>
    </PageWrapper>
  );
};
