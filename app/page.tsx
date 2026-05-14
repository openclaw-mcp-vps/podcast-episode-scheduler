export default function Home() {
  const faqs = [
    {
      q: "Which platforms are supported?",
      a: "PodScheduler connects to Spotify, Apple Podcasts, and Google Podcasts via their hosting APIs, letting you schedule releases on all three from one dashboard."
    },
    {
      q: "How does timezone optimization work?",
      a: "We analyze listener data per platform and suggest the best local release time for each, so your episode drops when your audience is most active — no manual math required."
    },
    {
      q: "Can I bulk schedule multiple episodes at once?",
      a: "Yes. Upload a batch of episodes, set per-platform release windows, and our job queue handles the rest — including retries if a platform API is temporarily unavailable."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Spotify · Apple · Google Podcasts
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Schedule Podcast Episodes<br />Across Every Platform
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Bulk schedule releases to Spotify, Apple, and Google Podcasts with custom timing per platform and automatic timezone optimization — all from one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Scheduling — $11/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "📅", title: "Bulk Scheduling", desc: "Queue dozens of episodes and set staggered release dates in minutes." },
          { icon: "🌍", title: "Timezone Optimizer", desc: "Auto-detect peak listener hours per platform and region." },
          { icon: "🔄", title: "Job Queue", desc: "Reliable background processing with automatic retries on API failures." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited episode scheduling",
              "Spotify, Apple & Google Podcasts",
              "Timezone optimization",
              "Bulk upload & batch scheduling",
              "Job queue with auto-retry",
              "Email release confirmations"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} PodScheduler. All rights reserved.
      </footer>
    </main>
  );
}
