This project I use Apollo clint to fetch the data from graphql Api 

Api - https://rickandmortyapi.com/graphql

get tha data Details :- {
  character(id: 1) {
    name
    id
    image
    species
    episode{
      name
      episode
    }
  }
}


get all character :- 
const GET_CHARACTER = gql`
    query {
  characters{
     results {
    id
    name
    image
  	gender
  }
  }
 
}
`
