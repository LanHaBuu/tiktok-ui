import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import { useState } from 'react'
import StyleScroll from '../StyleScoll'
import styles from './MenuScroll.module.css'
import Button from '../Button'
import MenuHeader from './MenuHeader'

const cx = classNames.bind(styles)

function MenuScroll({ children, props = [], hideOnClick = false }) {

    const [history, setHistory] = useState([{ data: props }])
    const currentPage = history[history.length - 1]


    return (
        <Tippy
            offset={[12, 2]}
            interactive
            delay={[0, 600]}
            placement={'bottom-end'}
            hideOnClick={hideOnClick}
            render={attrs => (
                <StyleScroll className={cx('menu-wrapper')}>
                    <div className={cx('menu-result')} tabIndex="-1" {...attrs}>
                        {history.length > 1 && <MenuHeader title={'Language'} onBack={() => {
                            setHistory(prev => prev.slice(0, 1))
                        }} />}
                        {currentPage.data.map((item, index) => {
                            const isParent = !!item.children
                            const classes = cx('button-menu', {
                                separate: item.separate
                            })
                            return <Button
                                key={index}
                                leftIcon={item.icon}
                                className={classes}
                                to={item.to}
                                onClick={() => {
                                    if (isParent) {
                                        setHistory(prev => [...prev, item.children]);
                                    }
                                }}
                            >{item.title}
                            </Button>
                        })}
                    </div>
                </StyleScroll>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    )
}

export default MenuScroll