const span = document.querySelector('.mess-with-me')
span.style.fontSize = '40px'

const paragraph = document.querySelector('p.mess-with-me')
paragraph.style.backgroundColor = 'green'

const image = document.querySelector('#hide-me')
image.style.visibility = 'hidden'

const section = document.querySelector('#hide-me-area')
section.style.display = 'none'

const images = document.querySelector('#triceratops')
images.style.width = '324px'

document.querySelector('.mess-with-me').addEventListener("click", function(){
     span.style.color = 'orange'
})

const picture = document.getElementById('triceratops')

picture.addEventListener("click", function(){
    picture.style.border = '5px solid red'
})

const dinosaur = document.getElementById('feathers')

dinosaur.addEventListener("click", function(){
    dinosaur.style.opacity = '50%'
})

const button = document.getElementById('toggle')
const sections = document.getElementById('row')

button.addEventListener("click", function(){
    sections.style.backgroundColor = 'aquamarine'
})

const photos = document.getElementById('biggify')

photos.addEventListener("mouseover", function(){
    photos.style.width = '200px'
})

photos.addEventListener("mouseleave", function(){
    photos.style.width = '162px'
})