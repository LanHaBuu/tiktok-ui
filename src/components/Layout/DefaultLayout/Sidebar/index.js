import classNames from 'classnames/bind'
import styles from './Sidebar.module.css'

const cx = classNames.bind(styles)

function Sidebar() {
    return <h2 className={cx('sidebar')}>Sidebar</h2>
}

export default Sidebar