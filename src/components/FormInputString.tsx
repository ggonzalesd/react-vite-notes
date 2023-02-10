import { InputStringCompType } from "../types/InputStringType"

import './FormInputString.sass'

function FormInputString(props: InputStringCompType) {
  const { data } = props

  let css = ''
  if (data.error)
    css = 'error'
  else if (data.isEmpty)
    css = 'empty'
  else if (data.isWrong)
    css = 'wrong'
  else if (data.isOk)
    css = 'ok'
  css = 'form-input-entry-' + css

  return (
    <div className='form-input-string'>
      <input
        className={`form-input-entry ${css}`}
        type={props.type}
        placeholder={props.name}
        value={props.data.value}
        onChange={props.data.consume}
        />
    </div>
  )
}

export default FormInputString