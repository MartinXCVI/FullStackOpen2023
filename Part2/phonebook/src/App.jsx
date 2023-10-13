import { useState } from 'react'

import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

  const handleChange = setValue => e => setValue(e.target.value);

  const handleAddNewPerson = e => {
    e.preventDefault()

    if(persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook!`)
    } else {

      const newPerson = { name: newName, number: newNumber }

      setPersons(persons.concat(newPerson))

      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter query={filterQuery} handleChange={handleChange(setFilterQuery)} />
      <h2>Add a new</h2>
      <PersonForm
      name={newName}
      number={newNumber}
      handleChangeName={handleChange(setNewName)}
      handleChangeNumber={handleChange(setNewNumber)}
      handleAddPerson={handleAddNewPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} query={filterQuery} />
    </div>
  )
}
export default App