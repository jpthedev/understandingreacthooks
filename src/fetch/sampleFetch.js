import React, {useState, useEffect} from 'react'
import axios from 'axios';

function sampleFetch() {
    const [loading, setLoader] = useState(true);
    const [errors, setError] = useState('');
    const [resData, setData] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoader(false);
                setData(response);
                setError('');
            })
            .catch(error => {
                setLoader(false);
                setData({});
                setError('network issue, something went wrong');
            });
    }, [])

    return (
        <div>
            {loading ? 'loading': resData }
            {errors ? errors : ''}
        </div>
    )
}

export default sampleFetch
