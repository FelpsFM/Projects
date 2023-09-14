import styles from "../FormPages/form.module.scss"

function Input({ label, id, type, placeholder, value, setValue}) {
    return (
        <div className={styles.div__input}>
            <label htmlFor={id}>{label}</label>
            <input type={type} className={styles.inputs} placeholder={placeholder} value={value} name={id} id={id} onChange={(event) => setValue(event.target.value)} required/>
        </div>
    )
} 

export default Input;