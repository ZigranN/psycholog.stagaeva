document.addEventListener('DOMContentLoaded', () => {
    // Функция открытия/закрытия навигационного меню
    const toggleNav = () => {
        const dropdown = document.getElementById('dropdown');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    };

    // Закрытие модального окна
    function closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Закрытие модального окна 2
    function closeModal2() {
        const modal = document.getElementById('modal2');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Закрытие модального окна A
    function closeModalA() {
        const modal = document.getElementById('modalA');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Обработчики для элементов
    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    const modal2 = document.getElementById('modal2');
    if (modal2) {
        modal2.addEventListener('click', (e) => {
            if (e.target === modal2) closeModal2();
        });
    }

    const modalA = document.getElementById('modalA');
    if (modalA) {
        modalA.addEventListener('click', (e) => {
            if (e.target === modalA) closeModalA();
        });
    }

    // Обработчик для тегов с классом .tag
    document.querySelectorAll('.tag').forEach((tag) => {
        tag.addEventListener('click', function () {
            const text = this.dataset.text; // Получаем текст из data-text
            const modalText = document.getElementById('modalText');
            if (modalText && modal) {
                modalText.textContent = text; // Устанавливаем текст
                modal.style.display = 'flex'; // Показываем модальное окно
            }
        });
    });

    // Переключение вкладок
    function showTab(tabId) {
        const tabs = document.querySelectorAll('.work-format__content');
        const buttons = document.querySelectorAll('.tab');

        tabs.forEach((tab) => {
            tab.classList.add('hidden');
        });

        buttons.forEach((button) => {
            button.classList.remove('active');
        });

        const activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.classList.remove('hidden');
        }
    }

    // Функция для открытия модального окна с изображением
    function openModal2(imageSrc) {
        const modalImage = document.getElementById('modalImage');
        if (modal2 && modalImage) {
            modalImage.src = imageSrc; // Устанавливаем изображение
            modal2.style.display = 'flex'; // Показываем модальное окно
        }
    }

    // Функция для открытия модального окна с заявкой
    function openModalA() {
        if (modalA) modalA.style.display = 'flex';
    }

    // Экспорт функций для использования в HTML
    window.toggleNav = toggleNav;
    window.showTab = showTab;
    window.openModal2 = openModal2;
    window.openModalA = openModalA;
});
