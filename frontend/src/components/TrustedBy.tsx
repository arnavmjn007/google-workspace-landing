import Image from "next/image";
import PricingSection from "./Pricing";

export default function TrustedBy() {
    const clients = [
        { name: "Client 1", logo: "/logos/client1.png" },
        { name: "Client 2", logo: "/logos/client2.png" },
        { name: "Client 3", logo: "/logos/client3.png" },
        { name: "Client 4", logo: "/logos/client4.png" },
        { name: "Client 5", logo: "/logos/client5.png" },
        { name: "Client 6", logo: "/logos/client6.png" },
        { name: "Client 7", logo: "/logos/client7.png" },
        { name: "Client 8", logo: "/logos/client8.png" },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white py-16 md:py-24">
            <div
                className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-[900px]"
                style={{
                    background: 'radial-gradient(ellipse 200px 50% at -8% 40%, rgba(33, 123, 254, 0.3) 30%, rgba(7, 142, 251, 0.3) 30%, rgba(172, 135, 235, 0.3) 30%, rgba(238, 77, 93, 0.3) 30%, transparent 100%)', filter: 'blur(3px)'
                }}
            />
            <div
                className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-[800px]"
                style={{
                    background: 'radial-gradient( ellipse 200px 50% at 115% 40%,rgba(33, 123, 254, 0.4) 100%, rgba(7, 142, 251, 0.4) 10%, rgba(172, 135, 235, 0.4) 10%, rgba(238, 77, 93, 0.4) 10%, transparent)', filter: 'blur(50px)'
                }}
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="text-center mb-12">
                    <p className="text-base md:text-lg text-gray-700 mb-2">
                        Trusted by 1200+ Nepali businesses on their <br className="hidden md:block" /> growth journey.
                        <span className="text-[#1A73E8] font-semibold">
                            यहाँ तपाईंको team जस्तै छ?
                        </span>
                    </p>
                </div>


                 <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center transition-all duration-300"
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={120}
                                height={60}
                                className="object-contain max-h-12 md:max-h-16 w-auto"
                            />
                        </div>
                    ))}
                    <PricingSection />
                </div>
            </div>
        </section>
    );
}