import styles from './PostNavigation.module.css';
import Link from 'next/link';

export const PostNavigation = ({ items }: any) => {
    return (
        <ul className={styles.contentNav}>
            { items?.map((item: any, i: number) => (
                <li key={i}>
                    <Link href={`#${item.id}`}>{ item.title }</Link>
                </li>
            )) }
        </ul>
    );
};
