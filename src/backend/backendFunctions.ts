import { BaseResponse, GetAllExercisesResponse } from "./backendTypes";

async function authHttpCall(url: string) {
  const resp = await fetch(url, {
    method: "GET",
  });

  if (!resp.ok) {
    const returnErrResp: BaseResponse = {
      error: {
        code: `${resp.status}` as any,
        description: resp.statusText,
      },
      status: resp.status,
    };

    return returnErrResp;
  }

  return resp.json();
}

const BackendService = {
  async getAllExercises(): Promise<GetAllExercisesResponse> {
    const a = await authHttpCall(
      "https://firebasestorage.googleapis.com/v0/b/reveri-dev-public/o/interviews%2Fweb%2Fexercises.json?alt=media"
    );
    return a;
  },
};

export default BackendService;
