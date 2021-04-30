import React from 'react';
import SuperHeroesHdr from './SuperHeroesHdr.jsx';
import SuperHeroesFtr from './SuperHeroesFtr.jsx';
import SuperHero from './SuperHero.jsx';
import superheroinfo from './SuperHeroInfo.js';


function SuperHeroList() {
   const details= superheroinfo.map(info =>{
        return <SuperHero name={info.name} imgUrl={info.imgUrl} powers={info.powers}/>
    })
    return (
        <div>                      
                <SuperHeroesHdr/>
                {details}
                <SuperHeroesFtr/>
            
        </div>
    );
}

export default SuperHeroList;