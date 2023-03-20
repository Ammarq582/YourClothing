import './button.styles.scss'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return(
        <button className={`button ${buttonType}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;