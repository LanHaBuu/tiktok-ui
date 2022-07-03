import { useState, useEffect } from 'react'

function useDebounced(value, delay) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const time = setTimeout(() => setDebounced(value), delay)

        return () => clearTimeout(time)
    }, [value])

    return debounced
}
export default useDebounced