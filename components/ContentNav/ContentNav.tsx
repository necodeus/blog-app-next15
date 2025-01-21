import clsx from 'clsx';
import styles from './ContentNav.module.css';
import Link from 'next/link';

export const ContentNav = ({ items }: any) => {
    const classes = clsx(styles.contentNav, 'component-border-bottom');

    return (
        <ul className={classes}>
            { items?.map((item: any, i: number) => (
                <li key={i}>
                    <Link href={`#${item.id}`}>{ item.title }</Link>
                </li>
            )) }
        </ul>
    );
};
