import { useState } from 'react'

const Person = (props) => {
  return (
    <li style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      {props.person.name}
    </li>
  )
}

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map(person =>
        <Person key={person.name} person={person} />
      )}
    </ul>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App