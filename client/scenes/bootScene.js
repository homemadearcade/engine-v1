import { Scene } from 'phaser'
import geckos from '@geckos.io/client'

export default class BootScene extends Scene {
  constructor() {
    super({ key: 'BootScene' })

    fetch('/port').then((res) => {
      return res.json()
    }).then((data) => {
      const channel = geckos({ port: Number(data.port) })
      channel.onConnect(error => {
        if (error) console.error(error.message)
        channel.on('ready', () => {
          this.scene.start('GameScene', { channel: channel })
        })
      })
    })
  }
}
