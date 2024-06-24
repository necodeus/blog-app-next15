'use client';

import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import style from './Scrollbar.module.css';

type Props = {
    children: React.ReactNode;
};

export const Scrollbar = ({ children }: Props) => <SimpleBar className={style.scrollbar} autoHide={false}>{children}</SimpleBar>;
