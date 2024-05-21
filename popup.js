const popup = document.createElement('section');
const WELCOME_POPUP_KEY = 'WELCOME_POPUP_KEY'

const isShowWelcomePopup = JSON.parse(localStorage.getItem(WELCOME_POPUP_KEY))

function showPopup() {
    const content = `
                    <div class="welcome-popup">
                        <div class="welcome-popup__wrapper">
                            <p class="welcome-popup__text">Привет, добро пожаловать на маркетплэйс!</p>
                            <button class="welcome-popup__button">Закрыть и больше не показывать</button>
                        </div>
                    </div>
                    `;
    popup.insertAdjacentHTML('afterbegin', content);

    document.body.append(popup);
    document.body.style.overflow = 'hidden'

    const close = document.querySelector('.welcome-popup__button')

    close.addEventListener('click', (event)=> {
        localStorage.setItem(WELCOME_POPUP_KEY, JSON.stringify(true))
        popup.replaceWith('')
        document.body.style.overflow = 'auto'
    })
}

function sayHi(phrase, who) {
    console.log(phrase + ', ' + who);
}

if (!isShowWelcomePopup) {
    setTimeout(showPopup, 2000)
}
setTimeout(sayHi, 1000, 'Hi', 'Albert')

