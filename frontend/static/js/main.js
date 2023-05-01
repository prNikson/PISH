// Плавный скролл

document.querySelectorAll('a[href^="#"').forEach(link => {
  
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});



// Поп ап

let openAuthPopupButtons = document.querySelectorAll('.pop-up-auth'); // Кнопки для показа окна
let popupAuthBg = document.querySelector('#auth'); // Фон попап окна
let closePopupAuthButton = document.querySelector('.pop-up-auth-close'); // Кнопка для скрытия окна

let openRegistrationPopupButtons = document.querySelectorAll('.pop-up-registration'); // Кнопки для показа окна
let popupRegistrationBg = document.querySelector('#registration'); // Фон попап окна
let closePopupRegistrationButton = document.querySelector('.pop-up-registration-close'); // Кнопка для скрытия окна

let openNewPassPopupButtons = document.querySelectorAll('.pop-up-newpass'); // Кнопки для показа окна
let newPassBg = document.querySelector('#newpass'); // Фон попап окна
let closePopupNewPassButton = document.querySelector('.pop-up-newpass-close'); 

openAuthPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupRegistrationBg.classList.remove('active'); 
        popupAuthBg.classList.add('active'); // Добавляем класс 'active' для фона
    })
});

closePopupAuthButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupAuthBg.classList.remove('active'); // Убираем активный класс с фона
});

openRegistrationPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupAuthBg.classList.remove('active');
        popupRegistrationBg.classList.add('active'); // Добавляем класс 'active' для фона
    })
});

closePopupRegistrationButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupRegistrationBg.classList.remove('active'); // Убираем активный класс с фона
});

openNewPassPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupAuthBg.classList.remove('active');
        newPassBg.classList.add('active'); // Добавляем класс 'active' для фона
    })
});

closePopupNewPassButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    newPassBg.classList.remove('active'); // Убираем активный класс с фона
});
