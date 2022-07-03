import { useState, useEffect, useRef } from "react"
import classNames from "classnames/bind"
import TippyHeadLess from '@tippyjs/react/headless'

import StyleScroll from "../../../StyleScoll"
import Account from "../../../Account"
import { ClearIcon, LoadingIcon, SearchIcon } from "../../../Icons";
import styles from './Search.module.css'
import { useDebounced } from "../../../Hook"
import request from "../../../../ultil/request"

const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [haveValueInput, setHaveValueInput] = useState('')
    const [blurInput, setBlurInput] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    const debounced = useDebounced(haveValueInput, 800)

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }

        setLoading(true)

        request.get('https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less', {
            params: {
                q: debounced,
                type: 'less'
            }
        })
            .then(list => {
                setSearchResult(list.data.data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [debounced])


    const handleBlurInput = () => {
        setBlurInput(false)
    }

    const handleChange = (e) => {
        const inputValue = e.target.value
        if (!inputValue.startsWith(' ')) {
            setHaveValueInput(inputValue)
        }
    }

    return (
        <div>
            <TippyHeadLess
                visible={blurInput && searchResult.length > 0}
                interactive
                render={attrs => (
                    <StyleScroll>
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <h3 className={cx('account-title')}>Accounts</h3>
                            {searchResult.map(item =>
                                <Account key={item.id} data={item} />
                            )}
                        </div>
                    </StyleScroll>
                )}
                onClickOutside={handleBlurInput}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={haveValueInput}
                        className={cx('search-input')}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setBlurInput(true)}

                    />
                    {haveValueInput && !loading && (
                        <button onClick={() => {
                            setHaveValueInput('')
                            inputRef.current.focus()
                        }}>
                            <ClearIcon className={cx('clear-icon')} />
                        </button>
                    )}

                    {loading && <LoadingIcon className={cx('load-icon')} />}

                    <div className={cx('search-icon')}>
                        <SearchIcon />
                    </div>
                </div>

            </TippyHeadLess >
        </div>
    )
}

export default Search