import classNames from "classnames/bind"
import { Link } from "react-router-dom"

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faEllipsisVertical, faLanguage, faCircleQuestion, faKeyboard, faUser, faBitcoinSign, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"


import styles from './Header.module.css'
import logo from '../../../../assests/image/logo.png'

import Button from "../../../Button"
import MenuScroll from "../../../MenuScroll"
import { InboxIcon, MessageIcon } from "../../../Icons"
import Image from "../../../Image"
import Search from "../Search"
import routesConfig from "../../../../config/routes"


const cx = classNames.bind(styles)
const MenuList = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    },

]

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile'
    },
    {
        icon: <FontAwesomeIcon icon={faBitcoinSign} />,
        title: 'Get coin',
        to: '/coin'
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting'
    },
    ...MenuList,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        to: '/',
        separate: true
    }
]


function Header() {
    const currentUser = true

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={logo} alt='tiktok' />
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('user-current')}>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                <span className={cx('upload-text')}>Upload</span>
                            </Button>
                            <Tippy className={cx('tippy')} animation='scale' content='Message' placement="bottom">
                                <button className={cx('message')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy animation='scale' content='Inbox' placement="bottom">
                                <button className={cx('inbox')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>

                        </div>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                <span className={cx('upload-text')}>Upload</span>
                            </Button>
                            <Button primary>Log in</Button>
                        </>)}

                    <MenuScroll props={currentUser ? userMenu : MenuList}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/645c4284e7c4e88654d1ced58b493f78~c5_100x100.jpeg?x-expires=1656126000&x-signature=cJMxz26L5rA1XgZ6yOlxtqWzCwQ%3D"
                                alt="user-avatar"
                            // fallback='https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                            />
                        ) : (
                            <div className={cx('menu-icon')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        )}

                    </MenuScroll>



                </div>
            </div>
        </div>
    )
}

export default Header