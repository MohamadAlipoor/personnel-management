import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Person from './Person'
import Header from './Header'
import NewPerson from './NewPerson'
import SimpleContext from './context/SimpleContext'

const App = () => {
  const [getPersons, setPersons] = useState([])
  const [getPerson, setPerson] = useState('')
  const [getShowPersons, setShowPersons] = useState(true)

  const handleShowPersons = () => {
    setShowPersons(!getShowPersons)
  }

  const handleDeletePerson = personId => {
    const filteredPersons = getPersons.filter(p => p.id !== personId)
    setPersons(filteredPersons)

    const personIndex = getPersons.findIndex(p => p.id === personId)
    const person = getPersons[personIndex]
    toast.error(`${person.fullName} با موفیقت حذف شد `, {
      position: 'bottom-right',
      closeOnClick: true
    })
  }

  const handlePersonChange = (e, personId) => {
    const personIndex = getPersons.findIndex(p => p.id === personId)
    const person = getPersons[personIndex]
    person.fullName = e.target.value

    const personChange = [...getPersons]
    personChange[personIndex] = person
    setPersons(personChange)
  }

  const handleNewPerson = () => {
    const persons = [...getPersons]
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullName: getPerson
    }
    if (person.fullName !== '' && person.fullName !== ' ') {
      persons.push(person)
      setPersons(persons)
      setPerson('')
    }
    toast.success('شخصی با موفقیت اضافه شد', {
      position: 'bottom-right',
      closeOnClick: true
    })
  }

  const setSinglePerson = e => {
    setPerson(e.target.value)
  }

  return (
    <SimpleContext.Provider
      value={{
        persons: getPersons,
        person: getPerson,
        showPersons: getShowPersons,
        handleShowPersons: handleShowPersons,
        handleDeletePerson: handleDeletePerson,
        handlePersonChange: handlePersonChange,
        handleNewPerson: handleNewPerson,
        setSinglePerson: setSinglePerson
      }}
    >
      <div className='rtl text-center'>
        <Header />
        <NewPerson />

        <button
          className={getShowPersons ? 'btn btn-info' : 'btn btn-danger'}
          onClick={handleShowPersons}
        >
          {getShowPersons ? 'مخفی' : 'نمایش'}
        </button>

        {getShowPersons
          ? getPersons.map(person => (
              <Person
                key={person.id}
                person={person}
                fullName={person.fullName}
                handlePersonChange={handlePersonChange}
                handleDeletePerson={handleDeletePerson}
              />
            ))
          : null}
        <ToastContainer />
      </div>
    </SimpleContext.Provider>
  )
}

export default App
