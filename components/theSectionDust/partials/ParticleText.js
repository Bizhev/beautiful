/* eslint-disable prettier/prettier */
import * as PIXI from 'pixi.js'
import heart from './heart.png'
import Particle from './Particle'

export default class ParticleText {
  constructor() {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      autoDensity: true
    })
    this.particleSize = 10
    this.particles = []
    this.addObjects()
  }
  addObjects() {
    this.loader = new PIXI.Loader()
    this.loader.add('bunny', heart).load((loader, resources) => {
      for (let i = 0; i < 20; i += 1) {
        for (let j = 0; j < 20; j += 1) {
          const p = new Particle(
            i * this.particleSize,
            j * this.particleSize,
            resources.bunny.texture,
            this.particleSize
          )
          this.particles.push(p)
          this.app.stage.addChild(p.sprite)
        }
      }
      console.log(this.particles, heart)
      this.animate()
    })
  }
  animate() {
    this.app.ticker.add(() => {
      this.particles.forEach((p) => {
        p.update(this.app.renderer.plugins.interaction.mouse.global)
      })
    })
  }
}
