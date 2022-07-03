import classNames from 'classnames/bind'
import styles from './Button.module.css'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Button({ to, href, children, primary = false, text = false, outline = false, leftIcon = false, rightIcon = false, className, type, onClick }) {
    let Component = 'button'
    const props = { onClick }

    if (href) {
        Component = 'a'
        props.href = href
    } else if (to) {
        Component = Link
        props.to = to
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        text,
        outline,
        leftIcon,
        rightIcon,
        [type]: type
    })

    return (
        <Component {...props} className={classes}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    )
}

export default Button