import { gql, useQuery } from "@apollo/client"
import { Event } from "./pages/Event"


const GET_LESSONS_QUERY = gql `
  query {
    lessons {
      id
      title
    }
  }
`

function App() {
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])

  // const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  // interface Lesson {
  //   id: string;
  //   title: string;
  // }

  return (
   <div>
     <Event></Event>
   </div>
  )
}

export default App
