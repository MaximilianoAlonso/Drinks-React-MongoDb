
import { Link } from 'react-router-dom'
import { SearchForms } from '../../components/SearchForms'
import useUser from '../../hooks/useUser'

export const Home = () => {
  const {user, logout} = useUser()

  return (
    <>
   {/*   <SearchForms/> */}

    <h1>Home</h1>
    <hr />
      {user ? 
      <> 
      <h2> Hola! {user}</h2> 
      <button   onClick={()=> logout}>Salir</button>
      </>
      : <Link to={'/login'}>Ingresá</Link>}



    </>

  )
}

