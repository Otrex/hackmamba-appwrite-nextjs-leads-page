import { useState } from "react";
import querystring from "querystring";
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
    setRequest({
      ...request,
      state: RequestState.LOADING,
    });
    const client = new Client();
    const functions = new Functions(client);

    const throwErrorIfNot200 = (response: Models.Execution) => {
      const errorMsg = response.responseHeaders.find(
        (e) => e.name === "location"
      );

      const message = new URL(errorMsg?.value || "").searchParams.get("code");
      throw new Error(message || "something went wrong");
    };

    client
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_BASE_URL!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

    const promise = functions.createExecution(
      process.env.NEXT_PUBLIC_APPWRITE_FUNCTION_ID!,
      querystring.encode(form),
      false,
      "/",
      "POST",
      {
        referer: "http://localhost:3000",
        "content-type": "application/x-www-form-urlencoded",
      }
    );

    promise
      .then(function (response) {
        if (response.responseStatusCode != 200) {
          throwErrorIfNot200(response);
        }

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
