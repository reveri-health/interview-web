import BackendService from "backend/backendFunctions";
import { Card } from "components/card";

const LandingPage = async () => {
  const allExercises = await BackendService.getAllExercises();

  return (
    <span className="text-lg flex justify-center">
      <Card
        exercises={allExercises?.error ? [] : allExercises.exercises}
      ></Card>
    </span>
  );
};

export default LandingPage;
