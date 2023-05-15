import React from 'react'
import { useQuery,gql } from '@apollo/client'
import Cards from '../Components/Cards'
import { useCharacters } from '../Hooks/UseCharacter'

export default function Home() {
    const {error,loading,data} = useCharacters()
    if (loading) return <h1>...loading</h1>
  return (
    <div className='home'>
{
    data.characters.results.map((data,i)=><Cards
    key={data.id}
        {...data}
        i={i}
    />)
}
    <Cards/>
    </div>
  )
}
