const cardInfoList = [{
    cardTitle: 'Беспроводные наушники №1',
    reviews: 1000,
    price: 32,
}, {
    cardTitle: 'Беспроводные наушники №2',
    reviews: 1000,
    price: 32,
}, {
    cardTitle: 'Беспроводные наушники №2',
    reviews: 1000,
    price: 32,
}];

const cards = document.querySelector('.sellers-cards');

function getCards(cardInfoList, cards) {
    cardInfoList.forEach(cardInfo => {
        const tab = `<div class="card">
                        <div class='card-stats'>
                            <div class='card-stats-picture'>
                                <img src="./img/image 12.png" alt="Наушники 60%">
                                <div class='mark'>
                                    Save <br>60%
                                </div>
                            </div>
                            <div class='card-stats-text'>
                                <p class='card-stats-text-title'>
                                    ${cardInfo.cardTitle}
                                </p>
                                <div class='card-stats-text-reviews'>
                                    <div class='card-stats-text-stars'>
                                        <img src="./img/Star 5.svg" alt="star">
                                        <img src="./img/Star 5.svg" alt="star">
                                        <img src="./img/Star 5.svg" alt="star">
                                        <img src="./img/Star 5.svg" alt="star">
                                        <img src="./img/Star 5.svg" alt="star">
                                    </div>
                                    <p class='card-stats-text-subtitle'>${cardInfo.reviews}</p>
                                </div>
                                <p class='card-stats-text-price'>${cardInfo.price}</p>
                            </div>
                        </div>
                        <button>Add to cart</button>
                    </div>`;
        cards.insertAdjacentHTML('beforeend', tab);
    });
}

getCards(cardInfoList, cards);
