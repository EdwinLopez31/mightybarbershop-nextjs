import styles from '../../styles/CustomInput.module.scss'

const CustomInput = props => {
	return (
		<div className={`${styles.inputContainer}`}>
			<input
				{...props}
				className={`${styles.inputField}`}
				type={props.email}
				name={props.name}
				id={props.id}
				placeholder={props.placeholder}
			/>
			<label className={`${styles.inputLabel} `} htmlFor={props.name}>
				{props.placeholder}
			</label>
		</div>
	)
}

export default CustomInput
