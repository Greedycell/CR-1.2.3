const PiranhaMessage = require('../../PiranhaMessage')

class OwnHomeDataMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24101
    this.client = client
    this.version = 0
  }

  async encode () {
    // LogicClientHome
    this.writeLong(0, 1)
    this.writeHex('010184a51d919f2a9b9eebf10a00030880eae51881eae5188deae51881fcd91a80fcd91a83eae5188eeae5188ceae5180880eae51881eae5188deae51881fcd91a80fcd91a83eae51800000880eae51881eae5188deae51881fcd91a80fcd91a83eae5180000ff1a000000000000001a000000000000001a000000000000001a000000000000001a000000000000001a000000000000001a000086ad9b00000000001a0000b7ad9b0001000000011a000c9cae9b170100000200000407130600010600009889238094239cc3ebf00a00007f00000000007f0000007f000000000000000002023601fbf1f5c103030394ba2294ba22f9bfecf00a031c02001c00001a1b0000007f00007f01000002a3170c01aa0200000000002')

    // LogicClientAvatar
    //this.writeHex('680d7b0012680d7b0012680d7b101')
    this.writeLogicLong(0, 1) // HighID, LowID
    this.writeLogicLong(0, 1) // HighID, LowID
    this.writeLogicLong(0, 1) // HighID, LowID
    this.writeString('Astral') // Name
    this.writeByte(1) // Name Set

    this.writeVInt(0) // OldLevel?
    this.writeVInt(54)
    this.writeVInt(1) // OldArena?
    this.writeVInt(0) // Score

    this.writeByte(1)
    this.writeByte(0)
    this.writeByte(0)
    this.writeByte(0)
    this.writeByte(0)

    this.writeVInt(1) // Level
    this.writeVInt(0) // Score
    this.writeVInt(0) // Score

    this.writeByte(4)
    this.writeByte(6)
    this.writeByte(5)
    this.writeByte(5)
    this.writeByte(1)

    this.writeVInt(500000)

    this.writeByte(5)
    this.writeByte(2)
    this.writeByte(7)
    this.writeByte(5)
    this.writeByte(3)
    this.writeByte(10)

    this.writeByte(5)
    this.writeByte(4)
    this.writeByte(0)

    this.writeByte(5)
    this.writeByte(5)

    this.writeVInt(500000)

    // Unknown
    this.writeHex('00073c07093c08093c09093c04013c05013c06013c0a01013c0a0101050809071a000b1a01081a03091a0d0d1a0e061c00021a0c04')

    // Stats
    this.writeVInt(1000000000) // Diamonds
    this.writeVInt(1000000000) // FreeDiamonds
    this.writeVInt(0) // Experience
    this.writeVInt(1) // Level

    // 7 = Name already set + no clan
    // 8 = Set name popup + clan
    // 9 = Name already set + clan
    // < 7 =  Set name popup
    /*const InClan = 0
    if (InClan == 1) {
      this.writeByte(9)
      this.writeLong(0, 1) // HighID, LowID
      this.writeString('Greedycell') // Name
      this.writeByte(1) // Badge
      this.writeVInt(4) // Role
    } else {*/
      this.writeByte(7)
    //}
  }
}

module.exports = OwnHomeDataMessage