import Image from "next/image";


import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Fence,
  Hammer,
  LandPlot,
  MapPin,
  Menu,
  Mountain,
  Phone,
  Quote,
  ShieldCheck,
  Shovel,
  Sprout,
  Star,
  Tractor,
  Trees,
  Wrench,
} from "./Icons";

import ContactForm from "./ContactForm";

const googleBusinessUrl = "https://g.page/r/Cf0r5mW8wU4HEBM/review";
const facebookUrl = "https://www.facebook.com/rightsizelandandtractor";

const phoneNumber = "(830) 302-6833";
const phoneHref = "tel:+18303026833";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#projects", label: "Projects" },
  { href: "#service-area", label: "Service Area" },
  { href: "#contact", label: "Get Quote" },
];

const services = [
  {
    icon: Trees,
    title: "Brush Clearing",
    text: "Open up overgrown acreage, fence lines, trails, and homesites without losing the rugged character of your land.",
  },
  {
    icon: Wrench,
    title: "Driveway Grading & Repair",
    text: "Smooth washboard roads, fix ruts, restore crown, and improve gravel driveways before the next Texas storm.",
  },
  {
    icon: Mountain,
    title: "Pad Prep",
    text: "Prepare practical, compactable pads for sheds, barns, shops, water tanks, RVs, and rural improvements.",
  },
  {
    icon: Shovel,
    title: "Dirt Work",
    text: "Move, spread, shape, and clean up material for small acreage projects that are too big for a shovel.",
  },
  {
    icon: Tractor,
    title: "Brush Hogging",
    text: "Cut down tall grass, weeds, and pasture growth so your property is usable, safer, and easier to maintain.",
  },
  {
    icon: LandPlot,
    title: "Drainage Improvement",
    text: "Address standing water, erosion, and poor flow with practical grading that respects your land and budget.",
  },
  {
    icon: Sprout,
    title: "Large Lawn Maintenance",
    text: "Reliable mowing and field maintenance for oversized yards, ranchettes, and properties standard crews avoid.",
  },
  {
    icon: Fence,
    title: "Small Acreage Improvement",
    text: "Knock out the punch list: clean edges, clear access, reshape problem spots, and make the property easier to use.",
  },
];

const advantages = [
  "You talk directly with the owner doing the work.",
  "Small jobs are welcome — no big-contractor runaround.",
  "Lower overhead means fair pricing and practical solutions.",
  "No rental equipment learning curve, delivery fees, or wasted weekends.",
  "Responsive calls, text updates, and straight answers.",
  "Texas-tough equipment sized right for residential and rural properties.",
];

const testimonials = [
  {
    quote:
      "Tony did a fantastic job! Great guy and hard worker. Went above and beyond when it came to clearing a TON of brush from our lot. It was an incredible blessing. Can’t recommend highly enough!",
    name: "Garrett",
    place: "Helotes",
  },
  {
    quote:
      "Right Size was responsive, on-time, and did everything I asked - I was glad to have my weekend back!",
    name: "Chelo",
    place: "Boerne",
  },
];

const projectCards = [
  {
    title: "Cedar & Brush Reclaim",
    before: "Overgrown fence line",
    after: "Clean access for maintenance",
  },
  {
    title: "Washed-Out Driveway",
    before: "Ruts and standing water",
    after: "Re-crowned gravel surface",
  },
  {
    title: "Shop Pad Prep",
    before: "Uneven native ground",
    after: "Ready for base material",
  },
];

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Right Size Land & Tractor",
    description:
      "Owner-operated tractor and land management services in the Texas Hill Country and San Antonio area.",
    telephone: "+1-830-302-6833",
    email: "anthonypmusetti@gmail.com",
    areaServed: [
      "San Antonio",
      "Boerne",
      "Bulverde",
      "New Braunfels",
      "Helotes",
      "Castroville",
      "Texas Hill Country",
    ],
    serviceType: [
      "Brush clearing",
      "Driveway grading",
      "Dirt work",
      "Tractor services",
      "Land clearing Texas",
    ],
  };

  const ownerBenefits = [
    "Owner on every job site",
    "Clear communication from quote to cleanup",
    "Small-acreage jobs welcome",
    "No big-contractor overhead markup",
  ];

  return (
    <main className="overflow-hidden bg-dust text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky navigation keeps phone and quote CTAs accessible throughout the buying journey. */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/[0.92] text-white shadow-lg backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Right Size Land & Tractor home"
          >
            <Image
              src="/images/projects/LogoMark.svg"
              alt="Right Size Land & Tractor logo"
              width={120}
              height={34}
              className="h-9 w-auto rounded"
              priority
            />
            <span className="block">
              <span className="block font-display text-base font-black uppercase tracking-wide text-white sm:text-xl">
                Right Size Land & Tractor
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-sand sm:block">
              Owner Operated
            </span>
  </span>
          </a>

          <nav
            className="hidden items-center gap-7 text-sm font-bold uppercase tracking-wide text-dust/80 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-sand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-sand/40 px-4 py-2 text-sm font-black text-sand transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {phoneNumber}
            </a>
            <a
              href="#contact"
              className="rounded-full bg-rust px-5 py-2.5 text-sm font-black uppercase tracking-wide text-white shadow-lg transition hover:bg-mesquite"
            >
              Get Quote
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-sand/40 p-2 text-sand sm:hidden"
            aria-label="Open contact section"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </header>

      {/* Mobile direct-response CTA: phone remains the easiest conversion path. */}
      <a
        href={phoneHref}
        className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-center gap-3 rounded-2xl bg-rust px-5 py-4 text-base font-black uppercase tracking-wide text-white shadow-rugged sm:hidden"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Tap to Call {phoneNumber}
      </a>

      {/* Hero section leads with outcome, credibility, and two clear conversion actions. */}
      <section
        id="top"
        className="relative isolate min-h-screen bg-field pt-28 text-white sm:pt-32"
      >
        <Image
          src="/images/projects/HeroImage.jpg"
          alt="Texas tractor service hero"
          fill
          className="-z-20 object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/50"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-grit bg-[length:18px_18px] opacity-20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-dust to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28">
          <div className="animate-rise-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sand/30 bg-white/10 px-4 py-2 text-sm font-bold text-sand backdrop-blur">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Owner-operated tractor services near San Antonio
            </div>

            <h1 className="max-w-4xl font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Get Your Land Back Without Losing Your Weekend
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-dust/[0.88] sm:text-xl">
              Brush clearing, driveway grading, pad prep, dirt work, drainage
              fixes, and small acreage cleanup for Texas homeowners, ranch
              owners, and rural properties.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-rust px-7 py-4 text-lg font-black uppercase tracking-wide text-white shadow-rugged transition hover:-translate-y-0.5 hover:bg-mesquite"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {phoneNumber}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-sand/50 bg-white/10 px-7 py-4 text-lg font-black uppercase tracking-wide text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Request Quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-dust/[0.85] sm:grid-cols-3">
              {[
                "Fast call backs",
                "Small jobs accepted",
                "Honest local pricing",
                "5-star local reviews",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-white/[0.09] px-4 py-3"
                >
                  <CheckCircle2
                    className="h-5 w-5 text-sand"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative animate-rise-in lg:justify-self-end"
            style={{ animationDelay: "120ms" }}
          >
            <div className="rounded-[2rem] border border-sand/30 bg-white/10 p-3 shadow-rugged backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-charcoal p-6 sm:p-8">
                <div
                  className="absolute inset-0 texture-overlay opacity-80"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex items-center justify-between border-b border-white/15 pb-5">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand">
                        Typical projects
                      </p>
                      <h2 className="mt-1 font-display text-3xl font-black uppercase">
                        Built for real ranch work
                      </h2>
                    </div>
                    <Tractor
                      className="h-12 w-12 text-rust"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-6 grid gap-4">
                    {[
                      ["Driveways", "Ruts, washouts, gravel shaping"],
                      ["Brush", "Cedar, mesquite, trails, fence lines"],
                      ["Pads", "Sheds, barns, tanks, RV spots"],
                    ].map(([title, text]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-white/10 bg-ink/[0.55] p-4"
                      >
                        <p className="font-display text-2xl font-bold uppercase text-white">
                          {title}
                        </p>
                        <p className="mt-1 text-sm text-dust/75">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-sand p-5 text-ink">
                    <p className="font-display text-3xl font-black uppercase">
                      No rental hassle.
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-charcoal">
                      Skip the trailer, insurance, learning curve, and
                      half-finished Saturday. Hire the right machine and an
                      operator who does this every week.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services are written around the actual problems local property owners search for. */}
      <section id="services" className="bg-dust py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.3em] text-rust">
              Tractor services
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-ink sm:text-5xl">
              From overgrown to usable
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Whether you know exactly what you want or just know the property
              is getting away from you, we can help plan the practical way to
              get it done.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-sand/70 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-rust/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cedar text-sand transition group-hover:bg-rust group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-steel">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison section positions the business between DIY frustration and big-contractor minimums. */}
      <section id="why-us" className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-sand">
              Why choose us
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight sm:text-5xl">
              The practical choice between DIY and a big contractor
            </h2>
            <p className="mt-5 text-lg leading-8 text-dust/[0.78]">
              Large contractors often pass on smaller acreage work. Rental
              equipment sounds cheaper until the delivery clock starts and you
              are learning controls in the heat. We bring the equipment,
              experience, and straight talk to finish the job right.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((advantage) => (
              <div
                key={advantage}
                className="rounded-2xl border border-white/10 bg-white/[0.08] p-5"
              >
                <ShieldCheck className="h-6 w-6 text-rust" aria-hidden="true" />
                <p className="mt-4 font-semibold leading-7 text-dust/[0.88]">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local relevance and city names support SEO for high-intent nearby searches. */}
      <section id="service-area" className="bg-dust py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-rust">
              Service area
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight sm:text-5xl">
              Serving the Texas Hill Country and greater San Antonio area
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Based for rural property work around San Antonio, with service
              available for homeowners, ranch owners, and small acreage
              customers in nearby Hill Country communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "San Antonio",
                "Boerne",
                "Bulverde",
                "New Braunfels",
                "Helotes",
                "Castroville",
                "Pipe Creek",
                "Spring Branch",
              ].map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-sand bg-dust px-4 py-2 text-sm font-bold text-charcoal"
                >
                  {city}, TX
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-cedar p-8 text-white shadow-rugged">
            <MapPin className="h-10 w-10 text-sand" aria-hidden="true" />
            <h3 className="mt-5 font-display text-3xl font-black uppercase">
              Not sure if you are in range?
            </h3>
            <p className="mt-4 leading-8 text-dust/[0.82]">
              Call or send the address. If the project is a fit, we will be
              direct about travel, timing, and the most cost-effective way to
              tackle it.
            </p>
            <a
              href={phoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-rust px-6 py-4 font-black uppercase tracking-wide text-white transition hover:bg-mesquite"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-rust">
              Owner-operated promise
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-ink sm:text-5xl">
              You hire the owner, not a revolving crew
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Texas acreage projects are personal. You need someone who treats
              your land like it matters, shows up when promised, and follows
              through without excuses.
            </p>
            <div className="mt-6 grid gap-3">
              {ownerBenefits.map((b) => (
                <div
                  key={b}
                  className="rounded-xl border border-sand/70 bg-dust px-4 py-3 font-semibold text-charcoal"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-ink p-8 text-dust shadow-rugged">
            <h3 className="font-display text-3xl font-black uppercase text-white">
              Built for Texas acreage owners
            </h3>
            <p className="mt-4 leading-8">
              When life gets busy, projects slip. We help you reclaim your time,
              raise property value, and finally cross off the hard jobs that
              keep getting pushed to another weekend.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dust py-20 sm:py-24" id="transformations">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-bold uppercase tracking-[0.3em] text-rust">
            Project Transformation
          </p>
          <h2 className="mt-3 font-display text-4xl font-black uppercase sm:text-5xl">
            Raw ground to finished shed pad
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["ShedPadBefore.jpg", "Before: rough native ground"],
              ["ShedPadDuring1.jpg", "During: clearing and first pass"],
              ["ShedPadDuring2.jpg", "During: shaping and compaction"],
              ["ShedPadDone.jpg", "Done: finished shed pad ready for build"],
            ].map(([src, cap], i) => (
              <figure
                key={src}
                className="group overflow-hidden rounded-2xl border border-sand/70 bg-white shadow-card"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={`/images/projects/${src}`}
                    alt={cap}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <figcaption className="p-4 text-sm font-semibold text-charcoal">
                  Step {i + 1}: {cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof uses concrete situations instead of vague praise. */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.3em] text-rust">
              What customers say
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight sm:text-5xl">
              Straight work. Straight talk.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-3xl border border-sand/70 bg-white p-7 shadow-card"
              >
                <Quote className="h-8 w-8 text-rust" aria-hidden="true" />
                <blockquote className="mt-5 text-lg font-semibold leading-8 text-charcoal">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-sand/60 pt-5">
                  <div
                    className="flex gap-1 text-rust"
                    aria-label="Five star rating"
                  >
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-3 font-black text-ink">{testimonial.name}</p>
                  <p className="text-sm font-semibold text-steel">
                    {testimonial.place}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-dust px-4 py-24 text-ink sm:px-6 lg:px-8">
        <Image
          src="/images/projects/FinalImage.jpg"
          alt="Completed land improvement project"
          fill
          className="-z-20 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-ink/55" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl rounded-[2rem] border border-white/20 bg-ink/70 p-8 shadow-rugged backdrop-blur sm:p-12">
            <p className="font-bold uppercase tracking-[0.3em] text-sand">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight sm:text-5xl">
              Stop staring at the same project every weekend
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-dust/[0.9]">
              Get a realistic plan, a fair quote, and an owner-operator who
              respects your property. One call can turn “someday” into scheduled
              work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-rust px-7 py-4 text-lg font-black uppercase tracking-wide text-white shadow-rugged transition hover:bg-mesquite"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-sand/50 px-7 py-4 text-lg font-black uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Send Details
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section captures quote requests while still prioritizing phone calls. */}
      <section id="contact" className="bg-ink py-20 pb-32 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-rust">
              Get a quote
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight sm:text-5xl">
              Tell us what needs doing
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Photos help. Measurements help. But if all you know is “this spot
              is a mess,” that is enough to start the conversation.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-card">
                <Clock
                  className="h-7 w-7 shrink-0 text-rust"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase">
                    Fast response
                  </h3>
                  <p className="mt-1 text-steel">
                    Most quote requests receive a same-day reply during normal
                    working hours.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-card">
                <Hammer
                  className="h-7 w-7 shrink-0 text-rust"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase">
                    Practical advice
                  </h3>
                  <p className="mt-1 text-steel">
                    If there is a smarter way to phase the job or save money,
                    you will hear it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer includes local-business basics and social profile links. */}
      <footer className="border-t border-white/10 bg-ink px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/projects/LogoMark.svg"
              alt="Right Size Land & Tractor logo"
              width={70}
              height={70}
              className="h-14 w-auto"
            />

            <div>
              <p className="font-display text-2xl font-black uppercase">
                Right Size Land & Tractor
              </p>

              <p className="mt-1 text-sm font-semibold text-dust/70">
                Owner-operated tractor services for residential and rural Texas
                properties.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={googleBusinessUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Google Business profile"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-ink font-black">G</span>
              Google Business
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook page"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1877F2] text-white font-black">f</span>
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
