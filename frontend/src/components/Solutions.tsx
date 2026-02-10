import Image from "next/image";

export default function SolutionsSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-8 md:py-16">
            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
                        <span className="text-black">Solutions for businesses,</span>
                    </h2>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1A73E8] mb-4">
                        साना देखि ठुला सबैका लागि
                    </h3>
                    <p className="text-sm md:text-lg text-black max-w-2xl mx-auto">
                        No matter the size, Google Workspace ले तपाईंको business  <br className="hidden md:block" />
                         को सबै needs पूरा गर्छ
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    <div className="flex flex-col items-center group">
                        <div className="relative w-full aspect-[16/9] bg-white  rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                            <Image
                                src="/solutions/enterprise.svg"
                                alt="Enterprise solution"
                                width={240}
                                height={160}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-center text-xl font-semibold text-black mb-4">For enterprise</h3>
                        <p className="text-center text-sm text-gray-600 leading-relaxed max-w-[280px]">
                            Secure collaboration <span className="text-[#1A73E8]">tools for enterprise</span>, with premium AI and enterprise-grade security built in for all the ways work is changing.
                        </p>
                    </div>

                    <div className="flex flex-col items-center group">
                        <div className="relative w-full aspect-[16/9] bg-white rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                            <Image
                                src="/solutions/small-business.svg"
                                alt="Small business solution"
                                width={240}
                                height={160}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-center text-xl font-semibold text-black mb-4">For small business</h3>
                        <p className="text-center text-sm text-gray-600 leading-relaxed max-w-[280px]">
                            Tools for <span className="text-[#1A73E8]">small businesses</span> that help teams and <span className="text-[#1A73E8]">individuals</span> with everyday tasks like scheduling appointments and email marketing.
                        </p>
                    </div>

                    <div className="flex flex-col items-center group">
                        <div className="relative w-full aspect-[16/9] bg-white rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                            <Image
                                src="/solutions/new-business.svg"
                                alt="New business solution"
                                width={240}
                                height={160}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-center text-xl font-semibold text-black mb-4">For new business</h3>
                        <p className="text-center text-sm text-gray-600 leading-relaxed max-w-[280px]">
                            Essentials tools for <span className="text-[#1A73E8]">new businesses</span> and <span className="text-[#1A73E8]">startups</span>, including business email domains, online file sharing and storage, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
