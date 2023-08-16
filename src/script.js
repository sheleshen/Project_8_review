// переменная, где мы храним положение отзыва, скорее для расчета по пикселям
let offsetReview = 0;

//найти контейнер для отзывов
const containerReviews = document.getElementById('containerReviews');

// кнопка для перехода вперед
const btnPrev = document.getElementById('btn-prev');
btnPrev.addEventListener('click, goPrev');

// кнопка для перехода назад
const btnNext = document.getElementById('btn-next');
btnNext.addEventListener('click, goNext');

// функция, чтобы отзывы появились на сайте
function renderReviews() {
    containerReviews.innerHTML += `
            <div class="review-item">
                <p id="title-review" class="title-review">
                    Отзыв о туре “{title}”
                </p>
                <p id="description-review" class="description-review">
                    {text}
                </p>
                <div class="flex-line cntr-object author-review">
                    <img id="author-foto" src="/src/images/review-author.png" alt="">
                    <div class="flex-column indent-left20">
                        <p class="author-name" id="author-name">
                            {name}
                        </p>
                        <p class="date-review" id="date-review">
                            {date}
                        </p>
                    </div>
                </div>
            </div>
        `}


// Нужно получить данные для отображения отзыва
function goPrev() {

    offsetReview = offsetReview + 1; // и как сместить отзыв

//     нам надо передать номер отзыва
}

function goNext() {

}

// надо как-то сделать отзыв при клике +1 и -1?