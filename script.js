let slogan = document.getElementById('slogan')


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    slogan.style.opacity = 100 + value * -0.3 + '%';
})