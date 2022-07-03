import classNames from 'classnames/bind'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import styles from './MenuScroll.module.css'


const cx = classNames.bind(styles)

function MenuHeader({ title, onBack }) {
    return (
        <div className={cx('menu-header')}>
            <button className={cx('menu-header-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('menu-header-title')}>{title}</h4>
        </div>

    )
}

export default MenuHeader   