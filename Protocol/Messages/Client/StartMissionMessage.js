const PiranhaMessage = require('../../PiranhaMessage')
const NpcSectorStateMessage = require('../Server/NpcSectorStateMessage')

class StartMissionMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14104
    this.version = 1
  }

  async decode () {}

  async process () {
    await new NpcSectorStateMessage(this.client).send()
  }
}

module.exports = StartMissionMessage