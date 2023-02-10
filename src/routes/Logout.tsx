import { useAuth } from '../context/useAuth'
import './form.sass'

function Logout() {
  const auth = useAuth()

  return (
    <form
      className='form'
      >
      <h2 className='form-title'>Log Out</h2>
      <button
        className='form-send'
        onClick={auth.logout}
        >
        Salir de la App
      </button>
    </form>
  )
}

export default Logout