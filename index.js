const chalk = require('chalk');
const { Command } = require('commander');
const { listContacts, getContactById, removeContact, addContact } = require('./contacts')

const program = new Command();
program
  .requiredOption('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
     const list = await listContacts()
     console.table(list);
      break;

    case 'get':
     const contactById = await getContactById (id)
     if (contactById) {
        console.log(chalk.cyan('Contact found'));
        console.log(contactById)
        return
     }
        console.log(chalk.red('Contact not found'));
      break;

    case 'add':
      const newContact = await addContact(name, email, phone)
      console.log(chalk.blue('Add new contact:', ));
      console.log(newContact)
      break;

    case 'remove':
      const removedContact = await removeContact (id)
     if (removedContact) {
      console.log(chalk.yellow('Remove contact with id:', id));
      console.log(removedContact)
      return
     }
      console.log(chalk.red('Contact not found'));
      break;

    default:
      console.warn(chalk.bgRed('Unknown action type!'));
  }
}

invokeAction(argv).then(()=> console.log('Operation success'))
