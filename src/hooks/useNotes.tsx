import { useState } from "react"
import uuid from "react-uuid"
import Note from "../types/NoteType"

function useNotes(username:string) {
  const key = 'notes:' + username
  const localNotes = localStorage.getItem(key)
  let tempList: Note[] = []

  if(localNotes) {
    tempList = JSON.parse(localNotes) as Note[]
  } else {
    localStorage.setItem(key, JSON.stringify(tempList))
  }

  const [ notes, setNotes ] = useState(tempList)

  const add = (text: string) => {
    const note:Note = {
      id: uuid(),
      text,
      checked: false,
    }
    const tempNotes = [ ...notes, note ]
    console.log(JSON.stringify(tempNotes))
    localStorage.setItem(key, JSON.stringify(tempNotes))
    setNotes(tempNotes)
  }

  const remove = (id: string) => {
    const tempNotes = notes.filter(n => n.id !== id)
    localStorage.setItem(key, JSON.stringify(tempNotes))
    setNotes(tempNotes)
  }

  const toggle = (id: string) => {
    const tempNotes = notes.map(n => n.id === id? {...n, checked: !n.checked } as Note: n)
    localStorage.setItem(key, JSON.stringify(tempNotes))
    setNotes(tempNotes)
  }

  return {
    data: notes,
    add,
    remove,
    toggle
  }
}

export default useNotes