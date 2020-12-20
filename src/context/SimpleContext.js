import React, { createContext } from 'react'

const SimpleContext = createContext({
  state: {},
  handleShowPersons: () => {},
  handleDeletePerson: () => {},
  handlePersonChange: () => {},
  handleNewPerson: () => {},
  setSinglePerson: () => {}
})

export default SimpleContext
