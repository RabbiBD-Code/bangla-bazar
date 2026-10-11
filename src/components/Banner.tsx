import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="mt-5 w-full container mx-auto px-3 sm:px-5">
      <div className="relative flex min-h-[220px] items-center justify-between overflow-hidden rounded-[22px] border border-[#dfe9e0] bg-[#f9fcfa] px-5 py-6 sm:px-8 md:min-h-[220px]">
        {/* Left content */}
        <div className="relative z-10 max-w-[650px]">
          <span className="inline-flex rounded-full bg-[#e0f1e6] px-3 py-1 text-[11px] font-medium text-[#07863e]">
            {date}
          </span>

          <h1 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#202b23] sm:text-3xl md:text-[32px]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-4 max-w-[470px] text-xs leading-6 text-[#737d75] sm:text-sm">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href="/products"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#078b43] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#067638] focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        {/* Right illustration */}
        <div
          aria-hidden="true"
          className="ml-3 hidden shrink-0 items-center justify-center sm:flex"
        >
          <Image
            src="/bazar-hero.png"
            alt="Bazar hero"
            width={200}
            height={175}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
