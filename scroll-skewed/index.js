const secondSkew = document.querySelector('.second')

window.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop
    secondSkew.style.transform = `skewY(${-10 + scroll/60}deg)`
})