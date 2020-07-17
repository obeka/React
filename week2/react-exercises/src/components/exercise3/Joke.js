import React from 'react'

export default function Joke({joke}) {
    const {setup,punchline,id} = joke;
    return (
        <div key={id}>
            <p className='display-4 text-alert'>{setup}</p>
            <p className='display-4 text-primary'>{punchline}</p>
        </div>
    )
}
