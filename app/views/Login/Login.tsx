import { PageWrapper, RevealText, FormField } from "~/components";
import { LoginFormProvider } from "~/providers";

export const Login = () => {
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
            <a href="/register" className="btn btn--text">
              Register
            </a>
          </div>
        </LoginFormProvider>
      </div>
    </PageWrapper>
  );
};
