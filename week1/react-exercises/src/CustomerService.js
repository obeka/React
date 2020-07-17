import React from 'react';

import delivery from './img/f-delivery.png';
import coin from './img/coin.png';
import chat from './img/chat.png'

function GuaranteeCard({img, title, desc}) {
    return (
        <div className='services'>
            <img src={img} alt="some service image"/>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

function Guarantee() {
    const datas = [
        {
            img : delivery,
            title : "Free Shipping",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, explicabo!"
        },
        {
            img : coin,
            title : "100% Money back",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, explicabo!"
        },
        {
            img : chat,
            title : "Online support 24/7",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, explicabo!"
        }
    ]
    return (
        <div style={{display: 'flex', justifyContent : 'center'}}>
            {datas.map(data => <GuaranteeCard img={data.img} title={data.title} desc={data.description}/>) }
        </div>
    )
}

export default Guarantee;