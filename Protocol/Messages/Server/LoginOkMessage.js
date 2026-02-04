const PiranhaMessage = require('../../PiranhaMessage')

class LoginOkMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 20104
    this.client = client
    this.version = 0
  }

  async encode () {
    this.writeLong(0, 1) // HighID, LowID
    this.writeLong(0, 1) // HighID, LowID
    this.writeString('nypbej3nc7cbcz3bk2mcxtx2x6ba') // Token
    this.writeString('') // Facebook
    this.writeString('') // Gamecenter
    this.writeInt(2) // Major
    this.writeInt(0) // Build
    this.writeInt(1507) // Content
    this.writeString('prod') // Environment
    this.writeInt(0) // SessionCount
    this.writeInt(0) //PlayTimeSeconds
    this.writeInt(0) // DaysSinceStartedPlaying
    this.writeString('1475268786112433') // FacebookAppID
    this.writeString(Date.now().toString()) // Server Time
    this.writeString(Date.now().toString()) // AccountCreatedDate
    this.writeInt(0)
    this.writeString('') // GoogleServiceID
    this.writeString('')
    this.writeString('') // CountryCode
    this.writeString('someid2')
    this.writeString('http://7166046b142482e67b30-2a63f4436c967aa7d355061bd0d924a1.r65.cf1.rackcdn.com') // ContentURL
    this.writeString('https://event-assets.clashroyaleapp.com') // EventAssetsURL
  }
}

module.exports = LoginOkMessage