import { PageWrapper, RevealText, FormField } from "~/components";
import { useQuiz } from "~/hooks";
import { RegisterFormProvider } from "~/providers";

export const Register = () => {
  const { setAdminView } = useQuiz();

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
            <button className="btn btn-primary">Create Account</button>
            <button
              className="btn btn--text"
              onClick={() => setAdminView("login")}
            >
              Login
            </button>
          </div>
        </RegisterFormProvider>
      </div>
    </PageWrapper>
  );
};
