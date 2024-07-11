import { Exercise } from "backend/backendTypes";
import { FC } from "react";

export const ExerciseCard: FC<{ exercise: Exercise }> = ({ exercise }) => {
  return (
    <div className="bg-[#F3EEE9] rounded-lg w-full mb-[16px] py-[19.5px] px-[16px] flex row justify-between align-middle">
      <div className="h-[80px] w-[80px] bg-red-40"> IMG</div>
      <div>
        <div>
          <b>{exercise.title}</b>
        </div>
        <div>{exercise.smallDescription}</div>
        <div>
          <small>{exercise.lowerBoundDuration}</small>-
          <small>{exercise.upperBoundDuration}</small>
        </div>
      </div>
    </div>
  );
};
