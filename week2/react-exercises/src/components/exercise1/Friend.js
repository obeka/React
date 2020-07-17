import React, { useState } from 'react';
import FriendProfile from './FriendProfile';
import Button from './Button';


export default function Friend() {
    const [friend, setFriend] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState({status: false});

    const getFriend = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://www.randomuser.me/api?results=1');
            const data = await response.json();
            setFriend(data.results[0]);
            setLoading(false);
        } catch (error) {
            setError({status : true, message: error.message});
            setLoading(false);
        }
    }

    return (
        <div className='container mt-3 w-25'>
            <Button getFriend={getFriend} />
            {isLoading && <p>Loading ...</p>}
            {!hasError.status && friend.name && <FriendProfile friend={friend} />}
            {hasError.status && <p className='text-danger mt-3'>Opps.. {hasError.message}</p>}
        </div>
    )
}
