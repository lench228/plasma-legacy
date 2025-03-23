// mail.js
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Отмена стандартного поведения формы

        const formData = new FormData(this); // Создаем объект FormData для отправки данных

        fetch('mail.php', {
            method: 'POST',
            body: formData
        });
    });
});
