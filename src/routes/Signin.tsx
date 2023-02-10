import FormInputString from '../components/FormInputString'
import useInputString from '../hooks/useInputString'
import { useAuth } from './../context/useAuth'

import './form.sass'

function Signin() {
  const auth = useAuth()

  const username = useInputString(/^[a-z0-9_]{4,32}$/)
  const display = useInputString(/^.{4,}$/)
  const password = useInputString(/^.{4,}$/)

  const signin = (e:{preventDefault:()=>void}) => {
    e.preventDefault()
    auth?.signin(username.value, display.value, password.value)
    username.thrower()
    display.thrower()
    password.thrower()
  }

  return (
    <form
      className='form'
      onSubmit={signin}
      >
      <h2 className='form-title'>Sign In</h2>
      <div className='form-inputs'>
        <FormInputString
          type='text'
          name='Username'
          data={username}
          />
        <FormInputString
          type='text'
          name='Display'
          data={display}
          />
        <FormInputString
          type='password'
          name='Password'
          data={password}
          />
        <button
          className='form-send'
          disabled={!username.isOk || !password.isOk || !display.isOk}
          >
          Crear
        </button>
      </div>
    </form>
  )
}

export default Signin