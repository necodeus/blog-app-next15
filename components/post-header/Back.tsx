import Link from 'next/link';

export const Back = () => {
    return (
        <div className="transition-colors hover:scale-[1.02] bg-transparent hover:bg-white border-[#000] hover:border-[#fff] text-[#000] hover:text-[#000]">
            <Link
                href="/"
                className="m-[2px] scale-1 tracking-[4px] text-[11px] font-bold inline-block py-[15px] px-[20px] border-2 border-solid border-[#000] uppercase"
            >Wstecz</Link>
        </div>
    );
};
