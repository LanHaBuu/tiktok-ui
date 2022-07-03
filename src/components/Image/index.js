import classNames from 'classnames'
import { forwardRef, useState } from 'react'
import images from '../../assests/image'
import styles from './Image.module.css'

function Image({ src, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('')
    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            ref={ref}
            src={fallback || src}
            onError={() => setFallback(customFallback)}
        />
    )
}
export default forwardRef(Image)