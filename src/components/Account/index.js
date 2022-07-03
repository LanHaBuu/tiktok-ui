import classNames from 'classnames/bind'
import { Link } from "react-router-dom";

import { TickIcon } from '../Icons'
import styles from './Account.module.css'

const cx = classNames.bind(styles)

function Account({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('user')}>
            <img className={cx('avatar')} src={data.avatar} alt='avatar' />
            <div className={cx('user-info')}>
                <h4 className={cx('user-name')}>{data.nickname}</h4>
                <p className={cx('name')}>{data.full_name}</p>
            </div>
            <div className={cx('tick-icon')}>
                {data.tick && <TickIcon />}
            </div>
        </Link>
    )
}

export default Account