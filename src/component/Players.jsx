import React, { use, useState } from 'react';
import Player from './Player';
import Selected from './Selected';

const Players = ({playerdata,coin,setCoin,setSelectedPlayer,selectedPlayer}) => {
    const data=use(playerdata)
    console.log(playerdata)
    
    const [ selectedata,setSelectedata]=useState("available")
    const avail=()=>{
        if(selectedata==="available"){
            setSelectedata()
        }
        else{
           selectedata==="available" 
        }
    }
   
    return (
        <div>
            <div className='flex justify-between items-center space-y-2 max-w-[80%] mx-auto'>
                <h1 className={`font-bold text-2xl`}>{selectedata==="available"?"Available Players":`Selected Players ${selectedPlayer.length}/${data.length}`}</h1>
                <div>
                    <button onClick={()=>{setSelectedata("available")}} className={`btn rounded-r-none ${selectedata==="available"?"bg-amber-300":""}`}>Available</button>
                    <button onClick={()=>{setSelectedata("selected")}} className={`btn rounded-r-none ${selectedata==="selected"?"bg-amber-300":""}`}>Selected</button>
                </div>
            </div>
            {selectedata==="available"?
            (<div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80%] mx-auto gap-3'>
            {data.map(i=><Player key={i.id} i={i} coin={coin} setCoin={setCoin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}></Player>)}
        </div>):
        (
           <div  className=' max-w-[80%] mx-auto gap-3'>
           <Selected selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coin={coin} setCoin={setCoin} ></Selected>
        </div>

        )
        }
        </div>
    );
};

export default Players;
