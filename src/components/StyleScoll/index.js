import classNames from 'classnames/bind'
import styles from './StyleScroll.module.css'

const cx = classNames.bind(styles)

function StyleScroll({ children, className }) {
    return (
        <div className={cx('wrapper', className)}>
            {children}
        </div>
    )
}

export default StyleScroll