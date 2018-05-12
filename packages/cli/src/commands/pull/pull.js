const pull = require('../../lib/pull')

async function runPull() {
  try {
    await pull()
    console.log(
      `--> Successfully synced model from supermodel.io!`
    )
  } catch(error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = runPull