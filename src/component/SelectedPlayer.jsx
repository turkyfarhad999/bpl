import React from 'react';
import imagess from '../assets/Rectangle2.png'
import { Trash2 } from 'lucide-react';
const SelectedPlayer = ({pl,selectedPlayer,setSelectedPlayer,coin,setCoin}) => {
    const deletePlayer=(pl)=>{
        const filterPlayer=selectedPlayer.filter(newpl=> newpl.name!==pl.name

        )
        setSelectedPlayer(filterPlayer);
        setCoin(coin+pl.price)

    }
    return (
        <div className='flex items-center gap-2 space-y-2'>
           <img src={imagess} alt="" className='max-w-[10%]'/>
           <div>
            <h1 className='text-2xl font-semibold'>{pl.name}</h1>
            <h1>{pl.batting_style}</h1>
            </div> 
            <button onClick={()=>deletePlayer(pl)} className='btn right-1s'> <Trash2></Trash2></button>
        </div>
    );
};

export default SelectedPlayer;