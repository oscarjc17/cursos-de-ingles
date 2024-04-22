let showMenu = document.getElementById('menu_icon')
let menuLinks = document.querySelector('.div-links')
let arrow = document.getElementById('show-submenu')
let submenu = document.querySelector('.nav-link-submenu')
let menuArea = document.getElementById('close')

showMenu.addEventListener('click', () => { 
    menuLinks.classList.toggle('div-links-show')
 })

arrow.addEventListener('click', () => { 
    submenu.classList.toggle('despegable-show')
 })

arrow.addEventListener('click', () => { 
    arrow.classList.toggle('nav-flecha-rotate')
 })

menuArea.addEventListener('click', () => {
    menuLinks.classList.remove('div-links-show')
})

// let menuIcon = document.getElementById('menu_icon')
// let divMenu = document.getElementById('div_enlaces')
// let menuArea = document.getElementById('main')
// let divDescripcion = document.getElementById('descripcion')
// let scrollStart = window.scrollY
// let divCarrusel = document.querySelector('.div_carrusel')


// menuIcon.addEventListener('click', () => {
//    divMenu.classList.toggle('div_enlaces-show')
// })

// menuArea.addEventListener('click', () => {
// divMenu.classList.remove('div_enlaces-show')

// })

// window.onscroll = function() {
//     let scrollEnd = window.scrollY
//     if (scrollStart < scrollEnd) {
//         divMenu.classList.remove('div_enlaces-show')
//     }
// }

// // Carrusel

// let imagenes = [
//     {
//         "url": "img/carrusel_manual/villa.png",
//         "nombre": "Proyecto 1",
//         "descripcion": "Esta es la descripcion del proyecto 1 "
//     },

//     {
//         "url": "img/carrusel_manual/coles.png",
//         "nombre": "Proyecto 2",
//         "descripcion": "Esta es la descripcion del proyecto 2 "
//     },

//     {
//         "url": "img/carrusel_manual/conservas.png",
//         "nombre": "Proyecto 3",
//         "descripcion": "Esta es la descripcion del proyecto 3"
//     },
// ]

// let atras = document.getElementById('img_atras')
// let adelante = document.getElementById('img_adelante')
// let imagen = document.getElementById('div_imagen')
// let texto = document.getElementById('descripcion')


// let actual = 0


// atras.addEventListener('click', function() {
//     actual -=1

//     if (actual == -1) {
//         actual = imagenes.length -1
//     }

//     imagen.innerHTML = `<img src="${imagenes[actual].url}" alt="imagen 1" class="carrusel_img" loading="lazy">`
//     texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3>
//     <p>${imagenes[actual].descripcion}
//     `
// })


// adelante.addEventListener('click', function() {
//     actual +=1

//     if (actual == imagenes.length) {
//         actual = 0
//     }

//     imagen.innerHTML = `<img src="${imagenes[actual].url}" alt="imagen 1" class="carrusel_img" loading="lazy">`
//     texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3>
//     <p>${imagenes[actual].descripcion}
//     `
   
// })

// // Carrusel automatico

// let carrusel = setInterval(function() {
//     actual +=1

//     if (actual == imagenes.length) {
//         actual = 0 
//     }

//     imagen.innerHTML = `<img src="${imagenes[actual].url}" alt="imagen 1" class="carrusel_img" loading="lazy">`
//     texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3>
//     <p>${imagenes[actual].descripcion}
//     `
    
// },3000)


// divCarrusel.addEventListener('mouseover', ()=> {
//         clearInterval(carrusel)
// })

// divCarrusel.addEventListener('mouseleave', ()=> {
//         carrusel = setInterval(function() {
//         actual +=1
    
//         if (actual == imagenes.length) {
//             actual = 0 
//         }
    
//         imagen.innerHTML = `<img src="${imagenes[actual].url}" alt="imagen 1" class="carrusel_img" loading="lazy">`
//         texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3>
//         <p>${imagenes[actual].descripcion}
//         `
        
//     },4000)
// })
