import Image from "next/image";
import SolutionsSection from "./Solutions";

export default function Features() {
    const googleApps = [
        { name: "Gmail", icon: "/icons/gmail.png" },
        { name: "Drive", icon: "/icons/Google drive.png" },
        { name: "Meet", icon: "/icons/google meet.png" },
        { name: "Calendar", icon: "/icons/google calendar.png" },
        { name: "Chat", icon: "/icons/google chat.png" },
        { name: "Gemini", icon: "/icons/gemini.png" },
        { name: "Docs", icon: "/icons/google docs.png" },
        { name: "Sheets", icon: "/icons/google sheets.png" },
        { name: "Slides", icon: "/icons/google slides.png" },
        { name: "Vids", icon: "/icons/vids.png" },
        { name: "Keep", icon: "/icons/keep.png" },
        { name: "Sites", icon: "/icons/sites.png" },
        { name: "Forms", icon: "/icons/forms.png" },
        { name: "Tasks", icon: "/icons/tasks.png" },
        { name: "NotebookLM", icon: "/icons/notebooklm.png" },
        { name: "AppSheet", icon: "/icons/appsheet.png" },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white py-4 md:py-6">
            <div className="hidden md:block relative z-10 mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
                        <span className="text-[#1A73E8]">सबै</span>
                        <span className="text-black"> Tools </span>
                        <span className="text-[#1A73E8]">एउटै</span>
                        <span className="text-black"> Platform मा</span>
                    </h2>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1A73E8] mt-2">
                        Google Workspace
                    </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Premium AI built-in</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Do your best work faster with the Gemini app, NotebookLM, and Gemini in Gmail, Docs, Sheets, and more.
                        </p>
                    </div>

                    <div className="text-center">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Tools born in the Cloud</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Collaborate in real time, from any device, across tools that are always up-to-date.
                        </p>
                    </div>

                    <div className="text-center">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Enterprise-grade security</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Protect your emails, files, and meetings with AI-powered security and compliance controls.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center pb-8 md:pb-10">
                    <div className="text-center">
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

                <div>
                    <h3 className="text-center text-lg md:text-xl font-semibold text-black mb-8">
                        Google Workspace includes:
                    </h3>

                    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
                        {googleApps.map((app, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                                    <Image
                                        src={app.icon}
                                        alt={app.name}
                                        fill
                                        className="object-contain transition-transform duration-200 group-hover:scale-110"
                                    />
                                </div>
                                <span className="text-xs text-gray-700 font-medium">{app.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}