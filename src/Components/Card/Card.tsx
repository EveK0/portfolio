import { ReactNode } from 'react';
import styles from './Card.module.css'
interface CardProps {
	title?: string;
	backgroundColor: string;
	icon: ReactNode;
	description?: string;
	link: string;
}

const Card = (props: CardProps) => {
	return (
		<div className={styles.cardContainer}
			style={{ backgroundColor: props.backgroundColor }}>
			<a href={props.link} target="_blank">
				<div className={styles.icons}>{props.icon}</div>
				<h2 className={styles.title}>{props.title}</h2>
				<p>{props.description}</p>
			</a>
		</div>
	)
}
export default Card;