const PrivacyNotice = () => {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col gap-6 px-6 py-12 text-slate-100 md:px-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Privacy Notice</p>
        <h1 className="text-4xl font-bold md:text-5xl">How contact submissions are handled</h1>
        <p className="text-lg leading-8 text-slate-300">
          This portfolio stores form submissions so project enquiries are not lost. The backend saves the details you submit,
          including name, email, project details, and message content, for follow-up and communication.
        </p>
      </div>
      <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/20">
        <div>
          <h2 className="text-xl font-semibold text-white">What is collected</h2>
          <p className="mt-2 text-slate-300">
            Basic contact information, project type, budget range, timeline, and the message shared through the contact form.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Why it is collected</h2>
          <p className="mt-2 text-slate-300">
            The information is used only to review enquiries, respond to potential clients, and understand project needs.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Storage</h2>
          <p className="mt-2 text-slate-300">
            Submissions are stored on the backend in a local JSON data file. For production use, you can later replace this
            with a database or email notification service.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyNotice
