class Planet {
  constructor(game) {
    this.game = game
    this.x = this.game.width * 0.5
    this.y = this.game.height * 0.5
    this.radius = 80
    this.image = document.getElementById('planet')
  }

  draw(context) {
    context.drawImage(this.image, this.x - 100, this.y - 100)

    if (this.game.debug) {
      context.beginPath()
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      context.stroke()
    }
  }
}

class Player {
  constructor(game) {
    this.game = game
    this.x = this.game.width * 0.5
    this.y = this.game.height * 0.5
    this.radius = 40
    this.image = document.getElementById('player')
    this.aim
    this.angle = 0
  }

  draw(context) {
    context.save()
    context.translate(this.x, this.y)
    context.rotate(this.angle)
    context.drawImage(this.image, -this.radius, -this.radius)

    if (this.game.debug) {
      context.beginPath()
      context.arc(0, 0, this.radius, 0, Math.PI * 2)
      context.stroke()
    }
    context.restore()
  }

  update() {
  
  }
}

class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.planet = new Planet(this)
    this.player = new Player(this)
    this.debug = true
    this.mouse = {
      x: 0,
      y: 0
    } 
    window.addEventListener('mousemove', e => {
      this.mouse.x = e.offsetX
      this.mouse.y = e.offsetY
    })
    window.addEventListener('keyup', e => {
      if (e.key === 'd') this.debug = !this.debug
    })
  }

  render(context) {
    this.planet.draw(context)
    this.player.draw(context)
    this.player.update()
    context.beginPath()
  }

  calcAim(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y
    const distance = Math.hypot(dx, dy)
    const aimX = dx / distance * -1
    const aimY = dy / distance * -1
    return [aimX, aimY, dx, dy]
  }
}

window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = 800
  canvas.height = 800
  ctx.strokeStyle = '#fffcfa'
  ctx.lineWidth = 2

})