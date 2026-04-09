import { MaterialSymbol } from "@/components/icons/MaterialSymbol";

const interests = [
  {
    icon: "flight",
    title: "Travel Tech",
    body: (
      <p className="text-sm text-on-surface-variant">
        Passionate about innovative travel solutions and global connectivity.
      </p>
    ),
  },
  {
    icon: "sports_soccer",
    title: "English Premier League",
    body: (
      <p className="text-sm text-on-surface-variant">
        Long-time follower of the Premier League, drawn to the competition,
        intensity, and global culture of the game.
      </p>
    ),
  },
  {
    icon: "explore",
    title: "Endurance Sports",
    body: (
      <p className="text-sm text-on-surface-variant">
        Passionate about endurance challenges—marathons and triathlons that push
        both physical and mental limits.
      </p>
    ),
  },
  {
    icon: "nutrition",
    title: "Health Optimization",
    body: (
      <p className="text-sm text-on-surface-variant">
        Deeply interested in longevity and performance, with a focus on whole
        foods and sustainable health practices.
      </p>
    ),
  },
  {
    icon: "pets",
    title: "Dog Lover",
    body: (
      <p className="text-sm text-on-surface-variant">
        Avid dog lover focused on creating the best environment for every pup.
      </p>
    ),
  },
  {
    icon: "auto_awesome",
    title: "Hyper-Personal AI",
    body: (
      <p className="text-sm text-on-surface-variant">
        Building AI agents to optimize daily life—from workout tracking to
        personalized news and insights.
      </p>
    ),
  },
];

export function AboutInterestsSection() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-16 flex flex-col gap-4">
        <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" aria-hidden />
          Off the Clock
        </h2>
        <p className="text-5xl font-black tracking-tighter text-on-surface">
          Beyond the Blueprint.
        </p>
      </div>
      <div className="grid gap-20 md:grid-cols-2">
        <div className="flex flex-col">
          <div className="relative overflow-hidden border border-outline-variant/10 bg-surface-container-low p-10 group/about">
            <div className="pointer-events-none absolute right-0 top-0 p-4 opacity-5">
              <MaterialSymbol
                name="person_search"
                className="text-9xl"
                aria-hidden
              />
            </div>
            <h3 className="mb-8 text-2xl font-black uppercase tracking-tight text-primary">
              About Me
            </h3>
            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
              <p>
                I grew up in Hong Kong and Shanghai—two cities defined by speed,
                density, and seamless connectivity. Living in environments where
                everything was interconnected shaped how I see the world:{" "}
                <strong className="font-bold text-on-surface">systems</strong>{" "}
                should work together to unlock efficiency and create{" "}
                <strong className="font-bold text-on-surface">value</strong>.
              </p>
              <p>
                From an early age, I was drawn to computers. I enjoyed assembling
                my own PCs and understanding how{" "}
                <strong className="font-bold text-on-surface">
                  individual components
                </strong>{" "}
                came together to build something powerful. That curiosity
                naturally expanded into software and web technologies.
              </p>
              <p>
                I also became the go-to person in my family for organizing
                information. What started as a simple responsibility became an
                early lesson in{" "}
                <strong className="font-bold text-on-surface">
                  systems thinking
                </strong>
                —how information is structured and managed directly impacts how
                effectively it can be used.
              </p>
              <p>
                I pursued{" "}
                <strong className="font-bold text-on-surface">
                  Information Systems
                </strong>{" "}
                at the Robert H. Smith School of Business at the{" "}
                <strong className="font-bold text-on-surface">
                  University of Maryland
                </strong>
                , where I focused on the intersection of technology and business.
              </p>
              <p>
                I began my career at{" "}
                <strong className="font-bold text-on-surface">KPMG</strong> as a
                consultant, building business applications for large enterprises.
                I then transitioned into software engineering at{" "}
                <strong className="font-bold text-on-surface">
                  Bain &amp; Company
                </strong>
                , where I worked on some of the most complex and high-impact
                business problems—using technology to design and deliver{" "}
                <strong className="font-bold text-on-surface">
                  scalable solutions
                </strong>
                .
              </p>
              <p>
                Over time, I grew into engineering leadership roles, leading teams
                to build{" "}
                <strong className="font-bold text-on-surface">
                  production-grade systems
                </strong>{" "}
                and drive{" "}
                <strong className="font-bold text-on-surface">
                  cross-functional delivery
                </strong>
                .
              </p>
              <p>
                Today, I work as a{" "}
                <strong className="font-bold text-on-surface">
                  Solutions Architect
                </strong>
                , partnering closely with business and technology leaders to
                translate strategy into scalable solutions. My focus is on
                leveraging cutting-edge{" "}
                <strong className="font-bold text-on-surface">
                  AI and cloud technologies
                </strong>{" "}
                to build systems that drive{" "}
                <strong className="font-bold text-on-surface">
                  measurable business outcomes
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-black uppercase tracking-tight text-primary">
            Personal Interests
          </h3>
          {interests.map((item) => (
            <div key={item.title} className="group flex gap-6">
              <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center overflow-hidden border border-outline-variant/10 bg-surface-container-highest">
                <MaterialSymbol
                  name={item.icon}
                  className="text-3xl text-outline/30 transition-colors group-hover:text-primary"
                  aria-hidden
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="mb-1 text-xl font-bold uppercase tracking-wide text-on-surface">
                  {item.title}
                </h4>
                {item.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
