import React from 'react'

export default function Button({getDogPhoto}) {
    return (
        <div>
                <button className='btn btn-success' onClick={getDogPhoto}>Get a dog!</button>
        </div>
    )
}
