import { SectionTitle } from "@components/SectionTitle";

export const ExternalLinks = ({ links }: any) => {
	return (
		<div className="external-links component-padding font-jost">
			<SectionTitle><b>Linki</b> zewnętrzne</SectionTitle>

			<ul className="flex flex-col">
				<li>
					<a
						className="text-[20px] inline-block"
						target="_blank"
						rel="noopener noreferrer nofollow"
						href="https://github.com/necodeus/blog-nuxt"
					>
						<b className="font-medium">github.com/necodeus/blog-nuxt</b><br />
						<div className="mt-[10px]">Kod źródłowy tej strony</div>
					</a>
				</li>
			</ul>
		</div>
	);
};
