import './form-input.styles.scss'

const FormInput = ({value, label, ...otherProps}) => {
    return(
        <div className="form-input-container">
            <input {...otherProps}/>
            
            <label className={value ? 'shrink' : ''}>
                {label}
            </label>
        </div>
    )
}

export default FormInput;