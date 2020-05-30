const storage = require('azure-storage')
const service = storage.createTableService("magazyn65", "An6fY9Y/7wAsfMC9H7taLKRLdjVU4ud7RQkklsDiDOrHL+GCaKaM3nJC4kUcQvNpme9oviMnzNKJ0fo5dEb6nQ==")
const table = 'tasks'

const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init
}