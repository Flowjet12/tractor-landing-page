import Image from "next/image";

import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Hammer,
  LandPlot,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Shovel,
  Star,
  Tractor,
  Trees,
  Wrench,
} from "./Icons";
import ContactForm from "./ContactForm";

const phoneNumber = "(830) 302-6833";
const phoneHref = "tel:+18303026833";

const red = "text-[#C8102E]";
const bgRed = "bg-[#C8102E]";
const hoverRed = "hover:bg-[#9f0d24]";
const borderRed = "border-[#C8102E]";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#who-we-serve", label: "Who We Serve" },
  { href: "#programs", label: "Programs" },
  { href: "#service-area", label: "Service Area" },
  { href: "#contact", label: "Assessment" },
];

const services = [
  {
    icon: Trees,
    title: "Fire Mitigation & Fuel Reduction",
    text: "Reduce wildfire risk by controlling tall grass, heavy vegetation, cedar regrowth, and overgrown fence lines around homes, barns, roads, and hunting properties.",
  },
  {
    icon: Tractor,
    title: "Acreage Maintenance",
    text: "Ongoing mowing, shredding, cleanup, access improvement, and seasonal property care for rural homes and small acreage.",
  },
  {
    icon: Wrench,
    title: "Driveway Maintenance & Repair",
    text: "Restore gravel driveways, repair washouts, eliminate ruts, and improve access before small problems become expensive.",
  },
  {
    icon: LandPlot,
    title: "Vacant Lot Care",
    text: "Keep investment properties, inherited land, and lots for sale clean, accessible, market-ready, and protected from excessive vegetation growth.",
  },
  {
    icon: LandPlot,
    title: "Hunting Property Preparation",
    text: "Maintain senderos, access roads, campsites, shooting lanes, feeder access, and seasonal prep areas before hunting season arrives.",
  },
  {
    icon: Shovel,
    title: "Storm Cleanup & Access Restoration",
    text: "Clear fallen limbs, overgrowth, and debris to restore safe access after storms and periods of rapid vegetation growth.",
  },
];

const advantages = [
  "You work directly with the owner.",
  "Recurring maintenance plans available.",
  "Small-acreage properties welcome.",
  "No equipment ownership, storage, or maintenance headaches.",
  "Fast communication and reliable scheduling.",
  "Local Hill Country knowledge and practical solutions.",
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

const whoWeServe = [
  {
    title: "Busy Professionals",
    text: "Enjoy your weekends while we handle the property maintenance.",
  },
  {
    title: "Retirees & Aging Landowners",
    text: "Keep the property you love without the physical demands of maintaining it.",
  },
  {
    title: "Hunting Property Owners",
    text: "Arrive to hunt, not spend two days clearing roads and senderos.",
  },
  {
    title: "Land Investors & Realtors",
    text: "Keep vacant properties clean, accessible, and market-ready.",
  },
];

const plans = [
  {
    name: "Bronze",
    text: "Great for seasonal maintenance needs.",
    items: ["Quarterly property visit", "Mowing as needed", "Basic property check", "Photo updates"],
  },
  {
    name: "Silver",
    text: "Consistent care for peace of mind.",
    items: ["Bi-monthly maintenance", "Driveway touch-ups", "Vegetation management", "Photo updates"],
  },
  {
    name: "Gold",
    text: "Comprehensive care for your property year-round.",
    items: ["Monthly property stewardship", "Priority scheduling", "Seasonal maintenance planning", "Detailed reports & photos"],
  },
];

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Right Size Equipment Services",
    description:
      "Owner-operated acreage maintenance, fire mitigation, hunting property preparation, vacant lot care, and land stewardship in the Texas Hill Country and greater San Antonio area.",
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
      "Acreage maintenance",
      "Fire mitigation",
      "Fuel reduction",
      "Vacant lot maintenance",
      "Hunting property preparation",
      "Driveway maintenance",
      "Brush management",
    ],
  };

  const Fade = ({ from, to }: { from: string; to: string }) => (
    <div className={`h-16 bg-gradient-to-b ${from} ${to}`} aria-hidden="true" />
  );

  return (
    <main className="overflow-hidden bg-dust text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

<header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/[0.94] text-white shadow-lg backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-4 sm:px-6 lg:px-8">
    <a
      href="#top"
      className="flex min-w-[360px] items-center gap-4"
      aria-label="Right Size Land & Tractor home"
    >
      <Image
        src="/images/projects/LogoMarkRed.png"
        alt="Right Size Land & Tractor logo"
        width={64}
        height={64}
        className="h-14 w-14 rounded-xl object-contain"
        priority
      />

      <span className="block leading-none">
        <span className="block font-display text-xl font-black uppercase tracking-wide text-white">
          Right Size Land & Tractor
        </span>
        <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.24em] text-sand">
          Acreage Maintenance & Land Stewardship
        </span>
      </span>
    </a>

    <nav
      className="hidden flex-1 items-center justify-center gap-8 whitespace-nowrap text-sm font-black uppercase tracking-wide text-dust/90 lg:flex"
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

    <div className="hidden shrink-0 items-center gap-3 sm:flex">
      <a
        href={phoneHref}
        className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-sand/40 px-5 py-3 text-sm font-black text-sand transition hover:bg-white/10"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {phoneNumber}
      </a>

      <a
        href="#contact"
        className="whitespace-nowrap rounded-full bg-[#C8102E] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg transition hover:bg-[#9f0d24]"
      >
        Get Assessment
      </a>
    </div>

    <a
      href="#contact"
      className="rounded-full border border-sand/40 px-4 py-2 text-sm font-black text-sand sm:hidden"
      aria-label="Open contact section"
    >
      Assessment
    </a>
  </div>
</header>

      <a href={phoneHref} className={`fixed inset-x-4 bottom-4 z-50 flex items-center justify-center gap-3 rounded-2xl ${bgRed} px-5 py-4 text-base font-black uppercase tracking-wide text-white shadow-rugged sm:hidden`}>
        <Phone className="h-5 w-5" aria-hidden="true" />
        Tap to Call {phoneNumber}
      </a>

      <section id="top" className="relative isolate min-h-screen bg-field pt-28 text-white sm:pt-32">
        <Image
          src="/images/projects/HeroImage.jpg"
          alt="Texas acreage maintenance and property stewardship"
          fill
          className="-z-20 object-cover"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/50" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-grit bg-[length:18px_18px] opacity-20" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28">
          <div className="animate-rise-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sand/30 bg-white/10 px-4 py-2 text-sm font-bold text-sand backdrop-blur">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Owner-operated acreage maintenance & land stewardship
            </div>

            <h1 className="max-w-4xl font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Own Property Without the <span className={red}>Maintenance</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-dust/[0.88] sm:text-xl">
              We help busy professionals, retirees, hunting property owners, and land investors keep their property safe, accessible, and looking its best—without spending weekends on a tractor.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phoneHref} className={`inline-flex items-center justify-center gap-3 rounded-xl ${bgRed} px-7 py-4 text-lg font-black uppercase tracking-wide text-white shadow-rugged transition hover:-translate-y-0.5 ${hoverRed}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {phoneNumber}
              </a>

              <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-xl border border-sand/50 bg-white/10 px-7 py-4 text-lg font-black uppercase tracking-wide text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15">
                Get My Property Assessment
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-dust/[0.85] sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Fire mitigation",
                "Vacant lot care",
                "Hunting property prep",
                "Maintenance plans",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-full bg-white/[0.09] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-sand" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-rise-in lg:justify-self-end" style={{ animationDelay: "120ms" }}>
            <div className="rounded-[2rem] border border-sand/30 bg-white/10 p-3 shadow-rugged backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-charcoal p-6 sm:p-8">
                <div className="absolute inset-0 texture-overlay opacity-80" aria-hidden="true" />

                <div className="relative">
                  <div className="border-b border-white/15 pb-5">
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-sand">
                      Property care programs
                    </p>
                    <h2 className="mt-1 font-display text-3xl font-black uppercase">
                      Right size maintenance for your land
                    </h2>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {[
                      ["Fire Readiness", "Fuel reduction, mowing, brush control"],
                      ["Hunting Land", "Senderos, roads, camps, feeder access"],
                      ["Vacant Lots", "Clean, accessible, market-ready land"],
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-ink/[0.55] p-4">
                        <p className="font-display text-2xl font-bold uppercase text-white">{title}</p>
                        <p className="mt-1 text-sm text-dust/75">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-sand p-5 text-ink">
                    <p className="font-display text-3xl font-black uppercase">
                      No equipment hassle.
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-charcoal">
                      Skip the tractor payment, storage, repairs, fuel runs, and lost weekends. Keep the property—hand off the maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Fade from="from-ink" to="to-dust" />

      <section id="services" className="bg-dust py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={`font-bold uppercase tracking-[0.3em] ${red}`}>
              Property maintenance services
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-ink sm:text-5xl">
              Protect your investment. Enjoy your property.
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              From fire-risk vegetation to neglected driveways and seasonal hunting prep, we help keep your land usable, presentable, and ready when you need it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.title} className={`group rounded-3xl border border-sand/70 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:${borderRed}`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8102E]/10 ${red} transition group-hover:${bgRed} group-hover:text-white`}>
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

      <Fade from="from-dust" to="to-ink" />

      <section id="why-us" className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-sand">
              Why choose us
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight sm:text-5xl">
              Your property. Our responsibility.
            </h2>
            <p className="mt-5 text-lg leading-8 text-dust/[0.78]">
              Most acreage owners do not want another project. They want a property that stays maintained, safe, accessible, and ready to enjoy. We remove the hassle of ownership while helping protect your investment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((advantage) => (
              <div key={advantage} className="rounded-2xl border border-white/10 bg-white/[0.08] p-5">
                <ShieldCheck className={`h-6 w-6 ${red}`} aria-hidden="true" />
                <p className="mt-4 font-semibold leading-7 text-dust/[0.88]">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Fade from="from-ink" to="to-dust" />

      <section id="who-we-serve" className="bg-dust py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={`font-bold uppercase tracking-[0.3em] ${red}`}>
              Who we serve
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-ink sm:text-5xl">
              Built for owners who need the land maintained, not another weekend chore
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeServe.map((item) => (
              <article key={item.title} className="rounded-3xl border border-sand/70 bg-white p-6 shadow-card">
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${bgRed} text-white`}>
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="font-display text-2xl font-bold uppercase text-ink">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-steel">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
<section id="programs" className="bg-white py-20 sm:py-28">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-bold uppercase tracking-[0.3em] text-[#C8102E]">
        One-time projects or ongoing care
      </p>

      <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-ink sm:text-5xl">
        Big cleanup now. Easier maintenance later.
      </h2>

      <p className="mt-5 text-lg leading-8 text-steel">
        Some properties need a one-time push: fire fuel reduction, driveway
        repair, hunting season prep, vacant lot cleanup, or reclaiming
        overgrown acreage. After the heavy work is done, landowners can choose
        an ongoing maintenance program to keep costs lower and prevent the
        property from getting away again.
      </p>
    </div>

    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      <article className="rounded-3xl border border-sand/70 bg-dust p-8 shadow-card">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8102E] text-white">
          <Shovel className="h-6 w-6" aria-hidden="true" />
        </div>

        <h3 className="font-display text-3xl font-black uppercase text-ink">
          One-Time Property Projects
        </h3>

        <p className="mt-4 leading-8 text-steel">
          Ideal for landowners who need a specific problem solved: overgrowth,
          fire-risk vegetation, rough access roads, storm cleanup, hunting
          property prep, or a property that needs to look better before sale.
        </p>

        <ul className="mt-6 grid gap-3">
          {[
            "Fire fuel reduction and heavy mowing",
            "Driveway repair and access improvement",
            "Hunting property and sendero prep",
            "Vacant lot cleanup before listing",
            "Brush, cedar, and fence-line cleanup",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 font-semibold text-charcoal"
            >
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-[#C8102E]"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </article>

      <article className="rounded-3xl border border-sand/70 bg-dust p-8 shadow-card">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8102E] text-white">
          <Tractor className="h-6 w-6" aria-hidden="true" />
        </div>

        <h3 className="font-display text-3xl font-black uppercase text-ink">
          Ongoing Maintenance Programs
        </h3>

        <p className="mt-4 leading-8 text-steel">
          For landowners who want the property kept manageable year-round,
          recurring service can reduce repeat mobilization costs, catch problems
          earlier, and keep vegetation, roads, and access points from getting
          out of control.
        </p>

        <ul className="mt-6 grid gap-3">
          {[
            "Scheduled seasonal upkeep",
            "Cost savings compared with repeated one-off visits",
            "Priority scheduling during busy seasons",
            "Photo updates for absentee owners and investors",
            "Custom programs for acreage, vacant lots, and hunting land",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 font-semibold text-charcoal"
            >
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-[#C8102E]"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </div>
  </div>
</section>
      

      <Fade from="from-white" to="to-dust" />

      <section id="service-area" className="bg-dust py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8">
          <div>
            <p className={`font-bold uppercase tracking-[0.3em] ${red}`}>
              Service area
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-ink sm:text-5xl">
              Serving the Texas Hill Country and greater San Antonio area
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Based near Boerne for acreage maintenance, fire mitigation, vacant lot care, driveway maintenance, hunting property preparation, and rural property stewardship.
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
                <span key={city} className="rounded-full border border-sand bg-white px-4 py-2 text-sm font-bold text-charcoal">
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
              Call or send the address. If the property is a fit, we will be direct about travel, timing, and the most cost-effective way to keep it maintained.
            </p>

            <a href={phoneHref} className={`mt-6 inline-flex items-center gap-2 rounded-xl ${bgRed} px-6 py-4 font-black uppercase tracking-wide text-white transition ${hoverRed}`}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      <Fade from="from-dust" to="to-ink" />

      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-sand">
              Owner-operated promise
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              You hire the owner, not a revolving crew
            </h2>
            <p className="mt-5 text-lg leading-8 text-dust/80">
              Acreage maintenance is personal. You need someone who treats your land like it matters, shows up when promised, and follows through without excuses.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Owner on every job site",
                "Clear communication from assessment to cleanup",
                "Small-acreage jobs welcome",
                "Recurring maintenance available",
              ].map((benefit) => (
                <div key={benefit} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 font-semibold text-dust">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 text-dust shadow-rugged">
            <h3 className="font-display text-3xl font-black uppercase text-white">
              Built for Texas acreage owners
            </h3>
            <p className="mt-4 leading-8">
              When life gets busy, maintenance slips. We help you reclaim your weekends, reduce risk, protect property value, and keep your land ready to use.
            </p>
          </div>
        </div>
      </section>

      <Fade from="from-ink" to="to-dust" />

      <section className="bg-dust py-20 sm:py-24" id="transformations">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={`font-bold uppercase tracking-[0.3em] ${red}`}>
            Property transformation
          </p>
          <h2 className="mt-3 font-display text-4xl font-black uppercase text-ink sm:text-5xl">
            From neglected to manageable
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["ShedPadBefore.jpg", "Overgrown or uneven ground"],
              ["ShedPadDuring1.jpg", "Clearing and initial cleanup"],
              ["ShedPadDuring2.jpg", "Material movement and shaping"],
              ["ShedPadDone.jpg", "Clean, usable property improvement"],
            ].map(([src, caption], index) => (
              <figure key={src} className="group overflow-hidden rounded-2xl border border-sand/70 bg-white shadow-card">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={`/images/projects/${src}`}
                    alt={caption}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                <figcaption className="p-4 text-sm font-semibold text-charcoal">
                  Step {index + 1}: {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Fade from="from-dust" to="to-white" />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className={`font-bold uppercase tracking-[0.3em] ${red}`}>
              What customers say
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-ink sm:text-5xl">
              Straight work. Straight talk.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-3xl border border-sand/70 bg-dust p-7 shadow-card">
                <Quote className={`h-8 w-8 ${red}`} aria-hidden="true" />
                <blockquote className="mt-5 text-lg font-semibold leading-8 text-charcoal">
                  “{testimonial.quote}”
                </blockquote>

                <figcaption className="mt-6 border-t border-sand/60 pt-5">
                  <div className={`flex gap-1 ${red}`} aria-label="Five star rating">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>

                  <p className="mt-3 font-black text-ink">{testimonial.name}</p>
                  <p className="text-sm font-semibold text-steel">{testimonial.place}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-8">
        <Image
          src="/images/projects/FinalImage.jpg"
          alt="Maintained Texas acreage property"
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
              Stop maintaining your property. Start enjoying it.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-dust/[0.9]">
              Whether you own 2 acres or 200, we will help keep your land safe, accessible, and looking its best year-round.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phoneHref} className={`inline-flex items-center justify-center gap-3 rounded-xl ${bgRed} px-7 py-4 text-lg font-black uppercase tracking-wide text-white shadow-rugged transition ${hoverRed}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </a>

              <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-xl border border-sand/50 px-7 py-4 text-lg font-black uppercase tracking-wide text-white transition hover:bg-white/10">
                Request Property Assessment
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Fade from="from-ink" to="to-dust" />

      <section id="contact" className="bg-dust py-20 pb-32 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className={`font-bold uppercase tracking-[0.3em] ${red}`}>
              Get a property assessment
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase leading-tight sm:text-5xl">
              Tell us what needs maintaining
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Photos help. Acreage size helps. But if all you know is “the property is getting away from me,” that is enough to start the conversation.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-card">
                <Clock className={`h-7 w-7 shrink-0 ${red}`} aria-hidden="true" />

                <div>
                  <h3 className="font-display text-2xl font-bold uppercase">
                    Fast response
                  </h3>
                  <p className="mt-1 text-steel">
                    Most assessment requests receive a same-day reply during normal working hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-card">
                <Hammer className={`h-7 w-7 shrink-0 ${red}`} aria-hidden="true" />

                <div>
                  <h3 className="font-display text-2xl font-bold uppercase">
                    Practical maintenance plan
                  </h3>
                  <p className="mt-1 text-steel">
                    If there is a smarter way to phase the work, reduce cost, or set up recurring maintenance, you will hear it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/projects/LogoMark.svg"
                alt="Right Size Equipment Services logo"
                width={70}
                height={70}
                className="h-14 w-auto"
              />

              <div>
                <p className="font-display text-2xl font-black uppercase">
                  Right Size Equipment Services
                </p>

                <p className="mt-1 text-sm font-semibold text-dust/70">
                  Acreage maintenance, fire mitigation, vacant lot care, and land stewardship for Texas properties.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://share.google/Wbva0jZYkZ5eRiiOL" target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" className="rounded-full border border-sand/40 px-4 py-2 text-sm font-bold text-sand transition hover:bg-white/10">
                Google
              </a>

              <a href="https://www.facebook.com/profile.php?id=61575389984384" target="_blank" rel="noopener noreferrer" aria-label="Facebook Business Page" className="rounded-full border border-sand/40 px-4 py-2 text-sm font-bold text-sand transition hover:bg-white/10">
                Facebook
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm font-semibold text-dust/80 md:text-right">
            <a href={phoneHref} className="hover:text-sand">
              {phoneNumber}
            </a>

            <a href="mailto:anthonypmusetti@gmail.com" className="hover:text-sand">
              anthonypmusetti@gmail.com
            </a>

            <p>Boerne, TX & Surrounding Areas</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
