import { useState } from "react"
import "./App.css"
import contactsJSON from "./contacts.json"

function App() {
  const allContacts = contactsJSON.slice()
  const firstFiveContacts = allContacts.splice(0, 5)

  const [contacts, setContacts] = useState(firstFiveContacts)

  const addContact = () => {
    const randomIndex = Math.floor(Math.random() * allContacts.length)
    const randomContact = allContacts[randomIndex]

    // if (contacts.length === allContacts.length) {
    //     return
    // }

    // const contactAlreadyInContacts = contacts.find(contact => randomContact.id === contact.id)

    // if (contactAlreadyInContacts) {
    //     addContact()
    // }

    setContacts([randomContact, ...contacts])
    allContacts.splice(randomIndex, 1)
  }

  const sortByPopularity = () => {
    let sortedContacts = contacts.slice().sort(function (a, b) {
      return b.popularity > a.popularity
    })
    setContacts(sortedContacts)
  }

  const sortByName = () => {
    let sortedContacts = contacts.slice().sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })
    setContacts(sortedContacts)
  }

  const deleteContact = (id) => {
    let filteredContacts = contacts.filter((contact) => {
      return contact.id !== id
    })

    setContacts(filteredContacts)
  }

  return (
    <>
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt="profile" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? <p>🌞</p> : <p>⚡</p>}</td>
              <td>{contact.wonEmmy ? <p>🌞</p> : <p>⚡</p>}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addContact}>Add random contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
    </>
  )
}

export default App
