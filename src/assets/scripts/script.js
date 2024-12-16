document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});
const toggleNav = () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('show');
};
    document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function () {
        const text = this.dataset.text; // Получаем текст из атрибута data-text
        const modal = document.getElementById('modal');
        const modalText = document.getElementById('modalText');
        modalText.textContent = text; // Устанавливаем текст в модальное окно
        modal.style.display = 'flex'; // Показываем модальное окно
    });
});

    // Закрытие модального окна
    function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Скрываем модальное окно
}

    // Закрытие по клику вне контента
    document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) {
    closeModal();
}
});
    function showTab(tabId) {
    const tabs = document.querySelectorAll('.work-format__content');
    const buttons = document.querySelectorAll('.tab');

    tabs.forEach((tab) => {
    tab.classList.add('hidden');
});

    buttons.forEach((button) => {
    button.classList.remove('active');
});

    document.getElementById(tabId).classList.remove('hidden');
    event.target.classList.add('active');
}
    function openModal2(imageSrc) {
    const modal = document.getElementById('modal2');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc; // Устанавливаем изображение
    modal.style.display = 'flex'; // Показываем модальное окно
}

    function closeModal2() {
    const modal = document.getElementById('modal2');
    modal.style.display = 'none'; // Закрываем модальное окно
}

    // Закрытие модального окна при клике на затемнённую область
    document.getElementById('modal2').addEventListener('click', function (e) {
    if (e.target === this) {
    closeModal2();
}
});
    function openModalA() {
    const modal = document.getElementById('modalA');
    modal.style.display = 'flex'; // Показываем модальное окно
}

    function closeModalA() {
    const modal = document.getElementById('modalA');
    modal.style.display = 'none'; // Закрываем модальное окно
}

    // Закрытие модального окна при клике вне контента
    document.getElementById('modalA').addEventListener('click', function (e) {
    if (e.target === this) {
    closeModalA();
}
});

