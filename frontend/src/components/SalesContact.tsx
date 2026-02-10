import Image from "next/image";
const GOOGLE_APPS = [
    { name: "Gmail", icon: "/icons/gmail.png" },
    { name: "Drive", icon: "/icons/Google drive.png" },
    { name: "Meet", icon: "/icons/google meet.png" },
    { name: "Calendar", icon: "/icons/google calendar.png" },
    { name: "Chat", icon: "/icons/google chat.png" },
    { name: "Gemini", icon: "/icons/gemini.png" },
];

export default function SalesContact() {
    return (
        <section className="w-full bg-white py-8 md:py-16 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div
                    className="overflow-hidden rounded-2xl md:rounded-3xl"
                    style={{ background: "rgba(242, 242, 242, 0.56)" }}
                >
                    <div className="grid md:grid-cols-2">
                        <div className="px-6 py-6 md:px-12 md:py-12 lg:px-16 lg:py-16">
                            <div className="mb-4 flex flex-wrap gap-2 md:mb-6 md:gap-3">
                                {GOOGLE_APPS.map((app) => (
                                    <div
                                        key={app.name}
                                        className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
                                    >
                                        <Image
                                            src={app.icon}
                                            alt={app.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>

                            <h2 className="mb-3 text-xl font-bold leading-tight text-black md:mb-4 md:text-3xl lg:text-4xl">
                                Prefer to talk to sales directly?
                            </h2>

                            <p className="mb-5 text-xs leading-relaxed text-black md:mb-8 md:text-sm lg:text-base">
                                तपाईंको company को unique requirements अनुसार तयार गरिएको
                                solution सँग efficiency र collaboration maximize गर्नुहोस्.
                            </p>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                                <a
                                    href="https://wa.me/9779864333017"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex h-12 items-center justify-center gap-2 rounded-lg border border-[#F25277] bg-[#FFF5F7] px-5 py-3 transition-all hover:bg-[#F25277]"
                                >
                                    <Image
                                        src="/whatsapp2.png"
                                        alt="WhatsApp"
                                        width={24}
                                        height={24}
                                        className="h-5 w-5 md:h-6 md:w-6"
                                    />
                                    <span className="text-sm font-medium text-[#F25277] group-hover:text-white md:text-base">
                                        Message On WhatsApp
                                    </span>
                                </a>
                                <div className="hidden h-6 w-px bg-gray-300 sm:block"></div>
                                <a
                                    href="tel:+9779864333017"
                                    className="text-sm font-medium text-gray-700 hover:text-gray-900 md:text-base"
                                >
                                    Call: +977 9864333017
                                </a>
                            </div>
                            </div>
                            <div className="relative flex items-end justify-center md:items-center">
                                <div className="absolute bottom-0 right-0 h-[70%] w-[80%] md:inset-0 md:h-full md:w-full">
                                    <Image
                                        src="/sales/rainbowbg.svg"
                                        alt=""
                                        fill
                                        className="object-contain object-bottom md:object-center"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="relative z-10 h-[280px] w-full md:h-[380px] lg:h-[380px]">
                                    <Image
                                        src="/sales/sales-person.png"
                                        alt="Customer support representative ready to help"
                                        fill
                                        className="object-contain object-bottom md:object-center"
                                        priority
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}