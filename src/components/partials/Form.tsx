import useLeadCollector from "@/hooks/useLeadCollector";

export default function Form({
  collectLeads,
  setForm,
  form,
}: Omit<ReturnType<typeof useLeadCollector>, "request">) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="email" className="block  text-sm font-semibold mb-2">
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setForm({ email: e.target.value })}
          name="email"
          value={form.email}
          className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your email address"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block  text-sm font-semibold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ message: e.target.value })}
          className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your message"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        onClick={collectLeads}
        className="w-full bg-blue-500 text-white py-4 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Send Message
      </button>
    </>
  );
}
