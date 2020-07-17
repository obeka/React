import React from 'react'

export default function FriendProfile({friend}) {
    return (
        <div className='mt-3'>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item list-group-item-primary'>Name : {friend.name.title} {friend.name.first} {friend.name.last}</li>
                <li className='list-group-item'>Address: {friend.location.city}, {friend.location.country}</li>
                <li className='list-group-item'>Email : {friend.email}</li>
                <li className='list-group-item'>Tel : {friend.phone}</li>
            </ul>
        </div>
    )
}
