export default function ValentineOffer() {
    return (
        <div className="relative flex flex-col items-center pt-4 md:pt-5"> 
            <div className="absolute top-0 md:-top-1 left-1/2 -translate-x-1/2 z-10 
                            font-magnolia text-[18px] mid:text-[28px] tracking-[0.03em] leading-none 
                            text-[#F25277] whitespace-nowrap">
                Valentine’s offer
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
                <TimerUnit value="03" label="Days" />
                <Separator />
                <TimerUnit value="14" label="Hrs" />
                <Separator />
                <TimerUnit value="40" label="Min" />
                <Separator />
                <TimerUnit value="35" label="Sec" />
            </div>
        </div>
    );
}
function TimerUnit({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="font-helvetica text-[40.21px] md:text-[29px] font-bold text-[#0061FF] leading-none tracking-[0.03em]">
                {value}
            </span>
            <span className="font-helvetica text-[16.08px] md:text-[11.62px] font-bold text-[#1D1D1F] leading-none tracking-[0.03em] mt-1">
                {label}
            </span>
        </div>
    );
}

function Separator() {
    return (
        <span className="font-helvetica text-[40.21px] font-bold text-[#0061FF] leading-none mb-4">
            :
        </span>
    );
}