import FormInputString from '../components/FormInputString'
import { useAuth } from '../context/useAuth'
import useInputString from '../hooks/useInputString'

import './form.sass'

function Login() {
  const auth = useAuth()
  
  const username = useInputString(/^[a-z0-9_]{4,32}$/)
  const password = useInputString(/^.{4,}$/)

  const login = (e:{preventDefault:()=>void}) => {
    e.preventDefault()
    if(!auth?.login(username.value, password.value)) {
      username.thrower()
      password.thrower()
    }
  }

  return (
    <form
      className='form'
      onSubmit={login}
      >
      <h2 className='form-title'>LogIn</h2>
      <div className='form-inputs'>
        <FormInputString
          type='text'
          name='Username'
          data={username}
          />
        <FormInputString
          type='password'
          name='Password'
          data={password}
          />
      </div>
      <button
        className='form-send'
        disabled={!username.isOk || !password.isOk}
        >
        Ingresar
      </button>
    </form>
  )
}

export default Login