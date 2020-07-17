import React from 'react'

export default function Button({getFriend}) {
    return (
        <div>
            <button className='btn btn-primary' onClick={getFriend}>Add friend</button>
        </div>
    )
}
