"use client";

const Page = () => {
  return (
    <div className="min-h-screen bg-[--beige] text-gray-900 font-barlowCondensed scroll-smooth">
      {/* Header */}
      <header className="bg-black text-white shadow-md py-8 px-4 flex flex-col items-center">
        <div className="logo text-4xl mb-4 sm:mb-6 text-center tracking-wide">
          <span className="font-light text-gray-300">Tenacious.</span>
          <span className="font-medium text-gray-100">Individual.</span>
          <span className="font-bold text-yellow-400">Performance</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-base sm:gap-8 sm:text-lg text-center">
          <a href="#home" className="text-white hover:text-yellow-400 transition-colors font-medium">Home</a>
          <a href="#workouts" className="text-white hover:text-yellow-400 transition-colors font-medium">Workouts</a>
          <a href="#recipes" className="text-white hover:text-yellow-400 transition-colors font-medium">Recipes</a>
          <a href="#lifestyle" className="text-white hover:text-yellow-400 transition-colors font-medium">Lifestyle</a>
          <a href="#philosophy" className="text-white hover:text-yellow-400 transition-colors font-medium">Philosophy</a>
        </nav>
      </header>

      {/* Main Content */}
      <main id="home" className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <article className="bg-white rounded-lg shadow-md p-6 sm:p-10 space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            Hi, I'm <strong>Garry Tipler (Tip)</strong> — someone who finds joy in creativity, curiosity, training, and making things that matter.
          </p>

          <blockquote className="text-center italic text-lg sm:text-xl text-gray-800 mt-6">
            “Consistency beats intensity. Keep showing up.”
          </blockquote>

          {/* Sections */}
          <section id="workouts" className="mt-10 sm:mt-12">
            <h2 className="section-title">Workouts</h2>
            <p className="section-text">Explore strength, conditioning, and mobility sessions designed to build consistency and balance.</p>
          </section>

          <section id="recipes" className="mt-10 sm:mt-12">
            <h2 className="section-title">Recipes</h2>
            <p className="section-text">Simple, nourishing meals that don’t require fancy ingredients.</p>
          </section>

          <section id="lifestyle" className="mt-10 sm:mt-12">
            <h2 className="section-title">Lifestyle</h2>
            <p className="section-text">Thoughts on routines, creativity, habits, and staying grounded.</p>
          </section>

          <section id="philosophy" className="mt-10 sm:mt-12">
            <h2 className="section-title">Philosophy</h2>
            <p className="section-text">Keep learning, stay humble, and be kind.</p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-black text-white mt-12 text-sm sm:text-base">
        © {new Date().getFullYear()} Garry Tipler — Built with curiosity and coffee ☕
      </footer>
    </div>
  );
};

export default Page;
