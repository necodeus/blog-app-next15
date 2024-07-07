import Link from "next/link";

type Color = "yellow" | "white" | "blured";

type ButtonProps = {
    link?: string;
    color: Color;
    text: string;
    extraClasses?: string;
};

export const Button = ({ link, color, text, extraClasses }: ButtonProps) => {
    if (color === 'blured') {
        return (
            <div className="transition-colors hover:scale-[1.02] bg-[rgba(255,255,255,0.25)] backdrop-filter backdrop-blur-[2px] hover:bg-[rgba(255,255,255,0.5)] border-[#000] hover:border-[#fff] text-[#000] hover:text-[#000]">
                {
                    link ? <Link href={link} className="m-[2px] scale-1 tracking-[4px] text-[11px] font-bold inline-block py-[15px] px-[20px] border-2 border-solid border-[#000] uppercase">{text}</Link>
                    : <button className="m-[2px] scale-1 tracking-[4px] text-[11px] font-bold inline-block py-[15px] px-[20px] border-2 border-solid border-[#000] uppercase">{text}</button>
                }
            </div>
        )
    }

    if (color === "yellow") {
        return (
            <div className={`transition-colors hover:scale-[1.02] bg-[#fde53a] hover:bg-[#fde53a] border-[#000000] hover:border-[#ffffff] text-[#000000] hover:text-[#000000] ` + extraClasses}>
                {
                    link ? <Link href={link} className="border-[2px] border-solid border-[black] m-[2px] tracking-[4px] text-[11px] font-bold inline-block py-[15px] px-[20px] uppercase">{text}</Link>
                    : <button className="border-[2px] border-solid border-[black] m-[2px] tracking-[4px] text-[11px] font-bold inline-block py-[15px] px-[20px] uppercase">{text}</button>
                }
            </div>
        );
    }

    return (
        <div className={`transition-colors hover:scale-[1.02] bg-[#ffffff] hover:bg-[#ffffff] border-[#000000] hover:border-[#ffffff] text-[#000000] hover:text-[#000000] ` + extraClasses}>
            {
                link ? <Link href={link} className="border-[2px] border-solid border-[black] m-[2px] tracking-[4px] text-[11px] font-bold inline-block py-[15px] px-[20px] uppercase">{text}</Link>
                : <button className="border-[2px] border-solid border-[black] m-[2px] tracking-[4px] text-[11px] font-bold inline-block py-[15px] px-[20px] uppercase">{text}</button>
            }
        </div>
    );
};
