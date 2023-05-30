let  menu = document.querySelector('#Menu');
let  navegador = document.querySelector('.navegador');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navegador.classList.toggle('activo');
}

var swiper = new Swiper(".inicio-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

