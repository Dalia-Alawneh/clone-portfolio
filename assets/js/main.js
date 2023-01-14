/**
 * change nav color
 * smooth scroll
 * scroll to top
 * loading screen
 */

// let navbar = document.getElementById('navbar')
// window.addEventListener('scroll', function(){
//     if(window.scrollY > 50){
//         navbar.classList.add('new-bg-color')
//         navbar.style.transition = '1s'
//     }else{
//         navbar.style.transition = '1s'
//         navbar.classList.remove('new-bg-color')
//     }
// })

$(window).scroll(function(){
    if($(window).scrollTop()>150){
        $('#navbar').addClass('new-bg-color')
        $('#navbar').css("transition", "1s")
    }else{
        $('#navbar').removeClass('new-bg-color')
        $('#navbar').css("transition", "1s")
    }
})


// let links = document.querySelectorAll('nav a')
// links.forEach(function(link){
//     link.addEventListener('click', function(e){
//         e.preventDefault()
//         let curentId = e.target.attributes.href.value
//         let sectionPos = document.querySelector(curentId).offsetTop
//         window.scroll({
//             top: sectionPos,
//             behavior: 'smooth'
//         })
//         console.log(sectionPos);
//     })
// })


$('nav a').click(function(){
    let currntId = $(this).attr('href')
    let sectionOffset = $(currntId).offset().top
    $('html, body').animate({scrollTop:sectionOffset},2000)
})

// document.querySelector('.top').style.opacity  = '0'
// window.addEventListener('scroll', function(){
//     let aboutPos = document.getElementById('about').offsetTop
//     if(window.scrollY > aboutPos){
//         document.querySelector('.top').style.opacity  = '1'
//         document.querySelector('.top').style.transition  = '.7s'
//     }else{
//         document.querySelector('.top').style.opacity  = '0'
//         document.querySelector('.top').style.transition  = '.7s'
//     }
// })

$('.top').fadeOut()
$(window).scroll(function(){
    if($(window).scrollTop() > $('#about').offset().top)
        $('.top').fadeIn(1000)
    else
        $('.top').fadeOut(1000)
})



// let topbtn = document.querySelector('.top button')
// topbtn.addEventListener('click', function(e){
//     e.preventDefault()
//     window.scroll({
//         top:0,
//         behavior:'smooth'
//     })
// })

$('.top').click(function(){
    $('html, body').animate({scrollTop:0},4000)
})

//loading screen

// let body = document.body
// body.style.overflow = 'hidden'
// console.log(document.querySelector('.loading'));
// document.querySelector('.loading').style.opacity = '1'
// document.querySelector('.loading').style.visibility = 'visible'
// document.querySelector('.loading').style.transition = '1s'

// window.addEventListener('load', function(){
//     setTimeout(function(){
//         document.querySelector('.loading').style.opacity = '0'
//         document.querySelector('.loading').style.visibility = 'hidden'
//         document.querySelector('.loading').style.transition = '1s'
//         body.style.overflow = 'auto'
//     }, 2000)
// }) 

$('body').css("overflow", "hidden")
$(document).ready(function(){
    $('.loading').fadeOut(4000, function(){
        $('body').css("overflow", "auto")
    })
})



$('.theme i').click(function(){
    let w = $('.options').outerWidth()
    let lft = $('.theme').offset().left
    if(lft == 0)
        $('.theme').animate({left:-w},1500)
    else
    $('.theme').animate({left:0},1500)
})




let colors = ["#86E5FF", "#ABC270", "#FFD4B2", "#C780FA", "#ff724c"]
for(let i =0;i<colors.length;i++){
    $('.options li').eq(i).css("backgroundColor", colors[i])
}


$('.options li').click(function(){
    let bg = $(this).css("backgroundColor")
    $('html').attr('style', `--main-color:${bg}`)
})




