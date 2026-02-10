import Image from "next/image";

export default function WorkspaceSucceed() {
    const features = [
        {
            title: "Your files, all in one place",
            description: "Edit and organize Google Docs, Sheets, Slides, Microsoft Office files, and PDFs in real-time. Plus, access over 100 other file types!",
            active: true,
        },
        { title: "Annotate PDFs", active: false },
        { title: "AI-powered search", active: false },
        { title: "Activity view", active: false },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white py-8 md:py-16">
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
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Brands using Google Workspace to <br />
                    succeed online, <span className="text-[#4285F4]">कसरी?</span>
                </h2>
                <p className="text-gray-600 font-medium">
                    कसरी teams Google Workspace सँग productivity <br />
                    बढाउँछन् र समय बचत गर्छन्
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative flex justify-center items-center">
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                        <Image
                            src="/workspace.svg"
                            alt="Google Workspace Orbit"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`pl-6 border-l-2 transition-all duration-300 ${feature.active ? "border-[#4285F4]" : "border-gray-100"
                                }`}
                        >
                            <h3 className={`text-lg font-semibold mb-2 ${feature.active ? "text-gray-900" : "text-gray-500"
                                }`}>
                                {feature.title}
                            </h3>
                            {feature.description && (
                                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                                    {feature.description}{" "}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}