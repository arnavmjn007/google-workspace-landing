import Image from "next/image";


const Ticket = ({
    label,
    value,
    subValue,
    rotate
}: {
    label: string;
    value: string;
    subValue?: string;
    rotate: string;
}) => {
    return (
        <div className={`relative ${rotate} flex w-[320px] h-[120px] md:w-[400px] md:h-[140px] drop-shadow-2xl`}>
            <div
                className="absolute inset-0 bg-[#F25277]"
                style={{
                    WebkitMaskImage: `
            radial-gradient(circle at 0 50%, transparent 15px, black 16px),
            radial-gradient(circle at 100% 50%, transparent 15px, black 16px),
            radial-gradient(circle at 50% 0, transparent 10px, black 11px),
            radial-gradient(circle at 50% 100%, transparent 10px, black 11px)
          `,
                    WebkitMaskComposite: 'source-in',
                    maskComposite: 'intersect'
                }}
            />
            <div className="relative flex flex-[1.2] flex-col items-center justify-center border-r-2 border-dashed border-white/40 px-6 text-white">
                <p className="text-center font-helvetica text-[14px] md:text-[18px] font-bold leading-tight uppercase tracking-tight max-w-[80px] md:max-w-[100px]">
                    {label}
                </p>
            </div>

            <div className="relative flex flex-1 flex-col items-center justify-center px-4 text-white">
                {subValue && (
                    <span className="absolute top-6 left-8 text-[14px] font-bold opacity-80">
                        {subValue}
                    </span>
                )}
                <p className="font-helvetica text-[44px] md:text-[56px] font-black tracking-tighter leading-none">
                    {value}
                </p>
            </div>
        </div>
    );
};

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-white pb-10 pt-10">
            <div
                className="pointer-events-none absolute inset-y-0 left-0 w-[900px]"
                style={{
                    background: 'radial-gradient(ellipse 200px 50% at -10% 50%, rgba(33, 123, 254, 0.3) 30%, rgba(7, 142, 251, 0.3) 30%, rgba(172, 135, 235, 0.3) 30%, rgba(238, 77, 93, 0.3) 30%, transparent 100%)', filter: 'blur(3px)'
                }}
            />
            <div
                className="pointer-events-none absolute inset-y-0 right-0 w-[800px]"
                style={{
                    background: 'radial-gradient( ellipse 200px 50% at 110% 50%,rgba(33, 123, 254, 0.4) 100%, rgba(7, 142, 251, 0.4) 10%, rgba(172, 135, 235, 0.4) 10%, rgba(238, 77, 93, 0.4) 10%, transparent)', filter: 'blur(50px)'
                }}
            />
            <div className="container relative z-10 mx-auto max-w-6xl px-6 pt-32 text-center">
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage: 'linear-gradient(to bottom right, #3b82f6, #2563eb)'
                        }}
                    >
                        Google Workspace
                    </span>
                </h1>

                <div className="mb-8 flex justify-center gap-3">
                    <Image src="/workshop.png" alt="Google Workspace" width={200} height={40} className="h-10 w-auto" />
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                    <span className="text-[#1A73E8]">किन केही </span>
                    <span className="text-black">Businesses efficiently </span>
                    <span className="text-[#1A73E8]">चल्छन्, र केही</span>
                    <br />
                    <span className="text-black">daily operations</span>
                    <span className="text-[#1A73E8]"> मै struggle गर्छन्?</span>
                </h1>

                <p className="mt-4 text-black">
                    Reason luck, ads वा team size होइन. Reason हो right partner with right tools.
                </p>

                <div className="mt-14 mb-14 flex flex-col items-center gap-3">
                    <Ticket
                        label="DISCOUNTUP TO"
                        value="20%"
                        rotate="-rotate-1 translate-x-1"

                    />
                    <Ticket
                        label="After Discount"
                        value="Rs. 499"
                        rotate="rotate-2 -translate-x-1"
                    />
                </div>

                <p className="mb-10 text-sm md:text-base font-medium text-black">
                    Everything Your Business Needs to Work Smarter. A complete Google <br className="hidden md:block" />
                    Workspace setup done right by Nest Nepal.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="rounded-full bg-[#F25277] px-10 py-4 font-bold text-white shadow-lg transition hover:scale-105">
                        15 min · Free Demo
                    </button>

                    <button className="flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-10 py-4 font-bold text-gray-700 hover:bg-gray-50 transition group">
                        Get a quotation
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </button>
                    </div>
                </div>
        </section>
    );
}
