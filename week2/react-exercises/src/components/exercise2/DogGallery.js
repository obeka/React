import React, {useState} from 'react'
import DogPhoto from './DogPhoto';
import Button from './Button'

export default function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState({status: false, message:''})

    const getDogPhoto = async () => {
        setLoading(true);
        setError(false);
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            if(response.ok) {
                const data = await response.json();
                setDogPhotos([...dogPhotos, data.message]);
                setLoading(false);
            } else {
                throw new Error('Not found')
            }
            
        } catch (error) {
            setError({status: true, message: error.message});
            setLoading(false);
        }
    }

    return (
        <div className='container mt-4'>
            <Button getDogPhoto={getDogPhoto}/>
            {isLoading && <p className='text-muted mt-3'>Loading ...</p>}
            {!hasError.status && <DogPhoto dogPhotos={dogPhotos} />}
            {hasError.status && <p className='text-danger display-3'>{hasError.message}</p>}
        </div>
    )
}
