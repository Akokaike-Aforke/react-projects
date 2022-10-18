import { Tour } from "./Tour"
import { useEffect, useState } from 'react'
import data from './Data'
export const Tours = () =>{
    const url ="https://course-api.com/react-tours-project"
    const[tours, setTours] = useState([])
    const total = tours.length;
    const deleteItem = (id) =>{
        const newItem = tours.filter(tour => tour.id !== id);
        setTours(newItem)
    }
    // const refresh = () => {
    //     setTours((tour) => {tour})
    // }
    const[isRefresh, setIsRefresh] = useState(true);
    const[isLoading, setIsLoading] = useState(true);
    const refresh = () => {
        setIsLoading(true);
        setIsRefresh(!isRefresh)
    }

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(tour => {
            setTours(tour)
            setIsLoading(false)
        })
        .catch(error => console.log(error))
    }, [isRefresh])
    const tourElement = tours.map((tour) => 
    <Tour {...tour} 
    key={tour.id} 
    del={() => deleteItem(tour.id)}  
    />)
    if(isLoading)
{
  return (
    <div>
      <h2 className="loading">Loading...</h2>
    </div>
  )
}
    return(
        <main className="mainPage">
           <div className="tours">
                {total > 0 &&<h1 className="heading"><span className="firstLetter">O</span>u<span className="underLine">r <span className="firstLetter">T</span>ou</span>rs</h1>}
                {tourElement}
                
                {total === 0 &&  <div className="noTours"><h1 className="noToursHeading">No Tours Left</h1><button onClick={refresh}>Refresh</button></div>}
           </div>
            
        </main>
    )
}