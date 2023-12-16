import canvasConfetti from 'canvas-confetti';

export default confetti = {
    coorLogo: (logo) => {
        let viewportHeight = window.innerHeight;
        let yLogo = logo.getBoundingClientRect().top + logo.getBoundingClientRect().height
        let yStartConfetti = ((yLogo / viewportHeight) * 100) / 100;
        let viewportWidth = window.innerWidth;
        let xLogo = logo.getBoundingClientRect().left + logo.getBoundingClientRect().width / 2
        let xStartConfetti = ((xLogo / viewportWidth) * 100) / 100;
        addEventListener('resize', () => {
            viewportHeight = window.innerHeight;
            yLogo = logo.getBoundingClientRect().top + logo.getBoundingClientRect().height / 2
            yStartConfetti = ((yLogo / viewportHeight) * 100) / 100;
            viewportWidth = window.innerWidth;
            xLogo = logo.getBoundingClientRect().left + logo.getBoundingClientRect().width / 2
            xStartConfetti = ((xLogo / viewportWidth) * 100) / 100;
        })
        return {yStartConfetti, xStartConfetti}
    },
    createConfetti: (logo) => {
        var triangle = canvasConfetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });
        canvasConfetti({
        shapes: [triangle, 'square', 'circle'],
            spread: 40,
            startVelocity: 5,
            particleCount: Math.trunc(logo.getBoundingClientRect().width),
            origin: { 
                x: confetti.coorLogo(logo).xStartConfetti, 
                y: confetti.coorLogo(logo).yStartConfetti
            },
            colors: ['#2c2c2c96', '#3d3c3c', '#4f4f4f', '#837d7d', '#555555']
        });
    },
    coorButton: (button, dir) => {
        let viewportHeight = window.innerHeight;
        let yButton = button.getBoundingClientRect().top + button.getBoundingClientRect().height
        let yStartConfetti = ((yButton / viewportHeight) * 100) / 100;
        let viewportWidth = window.innerWidth;
        let xButton = button.getBoundingClientRect().left + button.getBoundingClientRect().width / 2
        let xStartConfetti = 0;
        dir == 'prev' ? xStartConfetti = (((xButton / viewportWidth) * 100) / 100) - 0.04 : xStartConfetti = (((xButton / viewportWidth) * 100) / 100) + 0.04
        addEventListener('resize', () => {
            viewportHeight = window.innerHeight;
            yButton = button.getBoundingClientRect().top + button.getBoundingClientRect().height / 2
            yStartConfetti = ((yButton / viewportHeight) * 100) / 100;
            viewportWidth = window.innerWidth;
            xButton = button.getBoundingClientRect().left + button.getBoundingClientRect().width / 2
            xStartConfetti = ((xButton / viewportWidth) * 100) / 100;
            dir == 'prev' ? xStartConfetti = (((xButton / viewportWidth) * 100) / 100) - 0.04 : xStartConfetti = (((xButton / viewportWidth) * 100) / 100) + 0.04
        })
        return {yStartConfetti, xStartConfetti}
    },
    createConfettiButton: (button, dir, driftNbr) => {
        canvasConfetti({
            spread: 30,
            startVelocity: 4,
            gravity: 2,
            particleCount: 5,
            drift: driftNbr,
            origin: { 
                x: confetti.coorButton(button, dir).xStartConfetti, 
                y: confetti.coorButton(button, dir).yStartConfetti
            },
            colors: ['#2c2c2c96', '#3d3c3c', '#4f4f4f', '#837d7d', '#555555']
        });
    }
}