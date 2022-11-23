import { isWebp, headerFixed }from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp()
// ====================================================================================================================================================

// Паралакс мышей ====================================================================================================================================================
// const mousePrlx = new MousePRLX({})
// ====================================================================================================================================================

// Фиксированный header ====================================================================================================================================================
// headerFixed()
// ====================================================================================================================================================

// burger menu
window.onload = ( ) =>{
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.header__nav-mobile')
    let menuDropdown = menu.querySelectorAll('.has-children')
    burger.addEventListener('click',()=>{
        burger.classList.toggle('active')
       
            menu.classList.toggle('active')
            // menu.style.height = `${menu.scrollHeight}px`
            // console.log(menuDropdown);
            menuDropdown.forEach((e)=>{
                // e.classList.add('no-hover')
                // console.log(e.querySelector('a'));
                let dropDownLink = e.querySelector('a');
                dropDownLink.addEventListener('click',(event)=>{
                    event.preventDefault()
                    let dropDownItem = e.querySelector('.submenu')
                    // dropDownItem.style.display = `flex`
                    dropDownItem.classList.toggle('active')
                    // dropDownItem.style.height = `${dropDownItem.scrollHeight}px`
                    // menu.style.height = `${menu.scrollHeight +dropDownItem.scrollHeight / 2 }px`
                })
            })
        
    })
}
    
