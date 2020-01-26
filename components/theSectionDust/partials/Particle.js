import * as PIXI from 'pixi.js'

export default class Particle {
  constructor(x, y, texture, size) {
    this.x = x
    this.y = y

    this.sprite = new PIXI.Sprite(new PIXI.Texture(texture))
    this.sprite.texture.frame = new PIXI.Rectangle(x, y, size, size)

    this.sprite.x = x
    this.sprite.y = y

    this.friction = 0.9

    this.speedX = 0
    this.speedY = 0

    this.gravity = 0.01

    this.radius = 100

    this.dirX = Math.random() - 0.5
    this.dirY = Math.random() - 0.5
  }
  update(mouse) {
    const distanceX = mouse.x - this.sprite.x
    const distanceY = mouse.y - this.sprite.y

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

    const normalX = distanceX / distance
    const normalY = distanceY / distance
    // mouse interaction
    if (distance < this.radius) {
      this.speedX -= normalX
      this.speedY -= normalY
    }
    // back home

    const oDistX = this.x - this.sprite.x
    const oDistY = this.y - this.sprite.y
    this.speedX += oDistX * this.gravity
    this.speedY += oDistY * this.gravity

    this.speedX *= this.friction
    this.speedY *= this.friction

    this.sprite.x += this.speedX
    this.sprite.Y += this.speedY
  }
}
