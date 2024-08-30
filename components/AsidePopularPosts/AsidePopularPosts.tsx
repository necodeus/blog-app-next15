
import Link from "next/link"

import styles from './AsidePopularPosts.module.css';

export const AsidePopularPosts = ({ posts }: any) => {
	return (
		<div className="p-[30px] font-jost relative component-border-bottom">
			<ul>
				{posts?.map((post: any) => {
					return <li className={styles.list} key={post.id}>
						<Link className="text-[20px] indent-[-20px] ml-[20px] inline-block p-[5px_0]" href={post.path}>{ post.title }</Link>
					</li>
				})}
			</ul>
		</div>
	);
};
