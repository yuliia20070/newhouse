function myFunction(){
    document.getElementById('myDropdown').classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i=0; i< dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.resp_main');
    const cards = document.querySelectorAll('.card_re');
    const arrowLeft = document.querySelector('.arrowl');
    const arrowRight = document.querySelector('.arrowr');
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 30; // Ширина карточки + gap
    const visibleCards = 3; // Количество одновременно видимых карточек
    let maxIndex = cards.length - visibleCards;

    // Проверяем, нужно ли вообще слайдер (если карточек меньше или равно visibleCards)
    if (cards.length <= visibleCards) {
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'none';
        return;
    }

    // Инициализация слайдера
    function initSlider() {
        slider.style.display = 'flex';
        slider.style.gap = '30px';
        slider.style.transition = 'transform 0.5s ease';
        updateSlider();
    }

    // Функция для обновления позиции слайдера
    function updateSlider() {
        const offset = -currentIndex * cardWidth;
        slider.style.transform = `translateX(${offset}px)`;
        
        // Скрываем/показываем стрелки в зависимости от позиции
        arrowLeft.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
        arrowRight.style.visibility = currentIndex >= maxIndex ? 'hidden' : 'visible';
    }

    // Обработчик для стрелки вправо
    arrowRight.addEventListener('click', function() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    // Обработчик для стрелки влево
    arrowLeft.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    // Обработка изменения размера окна
    window.addEventListener('resize', function() {
        const newCardWidth = cards[0].offsetWidth + 30;
        if (newCardWidth !== cardWidth) {
            cardWidth = newCardWidth;
            maxIndex = cards.length - visibleCards;
            updateSlider();
        }
    });

    // Инициализируем слайдер
    initSlider();
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
}