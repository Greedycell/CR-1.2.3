const PiranhaMessage = require('../../PiranhaMessage')
const CommandManager = require("../../CommandManager")
const Utils = require("../../../Logic/Utils")
const Commands = new CommandManager()

class EndClientTurnMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 14102
    this.version = 1
  }

  async decode () {
    this.data = {}
    
    this.data.Tick = this.readVInt()
    this.data.Checksum = this.readVInt()
    this.data.Count = this.readVInt()

    //console.log(this.data)
  }

  async process () {
    const commands = Commands.getCommands()

    if (this.data.Count == 0 && this.buffer.length > 32) { // in case if we receive broken command
      let lastEncount = 0
      let lastByte = 0

      do {
        lastEncount = this.offset
        lastByte = this.readVInt()
      } while(!Utils.range(500, 600).includes(lastByte) && commands.indexOf(String(lastByte)) == -1)
          
      if (Utils.range(500, 600).includes(lastByte)) {
        this.offset = lastEncount
        this.data.Count = 2
      }
    }

    if (this.data.Count == 0) return;

    for (let i = 0; i < this.data.Count; i++) {
      this.commandID = this.readVInt()

      if (commands.indexOf(String(this.commandID)) != -1) {
        const command = new (Commands.handle(this.commandID))(this.bytes.slice(this.offset), this.client, this.player)
        this.client.log(`Command ${this.commandID} (${command.constructor.name}) handled!`)
        command.decode(this)
        await command.process()
      }else if(this.commandID > 499){
        this.client.log(`Command ${this.commandID} isn't handled!`)
      }
    }
  }
}

module.exports = EndClientTurnMessage