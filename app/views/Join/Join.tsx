import { PageWrapper, RevealText, FormField } from "~/components";
import { JoinFormProvider } from "~/providers";

export const Join = () => {
  return (
    <PageWrapper>
      <div className="grid gap-4">
        <h1 className="text-5xl font-bold">
          <RevealText text="Join" />
        </h1>
        <JoinFormProvider>
          <div className="flex flex-wrap gap-2">
            <FormField name="id" prefix="#" placeholder="123456" />
            <button className="btn btn-primary">Get Playing</button>
          </div>
        </JoinFormProvider>
      </div>
    </PageWrapper>
  );
};
