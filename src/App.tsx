

import './App.css'
import { useRandomNumber } from './hooks/useRandomNumber';
export const App = () => {
    const  query = useRandomNumber();
    
  return (
    <div className="App App-header">
       { query.isLoading 
        ? (<h2>Cargando ...</h2>)
        :  (<h2>Numero aleatorio: {query.data}</h2>)}
        {
        !query.isLoading && query.isError && (<h3>{ `${query.error}`}</h3>)
        }

        <button  disabled ={query.isFetching} onClick={()=>query.refetch()} >{ query.isFetching?'...':'Nuevo numero' }</button>
    </div>
  )
}


