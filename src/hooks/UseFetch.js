import {useState, useEffect} from 'react';

const UseFetch = (initialUrl) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
        setIsLoading(true);

        // check if we have an url for the initial render
        if(!url) return;

        fetch(url)
            .then((response) => response.json())
                    .then((data) => {
                        setIsLoading(false);
                        setData(data);
                    })
                    .catch((error) => {
                        setIsLoading(false);
                        setError(error);
                    });
            }, [url]);

    return { data, error, isLoading, setUrl };
};

export default UseFetch;
