const arena = document.querySelector('.arena-battle');
const buttonStart = document.querySelector('.start-button')
const containerStart = document.querySelector('.start-battle')
let count = 0

const iniciar = () => {
    arena.style.display = 'flex'
    containerStart.style.display = 'none'
    const balls = document.querySelectorAll('.ball')
    balls.forEach(item => modifyPosition(item))
    count = 0
}

const clickedBall = (event) => {
    event.stopPropagation()

    const points = document.querySelector('.points')
    if (event.target.className.includes('ball')) {
        modifyPosition(event.target)
        count += 1
        points.textContent = count
        return
    }

    count = 0
    points.textContent = count
    arena.style.display = 'none'
    containerStart.style.display = 'flex'
}

const modifyPosition = (item) => {
    const randomX = Math.round(Math.random() * 88)
    const randomY = Math.round(Math.random() * 80)
    item.style.top = randomY + '%'
    item.style.right = randomX + '%'
}

arena.addEventListener('click', clickedBall)
buttonStart.addEventListener('click', iniciar)

