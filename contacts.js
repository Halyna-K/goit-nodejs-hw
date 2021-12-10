const fs = require ('fs/promises')
const path = require ('path')
const crypto = require ('crypto')

const readContent = async () => {
  const contactsPath = await fs.readFile(path.join(__dirname, 'db', 'contacts.json'), 'utf8')
  const result = JSON.parse(contactsPath)
  return result
}

const listContacts = async () => {
    return await readContent()
  }

function getContactById(contactId) {
    // ...твой код
  }

function removeContact(contactId) {
    // ...твой код
  }

function addContact(name, email, phone) {
    // ...твой код
  }

  module.exports = {listContacts, getContactById, removeContact, addContact}
