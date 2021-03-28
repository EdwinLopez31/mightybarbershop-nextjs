import styles from '../../styles/Rates.module.scss'
import Image from 'next/image'




const RatesCard = props => {

	console.log(props.img)
	return (
		<div className={styles.flipCard}>
			<div className={styles.flipCardInner}>
				<div className={styles.flipCardFront}>
					<div className={`${props.img}`}  />
					<h4 className="absolute inset-x-0 -mt-8 text-3xl font-light">
						<span className={`${props.className} px-2 py-2 uppercase`}>
							{props.cardTitle}
						</span>
					</h4>
					<div className="flex flex-col items-center justify-center my-8 text-sm text-gray-400 lg:my-6 lg:text-base gap-y-1">
            {props.children}
          </div>
				</div>
				<div className={`${props.className} ${styles.flipCardBack}`}>{props.packagePrice}</div>
			</div>
		</div>
	)
}

export default RatesCard
