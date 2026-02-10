const FAQ_DATA = [
    {
        id: 1,
        question: "Is Google Workspace compatible with my current email client?",
    },
    {
        id: 2,
        question: "Can I transfer my current Google Workspace account to Nest Nepal?",
    },
    {
        id: 3,
        question: "Are there any fees for transferring a domain to Nest Nepal?",
    },
    {
        id: 4,
        question: "Are there any hidden charges for Nest Nepal Customers?",
    },
    {
        id: 5,
        question: "What all does Gsuite productivity suite include?",
    },
];

export default function FAQ() {
    return (
        <section className="w-full bg-white py-8 md:py-16 lg:py-16">
            <div className="container mx-auto max-w-3xl px-4 md:px-8">
                <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:mb-16 md:text-4xl">
                    Frequently Asked Questions{" "}
                    <span className="text-blue-500">(FAQs)</span>
                </h2>

                <div className="space-y-0">
                    {FAQ_DATA.map((faq, index) => (
                        <div
                            key={faq.id}
                            className={`border-b border-gray-200 py-6 ${index === FAQ_DATA.length - 1 ? "" : ""
                                }`}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-base text-gray-800 md:text-lg">
                                    {faq.question}
                                </p>

                                <svg
                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}