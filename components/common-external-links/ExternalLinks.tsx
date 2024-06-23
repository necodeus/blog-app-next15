import { SectionTitle } from "@components/SectionTitle";

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
		<div className="external-links component-padding font-jost">
			<SectionTitle><b>Linki</b> zewnętrzne</SectionTitle>

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
	);
};
