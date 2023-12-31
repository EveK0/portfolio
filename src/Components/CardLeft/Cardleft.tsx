import { ReactNode } from 'react';
import styles from './Cardleft.module.css'
import { useRef } from 'react'
import { useHover } from 'usehooks-ts'

interface CardProps {
	backgroundColor?: string;
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
			backgroundColor: isHover ? props.hoverBackground : 'var(--primary)',
			transition: 'all 0.2s ease-in-out'
		}}
			title={props.title}
		>
			<span className={styles.icons} style={{ color: isHover ? props.hoverColor : 'var(--text)', }} ref={hoverRef}>{props.icon}</span>
		</div>
	)
}
export default CardLeft;