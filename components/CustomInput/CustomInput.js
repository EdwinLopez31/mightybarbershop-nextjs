import styles from '../../styles/CustomInput.module.scss'

const CustomInput = props => {
	return (
		<div className={`${styles.inputContainer}`}>
			<input
				{...props}
				className={`${styles.inputField}`}

			/>
			<label className={`${styles.inputLabel} `} htmlFor={props.name}>
				{props.placeholder}
			</label>
		</div>
	)
}

export default CustomInput
