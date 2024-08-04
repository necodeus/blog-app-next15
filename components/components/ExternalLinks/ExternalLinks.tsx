import { SectionTitle } from "@components/components/SectionTitle/SectionTitle";

type Props = {
	links: {
		id: number;
		href: string;
		text: string;
		description: string;
	}[];
};

export const ExternalLinks = ({ links }: Props) => {
	return (
		<>
			<SectionTitle containerClass="p-[30px] component-border-bottom">
				<b>Linki</b> zewnętrzne
			</SectionTitle>
			<div className="external-links component-padding font-jost">
				<ul className="flex flex-col gap-[30px]">
					{links?.map((link) => <li key={link.id}>
						<a
							className="text-[20px] inline-block"
							target="_blank"
							rel="noopener noreferrer nofollow"
							href={link.href}
						>
							<b className="font-medium">{link.text}</b><br />
							<div className="mt-[10px]">{link.description}</div>
						</a>
					</li>)}
				</ul>
			</div>
		</>
	);
};
