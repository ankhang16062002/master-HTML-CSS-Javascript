const banner = document.querySelector('section')
window.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop
    banner.style.clipPath = `circle(${scroll}px at center)`
})