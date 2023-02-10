import FormInputString from "../components/FormInputString"
import { useAuth } from "../context/useAuth"
import useInputString from "../hooks/useInputString"
import useNotes from "../hooks/useNotes"

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
    <div>
      <h2>Create Notes</h2>
      <div>
        <FormInputString type='text' name='Insert Data' data={template} />
        <button onClick={insert}>
          Insert
        </button>
      </div>
      <div>
        {
          list.data.map( note => 
            <div key={note.id}>
              <p 
                className={note.checked?'note-checked':''}>
                {note.text}
              </p>
              <button
                onClick={()=>list.toggle(note.id)}
                >
                Check
              </button>
              <button
                onClick={()=>list.remove(note.id)}>
                Delete
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Home