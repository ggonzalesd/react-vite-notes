import { useState } from "react"

function useInputString(regex:RegExp) {
  const [ value, setValue ] = useState('')
  const [ empty, setEmpty ] = useState(true)
  const [ ok, setOk ] = useState(false)
  const [ error, setError ] = useState(false)

  const consume = (e: { target:{value:string} }) => {
    const text = e.target.value
    setValue(text)
    setEmpty(text.length === 0)
    setOk(regex.test(text))
    setError(false)
  }

  const reset = () => {
    setValue('')
    setEmpty(true)
    setOk(false)
    setError(false)
  }

  const thrower = () => {
    setError(true)
  }

  return {
    value,
    isEmpty: empty,
    isWrong: !empty && !ok && !error,
    isOk: !empty && ok && !error,
    error,
    consume,
    reset,
    thrower,
  }
}

export default useInputString