const PiranhaMessage = require('../../PiranhaMessage')
const HomeBattleReplayMessageServer = require('../Server/HomeBattleReplayMessage')

class HomeBattleReplayMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14114
    this.version = 1
  }

  async decode () {}

  async process () {
    await new HomeBattleReplayMessageServer(this.client).send()
  }
}

module.exports = HomeBattleReplayMessage