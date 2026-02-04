const PiranhaMessage = require('../../PiranhaMessage')

class DoSpellCommand extends PiranhaMessage {
  constructor (client) {
    super()
    this.commandID = 1
    this.client = client
    this.version = 1
  }

  async decode () {
    this.data = {}

    // Header
    {
        this.data.ClientTick = this.readVInt()
        this.data.Checksum = this.readVInt()
        this.data.SenderHighId = this.readVInt()
        this.data.SenderLowId = this.readVInt()
    }

    this.data.SpellDeckIndex = this.readVInt()
    this.data.ClassId = this.readVInt()
    this.data.InstanceId = this.readVInt()
    this.data.SpellIndex = this.readVInt()
    this.data.TroopLevel = this.readVInt()
    this.data.X = this.readVInt()
    this.data.Y = this.readVInt()

    console.log(this.data)
  }

  async process () {
    // Header
    {
        this.writeVInt(this.data.Type)
        this.writeVInt(this.data.ClientTick)
        this.writeVInt(this.data.Checksum)
        this.writeVInt(this.data.SenderHighId)
        this.writeVInt(this.data.SenderLowId)
    }

    this.writeVInt(this.data.SpellDeckIndex)
    this.writeVInt(this.data.ClassId)
    this.writeVInt(this.data.InstanceId)
    this.writeVInt(this.data.SpellIndex)
  }
}

module.exports = DoSpellCommand