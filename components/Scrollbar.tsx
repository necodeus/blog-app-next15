'use client';

import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import styles from './Scrollbar.module.css';

type Props = {
    children: React.ReactNode;
};

export const Scrollbar = ({ children }: Props) => <SimpleBar autoHide={false} className={styles.scrollbar}>{children}</SimpleBar>;
