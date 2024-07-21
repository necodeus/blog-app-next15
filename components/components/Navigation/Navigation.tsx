import Link from "next/link";
import Logo from "../Logo/Logo";

export const Navigation = () => {
	return (
        <div className="component-border-bottom flex font-jost text-[16px] h-[50px]" >
            <div style={{
                display: 'flex',
                gap: '30px',
                alignItems: 'center',
                margin: '0 30px',
            }}>
                <Logo className="mr-[20px]" height={25} />
                <Link className="font-medium" href="/">Artykuły</Link>
                <Link className="" href="/autorzy">Autorzy</Link>
                <Link className="" href="/projekty">Projekty</Link>
                <Link className="" href="/kontakt">Kontakt</Link>
            </div>
        </div>
	);
};
