import { useEffect, useState } from "react";
import { PageWrapper } from "~/components";

export const Play = () => {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  return (
    <PageWrapper>
      <span className="countdown font-mono text-6xl">
        {timer}
        {/* <span style={{ "--value": timer }}></span> */}
      </span>
    </PageWrapper>
  );
};
