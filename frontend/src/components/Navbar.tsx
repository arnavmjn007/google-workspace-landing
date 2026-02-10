import Image from "next/image"
import ValentineOffer from "./ValentineOffer"

export default function Navbar() {
    return (
        <nav className="flex flex-wrap items-center justify-between gap-4 bg-white px-4 py-4 md:px-10 md:py-6">
            <div className="order-1 flex items-center">
                <Image
                    src="/nest-google-partner.svg"
                    alt="Nest Nepal - Google Cloud Partner"
                    width={255}
                    height={46}
                    className="h-auto w-32 md:w-64"
                />
            </div>

            <div className="order-3 w-full md:order-2 md:w-auto md:flex-1 md:flex md:justify-center">
                <ValentineOffer />
            </div>

            <div className="order-2 md:order-3">
                <button className="flex h-10 items-center gap-2 rounded-lg border border-[#25D366] bg-[#E8F9EE] px-4 py-2 transition-all hover:bg-[#d4f3e3] md:h-auto md:px-5 md:py-2.5">
                    <Image
                        src="/whatsapp.png"
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="h-5 w-5 md:h-6 md:w-6"
                    />
                    <span className="font-helvetica text-sm text-[#075E54] md:text-base">
                        Contact Sales
                    </span>
                </button>
            </div>


        </nav >
    )
}
