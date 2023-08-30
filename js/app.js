import { carousel } from "./carousel";
import { utils } from "./utils";
import { burger } from "./burger";
import { animateStart } from "./animateStart";

carousel();
utils.spanText();
utils.addSpanReverse("banner__panel");
burger();
animateStart();

const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')
const radius = 30
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = '#ceafafb5'
ctx.lineWidth = 0.3
ctx.fillStyle = '#0c0c0c'

class Particle {
    constructor(effect, index){
        this.effect = effect
        this.index = index
        this.radius = Math.random() * radius + (radius / 4)
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2)
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2)
        this.velocityX = Math.random() * 1 - 0.5
        this.velocityY = Math.random() * 1 - 0.5
        this.pushX = 0
        this.pushY = 0
        this.friction = 0.8
    }
    draw(context){
        if (this.effect.mouse.pressed) {
            const distanceX = Math.abs(this.effect.mouse.x - this.x)
            const distanceY = Math.abs(this.effect.mouse.y - this.y)
            const distanceMax = 150
            if (distanceX < distanceMax && distanceY < distanceMax) {
                context.beginPath()
                context.moveTo(this.x, this.y)
                context.lineTo(this.effect.mouse.x, this.effect.mouse.y)
                context.fill()
                context.stroke()
            }
        }
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context.fill()
        context.stroke()
    }
    update(){
        if (this.effect.mouse.pressed) {
            const dx = this.x - this.effect.mouse.x
            const dy = this.y - this.effect.mouse.y
            const distance = Math.hypot(dx, dy)
            const force = (this.effect.mouse.radius / distance)
            if (distance < this.effect.mouse.radius) {
                const angle = Math.atan2(dy, dx)
                this.pushX += Math.cos(angle) * force
                this.pushY += Math.sin(angle) * force
            }
        }
        this.x += (this.pushX *= this.friction) + this.velocityX
        this.y += (this.pushY *= this.friction) + this.velocityY
        if (this.x < this.radius) {
            this.x = this.radius
            this.velocityX *= -1
        } else if (this.x > this.effect.width - this.radius){
            this.x = this.effect.width - this.radius
            this.velocityX *= -1
        }
        if (this.y < this.radius) {
            this.y = this.radius
            this.velocityY *= -1
        } else if (this.y > this.effect.height - this.radius){
            this.y = this.effect.height - this.radius
            this.velocityY *= -1
        }
    }
    reset(){
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2)
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2)
    }
}

class Effect {
    constructor(canvas, context){
        this.canvas = canvas
        this.context = context
        this.width = this.canvas.width
        this.height = this.canvas.height
        this.particles = []
        this.numberOfParticles = 100
        this.createParticle()
        window.addEventListener('resize', (e) => {
            this.resize(e.target.innerWidth, e.target.innerHeight)
        })
        this.mouse = {
            x: 0,
            y: 0,
            pressed: false,
            radius: 100
        }
        window.addEventListener('mousemove', (e) => {
            if (this.mouse.pressed) {
                this.mouse.x = e.x
                this.mouse.y = e.y  
            }
        })
        window.addEventListener('mousedown', (e) => {
            this.mouse.pressed = true
            this.mouse.x = e.x
            this.mouse.y = e.y
        })
        window.addEventListener('mouseup', (e) => {
            this.mouse.pressed = false
            this.mouse.x = e.x
            this.mouse.y = e.y  
        })
    }
    createParticle(){
        for (let p = 0; p < this.numberOfParticles; p++) {
            this.particles.push(new Particle(this, p))
        }
    }
    handleParticle(context){
        this.connectParticle(context)
        this.particles.forEach(p => {
            p.draw(context)
            p.update()
        })
    }
    connectParticle(context){
        const maxDistance = 150
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = 0; j < this.particles.length; j++) {
                const distanceX = this.particles[i].x - this.particles[j].x
                const distanceY = this.particles[i].y - this.particles[j].y
                const distance = Math.hypot(distanceX, distanceY)
                if (distance < maxDistance) {
                    context.save()
                    const opacity = 1 - (distance / maxDistance)
                    context.globalAlpha = opacity
                    context.beginPath()
                    context.moveTo(this.particles[i].x, this.particles[i].y)
                    context.lineTo(this.particles[j].x, this.particles[j].y)
                    context.stroke()
                    context.restore()
                }
            }
        }
    }
    resize(width, height){
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.width = width
        this.height = height
        ctx.strokeStyle = '#ceafafb5'
        ctx.lineWidth = 0.3
        ctx.fillStyle = '#0c0c0c'
        this.particles.forEach(particle => {
            particle.reset()
        })
    }
}
let effect = new Effect(canvas, ctx)
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    effect.handleParticle(ctx)
    requestAnimationFrame(animate)
}
animate()