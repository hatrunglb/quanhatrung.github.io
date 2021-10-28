const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const mdalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

//ham hien thi buy tickes
function showBuyTickets(){
    modal.classList.add('open')
}

//ham an buy tickes
function hiddenBuyTickets(){
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click',hiddenBuyTickets)

modal.addEventListener('click',hiddenBuyTickets)

mdalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})

//Mobile

//dong mo nav
var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-btn')
var headerHeight = header.clientHeight;

mobileMenu.onclick = function(){
    var isClose = header.clientHeight === headerHeight;

    if(isClose){
        header.style.height = 'auto';
    }
    else{
        header.style.height = null;
    }
}

//tu dong dong nav khi chon
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i]

    menuItem.onclick = function(event){
        var isMenuParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(isMenuParent){
            event.preventDefault();
        } else{
            header.style.height = null;
        }
    }
}

//slide show
var slideIndex = 0;
showSlide();

function showSlide(){
    var i;
    var slider = document.getElementsByClassName("slider")

    for(i = 0; i < slider.length; i ++){
        slider[i].style.display = "none";
    }

    slideIndex++
    if(slideIndex > slider.length){
        slideIndex = 1
    }
    slider[slideIndex - 1].style.display = "block"
    setTimeout(showSlide, 4000)
}