import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-white py-0 md:py-10">
            <div className="mx-auto max-w-7xl px-0 md:px-4">
                <div className="relative overflow-hidden bg-[#0234F8] px-6 py-12 md:rounded-2xl md:px-10 md:py-16">
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(90.1% 111.19% at 50% 50%, #0234F8 0%, #011F92 100%)",
                        }}
                    />
                    <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
                        <span className="text-transparent text-[8rem] font-bold opacity-20 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.25)]">
                            NEST NEPAL
                        </span> 
                    </div>

                    <div className="pointer-events-none absolute right-2 top-1/2 block -translate-y-1/2 md:hidden">
                        <span
                            className="text-transparent text-7xl font-bold opacity-20 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.25)]"
                            style={{
                                writingMode: "vertical-rl",
                                textOrientation: "mixed",
                                transform: "rotate(180deg)",
                            }}
                        >
                            NEST NEPAL
                        </span>
                    </div>

                    <div className="relative z-10 flex flex-col gap-10 text-white md:grid md:grid-cols-2">

                        <div className="flex flex-col gap-6">
                            <Image
                                src="/nest-logo.png"
                                alt="Nest Nepal"
                                width={140}
                                height={40}
                                className="object-contain"
                            />

                            <nav className="flex flex-col gap-3 text-sm">
                                <p className="font-semibold">Google Workspace</p>
                                <Link href="#">Why google workspace?</Link>
                                <Link href="#">Pricing</Link>
                                <Link href="#">Testimonials</Link>
                                <Link href="#" className="flex items-center gap-1">
                                    Get A Quotation <span>↗</span>
                                </Link>
                            </nav>
                        </div>

                        <div className="flex flex-col gap-2 text-sm md:items-end md:text-right">
                            <p className="font-semibold">Support</p>
                            <p>Call us: +977 986-160-1174</p>
                            <p>Kupondole, Lalitpur, Nepal</p>
                            <p>support@nestems.com</p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}
