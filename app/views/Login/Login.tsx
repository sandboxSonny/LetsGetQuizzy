import { PageWrapper, RevealText, FormField } from "~/components";
import { useQuiz } from "~/hooks";
import { LoginFormProvider } from "~/providers";

export const Login = () => {
  const { setAdminView } = useQuiz();

  return (
    <PageWrapper>
      <div className="grid gap-4">
        <h1 className="text-5xl font-bold">
          <RevealText text="Login" />
        </h1>
        <LoginFormProvider>
          <div className="grid gap-4">
            <FormField name="email" label="Email" />
            <FormField name="password" label="Password" />
            <button className="btn btn-primary">Login</button>
            <button
              className="btn btn--text"
              onClick={() => setAdminView("register")}
            >
              Register
            </button>
          </div>
        </LoginFormProvider>
      </div>
    </PageWrapper>
  );
};
