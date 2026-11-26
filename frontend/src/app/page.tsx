
export default function Home() {
  return (
    <main className="min-h-screen bg-[#080B12] text-white">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="/" className="text-xl font-bold tracking-tight">
          Jordan Janes<span className="text-blue-500">.</span>
        </a>

        <div className="hidden gap-8 text-sm text-gray-400 md:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          AI ENGINEERING · PYTHON · APPLIED AI
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Turning ideas into
          <span className="text-blue-400"> intelligent </span>
          applications.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          I'm building practical AI applications and exploring
          how software engineering and artificial intelligence
          can solve real-world problems.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
          >
            Explore my projects →
          </a>

          <a
            href="#about"
            className="rounded-lg border border-gray-700 px-6 py-3 font-medium transition hover:bg-gray-900"
          >
            About me
          </a>
        </div>

        {/* Technologies */}
        <div className="mt-16 flex flex-wrap gap-3">
          {["Python", "OpenAI API", "TypeScript", "React", "Next.js"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-400"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="border-t border-gray-800 bg-[#0D111B] py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            MY WORK
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Projects & Experiments
          </h2>

          <p className="mt-4 max-w-xl text-gray-400">
            A collection of applications, experiments and
            engineering projects developed along my journey.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-xl border border-gray-800 bg-[#080B12] p-8">
              <p className="text-sm text-blue-400">PROJECT 01</p>
              <h3 className="mt-4 text-xl font-semibold">
                Coming Soon
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                My first AI engineering project will be showcased here.
              </p>
              <p className="mt-6 text-sm text-gray-500">
                Python · AI · Development
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#080B12] p-8">
              <p className="text-sm text-blue-400">PROJECT 02</p>
              <h3 className="mt-4 text-xl font-semibold">
                Coming Soon
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                More practical applications and technical experiments.
              </p>
              <p className="mt-6 text-sm text-gray-500">
                Software Engineering · Applied AI
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-blue-400">
          ABOUT ME
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          Building, learning and experimenting.
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-gray-400">
          My focus is on developing practical engineering skills
          through hands-on projects. I'm particularly interested
          in Python, large language models, AI applications and
          intelligent systems.
        </p>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="border-t border-gray-800 px-6 py-12 text-center"
      >
        <h2 className="text-2xl font-bold">
          Let's connect.
        </h2>

        <p className="mt-3 text-gray-400">
          Interested in AI, technology or collaborating on a project?
        </p>

        <p className="mt-8 text-sm text-gray-600">
          © 2026 Jordan Janes · Built with Next.js
        </p>
      </footer>

    </main>
  );
}
