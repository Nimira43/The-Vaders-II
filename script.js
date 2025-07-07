class Planet {
  constructor(game) {

  }

  draw() {

  }
}

class Player {
  constructor(game) {

  }

  draw(context) {

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

  }

  render(context) {

  }

  calcAim(a, b) {

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