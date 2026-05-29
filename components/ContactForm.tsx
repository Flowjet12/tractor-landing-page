export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/meeddgpq"
      method="POST"
      className="rounded-3xl bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label className="block text-sm font-black uppercase tracking-wide text-ink">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-sand bg-dust px-4 py-3 text-ink outline-none focus:border-rust"
          />
        </div>

        <div>
          <label className="block text-sm font-black uppercase tracking-wide text-ink">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="mt-2 w-full rounded-xl border border-sand bg-dust px-4 py-3 text-ink outline-none focus:border-rust"
          />
        </div>

        <div>
          <label className="block text-sm font-black uppercase tracking-wide text-ink">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-2 w-full rounded-xl border border-sand bg-dust px-4 py-3 text-ink outline-none focus:border-rust"
          />
        </div>

        <div>
          <label className="block text-sm font-black uppercase tracking-wide text-ink">
            Project Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Boerne, Helotes, San Antonio, etc."
            className="mt-2 w-full rounded-xl border border-sand bg-dust px-4 py-3 text-ink outline-none focus:border-rust"
          />
        </div>

        <div>
          <label className="block text-sm font-black uppercase tracking-wide text-ink">
            Type of Work
          </label>
          <select
            name="service"
            required
            className="mt-2 w-full rounded-xl border border-sand bg-dust px-4 py-3 text-ink outline-none focus:border-rust"
          >
            <option value="">Select one</option>
            <option>Brush clearing</option>
            <option>Driveway grading / repair</option>
            <option>Pad prep</option>
            <option>Dirt work</option>
            <option>Brush hogging</option>
            <option>Homestead maintenance</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-black uppercase tracking-wide text-ink">
            Project Details
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me what needs doing. Photos, measurements, and rough location help."
            className="mt-2 w-full rounded-xl border border-sand bg-dust px-4 py-3 text-ink outline-none focus:border-rust"
          />
        </div>

        <input
          type="hidden"
          name="_subject"
          value="New quote request from Right Size Land & Tractor website"
        />

        <button
          type="submit"
          className="rounded-xl bg-rust px-6 py-4 font-black uppercase tracking-wide text-white shadow-rugged transition hover:bg-mesquite"
        >
          Send Quote Request
        </button>

        <p className="text-sm font-semibold text-steel">
          Prefer to talk? Call or text{" "}
          <a href="tel:+18303026833" className="font-black text-rust">
            (830) 302-6833
          </a>
          .
        </p>
      </div>
    </form>
  );
}
