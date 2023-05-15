
import { useQuery,gql } from '@apollo/client'



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

export const useCharacters = () => {
    const {error,data,loading} = useQuery(GET_CHARACTER);

    return {
        error,data,loading
    }
}