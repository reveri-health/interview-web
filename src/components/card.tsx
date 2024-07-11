import { FC } from "react";
import { Exercise } from "backend/backendTypes";
import { ExerciseCard } from "./exercise";

export const Card: FC<{ exercises: Exercise[] }> = ({ exercises }) => {
  const allExerciseCard = exercises?.map((exercise) => (
    <ExerciseCard exercise={exercise} />
  ));

  return (
    <div className="bg-white rounded-lg p-[40px] w-[445px]">
      {allExerciseCard}
    </div>
  );
};
