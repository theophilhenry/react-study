

import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()

        fetch(url, { signal: abortController.signal })
            .then(res => {
                if (!res.ok) throw Error('Error')
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(e => {
                // Don't update state because abort means cancelled useEffect (unmounted component)
                if (e.name !== 'AbortError'){
                    setIsPending(false)
                    setError(e.message)
                } else console.log('Fetch Aborted')
            })

        return () => abortController.abort()
    }, [url])
    return { data, isPending, error }
}

export default useFetch
