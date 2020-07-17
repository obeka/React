import React from 'react'

export default function DogPhoto({dogPhotos}) {
    return (
        <>
            {dogPhotos.length > 0 ? dogPhotos.map((dog,index) => <img src={dog} alt="A dog" key={index} width='200px'/>) : <p className='text-muted mt-3'>Get your first dog by clicking the button!</p>}
        </>
    )
}
