import React, { useState, useEffect } from 'react';
import Joke from './Joke'

export default function RandomJoke() {

    const [joke, setJoke] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState({status:false, message: ''});
    const [buttonClickedCount, setButtonClickedCount] = useState(0);
    
    useEffect(() => {
        const getJoke = async() => {
            setLoading(true);
            try {
                const response = await fetch('https://official-joke-api.appspot.com/random_joke');
                if (response.ok) {
                    const data = await response.json();
                    setJoke(data);
                    setLoading(false)
                } else {
                    throw new Error('Not found - 404')
                }
            } catch (error) {
                setError({status:true , message: error.message});
                setLoading(false)
            }
        }
       getJoke();
    }, [buttonClickedCount])

    return (
        <div>
            <button className='btn btn-danger mt-3' onClick={() => setButtonClickedCount(buttonClickedCount+1)}>Click here for a joke &#128514;</button>
            {isLoading && <p className='text-muted'>Loading ...</p>}
            {!hasError.status &&  <Joke joke={joke} />}
            {hasError.status && <p className='text-danger'>{hasError.message}</p>}
        </div>
    )
}
