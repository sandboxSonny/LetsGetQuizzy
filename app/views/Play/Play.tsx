import { useState } from "react";
import { PageWrapper } from "~/components";

export const Play = () => {
  const countdown = 3;
  const [timer, setTimer] = useState(countdown);

  const countdownInterval = setInterval(() => {
    setTimer((previousValue) => {
      const adjustedTimer = previousValue - 1;
      if (adjustedTimer === 0) clearInterval(countdownInterval);
      return adjustedTimer;
    });
  }, 1000);

  return (
    <PageWrapper>
      <span className="countdown font-mono text-6xl">
        {timer}
        {/* <span style={{ "--value": timer }}></span> */}
      </span>
    </PageWrapper>
  );
};
