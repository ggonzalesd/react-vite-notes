import FormInputString from "../components/FormInputString"
import { useAuth } from "../context/useAuth"
import useInputString from "../hooks/useInputString"
import useNotes from "../hooks/useNotes"
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'

import './Home.sass'

function Home() {
  const auth = useAuth()
  const username = auth.user?.username

  const list = useNotes(username as string)

  const template = useInputString(/^.{1,}$/)
  const insert = () => {
    list.add(template.value)
    template.reset()
  }

  return (
    <div className="notes">
      <h2>Create Notes</h2>
      <div className="notes-input">
        <FormInputString type='text' name='Insert Data' data={template} />
        <button
          disabled={!template.isOk}
          onClick={insert} >
          Insert
        </button>
      </div>
      {
        list.data.length === 0 && <p>There are not Notes yet!</p>
      }
      <div className="notes-list">
        {
          list.data.map( note => 
            <div
              className="note-item"
              key={note.id}
              >
              <p 
                className={note.checked?'note-checked':''}>
                {note.text}
              </p>
              <div className="note-buttons">
                <button
                  onClick={()=>list.toggle(note.id)}
                  >
                  {
                    note.checked ? <BsFillLockFill /> : <BsFillUnlockFill />
                  }
                </button>
                <button
                  onClick={()=>list.remove(note.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Home