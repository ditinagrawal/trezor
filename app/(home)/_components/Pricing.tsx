"use client";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="text-center">
        <h1 className="mb-[20px] text-[40px] md:text-[48px] lg:text-md leading-[1] font-extrabold tracking-tight">
          Pricing
        </h1>
        <p className="text-xl mb-[24px] text-slate-600 max-sm:px-2">
          Get started with options that fit your needs.
        </p>
      </div>
      <div className="w-10/12 mx-auto py-7">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3">
          <PricingCard
            title="Free"
            description="Try our app for free. No Credit Card required."
            price={0}
            offers="1 trezor, deleted after 7 days of opening"
          />
          <PricingCard
            title="Pro"
            description="With pro you get access to all features. We recommend this."
            price={299}
            offers="upto 50 trezors with all features"
          />
          <PricingCard
            title="Enterprise"
            description="For large organizations. Get in touch for a custom plan."
            price={"Custom"}
            offers="Custom plans available"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

interface PricingCardProps {
  title: string;
  description: string;
  price: number | string;
  offers: string;
}

function PricingCard({ title, description, price, offers }: PricingCardProps) {
  return (
    <div className="px-[28px] lg:px-[32px] py-[28px] border-r">
      <div>
        <div className="text-base uppercase font-bold tracking-wider mb-[10px] text-[#956FE5]">
          {title}
        </div>
        <p className="text-md text-black mb-[20px]">{description}</p>
      </div>
      <div className="flex flex-col justify-content-end mb-[32px]">
        <div className="flex items-start text-[42px] leading-none font-bold text-black mb-[4px]">
          {price !== "Custom" && (
            <span className="text-xl font-semibold mr-0.5">₹</span>
          )}
          <div>
            {price}
            {price !== "Custom" && <span className="text-sm">/mo</span>}
          </div>
        </div>
        <div className="text-sm text-gray-600">{offers}</div>
      </div>
      <a
        href="/"
        className="flex items-center justify-center w-full h-[48px] px-[20px] mb-4 bg-black duration-300 rounded-md font-semibold text-md text-center text-white"
      >
        {title === "Enterprise" ? "Contact Us" : "Get Started"}
      </a>
    </div>
  );
}
