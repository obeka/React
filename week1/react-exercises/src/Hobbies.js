import React from 'react'

function Hobbies({hobby}) {
    return (
        <div>
            <li>{hobby}</li>
        </div>
    )
}

function HobbyList() {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
    return (
        <div>
            <ol>
                {hobbies.map((hobby,index) => <Hobbies hobby={hobby} key={index}/>)}
           </ol>
        </div>
    )
}

export default HobbyList;
