import Image from "next/image";

export default function PricingSection() {
    const features = {
        storage: [
            { icon: "/icons/Google drive.png", text: "30GB Pooled Storage per user" }
        ],
        communicate: [
            { icon: "/icons/gmail.png", text: "Secured & Personalised Gmail" },
            { icon: "/icons/google chat.png", text: "Always in Touch with Schedule" },
            { icon: "/icons/google meet.png", text: "HD Video Calls (100 Users)" },
            { icon: "/icons/google chat.png", text: "Keeps Secretly in your Drive" }
        ],
        collaborate: [
            { icon: "/icons/google docs.png", text: "Documents with Google Docs" },
            { icon: "/icons/google sheets.png", text: "Data Insights with Google Sheets" },
            { icon: "/icons/google slides.png", text: "Present with Google Slides" },
            { icon: "/icons/google surveys.png", text: "Surveys, To-do and Many More" }
        ],
        control: [
            { icon: "/icons/google admin console.png", text: "Basic Security & Admin Control" },
            { icon: "/icons/google endpoint.png", text: "Standard Project Management" },
            { icon: "/icons/smart search.png", text: "Smart Search with Workspace" },
            { icon: "/icons/vault.png", text: "Vault for eDiscovery" },
            { icon: "/icons/Google drive.png", text: "Backup options for Drive and Gmail" }
        ]
    };

    return (
        <section className="relative w-full overflow-hidden py-16 md:py-24">
            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-black">के </span>
                        <span className="text-[#1A73E8]">Google Workspace</span>
                        <span className="text-black"> तपाईंको</span>
                        <br />
                        <span className="text-black">business growth </span>
                        <span className="text-[#1A73E8]">को लागि</span>
                        <span className="text-black"> best fit </span>
                        <span className="text-[#1A73E8]">हो?</span>
                    </h2>
                    <p className="text-black text-sm md:text-base mt-4">
                        Tailored Plans तपाईंको Online Presence को हरेक पहलूलाई<br className="hidden md:block" />
                        Elevate र Empower गर्न
                    </p>

                    <div className="flex justify-center gap-3 mt-6 pb-10">
                        <Image src="/icons/gmail.png" alt="Gmail" width={32} height={32} />
                        <Image src="/icons/google calendar.png" alt="Calendar" width={32} height={32} />
                        <Image src="/icons/Google drive.png" alt="Drive" width={32} height={32} />
                        <Image src="/icons/google docs.png" alt="Docs" width={32} height={32} />
                        <Image src="/icons/google meet.png" alt="Meet" width={32} height={32} />
                        <Image src="/icons/gemini.png" alt="More" width={32} height={32} />
                    </div>
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
                        <div className="bg-white p-8">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">Starter</h3>
                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-base text-gray-600">Rs.</span>
                                    <span className="text-6xl font-bold text-gray-900">499</span>
                                    <span className="relative inline-block text-3xl text-gray-400 ml-2">
                                        560
                                        <svg
                                            className="absolute inset-0 z-10 w-full h-full pointer-events-none overflow-visible"
                                            preserveAspectRatio="none"
                                        >
                                            <line
                                                x1="-10%"
                                                y1="90%"
                                                x2="110%"
                                                y2="10%"
                                                stroke="#EF4444"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 mt-3">
                                    per user / month,<br />
                                    1 year commitment <span className="inline-flex items-center justify-center w-4 h-4 text-xs border border-gray-400 rounded-full">ⓘ</span>
                                </p>
                            </div>

                            <button className="flex h-10 items-center gap-2 rounded-lg border border-[#F25277] bg-[#E8F9EE] px-4 py-2 transition-all hover:bg-[#F 25277] md:h-auto md:px-5 md:py-2.5">
                                <Image
                                    src="/whatsapp2.png"
                                    alt="WhatsApp"
                                    width={24}
                                    height={24}
                                    className="h-5 w-5 md:h-6 md:w-6"
                                />
                                <span className="font-helvetica text-sm text-[#F25277] md:text-base">
                                    Contact Sales
                                </span>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-x-16 gap-y-10 border-l-2 border-gray-200 pl-8">
                            <div>
                                <h4 className="font-bold text-black mb-4 text-base">Storage</h4>
                                <ul className="space-y-3">
                                    {features.storage.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Image src={feature.icon} alt="" width={18} height={18} className="mt-0.5 flex-shrink-0" />
                                            <span className="leading-relaxed">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-black mb-4 text-base">Collaborate</h4>
                                <ul className="space-y-3">
                                    {features.collaborate.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Image src={feature.icon} alt="" width={18} height={18} className="mt-0.5 flex-shrink-0" />
                                            <span className="leading-relaxed">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                            <div>
                                <h4 className="font-bold text-black mb-4 text-base">Communicate</h4>
                                <ul className="space-y-3">
                                    {features.communicate.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Image src={feature.icon} alt="" width={18} height={18} className="mt-0.5 flex-shrink-0" />
                                            <span className="leading-relaxed">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-black mb-4 text-base">Control</h4>
                                <ul className="space-y-3">
                                    {features.control.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Image src={feature.icon} alt="" width={18} height={18} className="mt-0.5 flex-shrink-0" />
                                            <span className="leading-relaxed">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}