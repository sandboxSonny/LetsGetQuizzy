import { PageWrapper, RevealText } from "~/components";
import { getInitials } from "~/helpers";
import { useQuiz } from "~/hooks";

export const WaitingRoom = () => {
  const { quiz } = useQuiz();

  return (
    <PageWrapper>
      <h1 className="text-5xl font-bold">
        Waiting <RevealText text="Room" />
      </h1>
      <h2 className="text-3xl font-bold">{quiz.roomName} Quiz</h2>
      <p>Kick your feet up while we wait for players</p>
      <div className="grid gap-2">
        <h3 className="text-2xl font-bold">Selected Categories:</h3>
        <ul className="list-disc pl-5">
          {quiz.categories?.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
      <div className="grid gap-2">
        <h3 className="text-2xl font-bold">Current Players:</h3>
        <div className="flex gap-2 flex-wrap">
          {quiz.name && (
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-24 rounded-full">
                <span className="text-3xl">{getInitials(quiz.name)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};
