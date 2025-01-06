import { PageWrapper, RevealText, FormField } from "~/components";
import { HostFormProvider } from "~/providers";

export const Host = () => {
  return (
    <PageWrapper>
      <div className="grid gap-4">
        <h1 className="text-5xl font-bold">
          <RevealText text="Host" />
        </h1>
        <HostFormProvider>
          <div className="grid gap-4">
            <FormField name="name" label="Name" />
            <FormField name="roomName" label="Room Name" />
            <button className="btn btn-primary">Get Playing</button>
          </div>
        </HostFormProvider>
      </div>
    </PageWrapper>
  );
};
