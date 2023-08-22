import { ReactNode } from 'react';
import styles from './Card.module.css'
import { useState } from 'react';
interface CardProps {
	title?: string;
	backgroundColor: string;
	icon: ReactNode;
	description?: string;
	link: string;
	tech: string;
}


const Card = (props: CardProps) => {
	const [isHovering, setIsHovering] = useState(false);
	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};
	return (
		<div className={styles.cardContainer}
			style={{ backgroundColor: props.backgroundColor }} onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}>
			<a href={props.link} target="_blank">
				<div className={styles.icons}>{props.icon}</div>
				<h2 className={styles.title}>{props.title}</h2>
				<div className={isHovering ? styles.content : styles.hidden_content}>
					<span className={styles.tech}>{props.tech}</span>
					<p>{props.description}</p>
				</div>
			</a>
		</div>
	)
}
export default Card;