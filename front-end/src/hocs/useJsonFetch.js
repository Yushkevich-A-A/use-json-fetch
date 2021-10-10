import {useState, useEffect} from 'react'

function useJsonFetch(url, opts) {
    const [data, setData] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then( response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json();
            })
            .then( data => setData('Данные получены') )
            .catch( (e) => {
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [url, opts])
    return [{data, loading, error}]
}

export default useJsonFetch