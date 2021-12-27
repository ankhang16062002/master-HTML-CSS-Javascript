const container = document.querySelector('.container')

window.addEventListener('mousemove', (e) => {
    const x = - e.clientX / 5
    const y = - e.clientY / 5
    container.style.backgroundPositionX = `${x}px`
    container.style.backgroundPositionY = `${y}px`
})