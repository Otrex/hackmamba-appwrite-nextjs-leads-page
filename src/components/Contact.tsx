"use client";
import useLeadCollector, { RequestState } from "@/hooks/useLeadCollector";
import Form from "./partials/Form";

export default function Contact() {
  const { request, ...props } = useLeadCollector();

  const Views: Record<RequestState, React.JSX.Element> = {
    [RequestState.COMPLETED]: <div>Successful!!</div>,
    [RequestState.LOADING]: <div>Loading...</div>,
    [RequestState.ERROR]: <div>Error</div>,
    [RequestState.IDLE]: <Form {...props} />,
  };

  return (
    <section>
      <div className="w-full bg-stone-800 text-white py-10 text-left">
        <div className="max-w-lg mx-auto  p-6 shadow-md">
          <h2 className="text-2xl mb-4 text-center font-bold ">
            🌙 Ready to Begin the Covert Literary Odyssey?
          </h2>

          <div>{Views[request.state] || Views[RequestState.IDLE]}</div>
        </div>
      </div>
    </section>
  );
}
