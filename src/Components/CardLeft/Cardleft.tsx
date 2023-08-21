import { ReactNode } from 'react';
import styles from './Cardleft.module.css'
import { useRef } from 'react'
import { useHover } from 'usehooks-ts'

interface CardProps {
	backgroundColor: string;
	icon: ReactNode;
	hoverBackground: string;
	hoverColor: string;
	title: string;
}

const CardLeft = (props: CardProps) => {
	const hoverRef = useRef(null)
	const isHover = useHover(hoverRef)
	return (
		<div className={styles.cardContainer} ref={hoverRef} style={{
			backgroundColor: isHover ? props.hoverBackground : '#0f3d1e ',
			transition: 'all 0.5s ease-in-out'
		}}
			title={props.title}
		>
			<span className={styles.icons} style={{ color: isHover ? props.hoverColor : '#ebfaef', }} ref={hoverRef}>{props.icon}</span>
		</div>
	)
}
export default CardLeft;