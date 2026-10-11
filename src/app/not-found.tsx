
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b] px-6 text-white">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-sm text-lime-400">
          <span className="h-2 w-2 rounded-full bg-lime-400" />
          Error 404 · Page not found
        </div>

        {/* 404 */}
        <h1 className="bg-gradient-to-b from-lime-300 via-lime-400 to-lime-700 bg-clip-text text-[120px] leading-none font-black tracking-tighter text-transparent sm:text-[180px]">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-4xl">
          Oops! You lost your way.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
          The page you are looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>

        {/* Home button */}
        <div className="mt-9">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-lime-400 px-7 py-3.5 font-semibold text-black transition hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/20"
          >
            <span>⌂</span>
            Back to Home
            <span>→</span>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 flex items-center justify-center gap-3 text-xs tracking-widest text-zinc-600">
          <span className="h-px w-8 bg-zinc-800" />
          LOST IN SPACE?
          <span className="h-px w-8 bg-zinc-800" />
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
