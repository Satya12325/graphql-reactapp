import React from 'react'
import { useCharacter } from '../Hooks/useCharacters'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    const { id } = useParams();
    console.log(id)
   const {data,loading,error }= useCharacter(id);
   
console.log({data:data,error:error,loading:loading});
if(loading)return <h1>...loading</h1>
  return (
    <div>
        <div className='detailsContainer'>
            <img src={data.character.image}/>
            <h3>{data.character.name}</h3>
            {
                data.character.episode.map((item)=><div>
                <li>{item.name}</li>
            </div>)
            }
            
        </div>
    </div>
  )
}
