import { PageWrapper, RevealText } from "~/components";

export const WaitingRoom = () => {
  return (
    <PageWrapper>
      <h1 className="text-5xl font-bold">
        Waiting <RevealText text="Room" />
      </h1>
      <p className="py-6">Kick your feet up while we wait for players</p>
    </PageWrapper>
  );
};
