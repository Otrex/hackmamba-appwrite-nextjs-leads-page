import { useState } from "react";
import { Client, Functions, Models } from "appwrite";

export enum RequestState {
  IDLE = "idle",
  LOADING = "loading",
  COMPLETED = "completed",
  ERROR = "error",
}

export default function () {
  const [request, setRequest] = useState({
    state: RequestState.IDLE,
    response: null as Models.Execution | null | Error | any,
  });

  const [form, setState] = useState({
    email: "",
    message: "",
  });

  const setForm = (data: Partial<typeof form>) => {
    setState({ ...form, ...data });
  };

  const collectLeads = () => {
    const client = new Client();
    const functions = new Functions(client);

    client
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_BASE_URL!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

    const promise = functions.createExecution(
      process.env.NEXT_PUBLIC_APPWRITE_FUNCTION_ID!,
      JSON.stringify({ ...form }),
      false,
      "/",
      "POST"
    );

    promise
      .then(function (response) {
        setRequest({
          ...request,
          response,
          state: RequestState.COMPLETED,
        });
      })
      .catch(function (error) {
        setRequest({
          ...request,
          state: RequestState.ERROR,
          response: error,
        });

        // Returns the user to view forms
        setTimeout(() => {
          setRequest({
            ...request,
            state: RequestState.IDLE,
            response: null,
          });
        }, 5000);
      });
  };

  return {
    form,
    setForm,
    collectLeads,
    request,
  };
}
