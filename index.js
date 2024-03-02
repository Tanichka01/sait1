
document.addEventListener("DOMContentLoaded", function() {
    // Згортання та розгортання опису гуртків
    let descriptions = document.querySelectorAll(".content p");
    descriptions.forEach(function(description) {
        description.style.display = "none";
    });
    descriptions[0].style.display = "block"; // Показати перший опис по замовчуванню

    let toggleButtons = document.querySelectorAll(".content h3");
    toggleButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            descriptions.forEach(function(description) {
                description.style.display = "none";
            });
            descriptions[index].style.display = "block";
        });
    });


    // Прокрутка до вибраного гуртка
    let navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Відмінити стандартну дію посилання

            let targetId = link.getAttribute("href").slice(1);
            let targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Форма зворотнього зв'язку
    const form = document.getElementById('feedback-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Отримання даних з форми
        const formData = new FormData(form);
        // Відправлення даних на сервер (або обробка локально)
        // Ваш код для відправлення даних на сервер

        // Очистка полів форми (за бажанням)
        form.reset();
    });
});

// Мапа розташування
document.getElementById('map-link').addEventListener('click', function(event) {
    event.preventDefault(); // Зупиняємо дію переходу за посиланням
    window.open('https://www.google.com/maps?q=49.318139,31.266914&hl=uk', '_blank');
});
