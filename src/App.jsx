
function App() {

  return (
      <div id="root">
          <header className="header">
              <div className="container">
                  <div className="header__left">
                      <h1 className="header__title">Салтанат Тагаева</h1>
                      <p className="header__subtitle">психолог</p>
                  </div>
                  <nav className="nav">
                      <a href="#about" className="nav-link">Обо мне</a>
                      <a href="#methods" className="nav-link">Статьи </a>
                      <a href="#reviews" className="nav-link">Контакты</a>
                  </nav>
                  <div className="header__center">
                      <a href="tel:+77019995898" className="header__phone">(+996) 555 22 22 98</a>
                      <a href="https://api.whatsapp.com/send?phone=996555922289" className="header__icon">
                          <i className="fab fa-whatsapp"></i>
                      </a>
                      <a href="https://t.me/saltanat_tg" className="header__icon">
                          <i className="fab fa-telegram-plane"></i>
                      </a>
                  </div>
                  <div className="header__right">
                      <button className="header__burger" onClick="toggleNav()">
                          <i className="fas fa-bars"></i>
                      </button>
                  </div>
              </div>
              <div className="header__line"></div>

              <div className="dropdown" id="dropdown">
                  <div className="dropdown-header">
                      <button className="close-button" onClick="toggleNav()">✖</button>
                  </div>
                  <a href="#about" className="dropdown-link">Обо мне</a>
                  <a href="#methods" className="dropdown-link">Методы</a>
                  <a href="#reviews" className="dropdown-link">Отзывы</a>
                  <a href="tel:+77019995898" className="dropdown-link">Позвонить: (+996) 555 22 22 98</a>
              </div>
          </header>
          <main className="main main t396__elem">
              <div className="content-container container">
                  <div className="shape shape-left">
                      <div>
                          <p className="main__subtitle">ХОЛИСТИЧЕСКАЯ ПСИХОЛОГИЯ </p>
                          <h1 className="main__title">САЛТАНАТ ТАГАЕВА</h1>
                          <p> Дипломированный психолог <br/>
                              Гештальт-терапевт <br/>Интегрированный подход <br/>
                              Ассоциированный член ПСАГС</p>
                      </div>
                      <button className="main__button" onClick="openModalA()">Записаться</button>
                      <p className="main__stat">

                          8 из 10 клиентов <span>чувствуют улучшение</span> уже после 1 сеанса
                      </p>
                  </div>
                  <div className="shape shape-right">
                      <img src="/src/assets/images/mainST.jpg" alt="Салтанат Тагаева"/>
                  </div>
              </div>
          </main>
          <section className="about" id="#about">
              <div className="about__container">
                  <div className="about__overlay">
                      <div className="about__text">
                          <p>
                              КНУ\Психолог
                              Гештальт-терапевт\Сертификация по стандартам Европейской Ассоциации Гештальт-терапии...
                          </p>
                          <p>Регулярно участвую в обучающих программах по психотерапии и прохожу супервизии.</p>
                          <a href="#" className="about__link">Посмотреть пройденное обучение</a>
                          <div className="decor-circle decor-1">
                              <span className="stats__number">117+</span>
                              <span className="stats__label">Счастливых клиентов</span>
                          </div>
                      </div>
                  </div>

                  <div className="about__image">
                      <img src="/src/assets/images/5.jpg" alt="Салтанат"/>
                  </div>
                  <div className="about__methods">
                      <h3>Моя основа в работе </h3>
                      <ul>
                          <li>это мой клинический опыт, профессиональные навыки...</li>
                          <li>это также мой собственный опыт, пусть проживания травматических переживаний...</li>
                          <li>мой духовный поиск, длинный тернистый путь становления собой.</li>
                      </ul>
                      <p className="about__link">Нажмите, чтобы узнать подробнее</p>
                      <div className="decor-circle decor-2">
                          <span className="stats__number">3 000+</span>
                          <span className="stats__label">Проведенных сеансов</span>
                      </div>
                  </div>
              </div>
          </section>
          <section className="work">
              <h2 className="work__title">С ЧЕМ Я РАБОТАЮ</h2>
              <p className="work__description">
                  Комплексно применяю современные методики психотерапии и соблюдаю абсолютную конфиденциальность.
              </p>
              <div className="work__tags">
                  <span className="tag"
                        data-text="Помощь в обретении гармонии и самоопределения.">Не живу для себя</span>
                  <span className="tag"
                        data-text="Помощь в восстановлении отношений с партнёром.">Отношения с партнером</span>
                  <span className="tag"
                        data-text="Укрепление семейных связей и решение конфликтов.">Отношения в семье</span>
                  <span className="tag"
                        data-text="Сопровождение при утрате близкого человека.">Утрата близкого человека</span>
                  <span className="tag" data-text="Терапия депрессивных состояний.">Депрессия</span>
                  <span className="tag">Депрессия</span>
                  <span className="tag">Кризис среднего возраста</span>
                  <span className="tag">Невроз</span>
                  <span className="tag">Апатия</span>
                  <span className="tag">Постоянное чувство вины</span>
                  <span className="tag">Неуверенность в себе</span>
                  <span className="tag">Стресс</span>
                  <span className="tag">Паническая атака</span>
                  <span className="tag">Расстройства пищевого поведения</span>
                  <span className="tag">Я всего боюсь</span>
                  <span className="tag">Бессонница</span>
                  <span className="tag">Выгорание</span>
                  <span className="tag">Психосоматика</span>
                  <span className="tag">Сниженная самооценка</span>
                  <span className="tag">Потеря вкуса жизни</span>
                  <span className="tag">Тревожность</span>
                  <span className="tag">Анорексия</span>
                  <span className="tag">Булимия</span>
                  <span className="tag">Синдром самозванца</span>
                  <span className="tag">Последствия депрессии</span>
                  <span className="tag">Абьюз</span>
                  <span className="tag">Агрессия</span>
                  <span className="tag">Измена</span>
                  <span className="tag">Завершение отношений</span>
                  <span className="tag">Стыд</span>
              </div>
              <p className="work__footer">а также многие другие проблемы</p>
              <button className="card__button" onClick="openModalA()">Получить консультацию</button>
          </section>

          <div className="modal" id="modal">
              <div className="modal__content">
                  <span className="modal__close" onClick="closeModal()">✖</span>
                  <p id="modalText"></p>
              </div>
          </div>
          <section className="work-format">
              <h2 className="work-format__title">ФОРМАТ МОЕЙ РАБОТЫ</h2>
              <div className="work-format__tabs">
                  <button className="tab active" onClick="showTab('personal')">ЛИЧНАЯ КОНСУЛЬТАЦИЯ</button>
                  <button className="tab" onClick="showTab('couple')">ГРУППОВЫЕ КОНСУЛЬТАЦИИ</button>
              </div>
              <div className="work-format__content" id="personal">
                  <div className="work-format__card">
                      <h3 className="card__title">Онлайн-сессия</h3>
                      <p className="card__description">
                          Возможность провести сеанс в удобное для вас время и место, не выходя из дома через
                      </p>
                      <div className="card__icons">
                          <i className="fab fa-whatsapp"></i>
                          <i className="fab fa-telegram-plane"></i>
                          <i className="fas fa-video"></i>
                          <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="card__details">
                          <span>Длительность 60 мин</span>
                          <span>Стоимость 6000 сом</span>
                      </div>
                      <button className="card__button" onClick="openModalA()">Записаться</button>
                  </div>
                  <div className="work-format__card">
                      <h3 className="card__title">Личная встреча</h3>
                      <p className="card__description">
                          Свяжитесь со мной с помощью формы записи на сайте, и мы вместе выберем удобные дату и время
                          для консультации
                      </p>
                      <div className="card__icons">
                          <i className="fas fa-map-marker-alt"></i>
                          <p>В г. Бишкек</p>
                      </div>
                      <div className="card__details">
                          <span>Длительность 60 мин</span>
                          <span>Стоимость 1000 сом</span>
                      </div>
                      <button className="card__button" onClick="openModalA()">Записаться</button>
                  </div>
              </div>
              <div className="work-format__content hidden" id="couple">
                  <div className="work-format__card">
                      <h3 className="card__title">Групповые онлайн-сессии </h3>
                      <p className="card__description">
                          Возможность провести сеанс в удобное для вас время и место, не выходя из дома через
                      </p>
                      <div className="card__icons">
                          <i className="fab fa-whatsapp"></i>
                          <i className="fab fa-telegram-plane"></i>
                          <i className="fas fa-video"></i>
                          <i className="fas fa-phone-alt"></i>

                      </div>
                      <div className="card__details">
                          <span>Длительность 60 мин</span>
                          <span>Стоимость 6000 сом</span>
                      </div>
                      <button className="card__button" onClick="openModalA()">Записаться</button>
                  </div>
                  <div className="work-format__card">
                      <h3 className="card__title">Групповые встречи</h3>
                      <p className="card__description">
                          Свяжитесь со мной с помощью формы записи на сайте, и мы вместе выберем удобные дату и время
                          для консультации
                      </p>
                      <div className="card__icons">
                          <i className="fas fa-map-marker-alt"></i>
                          <p>В г. Бишкек</p>
                      </div>
                      <div className="card__details">
                          <span>Длительность 60 мин</span>
                          <span>Стоимость 1000 сом</span>
                      </div>
                      <button className="card__button" onClick="openModalA()">Записаться</button>
                  </div>
              </div>
          </section>
          <section className="certificates">
              <h2 className="certificates__title">ДИПЛОМЫ И СЕРТИФИКАТЫ</h2>
              <p className="certificates__subtitle">МОИ ЗНАНИЯ - ЭТО КЛЮЧ К СЧАСТЛИВОЙ ЖИЗНИ ДРУГИХ</p>
              <div className="certificates__content">
                  <div className="certificate-card" onClick="openModal2('/images/certificate1.jpg')">
                      <div className="certificate-card__icon">
                          <i className="fas fa-file-pdf"></i>
                      </div>
                      <h3 className="certificate-card__title">СЕРТИФИКАТ</h3>
                      <p className="certificate-card__description">«Теория семейных систем по Мюррею Боуэну»</p>
                      <span className="certificate-card__link">ОТКРЫТЬ</span>
                  </div>
                  <div className="certificate-card" onClick="openModal2('/images/certificate2.jpg')">
                      <div className="certificate-card__icon">
                          <i className="fas fa-file-pdf"></i>
                      </div>
                      <h3 className="certificate-card__title">ДИПЛОМ</h3>
                      <p className="certificate-card__description">о высшем образовании психолога</p>
                      <span className="certificate-card__link">ОТКРЫТЬ</span>
                  </div>
                  <div className="certificate-info">
                      <h3>КУРСЫ, КОТОРЫЕ Я ПРОШЛА:</h3>
                      <ul>
                          <li>Теория семейных систем по Мюррею Боуэну</li>
                          <li>Основы психиатрии для специалистов помогающих профессий</li>
                          <li>Метод системной расстановки для семейной психотерапии</li>
                          <li>Супружеское консультирование</li>
                      </ul>
                  </div>
              </div>
              <button className="certificates__button" onClick="openModalA()">Записаться</button>
          </section>

          <div className="modal2" id="modal2">
              <div className="modal2__content">
                  <span className="modal2__close" onClick="closeModal2()">✖</span>
                  <img id="modalImage" src="" alt="Диплом"/>
              </div>
          </div>
          <section className="appointment">
              <div className="appointment__container">
                  <div className="appointment__image">
                      <img src="/src/assets/images/4.jpg" alt="Салтанат"/>
                  </div>

                  <div className="appointment__form">
                      <p className="appointment__subtitle">Взаимное доверие — основа партнерства</p>
                      <h2 className="appointment__title">ЗАПИШИТЕСЬ НА ПЕРВЫЙ СЕАНС</h2>
                      <p className="appointment__description">
                          На первом сеансе мы разберем вашу ситуацию, и вы поймете, подойдет ли вам мой подход
                      </p>
                      <form>
                          <input type="text" placeholder="Ваше имя" className="form__input"/>
                          <input type="tel" placeholder="(+996) 555 922289" className="form__input"/>
                          <button type="button" className="form__button">Записаться</button>
                      </form>
                  </div>
              </div>
          </section>

          <div className="modal" id="modalA">
              <div className="modalA__content">
                  <span className="modalA__close" onClick="closeModalA()">✖</span>
                  <h2 className="modalA__title">ОСТАВЬТЕ ЗАЯВКУ</h2>
                  <p className="modalA__subtitle">И я свяжусь с Вами</p>
                  <form>
                      <input type="text" placeholder="Ваше имя" className="form__input"/>
                      <input type="tel" placeholder="(+996) 555 9222289" className="form__input"/>
                      <button type="submit" className="form__button">Отправить</button>
                  </form>
              </div>
          </div>
          <footer className="footer">
              <div className="container">
                  <div className="footer__socials">
                      <a href="tel:+77019995898" className="header__phone">(+996) 555 22 22 89</a>
                      <a href="https://api.whatsapp.com/send?phone=996555922289" className="footer__link">
                          <i className="fab fa-whatsapp"></i>
                      </a>
                      <a href="https://t.me/saltanat_tg" className="footer__link">
                          <i className="fab fa-telegram-plane"></i>
                      </a>
                      <a href="https://www.instagram.com/saltanat_tg" target="_blank" className="footer__link">
                          <i className="fab fa-instagram"></i>
                      </a>
                  </div>
                  <p className="footer__text">Made by Nargiz Mamytova 2024</p>
              </div>
          </footer>
      </div>
  )
}

export default App
