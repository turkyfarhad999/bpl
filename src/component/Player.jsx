import React, { useState } from 'react';
import image from '../assets/Rectangle2.png'
import { Flag, User } from 'lucide-react';
import { toast } from 'react-toastify';
// "id": 5,
//     "name": "Steve Smith",
//     "image": "https://api.example.com/players/smith.jpg",
//     "country": "Australia",
//     "role": "Batter",
//     "rating": 4.9,
//     "batting_style": "Right-Hand-Bat",
//     "price": 1250000,
//     "currency": "$"
const Player = ({i,coin,setCoin,selectedPlayer,setSelectedPlayer}) => {
    const [ selectbtn , setSelectbtn]=useState(false);
  
    const clickbtn = () => {
    if (coin - i.price >= 0) {
        setCoin(coin - i.price);
       
        setSelectbtn(true);
        console.log(i)
         setSelectedPlayer([...selectedPlayer, i]);
        
        toast.success(`${i.name} added to your team!`);
    } else {
        
        toast(`Not enough coins to buy ${i.name}`);
    }
};
    return (
        <div>
            <div className='p-2 shadow-2xl rounded-2xl space-y-2 '>
                <img src={image} alt="" className='mx-auto'/>
                <h1 className='flex gap-1 items-center font-bold text-xl '><User></User>{i.name}</h1>
                <div className='flex justify-between items-center'>
                    <h1 className='flex gap-1 items-center font-bold text-xl '><Flag></Flag>{i.country}</h1>
                    <button className='btn'>{i.role}</button>
                </div>
                <h1 className='font-semibold'>rating : {i.rating}</h1>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold'>{i.batting_style}</h1>
                    <h1>{i.batting_style}</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold'>price : $ {i.price}</h1>
                    <button disabled={selectbtn===true?true:false} onClick={()=>clickbtn()} className='btn'>{selectbtn? "Selected":"Choose Player"}</button>
                </div>

            </div>
        </div>
    );
};

export default Player;