const cruve = document.querySelector('.cruve')

document.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop
    cruve.style.transform = `scaleY(${1 - scroll / 500})`
})