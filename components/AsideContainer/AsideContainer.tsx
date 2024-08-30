import clsx from 'clsx';
import styles from './AsideContainer.module.css';

export const AsideContainer = ({ children, className }: any) => {
	const classes = clsx(styles.container, className);

	return (
		<div className={classes}>{children}</div>
	);
};
