


let currSlide = 1



let sliderimg = Array.from(document.querySelectorAll("img"))



let sliderContainerCount = sliderimg.length



let slideNumbers = document.querySelector(".slide-number")



let indicators = document.querySelector('.slider-controls .indicators')



let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev')



let ul = document.createElement('ul')
ul.setAttribute('id', 'pagination-ul')

for (i = 1; i <= sliderContainerCount; i++){

    let li = document.createElement('li')
    li.setAttribute("data-index", i)

    let textLi = document.createTextNode(`${i}`)


    li.appendChild(textLi)

    ul.appendChild(li)

    indicators.appendChild(ul)

}

let liBullets = Array.from(document.querySelectorAll("li"))

for (let i = 0; i < liBullets.length; i++) {

    liBullets[i].onclick = function () {
  
      currSlide = parseInt(this.getAttribute('data-index'));
  
      thechecker();
  
    }
  
  }

nextButton.onclick = nextSlide
prevButton.onclick = prevSlide

function nextSlide(){

    

    thechecker()

    if (nextButton.classList.contains('disabled')){

        return false

    }else{
        currSlide++

        thechecker
    }

}
function prevSlide(){


    thechecker()

    if ( prevButton.classList.contains('disabled')){

        return false

    }else{
        currSlide--

        thechecker
    }

}

thechecker()

function thechecker(){

    rmoveActive()

    slideNumbers.textContent = 'Slide#' + (currSlide) + ' of ' + (sliderContainerCount)

    sliderimg[currSlide - 1].classList.add('active')

    ul.children[currSlide - 1].classList.add('active')

    
    if (currSlide == 1){

        prevButton.classList.add('disabled')

    }else{
        prevButton.classList.remove('disabled')
    }

    if (currSlide == 5){
        nextButton.classList.add('disabled')
    }else{
        nextButton.classList.remove('disabled')
    }

    
}

function rmoveActive(){

    sliderimg.forEach((img) => {

        img.classList.remove('active')

    })

    liBullets.forEach((li) => {
        li.classList.remove('active')
    })


}