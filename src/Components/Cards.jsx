import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cards(props) {
  const nevigate = useNavigate()

    const {name,gender,image,i,id} = props
  return (
    <div className='mainContainer'  onClick={()=>
      nevigate(id)
    }>
    {i+1}
    <div>

        <img src={image ? image : "https://rickandmortyapi.com/api/character/avatar/1.jpeg"} alt=""/>
    <div className='name'>
        <h3>{name?name:"Test"}</h3><p>{gender?gender:"Test"}</p>
    </div>
    </div>

    </div>
  )
}
