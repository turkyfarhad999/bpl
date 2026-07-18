import React from 'react';

import SelectedPlayer from './SelectedPlayer';

const Selected = ({selectedPlayer,setSelectedPlayer,coin,setCoin}) => {
    console.log(selectedPlayer)
    return (
        <div>
            <div>
               {selectedPlayer.length===0?
               <div className='flex justify-center items-center h-80'>
                <h1 className='font-bold text-3xl'>No Player added </h1>
                </div>
               
               :selectedPlayer.map(pl=>< SelectedPlayer setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} pl={pl} coin={coin} setCoin={setCoin} key={pl.id}></SelectedPlayer>)}
            </div>
        </div>
    );
};

export default Selected;