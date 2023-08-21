import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import styles from './Container.module.css';

const Container = (props: { children: string | number | boolean | ReactElement<string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	);
}

export default Container;