
import Link from "next/link"

import { SectionTitle } from "@components/components/SectionTitle/SectionTitle"

import styles from './OtherPostsSection.module.css';

export const OtherPostsSection = ({ posts }: any) => {
	return (
		<>
			<SectionTitle containerClass="p-[30px] component-border-bottom">
				<b>Inne</b> wpisy
			</SectionTitle>
			<div className="component-padding font-jost relative">
				<ul>
					{posts?.map((post: any) => {
						return <li className={styles.list} key={post.id}>
							<Link className="text-[20px] indent-[-20px] ml-[20px] inline-block p-[5px_0]" href={post.path}>{ post.title }</Link>
						</li>
					})}
				</ul>
			</div>
		</>
	);
};
