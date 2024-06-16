import { ContentLink } from '@components/ContentLink';

import styles from './ContentNav.module.css';

export const ContentNav = ({ items }: any) => {
    return (
        <ul className={styles.contentNav}>
            { items?.map((item: any, i: number) => (
                <li key={i}>
                    <ContentLink id={item.id}>{ item.title }</ContentLink>
                </li>
            )) }
        </ul>
    );
};
